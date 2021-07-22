<!--
  @name: 'index',
  @describe: 
  @author: HeHua,
  @createDate: 2021年07月22日 00:31:22,
  @changeDate: ,
-->
<template>
  <div id>
    <!-- 文章盒子 -->
    <MyArticleList :articleList="articleList" />
    <!-- 分页 -->
    <!-- <div class="block">
      <el-pagination layout="prev, pager, next" :total="50" @current-change="handleCurrentChange"></el-pagination>
    </div> -->
  </div>
</template>

<script>
//引入文章组件
import MyArticleList from "~/components/articleList.vue";
import {getJson,setPerson,getPerson,update,deletePer} from '../axios/api'
import {getArticle} from '~/api/article'
export default {
  async asyncData() {
    const {data} = await getArticle({pageNo:1})
    return {articleList:data.data }
  },
  data() {
    return {
      //向子组件发送该页面的数据 后期修改为后台数据
      articleList: []
    };
  },

  created(){
    console.log('请求成功 created');
    // this.getJson()
    // this.setPerson() 
    // this.getPerson()
    // this.update()
    // this.deletePer()
    // this.getArticle()
    console.log(this.articleList);
  },
  methods: {
    //获取文章列表
    async getArticle(){
      const {data} = await getArticle({pageNo:1})
      console.log(data);
      this.articleList = data.data
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    async getJson(){
      const {data} = await getJson()
      console.log(data);
    },

    async setPerson(){
      const params ={
        name:'李四',
        age:10
      }
      const data = await setPerson(params)
      console.log(data);
    },

    async getPerson(){
      const data = await getPerson()
      console.log(data);
    },

    async update(){
      const params ={
        name:'李四-222222222222',
        age:1022222,
        _id:'60f1b8090a332d1b5cd32c69'
      }
      const data = await update(params)
      console.log(data);
      await this.getPerson()
    },

    async deletePer(){
      const data = await deletePer({_id:'60f1b7e70a332d1b5cd32c63'})
      console.log(data);
      await this.getPerson()
    }
  },
  components: {
    MyArticleList
  }
};
</script>

<style lang='less' scoped>
</style>