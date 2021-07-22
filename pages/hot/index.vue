<!--
  @name: 'hot',
  @describe: 热榜
  @author: HeHua,
  @createDate: 2021年07月22日 00:49:33,
  @changeDate: ,
-->
<template>
  <div id="hot">
    <!-- 文章盒子 -->
    <my-list :articleList="articleList"></my-list>
    <!-- 分页 -->
    <div class="block">
      <el-pagination layout="prev, pager, next" :total="50" @current-change="handleCurrentChange"></el-pagination>
    </div>
  </div>
</template>

<script>
//引入文章组件
import myList from "@/components/articleList";
export default {
  name: "",
  data() {
    return {
      //向子组件发送该页面的数据 后期修改为后台数据
      articleList: [
        {
          id: 1,
          title: "Ubuntu或Debian系统的漏洞修复：apt安装等",
          desc:
            "Ubuntu 及 Debian 系统的软件漏洞怎么修复？其实很简单，只需要链接ssh，然后用apt安装包管理工具进行软件升级.",
          containar: "暂无",
          imgSrc:
            "https://www.yxiaowei.com/Public/upload/article_banner/2019/12-30/5e09c45564d98.jpg",
          label: "vue",
          labelSrc: "#",
          date: "2020-05-07",
          Viewsnum: 570,
          articleLinks: "/detail",
          lastArticleTitle: "",
          lastArticleTitleSrc: "",
          nextArticleTitle: "",
          nextArticleTitleSrc: ""
        },
        {
          id: 2,
          title: "测试文章",
          desc: "没有简介",
          containar: "暂无",
          imgSrc:
            "https://www.yxiaowei.com/Public/upload/article_banner/2019/12-30/5e09c45564d98.jpg",
          label: "ES6",
          labelSrc: "#",
          date: "2020-05-12",
          Viewsnum: 10,
          articleLinks: "/detail",
          lastArticleTitle: "",
          lastArticleTitleSrc: "",
          nextArticleTitle: "",
          nextArticleTitleSrc: ""
        }
      ]
    };
  },
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  created() {},
  components: {
    myList
  }
};
</script>

<style lang='less' scoped>
</style>