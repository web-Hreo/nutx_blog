<!--
  @name: 'aboutMe',
  @describe: 关于-关于我
  @author: HeHua,
  @createDate: 2021年07月22日 00:52:37,
  @changeDate: ,
-->
<template>
  <div id='about_me'>
    <article v-html="desc"></article>
  </div>
</template>

<script>
import {getUserDesc} from '~/api/public'
export default {
  async asyncData() {
    const {data} = await getUserDesc()
    return{ desc:data }
  },

  components: {},

  data () {
    return {
    }
  },

  mounted () {},

  destroyed () {},

  methods: {
  },
    
  head(){
    return{
      title:'Hhua_前端个人博客_关于我',
    }
  }
}

</script>
<style lang='less' scoped>
 #about_me{
   background-color: #fff;
   margin-top: 15px;
   padding: 20px;
   letter-spacing: 2px;
   border-radius: 5px;
    //m端
    @media only screen and (max-width: 766.99px) {
      padding-top: 1.333333rem;
    }
   article{
     padding-bottom: 20px;
    /deep/h2{
      padding: 10px 0;
      color: #000;
      // font-weight: 600;
      position: relative;
      font-size: 18px;
      //m端
      @media only screen and (max-width: 766.99px) {
        font-size: 15px;
      }
      &::before{
        content: '🍀';
        padding-left: 2px;
      }
    }
    /deep/p{
      padding: 5px 0;
      line-height: 30px;
      font-size: 14px;
      letter-spacing: 0.5px;
      color: #555;
      word-break: break-all;
      font-family: 'Mirages Custom', 'Merriweather', 'Open Sans', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft Yahei', 'WenQuanYi Micro Hei',  'Segoe UI Emoji', 'Segoe UI Symbol', Helvetica, Arial, sans-serif;
      //m端
      // @media only screen and (max-width: 766.99px) {
      //   font-size: 14px;
      // }
    }
    /deep/a{
      font-size: 16px!important;
      color: rgb(65, 65, 255);
      background-color: transparent!important;
    }
  }

 }
</style>