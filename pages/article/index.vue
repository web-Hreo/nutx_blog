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
                    <span class="nuxtLink_link">{{ DIt.createTime }}</span>{{ DIt.title }}
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
      //处理时间
      data.forEach(yearItem =>{
        yearItem.data.forEach(monthItem =>{
          monthItem.data.forEach(item =>{
            item.createTime = item.createTime.substring(5,10)
          })
        })
      })
      return { archivesList:data }
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
    .article-menu{
      background-color: #fff;
      margin-right: 10px;
      .el-menu-vertical-demo{
        border-right: none;
      }
    }
    .article-cont{
      width: 100%;
      box-sizing: border-box;
      // padding: 30px;
      // background-color: #fff;
      .el-tag{
        // cursor: pointer;
      }
      .label-list{
        flex-wrap: wrap;
      }
      .label-item{
        color: #000;
        box-sizing: border-box;
        width: 49%;
        padding: 10px 20px;
        margin-top: 20px;
        background-color: #f5f5f5;
        // cursor: pointer;
        border-radius: 5px;
        transition: all .2s ease-in;
        letter-spacing: 1px;
        &:hover{
          color: #409EFF;
          background-color: rgba(0, 0, 0, .1);
        }
        &:nth-child(1),
        &:nth-child(2){
          margin-top: 0;
        }
      }
    }
    .list-item{
      // padding: 30px 10px 40px;
      padding: 30px;
      border-left: none;
      box-shadow: none;
      margin-top: -10px;
      margin-bottom: 30px;
      background-color: #fff;
      border-radius: 10px;
      h3{
        padding: 0 0 10px;
        font-size: 30px;
        margin: 0;
        line-height: 1.5;
        font-family: Product Sans !important;
        font-weight: 600 !important;
        letter-spacing: .5px;
      }
      h4{
        font-size: 20px;
        padding: 10px 0;
      }
      .nuxtLink{
        display: block;
        &:hover{
          background-color: #eee;
        }
      }
      .nuxtLink_link{
        color: #ccc;
        padding:0 10px;
      }
    }
    .list-ul{
      // list-style-type: disc;
      a{
        padding: 15px 0;
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