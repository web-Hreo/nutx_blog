<!--
  @name: 'aboutMe',
  @describe: 关于-关于我
  @author: HeHua,
  @createDate: 2021年07月22日 00:52:37,
  @changeDate: ,
-->
<template>
  <div id='about_me'>
    <article>
    <h2>关于我</h2>
    <p>目前坐标-厦门</p>
    <p>97年狮子座 爱学习爱写DEMO爱旅游爱追剧看电影吃火锅</p>
    <p>喜欢厦门喜欢大海，林荫小道，也向往细腻温柔的故事。 </p>
    <h2>关于技术栈</h2>
    <p>html(5) css(3) es6+ </p>
    <p>BackBone JQuery</p>
    <p>Vue全家桶 Vue + Vue-Router + Axios</p>
    <p>REACT全家桶 React + React-Dom + React-Router + Axios + Redux/Mobx</p>
    <p>小程序及框架 taro uniapp 原生小程序</p>
    <p>混合开发 uniapp React-Native</p>
    <p>服务端 Node + MySql</p>
    <p>版本管理：Git Svn</p>
    <p>调试：chrome控制台 firebug</p>
    <h2>关于博客</h2>
    <p>前端采用Vue-ssr框架NuxtJs + Element</p>
    <p>后端采用React + Antd</p>
    <p>服务端采用Node+MySql</p>
    <h2>为什么要写博客</h2>
    <p>写博客的初衷和目的一直是将学到的技术或知识通过自己的语言再组织记录下来，从而加深印象；同时，将踩过的坑尽量都记下来，避免后面再次使用时到处查找。如果自己写的东西能够得到读者的肯定，作为笔者还是会充满成就感的。</p>
    <p>写博客是一件非常耗时的事情，为了把问题描述清楚，书写 + 绘图 + 代码验证是一个非常耗时的过程，而且作为个人站点，写出来的文章不如 CSDN、博客园、简书等第三方网站容易被搜索到，从而导致浏览量较低，这还是有一些打击持续创作信心的。不过，如果从一开始就降低期望，把写博客当作是一种语言组织锻炼机会，也当作是一个自我提升的过程，而不要去在意能够被多少人看到，那么，写博客真的能够提升自己的内在能力。</p>
    <p>最初建站刚开始写博客的时候，我觉得写出来的文字总是干巴巴的，而且逻辑上经常感觉不通顺（错别字、病句等到现在还是存在，感觉在重修语文），一年后的现在，虽然进步还是不大，但是至少感觉自己在不断的提升中💪，以后会尽量坚持月更博客，也希望屏幕前的你也能够一直坚持下去！</p>
    <h2>我的联系方式</h2>
    <p>如有问题可在任一评论区填写邮箱后留言，你可以通过邮件及时收到我的回复✌~</p>
    <p>QQ交流群：825278827</p>
    <p>微信：He_1047</p>
    <p>邮箱：ngpeipao9977590@163.com</p>
    <h2>我的其它站点</h2>

    </article>
    
  </div>
</template>

<script>
export default {
  name: 'about_me',

  components: {},

  data () {
    return {
    }
  },

  mounted () {},

  destroyed () {},

  methods: {
  }
}

</script>
<style lang='less' scoped>
 #about_me{
   letter-spacing: 2px;
   h2{
     font-size: 20px;
     font-weight: bold;
     padding: 20px 0;
   }
   p{
     font-size: 16px;
     font-weight: 400;
     padding: 5px 0;
   }
 }
</style>