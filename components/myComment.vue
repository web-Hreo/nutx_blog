<!--
  @name: 'myComment',
  @describe: 我的留言板组件 
  @author: HeHua,
  @createDate: 2021年07月24日 14:57:22,
  @changeDate: ,
-->
<template>
    <div id='myComment'>
    <!-- 留言模板 -->
    <div class="form" v-if="replyIndex===-1">
      <!-- <h2 class="myComment_title text-color">添加新留言</h2> -->
      <div class="fb">
        <div class="form_avatar">
          <img :src="form.leavingAvatar" alt="">
        </div>
        <div class="form_ipt">
          <el-input type="textarea" v-model="form.leavingCont" maxlength="500" show-word-limit></el-input>
          <div class="leavingInfo">
            <el-input v-model="form.leavingName" maxlength="10" placeholder="必填">
              <template slot="prepend">昵称</template>
            </el-input>
            <el-input v-model="form.leavingEmail" placeholder="必填 建议填写QQ邮箱" @change="emailChange">
              <template slot="prepend">邮箱</template>
            </el-input>
            <el-input v-model="form.leavingUrl" placeholder="选填">
              <template slot="prepend">网址</template>
            </el-input>
          </div>
          <el-button type="primary" :disabled="disabled" @click="addComment()">提交</el-button>
          <p class="tips">TIPS:建议填写QQ邮箱 否则头像为企鹅头像</p>
          <!-- <p class="tips">TIPS:破站无流量,大神勿写脚本刷回复</p> -->
        </div>
      </div>
    </div>
    <!-- 留言内容回显 -->
    <div class="myComment_cont" v-if="commentList.length>0">
      <h3 class="cont_title text-color">已有 {{commentLength}} 条评论</h3>
      <div class="cont-item" v-for="(item, index) in commentList" :key="index">
        <!-- 留言父模板 -->
        <div class="item_father">
          <div style="display:flex">
            <div class="item_img">
              <a :href="item.leavingUrl?item.leavingUrl:'javascript:;'" :target="item.leavingUrl?'_black':''">
                <img :src="item.leavingAvatar" :alt="item.leavingName">
              </a>
            </div>
            <div class="item_user">
              <div class="usre_name text-color" :class="{'isMaster':item.isMaster}">
                {{item.leavingName}}
              </div>
              <div class="usre_time fbc">
                <p>{{item.time}}</p>
                <p class="reply text-color" @click.stop="replyOne(item,index,1)">回复</p>
              </div>
              <div class="user-cont">
                <p v-html="item.leavingCont"></p>
              </div>
            </div>
          </div>
        </div>
        <!-- 回复子模版 -->
        <div class="item_children" v-if="item.children.length>0">
          <div style="display:flex;padding:10px 0" v-for="(it,i) in item.children" :key="i">
            <div class="item_img">
              <img :src="it.leavingAvatar" alt="">
            </div>
            <div class="item_user">
              <div class="usre_name text-color" :class="{'isMaster':it.isMaster}">
                {{it.leavingName==='何华'?'博主':it.leavingName}}
              </div>
              <div class="usre_time fbc">
                <p>{{it.time}}</p>
                <p class="reply text-color" @click.stop="replyOne(it,index,2)">回复</p>
              </div>
              <div class="user-cont">
                <p>
                  <span class="text-color" style="margin-right:5px">
                    @{{it.replyName==='何华'?'博主大人':it.replyName}}:
                  </span>
                  <span v-html="it.leavingCont"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- 回复模板 -->
        <div class="childrenForm form" v-if="replyIndex===index" @click.stop>
          <div class="form_avatar fc" style="margin-bottom:5px">
            <img :src="form.leavingAvatar" alt="">
            <p style="padding-left:20px">回复<span class="text-color">{{replyTitle}}</span></p>
          </div>
          <div class="form_ipt" style="margin-left:0">
            <el-input type="textarea" v-model="form.leavingCont" maxlength="500" show-word-limit></el-input>
            <div class="leavingInfo">
              <el-input v-model="form.leavingName" maxlength="10" placeholder="必填">
                <template slot="prepend">昵称</template>
              </el-input>
              <el-input v-model="form.leavingEmail" placeholder="必填 建议填写QQ邮箱" @change="emailChange">
                <template slot="prepend">邮箱</template>
              </el-input>
              <el-input v-model="form.leavingUrl" placeholder="选填">
                <template slot="prepend">网址</template>
              </el-input>
            </div>
            <el-button type="primary" :disabled="disabled" @click="addComment()">提交</el-button>
            <p class="tips">TIPS:建议填写QQ邮箱 否则头像为企鹅头像</p>
          </div>
        </div>
      </div>
    </div>
    <div class="myComment_no_cont" v-else>
      暂无评论~
    </div>
  </div>
</template>

