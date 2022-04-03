<template>
  <div id="aslide">
    <!-- 个人信息 -->
    <div class="info_my background">
      <div class="imgBox"><img src="http://cdn.heblogs.cn/avatar.jpg" alt /></div>
      <div class="my_information">
        <p>Hhua | 小何</p>
        <p>职业：web前端</p>
        <!-- <p>邮箱：ngpeipao9977590@163.com</p>
        <p>微信(添加备注来源)：17779168734</p> -->
        <p>保持热爱 奔赴山海</p>
      </div>
      <ul class="my_article fbc">
        <nuxt-link to="/"><p>文章</p><p>{{lengthList.article_length}}</p></nuxt-link>
        <nuxt-link to="/tags"><p>标签</p><p>{{lengthList.tags_length}}</p></nuxt-link>
        <nuxt-link to="/mood"><p>日志</p><p>{{lengthList.mood_length}}</p></nuxt-link>
      </ul>
    </div>
    <!-- 和风天气插件 -->
    <!-- <div id="he-plugin-standard"></div> -->

    <!-- 天气 -->
    <div class="info_weather background" v-if="Weather">
      <div class="info_weather-background"></div>
      <p>您的位置 -> {{Weather.address}}</p>
      <!-- {{Weather.basic.update.loc}} -->
      <p>当前风向：{{Weather.windScale}}级{{Weather.windDir}}</p>
      <p>当前天气：{{Weather.txt}}</p>
      <!-- <p>更新时间：{{Weather.time}}</p> -->
      <div class="img-box">
        <img :src="Weather.weaImg" alt="">
      </div>
      <p class="tac">实时气温：{{Weather.tmp}}°C</p>
      <p class="btn" :style="{'background-color':Weather.qltyColor}">{{Weather.aqi}} {{Weather.qlty}}</p>
    </div>
    <!-- 标签 -->
    <div class="info_label background">
      <p class="info_title">标签云</p>
      <ul>
        <li v-for="(item, index) in tagList" :key="index" :style="randomRgb(item)">
          <router-link :to="`/tags/${item.name}?pageNo=1`">{{item.name}}</router-link>
        </li>
      </ul>
    </div>
    <!-- 热度榜 -->
    <!-- <div class="info_rankingList background">
      <p class="info_title">热度榜</p>
      <nuxt-link class="rankingList_item"  :to="`/articleDetails/${item._id}`" v-for="item in articleList" :key="item._id">
        {{item.title}}
      </nuxt-link>

    </div> -->
    <!-- 友情链接 -->
    <!-- <div class="info_friendChain background">
      <p class="info_title">
        友情链接
        <a href>申请友链</a>
      </p>
      <div class="friendChain_website">
        <p>本站信息如下：</p>
        <p>网站名称：花未央</p>
        <p>网站链接:https://http://localhost:8080/</p>
        <p>
          <span style="color:red">注：</span> 申请友链之前，请务必先将本站添置友链，花未央收到后会立马处理，处理结果会以邮件形式通知您~
        </p>
      </div>
    </div> -->
  </div>
</template>

<script>
import { getTags } from '~/api/tags'
import {getArticle} from '~/api/article'
import { getApiAddress,getWeather,getLength,getAQI } from '~/api/public'
// import { apiAddress, weather } from "../../axios/api.js"; //引入api
export default {
  data() {
    return {
      tagList:[],
      userinfo: [],
      Weather: [],
      lengthList:{},
      articleList:[],
    };
  },
  created() {
    this.getdata();
    this.getTag()
    this.getLength()
    this.getArticle()
  },
  methods: {
    async getTag(){
      const {data} = await getTags()
      this.tagList = data
    },
    async getArticle(){
      const {data} = await getArticle({pageNo:1,pageSize:5,sort:'viewNum'})
      this.articleList = data.data
    },
    //在getdata内调用所有方法
    async getdata() {
      try {
        //使用apiAddress接口 -> 获取用户当前ip、所在城市
        let { data } = await getApiAddress();
        //使用weather接口 -> 获取用户所在城市当前天气
        let weatherData = await getWeather(data.mainInfo);
        const aqiList = await getAQI(data.mainInfo)
        // console.log(weatherData);
        // console.log(aqiList);
        const weatherDataNow = weatherData.now
        const aqiNow = aqiList.now
        
        this.Weather = {
          address: data.mainInfo, //地址
          time: weatherData.updateTime, //当前刷新时间
          tmp: weatherDataNow.temp, //当前气温
          txt: weatherDataNow.text, //天气状况
          weaImg:`https://cdn.jsdelivr.net/gh/web-Hreo/nutx_blog/assets/WeatherIcon-master/weather-icon-S1/color-256/${weatherDataNow.icon}.png`,
          windDir: weatherDataNow.windDir, //风向
          windScale: weatherDataNow.windScale, //风力等级
          aqi: aqiNow.aqi, //aqi指数
          qlty: aqiNow.category, //空气质量等级
          qltyColor: this.getApi(aqiNow.level).color //空气质量等级
        };
        // console.log(this.Weather);
      } catch (err) {
        console.log(err);
      }
    },
    //获取文章标签日志等长度
    async getLength(){
      const {data} = await getLength()
      this.lengthList = data
    },
    //该方法返回一个不规则背景色
    randomRgb(item) {
      let R = Math.floor(Math.random() * 200);
      let G = Math.floor(Math.random() * 200);
      let B = Math.floor(Math.random() * 200);
      return { background: "rgb(" + R + "," + G + "," + B + ")" };
    },
    getApi(level){
      level = parseInt(level)
      if (level=1 ) {
        return { category: '优', color: '#00BD26' }
      } else if (level=2) {
        return { category: '良', color: '#FFB223' }
      } else if (level=3) {
        return { category: '轻度污染', color: '#FF7800' }
      } else if (level=4) {
        return { category: '中度污染', color: '#FF2500' }
      } else if (level=5) {
        return { category: '重度污染', color: '#C71585' }
      } else if (level=6) {
        return { category: '严重污染', color: '#8B0000' }
      } else {
        return { category: '优', color: '#00BD26' }
      }
    }
  }
};
</script>

