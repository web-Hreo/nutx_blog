<!--
  @name: 'hot',
  @describe: 热榜
  @author: HeHua,
  @createDate: 2021年07月22日 00:49:33,
  @changeDate: ,
-->

<template>
  <div id>
    <!-- 文章盒子 -->
    <MyArticleList
    :articleList="articleList"
    @turnPages="turnPages"
    />
  </div>
</template>

<script>
//引入文章组件
import MyArticleList from "~/components/articleList.vue";
import {getArticle} from '~/api/article'
export default {
  async asyncData(context) {
    console.log(context);
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
    handleCurrentChange(val) {
      console.log(`当前页: /hot/${val}`);
    },
    async turnPages(pageNo){
      console.log('翻页');
      this.$router.push(`/hot/${pageNo}`)
    },
  },
  components: {
    MyArticleList
  }
};
</script>

<style lang='less' scoped>
</style>