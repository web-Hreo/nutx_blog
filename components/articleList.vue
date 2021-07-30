<template>
  <div id="articleList">
    <!-- 文章盒子 -->
    <nuxt-link class="blog_item"
      :style="{'background-image': `url(${item.viewImg})`}"
      v-for="(item, index) in articleList.data" :key="index"
       :to="`/articleDetails/${item._id}`"
      >
      <p class="item_name text-eli-1 ">{{item.title}}</p>
      <p class="item_time">{{item.createTime}}・<span class="abc9">{{item.tag}}</span>・{{item.viewNum}}次浏览</p>
    </nuxt-link>
     <!-- 分页器  -->
    <div class="pagination fbc">
      <div class="btnBox">
        <p class="btn" v-if="articleList.pageNo !==1" @click="previous()">上一页</p>
      </div>
      <div class="btnBox">
        <p class="btn" v-if="articleList.pageNo*articleList.pageSize <articleList.total" @click="next()">下一页</p>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: ["articleList"],
  created(){
    // this.articleList.data.forEach(it =>{
    //   if(!it.bg){
    //     const rendom = Math.floor(Math.random()*92 + 1)
    //     it.bg = `https://cdn.jsdelivr.net/gh/web-Hreo/nutx_blog/assets/image/article_bg/${rendom}.jpg`
    //   }
    // })
  },
  methods:{
    previous(){
      this.$emit('turnPages',this.articleList.pageNo - 1)
    },
    next(){
      this.$emit('turnPages',this.articleList.pageNo + 1)
    }
  }
};
</script>

<style lang='less' scoped>
.blog_item {
  display: block;
  margin: 30px 0;
  padding: 100px 10px;
  background-color: transparent;
  // background-color: rgb(218, 218, 218);
  color: #fff;
  border-radius: 5px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  transition: all .3s ease;
  //移动端
  @media only screen and (max-width: 768.99px) {
    padding: 50px 10px;
  }
  .item_name{
  font-family: 'Mirages Custom', 'Merriweather', 'Open Sans', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft Yahei', 'WenQuanYi Micro Hei',  'Segoe UI Emoji', 'Segoe UI Symbol', Helvetica, Arial, sans-serif;
    font-size: 24px;
  }
  .item_time{
    padding-top: 15px;
    font-size: 14px;
    letter-spacing: 1px;
  }
  &:nth-child(1){
    margin-top: 15px;
  }
  .text_img {
    box-sizing: border-box;
    img {
      margin: 5px 0;
      width: 100%;
    }
  }
  .blog_text {
    box-sizing: border-box;
    padding: 0 10px;
    .blogtitle {
      width: 50%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      word-break: break-all;
      margin: 5px 0;
      a {
        color: #000;
      }
    }
    p {
      margin: 5px 0;
      font-size: 15px;
      color: #555;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
  .blog_config {
    display: flex;
    .config_item {
      padding-right: 15px;
      font-size: 12px;
      i {
        font-weight: 600;
        font-size: 16px;
        padding-right: 5px;
      }
      .el-icon-link {
        color: rgb(204, 146, 156);
      }
      .el-icon-time {
        color: rgb(66, 120, 190);
      }
      .el-icon-view {
        color: #cccccc;
      }
      a {
        color: green;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  .blog_read {
    display: flex;
    justify-content: flex-end;

    a {
      font-size: 13px;
      color: green;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .blog_readbtn {
    border-radius: 5px;
    width: 100%;
    text-align: center;
    background: #f2f2f2;
    padding: 7px 0;
    margin-top: 10px;
    clear: both;
    a {
      font-size: 13px;
      color: green;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
.btn{
  padding: 10px 50px;
  border-radius: 30px;
  display: inline-block;
  opacity: 1;
  font-size: 16px;
  line-height: 1.5;
  font-weight: 500;
  background-color: transparent;
  color: #000;
  border: 1px solid #000;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: 0.3s ease all;
  //移动端
  @media only screen and (max-width: 768.99px) {
    font-size: 14px;
    padding: 8px 25px;
  }
  &:hover{
    background-color: #000;
    color: #fff;
  }
}

</style>