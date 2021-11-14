<!--
  @name: 'project',
  @describe: 关于-项目分享
  @author: HeHua,
  @createDate: 2021年07月22日 00:53:47,
  @changeDate: ,
-->
<template>
  <div id='project' class="def-card">
    <p class="note warning no-icon" style="">本站项目由博主工作以来开发的项目，仅为记录及参考使用</p>
    <el-row class="linkeBox" :gutter="10">
      <el-col :xs="24" :sm="12" :md="12"  v-for="item in projectList" :key="item.id">
        <div class="link-item" :class="{'link-item-hover':item.href !=='#'}" >
          <a :href="item.href==='#'?'javascript:void(0);':item.href" :title="item.title" :target="item.href==='#'?'_self':'_blank'" data-pjax-state="external">
            <img :src="item.imgSrc"><span class="sitename">{{item.name}}</span>
            <p class="linkdes">简介：{{item.title}}</p>
            <!-- <p class="linkdes">技术栈：react+antd</p> -->
            <p class="linkdes">在线链接：
              <a v-if="item.href !=='#'" target="black" :href="item.href">{{item.href}}</a>
              <span v-else>暂无入口</span>
            </p>
          </a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {getProjectList} from '~/api/public'
export default {
  async asyncData() {
    const data = await getProjectList()
    return{ projectList:data }
  },

  components: {},

  data () {
    return {
      projectList:[]
    }
  },

  mounted () {},

  destroyed () {},

  methods: {
  },
    
  head(){
    return{
      title:'Hhua_前端个人博客_项目分享',
    }
  }
}

</script>
<style lang='less' scoped>
#project{
  padding-bottom: 50px;
}

.linkeBox{
  margin: 0;
  list-style: none;
  padding: 0;
  width: 100%;
  display: inline-block;
  .link-item-bg{
    background-color: rgba(#42b983,.1)!important;
  }
  .link-item-hover{
    &:hover{
      background-color: rgba(#42b983,.2)!important;
    }
  }
  .link-item{
    border: 1px solid #ececec;
    padding: 10px 30px;
    margin: 4px 0;
    position: relative;
    overflow: hidden;
    -webkit-transition: all .6s;
    transition: all .6s;
    border-radius: 10px;
    background-color: #fff;
    transition: all .2s ease-in;
    a{
      color: var(--base-color);
      text-decoration: none;
      transition: .3s;
      background-color: transparent;
      -webkit-text-decoration-skip: objects;
      color: #42b983;
    }
    .lose-img{
      float: right;
      // box-shadow: inset 0 0 10px #000;
      padding: 5px;
      opacity: 1;
      transform: rotate(0);
      -webkit-transform: rotate(0);
      -moz-transform: rotate(0);
      -o-transform: rotate(0);
      -ms-transform: rotate(0);
      transition: all ease 1s;
      -webkit-transition: all ease 1s;
      -moz-transition: all ease 1s;
      -o-transition: all ease 1s;
      margin-top: 5px;
      width: 65px;
      height: 65px;
      padding: 2px;
      border-radius: 100%;
      background-color: #ccc;
      //m端
      @media only screen and (max-width: 766.99px) {
        width: 40px;
        height: 40px;
      }
    }
    img{
      float: right;
      // box-shadow: inset 0 0 10px #000;
      padding: 5px;
      opacity: 1;
      transform: rotate(0);
      -webkit-transform: rotate(0);
      -moz-transform: rotate(0);
      -o-transform: rotate(0);
      -ms-transform: rotate(0);
      transition: all ease 1s;
      -webkit-transition: all ease 1s;
      -moz-transition: all ease 1s;
      -o-transition: all ease 1s;
      margin-top: 5px;
      width: 65px;
      height: 65px;
      padding: 2px;
      border-radius: 100%;
      //m端
      @media only screen and (max-width: 766.99px) {
        width: 40px;
        height: 40px;
      }
    }
    .sitename{
      font-size: 18px;
      padding-bottom: 10px;
      display: block;
      -webkit-transition: all .3s;
      transition: all .3s;
      overflow: hidden;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
      white-space: nowrap;
      //m端
      @media only screen and (max-width: 766.99px) {
        font-size: 14px;
        padding-bottom: 5px;
      }
    }
    .linkdes {
      color: #949494;
      font-size: 15px;
      padding: 10px 0;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      line-height: 25px;
      -webkit-transition: all .5s;
      transition: all .5s;
      //m端
      @media only screen and (max-width: 766.99px) {
        font-size: 12px;
        padding: 2px 0;
      }
    }
  }
}
</style>