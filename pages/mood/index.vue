<!--
  @name: 'mood',
  @describe: 每日心情栏目
  @author: HeHua,
  @createDate: 2021年07月22日 00:50:47,
  @changeDate: ,
-->
<template>
  <div id='mode' class="def-card">
     <!-- <el-timeline>
    <el-timeline-item v-for="item in modeList" :key="item._id" :timestamp="item.createTime" placement="top">
        <div class="mode-card" v-html="item.cont"></div>
    </el-timeline-item>

  </el-timeline> -->
    <div class="mode-item" v-for="item in modeList" :key="item._id">
      <div class="item-head fc">
        <img class="head-avatar" src="http://cdn.heblogs.cn/avatar.jpg" alt="">
        <p class="head-name">handsome</p>
        <p class="head-time">{{item.time}}</p>
      </div>
      <div class="mode-card" v-html="item.cont"></div>
    </div>
  </div>
</template>

<script>
import {getMood} from '../../api/mood'
import {getDateDiff} from '~/components/methods';
export default {
  async asyncData() {
    const {data} = await getMood()
    data.forEach(it =>{
      it.time = getDateDiff(new Date(it.createTime))
      console.log(it.time);
    })
    return { modeList:data  }
  },

  components: {},

  data () {
    return {
      modeList:[
        { id:1,date:'2021-07-15 21:59',title:'更新 Github 模板<br/>王小虎 提交于 2018/4/12 20:46' },
        { id:2,date:'2021-07-15 21:59',title:'更新 Github 模板<br/>王小虎 提交于 2018/4/12 20:46<br/>王小虎 提交于 2018/4/12 20:46' },
        { id:3,date:'2021-07-15 21:59',title:'更新 Github 模板<br/>王小虎 提交于 2018/4/12 20:46' },
        { id:4,date:'2021-07-15 21:59',title:'更新 Github 模板<br/>王小虎 提交于 2018/4/12 20:46' },
        { id:5,date:'2021-07-15 21:59',title:'更新 Github 模板<br/>王小虎 提交于 2018/4/12 20:46' },
        { id:6,date:'2021-07-15 21:59',title:'更新 Github 模板<br/>王小虎 提交于 2018/4/12 20:46' },
      ]
    }
  },

  async mounted () {
  },

  destroyed () {},

  methods: {},
    
  head(){
    return{
      title:'Hhua_前端个人博客_日志',
    }
  }
}

</script>
<style lang='less' scoped>
// /deep/.el-card__body{
//   background-color: #F6F6F6;
// }
.mode-item{
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  background-color: #F6F6F6;
  margin: 10px 0;
  border-radius: 10px;
  .item-head{
    .head-avatar{
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
    .head-name{
      font-size: 14px;
      color: #1abc9c;
      padding-left: 15px;
    }
    .head-time{
      color: #ddd;
      font-size: 12px;
      text-shadow: #d9d9d9 0 0 1px, #fffffb 0 0 1px, #fffffb 0 0 2px;
      padding-left: 10px;
    }
  }
}
#mode{
  padding: 15px 30px 10px;
}
.mode-card{
  z-index: 1;
  // background: linear-gradient(90deg,rgba(247,149,51,.1) 0,rgba(243,112,85,.1) 15%,rgba(239,78,123,.1) 30%,rgba(161,102,171,.1) 44%,rgba(80,115,184,.1) 58%,rgba(16,152,173,.1) 72%,rgba(7,179,155,.1) 86%,rgba(109,186,130,.1) 100%);
  // background-color: #f5f5f5;
  color: #333;
  // padding: 20px;
  padding-top: 20px;
  // border-radius: 5px;
  /deep/img{
    // width: 50%;
    // margin: 0 25%;
    margin: 20px 0;
    max-width: 100%;
      //m端
  @media only screen and (max-width: 766.99px) {
    width: 100%;
    margin: auto;
  }
  }
}
/deep/.el-timeline-item__timestamp{
  padding-top: 20px;
  color: #000;
  font-size: 16px;
}
/deep/.el-timeline-item__node--normal{
  width: 15px;
  height: 15px;
  left: -3px;
  top: 18px;
      background: linear-gradient(
-45deg
, #23A6D5, #23D5AB);
}
/deep/.el-timeline-item__tail{
  height: 200%;
  border-left: 2px solid #aadafa;
}
</style>