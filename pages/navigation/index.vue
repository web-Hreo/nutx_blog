<!--
  @name: 'navigation',
  @describe:学习资源分享
  @author: HeHua,
  @createDate: 2021年07月22日 00:56:09,
  @changeDate: ,
-->
<template>
  <div id='navigation'>
    <div class="navigation-box mt-15">
      <el-row >
        <!-- 左侧菜单 -->
        <el-col :span="6" class="navigation-menu hidden-sm-and-down">
          <MyMenu :menuList="contList" @sel="select"></MyMenu>
        </el-col>
        <!-- 右侧内容 -->
        <el-col :xs="24" :sm="24" :md="24" :lg="24" class="navigation-cont">
          <div v-for="(item) in contList" :key="item.index" class="navigation-item">
            <h3 :id="item.index">{{item.name}}</h3>
            <ul  class="fc" style="flex-wrap:wrap">
              <el-col :xs="24" :sm="12" :md="6" :lg="6" v-for="(it,index) in item.list" :key="index">
                <p>{{it.name}}</p>
                <p class="text-eli-2">{{it.desc}}</p>
              </el-col>
              <!-- <li v-for="(it,index) in item.list" :key="index">
                <p>{{it.name}}</p>
                <p class="text-eli-2">{{it.desc}}</p>
              </li> -->
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>

  
  </div>
</template>

<script>
import MyMenu from '@/components/Menu.vue'
import {contList} from './data'
export default {
  name: 'navigation',

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
      contList,
    }
  },
  created(){
    contList.forEach((i,v) => i.index=''+ ( v + 1 ) )
  },
  mounted () {},

  destroyed () {},

  methods: {
    select(item){
      this.menuActive = item.index
    }
  }
}

</script>
<style lang='less' scoped>
  #navigation{
    width: 100%;
    padding-bottom: 20px;
    .navigation-menu{
      background-color: #fff;
      margin-right: 10px;
      padding-top: 20px;
      .el-menu-vertical-demo{
        border-right: none;
      }
      /deep/.el-menu-vertical-demo{
        li{
          &:nth-last-child(1){
            padding-bottom: 200px;
          }
        }
      }
      /deep/.el-menu-item{
        padding: 0 20px;
        height: 40px;
        line-height: 40px;
      }
      /deep/.el-menu-item.is-active{
        background-color: #ECF5FF;
      }
    }

    .navigation-cont{
      background-color: #F7F7F7;
      // min-height: calc(100vh - 207px);
      box-sizing: border-box;
      overflow-x: hidden;
      overflow-y: auto;
      border-radius: 5px;
      // padding: 20px;
      .navigation-item{
        &:nth-child(1){
          h3{
            margin-top: 0;
          }
        }
      }
      h3{
        padding: 10px 30px 10px 15px;
        background-color: #409EFF;
        display: inline-block;
        color: #fff;
        margin-top: 20px;
        border-radius: 5px;
      }
      ul{
        .el-col{
          // width: 24%;
          // margin-right: 1%;
          background-color: #fff;
          box-sizing: border-box;
          padding: 15px 10px;
          margin-top: 10px;
          // cursor: pointer;
          p{
            transition: all .2s ease-in;
            &:nth-child(1){
              color: #409EFF;
              font-weight: bold;
              font-size: 16px;
            }
            &:nth-child(2){
              margin-top: 10px;
              font-size: 13px;
            }
          }
          &:hover{
            p{
              color: red;
            }
          }
        }
      }
    }
  }
 
</style>