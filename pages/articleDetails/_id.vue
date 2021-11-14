<!--
  @name: 'articleDetails',
  @describe: 文章详情列表
  @author: HeHua,
  @createDate: 2021年07月22日 16:32:32,
  @changeDate: ,
-->
<template>
  <div id='articleDetails'>
    <div class="articleDetails-info">
      <h2 class="info-title">{{info.title}}</h2>
      <div class="info-desc">
        <p>创建时间：{{info.createTime}}</p>
        <p>浏览量：{{info.viewNum}}次</p>
        <p>所属标签：{{info.tag}}</p>
      </div>
      <!-- <p v-if="info.createTime===info.changeTime">修改时间{{info.changeTime}}</p> -->
    </div>
    <article v-html="info.cont"></article>
    <div class="copyright">
      <p>博客内容遵循 署名-非商业性使用-相同方式共享 4.0 国际 (CC BY-NC-SA 4.0) 协议，转载请注明出处！</p>
      <p>本文永久链接是：<a :href="url">{{url}}</a></p>
    </div>
    <MyComment from="article" :fromId="$route.params.id" />
  </div>
</template>

<script>
import '~/assets/css/monokai-sublime.css'
import {getArticleDetail} from '~/api/article'
import MyComment from '~/components/myComment.vue'
export default {
  name: 'articleDetails',
  async asyncData(context) {
    const data = await getArticleDetail({id:context.params.id,from:'pc'})
    const url = 'http://www.heblogs.cn'+context.route.path
    return { info:data,url,title:'Hhua_前端个人博客_文章_'+data.title }
  },
  components: { MyComment },

  data () {
    return {
      info:{},
      title:'Hhua_前端个人博客_文章'
    }
  },

  async mounted () {
  },

  destroyed () {},

  methods: {},
    
  head(){
    return{
      title:this.title
    }
  }
}

</script>
<style lang='less' scoped>
#articleDetails{
  background-color: #fff;
  padding: 20px;
  margin-top: 15px;
  border-radius: 10px;
  .articleDetails-info{
    .info-title{
      text-align: center;
      font-size: 28px;
      color: #000;
      padding: 30px 0 10px;
      //m端
      @media only screen and (max-width: 766.99px) {
        font-size: 24px;
      }
    }
    .info-desc{
      color: #8D8D8D;
      font-size: 12px;
      padding-bottom: 30px;
      //m端
      @media only screen and (min-width: 767px) {
        display: flex;
        align-items: center;
      }
      p{
        padding-right: 15px;
      }
    }
  }
  article{
    padding-bottom: 50px;
    /deep/a{
      word-break: break-all;
      color: blue;
      font-size: 14px;
    }
    /deep/p{
      padding: 3px 0;
      line-height: 30px;
      font-size: 14px;
      letter-spacing: 0.5px;
      //m端
      @media only screen and (max-width: 766.99px) {
        font-size: 13px;
      }
    }
    /deep/h2{
      font-size: 20px;
      font-weight: 400;
      color: #000;
      margin-top: 5px;
    //m端
    @media only screen and (max-width: 766.99px) {
      font-size: 16px;
    }
    }
    /deep/ul{
      list-style-type: disc;
      li{
        margin-left: 20px;
        padding: 5px 0;
      }
    }
    /deep/img{
      margin: 5px 10%;
      width: 80%;
    }
    /deep/blockquote{
      margin: 5px 0;
      word-break: break-all;
      background-color: #F5F5F5;
      box-sizing: border-box;
      border-left: 4px solid #797979;
      border-radius: 4px;
      position: relative;
      width: 100%;
      padding: 10px;
      transition: all .28s ease;
      -moz-transition: all .28s ease;
      -webkit-transition: all .28s ease;
      -o-transition: all .28s ease;
    }
    /deep/.JavaScript,/deep/code,/deep/ pre{
      overflow-x: auto;
      margin: 5px 0;
      padding: 10px 0;
      display: block;
      background-color: #F5F5F5;
      font-family: Consolas,Menlo,Monaco,"lucida console","Liberation Mono","Courier New","andale mono",monospaceX,monospace,sans-serif;
      //m端
      @media only screen and (max-width: 766.99px) {
        font-size: 14px;
      }
    }
  }
  .copyright{
    word-break: break-all;
    background-color: #F5F5F5;
    box-sizing: border-box;
    border-left: 4px solid #797979;
    border-radius: 4px;
    position: relative;
    width: 100%;
    padding: 16px;
    transition: all .28s ease;
    -moz-transition: all .28s ease;
    -webkit-transition: all .28s ease;
    -o-transition: all .28s ease;
    //m端
    @media only screen and (max-width: 766.99px) {
      font-size: 12px;
    }
     a{
      word-break: break-all;
      color: rgb(65, 65, 255);
    }
  }
}



</style>