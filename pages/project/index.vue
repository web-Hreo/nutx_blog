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
            <p class="linkdes">{{item.title}}</p>
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
      projectList:[
        { id:1,name:'智工建-企业端',title:'智工建专业从事开发智慧工地云平台,采用物联网、人工智能',imgSrc:'https://company.libawall.com/2021_7_13_1812/assets/logo.4d25621e.svg',href:'https://company.libawall.com' },
        { id:2,name:'智工建-项目端',title:'智工建专业从事开发智慧工地云平台,采用物联网、人工智能',imgSrc:'https://company.libawall.com/2021_7_13_1812/assets/logo.4d25621e.svg',href:'https://project.libawall.com' },
        { id:3,name:'智工建工人端',title:'此端口为微信小程序 微信搜索打开',imgSrc:'https://company.libawall.com/2021_7_13_1812/assets/logo.4d25621e.svg',href:'#' },
        { id:4,name:'智工建-官网',title:'智工建专业从事开发智慧工地云平台,采用物联网、人工智能',imgSrc:'https://company.libawall.com/2021_7_13_1812/assets/logo.4d25621e.svg',href:'https://www.zjgong.com/' },
        { id:5,name:'景同舟-用户端',title:'此端口为微信H5 微信浏览器打开最优',imgSrc:'http://scenic.jtz.cn/logo.png',href:'https://i.jtz.cn' },
        { id:6,name:'景同舟-官网',title:'景同舟,整合国内众多优质大景区,推出景区大联盟年票产品,游客一票可无限次畅玩联盟景区',imgSrc:'http://testwww.jtz.cn/_nuxt/assets/image/layouts/logo.svg',href:'http://www.jtz.cn/' },
        { id:7,name:'篱笆墙人事管理平台',title:'为企业贯穿员工职业生涯的HRsaas服务共建信用体系',imgSrc:'https://hr.libawall.com/img/logo.7b68b222.svg',href:'https://hr.libawall.com' },
        { id:8,name:'篱笆墙-官网',title:'为企业贯穿员工职业生涯的HRsaas服务共建信用体系',imgSrc:'https://hr.libawall.com/img/logo.7b68b222.svg',href:'https://www.libawall.com/' },
        { id:9,name:'石猫-e网通-PC/H5',title:'为石材企业打造全面saas服务',imgSrc:'http://file.market.xiaomi.com/thumbnail/PNG/l114/AppStore/0d26064d83cd34bf80e779957469c9a0b99b0b5fb',href:'http://qy.stonetmall.com' },
        { id:10,name:'石猫-e网通-小程序',title:'公司小程序作为总控模板 无法搜索',imgSrc:'http://file.market.xiaomi.com/thumbnail/PNG/l114/AppStore/0d26064d83cd34bf80e779957469c9a0b99b0b5fb',href:'#' },
      ]
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
      border-top: 1px dashed #ddd;
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