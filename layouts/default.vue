<!--
  @name: 'defalut',
  @describe: 
  @author: HeHua,
  @createDate: 2021年07月22日 00:28:59,
  @changeDate: ,
-->
<template>
  <div id="app">
    <!-- 头部公共 -->
    <MyHead/>
    <!-- 中间主体 -->
    <div id="home">
      <el-row :gutter="20" class="home_cont">
        <!-- 左侧文章item -->
        <el-col :xs="24" :sm="24" :md="24" :lg="24" class="home_cont_blog">
          <transition mode="out-in">
            <!-- 动画过渡跳转路由容器 -->
            <nuxt/>
          </transition>
        </el-col>
        <!-- 右侧配置 -->
        <el-col v-if="isAslideShow" :span="7" class="home_cont_info hidden-sm-and-down">
          <Aslide />
        </el-col>
      </el-row>
    </div>
    <MyFooter/>
  </div>
</template>

<script>
import  '../assets/css/iconfont.css'
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import '~/assets/common/common.css'//引入全局通用样式
import  '~/assets/common/global.less'
import MyHead from "~/components/Header";
import Aslide from "~/components/aslide";
import MyFooter from "~/components/footer";
export default {
  data() {
    return {
      num: 1,
      isAslideShow:true//右侧信息是否展示 默认是
    };
  },
  components: {
    MyHead,
    Aslide,
    MyFooter
  },
  watch:{
    $route(val){
        // if(val.path==='/navigation' || val.path==='/article'){
        //   this.isAslideShow  = false
        // }else{
        //   this.isAslideShow  = true
        // }
    }
  }
};
</script>

<style lang="less">
//中间home
[v-cloak] {
  display: none !important;
}
#home {
  max-width: 1200px;
  min-width: 300px;
  margin:  0 auto;
  padding-top: 80px;
  overflow: hidden;
  //m端
  @media only screen and (max-width: 766.99px) {
    min-height: calc(100vh - 93px);
      padding-top: 0;
  }
  .home_cont {
    height: 100%;
    .home_cont_blog,
    .home_cont_info {
      height: 100%;
      overflow: hidden;
    }
    .home_cont_blog{
      min-height: calc(100vh - 172px);
    }
  }
}
//清除部分row自带样式
.el-row {
  padding: 0 !important;
  margin: 0 !important;
  display: flex;
  justify-content: flex-end;
}
//设置过度效果
.v-enter,
.v-leave-to {
  opacity: 0.5;
  transform: translateX(-100px);
}
.v-enter-active,
.v-enter-leave {
  transition: all, 0.2s ease;
}
.block {
  margin: 20px 0;
  .el-pagination {
    padding-left: 0;
    margin: 0 auto;
  }
}
</style>
