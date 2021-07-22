<!--
  @name: 'articleDetails',
  @describe: 文章详情列表
  @author: HeHua,
  @createDate: 2021年07月22日 16:32:32,
  @changeDate: ,
-->
<template>
  <div id='articleDetails'>
    <article v-html="info.cont"></article>
  </div>
</template>

<script>
import '~/assets/css/monokai-sublime.css'
import {getArticleDetail} from '~/api/article'
export default {
  name: 'articleDetails',

  components: {},

  data () {
    return {
      info:{}
    }
  },

  async mounted () {
    console.log(this.$route.params.id);
    const data = await getArticleDetail({id:this.$route.params.id})
    this.info = data
    console.log(data);
  },

  destroyed () {},

  methods: {}
}

</script>
<style lang='less' scoped>
article{
  /deep/p{
    padding: 10px 0;
    line-height: 30px;
    font-size: 17px;
    letter-spacing: 0.5px;
    font-family: 'Mirages Custom', 'Merriweather', 'Open Sans', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft Yahei', 'WenQuanYi Micro Hei',  'Segoe UI Emoji', 'Segoe UI Symbol', Helvetica, Arial, sans-serif;
  }
}
/deep/.JavaScript{
  margin: 20px 0;
  padding: 10px 0;
  display: block;
  background-color: #cccc;
  font-family: Consolas,Menlo,Monaco,"lucida console","Liberation Mono","Courier New","andale mono",monospaceX,monospace,sans-serif;
}
</style>