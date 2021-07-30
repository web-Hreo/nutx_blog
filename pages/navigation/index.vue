<!--
  @name: 'navigation',
  @describe:学习资源分享
  @author: HeHua,
  @createDate: 2021年07月22日 00:56:09,
  @changeDate: ,
-->
<template>
  <div id='navigation' class="def-card">
    <div class="navigation-item" v-for="item in menuList" :key="item._id">
      <p class="note warning no-icon" style="">{{item.name}}</p>
      <el-row class="linkeBox" :gutter="10">
        <el-col :xs="24" :sm="12" :md="12"  v-for="it in item.children" :key="it._id">
          <div class="link-item" :class="{'link-item-hover':it.url !=='#'}" >
            <a :href="it.url==='#'?'javascript:void(0);':it.url" :title="it.title" :target="it.url==='#'?'_self':'_blank'" data-pjax-state="external">
              <img :src="it.imgSrc"><span class="sitename">{{it.title}}</span>
              <p class="linkdes">{{it.desc}}</p>
            </a>
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
import {getNavigation} from '~/api/public'
import MyMenu from '@/components/Menu.vue'
export default {
  async asyncData() {
    const {data} = await getNavigation()
    return{ menuList:data }

  },

  components: { MyMenu },

  data () {
    return {
      menuActive:'2',
      menuList:[
        { index:'1',name:'JS框架', },
        { index:'2',name:'UI框架', },
        { index:'3',name:'JS框架', },
        { index:'4',name:'源代码管理', },
        { index:'5',name:'教程及文档', },
        { index:'6',name:'平面设计', },
        { index:'7',name:'图标', },
        { index:'8',name:'灵感', },
        { index:'9',name:'设计欣赏', },
        { index:'10',name:'综合素材', },
        { index:'11',name:'字体', },
      ],
    }
  },
  methods: {
    select(item){
      this.menuActive = item.index
    }
  },
    
  head(){
    return{
      title:'Hhua_前端个人博客_学习资源',
    }
  }
}

</script>
<style lang='less' scoped>
.linkeBox{
  margin: 0;
  list-style: none;
  padding: 0;
  width: 100%;
  display: inline-block;
  .link-item{
    // width: 42%;
    // float: left;
    border: 1px solid #ececec;
    padding: 10px 30px;
    margin: 4px 0;
    position: relative;
    overflow: hidden;
    -webkit-transition: all .6s;
    transition: all .6s;
    border-radius: 10px;
    background-color: #fff;
    a{
      color: var(--base-color);
      text-decoration: none;
      transition: .3s;
      background-color: transparent;
      -webkit-text-decoration-skip: objects;
      color: #42b983;
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
    }
    .sitename{
      font-size: 18px;
      color: orange;
      padding-bottom: 10px;
      display: block;
      -webkit-transition: all .3s;
      transition: all .3s;
      overflow: hidden;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
      white-space: nowrap;
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
    }
    
  }
  // .link-item-hover{
  //   &:hover{
  //     box-shadow:0 0 7px 5px #d1d1d1;
  //   }
  // }
}
 
</style>