<!--
  @name: 'comment',
  @describe: 留言板
  @author: HeHua,
  @createDate: 2021年07月24日 14:56:59,
  @changeDate: ,
-->
<template>
  <div id='comment'>
  <div class="comment_desc">
    <p>如果对本博客有任何建议 欢迎在页面下方留言
    例如:
    对某个开源项目感兴趣 想让我踩踩坑
    某页面有BUG 或有更好的想法
    已有文章的某些地方存在问题 </p>
  </div>
    <MyComment from="comment" />
  </div>
</template>

<script>
import MyComment from '~/components/myComment.vue'
export default {
  name: 'comment',

  components: { MyComment },

  data () {
    return {}
  },

  mounted () {},

  destroyed () {},

  methods: {},
    
  head(){
    return{
      title:'Hhua_前端个人博客_留言',
    }
  }
}

</script>
<style lang='less' scoped>
  #comment{
    padding: 15px 5% 0;
    color: rgb(51,51,51);
    //m端
    @media only screen and (max-width: 766.99px) {
      padding-top: 50px;
    }
    .comment_desc{
      p{
        padding: 5px 0;
        font-size: 15px;
        line-height: 26px;
      }
    }
  }
</style>