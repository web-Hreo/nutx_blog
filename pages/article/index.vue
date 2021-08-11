<!--
  @name: 'article',
  @describe: 文章存档
  @author: HeHua,
  @createDate: 2021年07月22日 00:46:08,
  @changeDate: ,
-->
<template>
  <div id='article' class="pt-25">
    <div class="article-box ">
      <el-row >
        <div class="article-cont">
          <div class="article-list">
            <div v-for="(item,index) in archivesList" :key="index" class="list-item">
              <h3>{{ item.year }}</h3>
              <div class="month" v-for="(MIt,MIn) in item.data" :key="MIn">
                <h4>{{MIt.month}}</h4>
                <ul class="list-ul">
                  <nuxt-link :to="`articleDetails/${DIt._id}`"  class="nuxtLink" v-for="(DIt, DIn) in MIt.data" :key="DIn">
                  <p>{{ DIt.createTime }}</p>
                  <p class="nuxtLink_link">{{ DIt.title }}</p>
                  </nuxt-link>
                </ul> 
              </div>
            </div>
          </div>
        </div>
      </el-row>
    </div>

  
  </div>
</template>

<script>
import {getArchives} from '~/api/public'
export default {
  async asyncData(context){
      const {data} = await getArchives()
      // console.log(data);

      const yearMap = ['2021','2022','2023','2024','2025']//定义需要查询的年份
      const monthMap = ['01','02','03','04','05','06','07','08','09','10','11','12']//定义需要查询的月份
      const list = []
      
      yearMap.forEach(yIt =>{
        let yearDataList = {} //定义存放年份数据列表
        let monthDataList = {} //定义存放月份数据列表
        //查找年份数据
        const YEAR_ARR = data.find(it =>it.createTime.indexOf(yIt)>=0)
        console.log(YEAR_ARR,yIt);
        //查找月份数据
        if(YEAR_ARR){
          yearDataList = { year:yIt, data:[] }
          monthMap.forEach(mIt =>{
            const MONTH_ARR = data.filter(it =>it.createTime.indexOf(`${yIt}-${mIt}`)>=0)
            if(MONTH_ARR.length){
              monthDataList = { month:`${yIt}-${mIt}`,data:MONTH_ARR }
              yearDataList.data.unshift(monthDataList)
            }
          })
          list.unshift(yearDataList)
        }
      })
      console.log(list);
      //处理时间
      list.forEach(yearItem =>{
        yearItem.data.forEach(monthItem =>{
          monthItem.data.forEach(item =>{
            item.createTime = item.createTime.substring(5,10)
          })
        })
      })
      return { archivesList:list }
  },

  components: {},

  data () {
    return {
    }
  },
  head(){
    return{
      title:'Hhua_前端个人博客_文章归档',
    }
  }
}

</script>
<style lang='less' scoped>
  #article{
    width: 100%;
    padding-bottom: 20px;
    font-family: Product Sans !important;
    letter-spacing: 1px;
    .article-box{

    }
    .article-cont{
      width: 100%;
      box-sizing: border-box;
    }
    .list-item{
      padding: 30px;
      border-left: none;
      box-shadow: none;
      margin-top: -10px;
      margin-bottom: 30px;
      background-color: #fff;
      border-radius: 10px;
      @media only screen and (max-width: 766.99px) {//m端
        font-size: 24px;
        padding: 30px 15px;
      }
      h3{
        padding: 0 0 10px;
        font-size: 30px;
        margin: 0;
        line-height: 1.5;
        font-family: Product Sans !important;
        font-weight: 600 !important;
        letter-spacing: .5px;
        @media only screen and (max-width: 766.99px) {//m端
          font-size: 24px;
        }
      }
      h4{
        font-size: 20px;
        padding: 10px 0;
        @media only screen and (max-width: 766.99px) {//m端
          font-size: 16px;
        }
      }
      .nuxtLink{
        display: flex;
        box-sizing: border-box;
        padding: 15px 10px;
        border-radius: 5px;
        transition: all .2s ease;
        &:hover{
          background-color: #eee;
        }
        @media only screen and (max-width: 766.99px) {//m端
          padding: 8px 10px;
        }
      }
      .nuxtLink_link{
        word-break: break-all;
        flex: 1;
        color: #ccc;
        padding:0 10px;
      }
    }
    .list-ul{
      // list-style-type: disc;
      a{
        padding: 15px 0;
        //m端
        @media only screen and (max-width: 766.99px) {
          font-size: 13px;
          padding: 5px 0;
        }
        .list-date{
          margin: 12px 0 10px;
          font-size: 15px;
          color: #615b5b;
          background: #f1f2f3;
          border-radius: 4px;
          font-size: 14px;
          padding: 3px 5px 3px 7px;
          background: #f1f2f3;
          border-radius: 4px;
          font-style: normal;
          margin-right: 10px;
        }
        .list-name{
          // color: #3d658d;
          text-decoration: none
        }
        .list-num{
          color: #a8ced8;
          margin-left: 30px;
        }
      }
    }

  }
</style>