<style lang='less' scoped>
.background {
  margin: 15px 0;
  padding: 15px 10px;
  background-color: #fff;
  border-radius: 15px;
  transition: all .3s ;
  // &:hover{
  //   box-shadow: 0 0 10px 5px rgb(223, 223, 223);
  // }
  .info_title {
    color: #000;
    font-size: 18px;
    font-weight: 600;
    padding-bottom: 10px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #c0c0c0;
    a {
      display: inline-block;
      background: #fc9d9a;
      padding: 3px 11px;
      border-radius: 8px;
      transition: all 0.5s;
      color: #fff;
      font-size: 12px;
      margin-left: 10px;
    }
  }
}
.info_my {
  position: relative;
  // padding: 0 !important;
  background-color: #fff;
  .imgBox{
    width: 120px;
    height: 120px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto;
  }
  img {
    width: 104%;
    height: 104%;
    margin: -2%;
  }
  .my_information {
    padding: 15px 10px;
    p {
      text-align: center;
      letter-spacing: 2px;
      &:nth-child(1) {
        color: #3f3f3f;
        letter-spacing: 1px;
        font-size: 16px;
        margin-bottom: 10px;
      }
      &:nth-child(2) {
        color: #1abc9c;
        padding: 5px 0;
      }
    }
  }
  .my_article{
    padding: 10px 20px;
    text-align: center;
    a{
      height: 40px;
      p{
          color: #999;
      }
    }
  }
}
.info_weather {
  transition: all 0.3s ease;
  // background-image: linear-gradient(#7d90a0, #9198e5);
  color: #fff;
  text-align: center;
  letter-spacing: 2px;
  position: relative;
  background-color: transparent;
  overflow: hidden;
  .info_weather-background{
    background-image: url('http://cdn.heblogs.cn/_35.jpg');
    filter: blur(3px);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .img-box{
    width: 100%;
    height: 100px;
  }
  img{
    width: 100px;
    margin: 0 auto;
  }
  p {
    margin: 5px 0;
    font-size: 12px;
    text-align: left;
  }
  .btn{
  display: inline-block;
  width: 80px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 5px;
}
}
.info_label {
  ul {
    padding: 10px 0;
    display: flex;
    flex-wrap: wrap;
    li {
      letter-spacing: 1px;
      font-family: "Linux Biolinum", "Noto Serif SC", Helvetica, Arial, Menlo, Monaco, monospace, sans-serif;
      margin: 7px;
      border-radius: 5px;
      font-size: 14px;
      transition: all ease 0.5s;
      letter-spacing: 2px;
      a {
        box-sizing: border-box;
        display: inline-block;
        width: 100%;
        height: 100%;
        color: #fff;
        padding: 0 7px;
        height: 38px;
        line-height: 38px;
      }
    }
  }
}
.info_rankingList {
  .rankingList_item {
    word-break: break-all;
    display: block;
    padding: 10px 0;
    border-bottom: 1px solid #eaeaea;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: 500;
    color: #555;
    &:nth-last-child(1){
      border-bottom: 0;
    }
    &:hover{
      color: #000;
    }
  }
}

</style>