<script>
import { getComment, addComment } from '~/api/comment'
import { getApiAddress } from '~/api/public'
import { getDateDiff } from '~/components/methods';
export default {
  name: 'myComment',
  props: {
    from: { type: String },
    fromId: { type: String, default: '' },
  },
  components: {},

  data() {
    return {
      form: {//留言上传params
        from: '',
        fromId: '',
        fromIp: '',
        leavingCont: '',
        leavingName: '',
        leavingEmail: '',
        leavingAvatar: 'http://q.qlogo.cn/headimg_dl?dst_uin=0&spec=100',
        leavingUrl: '',
        replyLevel: null,
        parentId: null,
        replyName: null,
        replyEmail: null,
      },
      disabled: false,//评论开关
      commentList: [],//留言列表
      commentLength: '',//留言长度
      replyIndex: -1,//当前回复狂所在index下标 默认头部-1
      replyTitle: '',//回复时 回复的title 例如 我回复@B
      replyRow: {},//回复时 被回复人的留言信息
      xssList: [//恶意评论列表
        '<div>', '<img>', '<iframe>', '<>', 'console.log', 'xss', 'JAVA', '>',
        '</', 'document', 'cookie', 'javascript', '<script>', 'text/javascript',
        'and', 'END', 'exec', 'EXEC', 'insert', 'INSERT', 'select', 'SELECT',
        'delete', 'DELETE', 'update', 'UPDATE', 'import', 'IMPORT', 'query', 'QUERY',
        'java', 'php', 'JAVA', 'PHP', 'COOKIE', 'LOG', 'log'
      ]
    }
  },
  mounted() {
    //如果用户在本网站留过言 那么直接用缓存获取当前用户信息
    if (localStorage.getItem('USERINFO')) {
      const USERINFO = JSON.parse(localStorage.getItem('USERINFO'))
      this.form.leavingName = USERINFO.leavingName
      this.form.leavingEmail = USERINFO.leavingEmail
      this.form.leavingAvatar = USERINFO.leavingAvatar
    }
    //获取从父组件传来的 来源及来源id
    this.form.from = this.from
    this.form.fromId = this.fromId
    //全局监听 关闭回复狂
    window.addEventListener("click", this.closeReplyBox);
    //获取留言
    this.getComment()
  },
  destroyed() {
    window.removeEventListener('click', this.closeReplyBox);
  },
  methods: {
    //获取留言
    async getComment() {
      //当传参为comment 获取所有留言
      const from = this.from === 'comment' ? '' : this.from
      const params = { from, fromId: this.form.fromId }
      const { data } = await getComment(params)
      this.commentLength = data.length

      let replaceRegex = /(\n\r|\r\n|\r|\n)/g;
      data.data.forEach(it => {
        it.leavingCont = it.leavingCont.replace(replaceRegex, '<br/>');
        it.time = getDateDiff(it.createTime)
        if (it.children) {
          it.children.forEach(cIt => {
            cIt.time = getDateDiff(cIt.createTime)
          })
        }
      })
      this.commentList = data.data
    },
    //邮箱改变 获取头像事件
    emailChange(e) {
      // e = '1194150512@qq.com'
      e.replace('@qq.com', '')
      this.form.leavingAvatar =
        `http://q.qlogo.cn/headimg_dl?dst_uin=${e}&spec=100`
      //     this.form.leavingAvatar = 
      // `http://qwfu4j9pl.hn-bkt.clouddn.com/1627118360598_avatar.png`
    },
    //提交留言
    async addComment() {

      let { leavingName, leavingEmail, leavingCont, leavingAvatar, replyLevel } = this.form
      for (const it of this.xssList) {
        if (leavingCont.search(it) !== -1) {
          this.notify('包含恶意评论,已记录ip')
          return false
        }
      }
      if (!leavingName) {
        this.notify('昵称为必填项')
        return false
      }
      if (!leavingEmail) {
        this.notify('邮箱为必填项')
        return false
      }
      if (!leavingCont) {
        this.notify('留言内容为必填项')
        return false
      }

      if (this.disabled) { return false }
      this.disabled = true
      setTimeout(() => {
        this.disabled = false
      }, 20000)
      //获取当前用户ip
      const ipInfo = await getApiAddress()
      this.form.fromIp = ipInfo.data.ip

      //按钮回复等级具体看replyOne传参 顶部留言按钮默认不传参为0级
      //当按钮不为一级/二级回复时 当前from fromId等于被回复人的来源参数
      replyLevel !== 0 && (this.form.from = this.replyRow.from)
      replyLevel !== 0 && (this.form.fromId = this.replyRow.fromId)
      //当按钮为一级回复时 获取被回复人id及
      replyLevel === 1 && (this.form.parentId = this.replyRow.commentId)
      replyLevel === 1 && (this.form.replyName = this.replyRow.leavingName)
      //当按钮为二级回复时 获取被回复人id及
      // console.log('this.replyRow',this.replyRow);
      replyLevel === 2 && (this.form.parentId = this.replyRow.parentId)
      replyLevel === 2 && (this.form.replyName = this.replyRow.leavingName)
      replyLevel === 2 && (this.form.LV2Id = this.replyRow.commentId)
      // console.log('this.form',this.form);
      //替换/n
      let replaceRegex = /(\n\r|\r\n|\r|\n)/g;
      const params = {
        ...this.form,
        leavingCont: leavingCont.replace(replaceRegex, '<br/>')
      }

      const data = await addComment(params)
      //对正确和错误进行弹窗告知
      const _STR = replyLevel === 0 ? '留言成功' : '回复成功'
      data.success ? this.notify(_STR, '提示', 'success') : this.notify(data.data)
      this.form.leavingCont = ''
      //存入用户信息至缓存 下次用户进入 直接调用
      const USERINFO = { leavingName, leavingEmail, leavingAvatar }
      localStorage.setItem('USERINFO', JSON.stringify(USERINFO))
      this.getComment()
      //回复框 复位
      this.closeReplyBox()

    },
    //点击回复按钮 打开回复框
    replyOne(row, index, replyLevel) {
      // console.log(row,index,replyLevel);
      this.form.replyLevel = replyLevel
      this.replyRow = row
      this.replyIndex = index
      this.replyTitle = ` @${row.leavingName}`
      // console.log(row);
    },
    closeReplyBox() {
      this.form.replyLevel = 0
      this.replyIndex = -1
    },
    //弹窗提示
    notify(message, title = '警告', type = 'warning') {
      this.$notify({
        duration: 1000,
        title,
        message,
        type
      });
    }
  }
}

