<template>
  <div id="articleList">
    <!-- 文章盒子 -->
    <!-- <nuxt-link class="blog_item"
      :style="{'background-image': `url(${item.viewImg})`}"
      v-for="(item, index) in articleList.data" :key="index"
       :to="`/articleDetails/${item._id}`"
      >
      <p class="item_name text-eli-1 ">{{item.title}}</p>
      <p class="item_time">{{item.time}}・<span class="abc9">{{item.tag}}</span>・{{item.viewNum}}次浏览</p>
    </nuxt-link> -->
    <div class="article_item fc" v-for="(item, index) in articleList.data" :key="index">
      <img :src="item.viewImg" alt="">
      <div class="item-desc">
        <p class="title row_2">{{item.title}}</p>
        <p class="item_time">{{item.time}}・<span class="abc9">{{item.tag}}</span>・{{item.viewNum}}次浏览</p>
      </div>
    </div>

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
import {getDateDiff} from '~/components/methods';
export default {
  name: "",
  data() {
    return {};
  },
  props: ["articleList"],
  created(){
    this.articleList.data.forEach(it =>{
      it.time = getDateDiff(it.createTime)
    })
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
#articleList{
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  background-color: #ffffff;
  margin: 10px 0;
  border-radius: 10px;
}
.article_item{
  width: 100%;
  margin-bottom: 20px;
  img{
    width: 160px;
    height: 90px;
    border-radius: 10px;
  }
  .item-desc{
    padding: 10px;
    .title{
      font-size: 20px;
      font-weight: 700;
    }
    .item_time{
      padding-top: 15px;
    }
  }
}
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
    margin: 10px 0;
  }
  .item_name{
    font-size: 24px;
    //m端
    @media only screen and (max-width: 766.99px) {
      padding: 0 20px;
      font-size: 18px;
    }
  }
  .item_time{
    padding-top: 15px;
    font-size: 14px;
    letter-spacing: 1.2px;
    //m端
    @media only screen and (max-width: 766.99px) {
      font-size: 12px;
    }
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