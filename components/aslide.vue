<template>
  <div id="aslide">
    <!-- 个人信息 -->
    <div class="info_my background">
      <p class="sayHi">👋 {{sayHiStr}}我是</p>
      <p class="name">何华Hua</p>
      <p class="desc">这有关于 <b>产品、设计、开发</b> 相关的问题和看法。</p>
      <p class="desc">希望你可以在这里找到对你有用的<b>知识</b>和<b>教程</b>。</p>
      <p class="desc">保持热爱</p>
      <p class="desc">奔赴山海</p>
      <div class="my-contact fc">
        <p class="contact wx fcc"><i class="iconfont icon-shejiao-weixin"></i></p>
        <p class="contact qq fcc" @click="openQQ"><i class="iconfont icon-shejiao-QQ"></i></p>
      </div>
      <div class="imgBox">
        <img src="http://cdn.heblogs.cn/1649044225311_avatar-large-1.webp" alt="">
      </div>
    </div>

    <!-- 和风天气插件 -->
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
  </div>
</template>

<script>
import { getTags } from '~/api/tags'
import {getArticle} from '~/api/article'
import { getApiAddress,getWeather,getLength,getAQI } from '~/api/public'
import {sayHi} from '../components/methods'
// import { apiAddress, weather } from "../../axios/api.js"; //引入api
export default {
  data() {
    return {
      tagList:[],
      userinfo: [],
      Weather: [],
      lengthList:{},
      sayHiStr:''
    };
  },
  created() {
    this.sayHiStr = sayHi()
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
    },
    openQQ(){
      window.location.href = 'http://wpa.qq.com/msgrd?v=3&uin=1194150512&site=在线客服&menu=yes'
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
  background-color: #000;
  color: #fff;
  padding: 25px;
  letter-spacing: 1.5px;
  overflow: hidden;
  .name{
    font-size: 30px;
    line-height: 50px;
  }
  .desc{
    font-size: 15px;
    line-height: 26px;
    padding-top: 10px;
    color: rgba(255,255,255,.8);
    b{
      color: #fff;
    }
  }
  .descing{
    max-width: 100px;
  }
  .sayHi{
    font-size: 15px;
    line-height: 32px;
  }
  .my-contact{
    padding-top: 10px;
    height: 40px;
    p{
      margin-right: 5px;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background-color: #fff;
      cursor: pointer;
      transition: .1s ease-in all ;
      i{
        font-size: 20px;
        color: #000;
        transition: .1s ease-in all ;
      }
      &:hover{
        width: 40px;
        height: 40px;
        i{
          font-size: 22px;
          color: #fff;
        }
      }
    }
    .wx:hover{
      background-color: #07c160;
    }
    .qq:hover{
      background-color: #12b7f5;
    }
  }
  .imgBox{
    position: absolute;
    bottom: 0px;
    right: -20px;
    transform: translateY(80px);
    cursor: pointer;
    transition: cubic-bezier(.48,-.21,0,1.5) .3s;
    &:hover{
      transform: translateY(50px);
    }
    img{
      width: 150px;
      height: 200px;
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