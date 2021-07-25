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
    <MyArticleList
    :articleList="articleList"
    @turnPages="turnPages"
    />
    <!-- 分页 -->
    <!-- <div class="block">
      <el-pagination layout="prev, pager, next" :total="50" @current-change="handleCurrentChange"></el-pagination>
    </div> -->
  </div>
</template>

<script>
//引入文章组件
import MyArticleList from "~/components/articleList.vue";
import {getArticle} from '~/api/article'
export default {
  async asyncData(context) {
    const pageNo = context.params.pageNo?context.params.pageNo:1
    //获取文章列表
    const {data} = await getArticle({pageNo})
    return {articleList:data }
  },
  data() {
    return {
      //向子组件发送该页面的数据 后期修改为后台数据
      articleList: []
    };
  },

  created(){
  },
  methods: {
    async turnPages(pageNo){
      this.$router.push(`/${pageNo}`)
    },
  },
  components: {
    MyArticleList
  },
  
  head(){
    return{
      title:'Hhua_前端个人博客_首页',
    }
  }

};
</script>

<style lang='less' scoped>
</style>