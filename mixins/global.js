import { mapGetters } from 'vuex'
import store from '../store'
export default {
  data() {
    return {
      globalImageFrefix: 'https://image.xihuanwu.com/likehouse/applet', //静态图片访问域名
      globalFrefix: 'https://image.xihuanwu.com', //访问域名
      loadStatus: 'loading', //列表加载底部提示 more-加载更多；loading-加载中；noMore-没有更多了
    }
  },
  computed: {
    ...mapGetters(['userId', 'userInfo']),
    menuButtonBounding() {
      const info = uni.getStorageSync('getMenuButtonBoundingClientRect')
      if (info.height) return info
      return uni.getMenuButtonBoundingClientRect()
    }
  },
  methods: {
    getElSize(id) { //得到元素的size
      return new Promise((res, rej) => {
        uni.createSelectorQuery().select('#' + id).fields({
          size: true,
          scrollOffset: true
        }, (data) => {
          res(data);
        }).exec();
      });
    },
    regFenToYuan(fen) {
      if (!fen) return '0.00'
      let val = (fen / 100).toFixed(2)
      const arr = val.split('.')
      if (arr[1] == '00') return arr[0]
      return val
    },
    //判断登录状态，未登录跳转登录页
    judgeLogin() {
      if (this.userId.length) return true
      uni.navigateTo({
        url: '/pages-mine/login/login'
      });
      return false
    },
    //global.js//时间戳转换成日期时间
    formatTime(unixtime = '') {
      var date = unixtime ? new Date(unixtime) : new Date()
      var y = date.getFullYear();
      var m = date.getMonth() + 1;
      m = m < 10 ? ('0' + m) : m;
      var d = date.getDate();
      d = d < 10 ? ('0' + d) : d;
      var h = date.getHours();
      h = h < 10 ? ('0' + h) : h;
      var minute = date.getMinutes();
      var second = date.getSeconds();
      minute = minute < 10 ? ('0' + minute) : minute;
      second = second < 10 ? ('0' + second) : second;
      // return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;//年月日时分秒
      return y + '-' + m + '-' + d
    },
    //获取用户信息
    getUserProfile() {
      return new Promise((reslove, rej) => {
        uni.getUserProfile({
          desc: "用于完善用户信息",
          success: (res) => {
            uni.setStorageSync('userInfo', res.rawData)
            console.log('获取的用户信息', res.rawData)
            // this.userInfo = JSON.parse(res.rawData)
            reslove(JSON.parse(res.rawData))
          },
          fail: (err) => {
            console.log(err)
            uni.showToast({
              icon: "none",
              title: '用户拒绝获取'
            })
            rej(err)
          }
        })
      })
    },
    //下单
    createOrder() {
      return new Promise((reslove, reject) => {
        this.$api.scheme.createOrder(data)
          .then(response => {
            reslove(response)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    //获取微信code码
    getCode() {
      return new Promise((reslove, reject) => {
        uni.login({
          success: res => {
            reslove(res.code)
          }
        })
      })
    },
    //微信支付操作 需要传入orderId 默认为空 如果为空 会先去进行下单操作
    /**
     * @param { number } isCreate 是否需要创建订单 默认为1
     * @param { string } params_bizId 业务ID
     * @param { string } params_code 小程序code码
     * @param { string } params_payChannel 支付渠道： 1-微信;2-支付宝 当前默认为 1
     * @param { string } params_payOrigin 业务ID 支付来源(1-APP;2-小程序) 当前默认为 2
     * @param { string } params_paymentFee 支付金额
     * @param { string } from 页面来源 部分页面跳转需要单独判断
     * @returns 
     */
    async orderPay(isCreate, params, from = '') {
      let Info = {}
      const _this = this
      if (isCreate === 1) {
        Info = params
      } else {
        const code = await this.getCode() //获取微信code码
        params.buyerId = this.userId
        params.code = code
        params.payChannel = 1
        params.payOrigin = 2
        console.log('params', params);
        // this.form.openId = JSON.parse(localStorage.getItem('USER_INFO')).openid// 拿到本地存储的openId 因为在打开弹窗之前就有限制 有这数据才能打开弹窗
        this.showLoadingToast('拉取支付中...')
        const {
          data
        } = await this.$api.mine.partInPayment(params) // 调取预支付接口获取签名
        console.log(data)
        Info = JSON.parse(data.payLink) //获取签名
        Info.orderId = data.orderInfoId
        console.log()
      }
      return new Promise((reslove, reject) => {
        uni.requestPayment({
          provider: 'wxpay', //定义为微信支付
          timeStamp: Info
            .timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
          nonceStr: Info.nonceStr, // 支付签名随机串，不长于 32 位
          package: Info.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
          signType: Info.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
          paySign: Info.paySign, // 支付签名
          success: (res) => { // 支付成功后的回调函数 因为该页面只能在微信打开
            const url =
              `/pages-index/confirm-order/confirm-order-detail?status=success&orderId=${Info.orderId}&from=${from}`
            from === 'confirm-order' ? uni.redirectTo({
              url
            }) : uni.navigateTo({
              url
            })
            const payStatus = {
              orderId: Info.orderId,
              success: true
            }
            uni.setStorageSync('payStatus', payStatus)
            reslove(payStatus)
          },
          fail: (err) => {
            const url =
              `/pages-index/confirm-order/confirm-order-detail?status=error&orderId=${Info.orderId}&from=${from}`
            from === 'confirm-order' ? uni.redirectTo({
              url
            }) : uni.navigateTo({
              url
            })
            const payStatus = {
              orderId: Info.orderId,
              success: false
            }
            uni.setStorageSync('payStatus', payStatus)
            reslove(payStatus)
          }
        })
      })
    },
    showToast(msg) {
      uni.showToast({
        icon: 'none',
        title: msg
      })
    },
    showLoadingToast(msg = '加载中...') {
      uni.showLoading({
        title: msg
      });
    },
    //图片链接转码
    urlTranscoding(url) {
      return encodeURI(url)
    }

  }
}
