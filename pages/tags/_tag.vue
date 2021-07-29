<!--
  @name: 'index',
  @describe: 
  @author: HeHua,
  @createDate: 2021年07月22日 00:31:22,
  @changeDate: ,
-->
<template>
  <div id>
    <div class="note defalut no-icon" style="">
      标签-{{tag}}-文章数量：{{total}}
    </div>
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
    console.log(context.params);
    console.log(context.query);
    const pageNo = context.query.pageNo?context.query.pageNo:1
    const params = {
      tag:context.params.tag,
      pageNo:context.query.pageNo?context.query.pageNo:1
    }
    //获取文章列表
    const {data} = await getArticle(params)
    console.log(data);
    return {
      tag:context.params.tag,
      articleList:data,
      total:data.total
      }
  },
  data() {
    return {
      articleList: []
    };
  },

  created(){
  },
  methods: {
    async turnPages(pageNo){
      this.$router.push(`tags/${this.tag}?pageNo=${pageNo}`)
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