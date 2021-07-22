<template>
  <div id>
    <!-- 文章盒子 -->
    <div class="blog_item" v-for="(item, index) in articleList" :key="index">
      <el-row>
        <!--文章图片  -->
        <el-col :span="8">
          <div class="text_img">
            <a href :title="item.title">
              <img :src="item.imgSrc" :alt="item.title" />
            </a>
          </div>
        </el-col>
        <!-- 文章介绍 -->
        <el-col :span="16">
          <div class="blog_text">
            <!-- 标题 -->
            <h3 class="blogtitle">
              <a :href="item.articleLinks + '&' + item.id">{{item.title}}</a>
            </h3>
            <!-- 文章引子简介 -->
            <p>{{item.desc}}</p>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
          <div class="blog_config">
            <!-- 标签链接 -->
            <div class="config_link config_item">
              <i class="el-icon-link"></i>
              <a :href="item.labelSrc">{{item.label}}</a>
            </div>
            <!-- 时间 -->
            <div class="config_time config_item">
              <i class="el-icon-time"></i>
              {{item.date}}
            </div>
            <!-- 浏览量 -->
            <div class="config_viewnum config_item">
              <i class="el-icon-view"></i>
              浏览 (
              <a href="javascript:;">{{item.Viewsnum}}</a> )
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="blog_read hidden-xs-only">
            <a :href="item.articleLinks + '&' + item.id">阅读原文</a>
          </div>
        </el-col>
      </el-row>
      <p class="blog_readbtn hidden-sm-and-up">
        <a :href="item.articleLinks + '&' + item.id">阅读原文</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  props: ["articleList"]
};
</script>

<style lang='less' scoped>
.blog_item {
  margin: 15px 0;
  padding: 15px 10px;
  background-color: #fff;
  border-radius: 5px;
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
</style>