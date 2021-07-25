<template>
  <div id="aslide">
    <!-- 个人信息 -->
    <div class="info_my background">
      <img src="https://cdn.jsdelivr.net/gh/web-Hreo/nutx_blog/assets/common/avatar.jpg" alt />
      <div class="my_information">
        <p>Hhua | 何华</p>
        <p>web前端开发工程师</p>
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
    <!-- 天气 -->
    <div class="info_weather background" v-if="Weather">
      <p>您的位置 -> {{Weather.address}}</p>
      <!-- {{Weather.basic.update.loc}} -->
      <p>更新时间：{{Weather.time}}</p>
      <p>
        <i class="el-icon-sunrise"></i>
      </p>
      <p>实时气温：{{Weather.tmp}}°C</p>
      <p>{{Weather.mintmp}}°C~{{Weather.maxtmp}}°C</p>
      <p>{{Weather.txt}}</p>
      <p>{{Weather.dir}}</p>
      <p :style="{'background-color':Weather.qltyColor}">{{Weather.aqi}} {{Weather.qlty}}</p>
    </div>
    <!-- 标签 -->
    <div class="info_label background">
      <p class="info_title">标签云</p>
      <ul>
        <li v-for="(item, index) in tagList" :key="index" :style="randomRgb(item)">
          <a href>{{item.name}}</a>
        </li>
      </ul>
    </div>
    <!-- 热度榜 -->
    <div class="info_rankingList background">
      <p class="info_title">热度榜</p>
      <nuxt-link class="rankingList_item"  :to="`/articleDetails/${item._id}`" v-for="(item,index) in articleList" :key="item._id">
        {{item.title}}
      </nuxt-link>

    </div>
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
import { getApiAddress,getWeather,getLength } from '~/api/public'
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
        console.log(data);
        //使用weather接口 -> 获取用户所在城市当前天气
        let weatherData = await getWeather(data.mainInfo);
        console.log(weatherData);
        weatherData = weatherData.now
        this.Weather = {
          address: weatherData.city, //地址
          time: weatherData.update_time, //当前刷新时间
          tmp: weatherData.tem, //当前气温
          maxtmp: weatherData.tem_day, //当前气温
          mintmp: weatherData.tem_night, //当前气温
          txt: weatherData.wea, //天气状况
          weaImg:weatherData.wea_img,
          dir: weatherData.win, //风向
          aqi: weatherData.air, //aqi指数
          qlty: this.getApi(weatherData.air).category, //空气质量等级
          qltyColor: this.getApi(weatherData.air).color //空气质量等级
        };
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
    getApi(aqi){
      if (aqi <= 50) {
        return { category: '优', color: '#00BD26' }
      } else if (aqi <= 100) {
        return { category: '良', color: '#FFB223' }
      } else if (aqi <= 150) {
        return { category: '轻度污染', color: '#FF7800' }
      } else if (aqi <= 200) {
        return { category: '中度污染', color: '#FF2500' }
      } else if (aqi <= 300) {
        return { category: '重度污染', color: '#C71585' }
      } else if (aqi > 300) {
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
  border-radius: 5px;
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
  img {
    margin: 0 auto;
    width: 120px;
    height: 120px;
    border-radius: 50%;
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
  }
}
.info_weather {
  background-image: linear-gradient(#7d90a0, #9198e5);
  color: #fff;
  text-align: center;
  p {
    margin: 5px 0;
    &:nth-child(1),
    &:nth-child(2) {
      font-size: 12px;
      text-align: left;
    }
    &:nth-child(3) {
      font-size: 80px;
    }
    &:nth-child(8) {
      display: inline-block;
      width: 80px;
      height: 30px;
      line-height: 30px;
      background-color: #40c057;
      border-radius: 5px;
    }
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
      padding: 7px;
      border-radius: 5px;
      font-size: 14px;
      transition: all ease 0.5s;
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        color: #fff;
      }
    }
  }
}
.info_rankingList {
  .rankingList_item {
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