</script>
<style lang='less' scoped>
#myComment {
  margin-top: 30px;
  font-size: 14px;
}

.myComment_title {
  padding: 50px 0 20px;
  font-size: 28px;
  font-weight: 500;
}

/deep/.el-textarea__inner {
  // font-family: 'Mirages Custom', 'Merriweather', 'Open Sans', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft Yahei', 'WenQuanYi Micro Hei',  'Segoe UI Emoji', 'Segoe UI Symbol', Helvetica, Arial, sans-serif;
  width: 100%;
  height: 120px;
  resize: none;
}

.form_avatar {
  img {
    width: 50px;
    height: 50px;
    border-radius: 5px;

    @media only screen and (max-width: 766.99px) {
      //m端
      width: 30px;
      height: 30px;
    }
  }
}

.form_ipt {
  margin-left: 20px;

  @media only screen and (max-width: 766.99px) {
    //m端
    margin-left: 8px;
  }
}

.leavingInfo {
  margin: 20px 0;

  @media only screen and (min-width: 767px) {
    //m端
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .el-input {
    // font-family: 'Mirages Custom', 'Merriweather', 'Open Sans', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft Yahei', 'WenQuanYi Micro Hei',  'Segoe UI Emoji', 'Segoe UI Symbol', Helvetica, Arial, sans-serif;
    width: 32%;

    @media only screen and (max-width: 766.99px) {
      //m端
      width: 100%;
      margin: 5px 0;
    }
  }
}

.el-button {
  width: 100%;
  background: linear-gradient(-45deg, rgba(66, 90, 239, .5), rgb(66, 90, 239));
  border: none;
}

.myComment_cont {
  .cont_title {
    padding: 25px 0;
    font-size: 24px;
    font-weight: 500;
  }

  .cont-item {
    // display: flex;
    padding: 20px;
    background-color: #f7f9fe;
    margin-bottom: 20px;
    border-radius: 10px;
  }

  .item_children {
    padding: 15px 0 10px 70px;
    position: relative;

    @media only screen and (max-width: 766.99px) {
      //m端
      padding-left: 38px;
    }
  }

  .item_img {
    width: 40px;
    height: 40px;
    border-radius: 7px;
    overflow: hidden;

    @media only screen and (max-width: 766.99px) {
      //m端
      width: 30px;
      height: 30px;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  .item_user {
    flex: 1;
    padding-left: 20px;

    @media only screen and (max-width: 766.99px) {
      //m端
      padding-left: 8px;
    }

    .usre_name {
      line-height: 1.2;
      font-style: normal;
      font-size: 14px;

      &::after {
        content: "Passerby";
        margin-left: 5px;
        font-size: 12px;
        color: #fff;
        background-color: rgb(66, 90, 239);
        // background: rgb(99, 187, 87);
        border-radius: 5px;
        padding: 4px 8px;
      }
    }

    .usre_time {
      font-size: 12px;
      color: #ccc;
      padding-top: 5px;

      .reply {
        &:hover {
          text-decoration: underline
        }
      }
    }

    .user-cont {
      font-size: 14px;
      line-height: 23px;
      padding-top: 10px;

      p {
        background: #f7f9fe;
        // padding: 10px;
        border-radius: 5px;
        word-break: break-all;
      }
    }
  }
}

.childrenForm {
  padding: 10px 0 0 70px;
  position: relative;

  @media only screen and (max-width: 766.99px) {
    //m端
    padding: 10px 0 0 38px;
  }

  // &::after{
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 55px;
  //   width: 2px;
  //   height: calc(100% - 15px);
  //   background-color: #ccc;
  // }
}

.tips {
  font-size: 12px;
  padding: 5px 0;
}

.myComment_no_cont {
  padding: 100px 0;
  text-align: center;

  @media only screen and (max-width: 766.99px) {
    //m端
    padding: 40px 0;
  }
}

//博主class
.isMaster {
  &::after {
    content: "Handsome" !important;
    background: #ffa51e !important;
  }
}
</style>