<template>
  <div id="head">
    <div id="head_cont">
      <div class="head_cont fbc">
        <div  class="head_nav">
          <div class="grid-content bg-purple">
            <div class="hidden-xs-only fc">
              <!-- <p class="head_name">HHUA</p> -->
              <ul class=" fc">
                <li v-for="item in pc_routerList" :key="item.id">
                  <a class="active-a" v-if="item.children" href="javascript:void(0);" @click.stop="openChildren(item)">
                    <span>{{item.name}}</span><i class="iconfont icon-xiala"></i>
                    <ul class="active-hover-a" :class="{'active-hover-a-block':item.id===currentRouterIndex}">
                      <li v-for="it in item.children" :key="it.id">
                        <router-link :to="it.path" ><span>{{it.name}}</span></router-link>
                      </li>
                    </ul>
                  </a>
                  <router-link v-else :to="item.path" ><span>{{item.name}}</span></router-link>
                </li>
              </ul>
           
            </div>
          </div>
        </div>
        <div class="head_search fc">
          <!-- <div>A</div>
          <div>B</div>
          <div>C</div> -->
        </div>
      </div>
    </div>
    <div
      class="m_head_cont_btn fcc hidden-sm-and-up"
      :class="{'m_head_cont_btn_open':is_m_oepn}"
      @click="open_m_menu"
      >
      MENU
    </div>
    <div class="m_head_cont hidden-sm-and-up"  >
      <div class="m_head_modal_cont" :class="{'m_head_cont_modal_open':is_m_oepn}" @click="nuxtLink"></div>
      <div class="m_head_link_cont" :class="{'m_head_cont_link_open':is_m_oepn}">
        <img src="https://cdn.jsdelivr.net/gh/web-Hreo/nutx_blog/static/avatar.jpg" alt="">
        <ul>
          <li v-for="(item, index) in m_routerList" :key="index" @click="nuxtLink(item)">
            <nuxt-link :to="item.path">{{item.name}}</nuxt-link>
          </li>
          <li ></li>
        </ul>
      </div>

    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      pc_routerList: [
        { name: "首页", id: 1, path: "/" },
        { 
          name: "归档", id: 2, path: "#",isActive:true,
          children:[
            { name: "文章归档", id: 3, path: "/article"},
            { name: "文章标签", id: 4, path: "/tags",}
          ]
        },
        { name: "热榜", id: 5, path: "/hot" },
        { name: "日志", id: 6, path: "/mood" },
        { name: "友链", id: 7, path: "/links" },
        { name: "留言", id: 8, path: "/comment" },
        { name: "更多", id: 9, path: "#",
          children:[
            { name: "关于我", id: 10, path: "/aboutMe"},
            { name: "项目分享", id: 11, path: "/project",},
            { name: "学习资源", id: 12, path: "/navigation",},
          ]
        }
      ],
      m_routerList:[
        { name: "首页", id: 1, path: "/" ,routeName:'pageNo',isActive:false,},
        { name: "文章归档", id: 3, path: "/article",routeName:'article',isActive:false,},
        { name: "文章标签", id: 4, path: "/tags" ,routeName:  'tags',isActive:false,},
        { name: "热榜", id: 5, path: "/hot" ,routeName:'hot-pageNo',isActive:false,},
        { name: "日志", id: 6, path: "/mood" ,routeName:'mood',isActive:false,},
        { name: "友链", id: 7, path: "/links" ,routeName:'links',isActive:false,},
        { name: "留言", id: 8, path: "/comment" ,routeName:'message',isActive:false,},
        { name: "关于我", id: 10, path: "/aboutMe",routeName:'aboutMe',isActive:false,},
        { name: "项目分享", id: 11, path: "/project",routeName:'project',isActive:false,},
        { name: "学习资源", id: 12, path: "/navigation",routeName:'navigation',isActive:false,},
      ],
      currentRouterIndex:0,
      is_m_oepn:false
    };
  },
  created(){
  },
  mounted(){
    window.addEventListener("click", this.closeChildren);
  },
  beforeDestroy() {  // 实例销毁之前对点击事件进行解绑
    window.removeEventListener('click', this.closeChildren);
  },
  methods:{
    //关闭全局弹窗
    closeChildren(){
      this.currentRouterIndex = 0
    },
    //打开二级弹窗
    openChildren(item){
      this.currentRouterIndex = item.id === this.currentRouterIndex?0:item.id
    },
    //打开m端导航
    open_m_menu(){
      this.is_m_oepn = !this.is_m_oepn
      document.documentElement.style.overflow = this.is_m_oepn?'hidden':''
    },
    nuxtLink(){
      this.is_m_oepn = false
      document.documentElement.style.overflow = this.is_m_oepn?'hidden':''
    },

  }
};
</script>

<style lang='less' scoped>
#head {
  display: block;
  z-index: 999;
  font-size: 16px;
  position: fixed;
  top: 0;
  width: 100%;
  // overflow: hidden;
  background-color: rgba(255,255,255,0.7);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(10px);
  transition: all .3s ease;
    //ipad端
  @media only screen and (max-width: 1199.99px) {
    display: block;
    box-sizing: border-box;
    padding: 0 30px;
  }

  #head_cont {
    max-width: 1200px;
    min-width: 320px;
    margin: 0 auto;
    height: 80px;
    //m端
    @media only screen and (max-width: 766.99px) {
      display: none;
    }
  }
  .head_cont {
    height: 80px;
    display: flex;
    justify-content: space-between;
  }
  .head_img {
    height: 80px;
    display: flex;
    align-items: center;
    img {
      height: 60px;
    }
  }
  .head_nav {
    height: 80px;
    // max-width: 600px;
    .head_name{
      font-size: 20px;
      color: #000;
      font-weight: bold;
    }
    ul {
      // height: 80px;
      li {
        text-align: center;
        height: 80px;
        line-height: 80px;
        // border-bottom: 2px solid #fff;
        a {
          font-size: 17px;
          color: #000;
          display: inline-block;
          padding: 0 8px;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          // i{
          //   font-size: 14px;
          //   color: #000;
          // }
        }
        .active-a{
          position: relative;
        }

        .active-hover-a{
          display: none;
          position: absolute;
          transition: all .2s;
          top: 70px;
          left: 0;
          background-color: #fff;
          box-shadow: 0 1px 5px #ccc;
          z-index: 9999;
          width: 180px;
          padding: 10px 0;
          border-radius: 5px;
          li{
            height: 40px;
            line-height: 40px;
            a{
              width: 100%;
              height: 100%;
              box-sizing: border-box;
              padding: 0 15px;
              margin-top: 5px;
              &:hover{
                color: #16181b;
                text-decoration: none;
                background-color: #f8f9fa;
              }
              &:nth-child(1){
                margin-top: 0;
              }
            }
          }
        }
        .active-hover-a-block{
          display: block;
        }
      }
      .active {
        color: #000;
        // border-bottom: 2px solid #000;
      }
    }
  }
  .head_search{
    div{
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background-color: #f0f0f0;
      color: #333;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 5PX;
      transition: all .2s;
      &:hover{
        background-color: #000;
        color: #fff;
      }
    }
  }
}
// .nuxt-link-active{
//   color: yellowgreen!important;
// }
// .nuxt-link-exact-active{
//   color: yellowgreen!important;
// }

//m端
.m_head_cont_btn{
  position: fixed;
  top: 10px;
  left: 15px;
  width: 80px;
  height: 40px;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 0 1px 5px #ccc;
  color: #000;
  font-size: 15px;
  transition: all .4s ease;
  transform: translateX(0);
  z-index: 999;
}
.m_head_cont{

  .m_head_modal_cont{
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .3);
  }
  .m_head_link_cont{
    position: fixed;
    top: 0;
    left: 0;
    background-color: #FAFAFA;
    width: 280px;
    height: 100vh;
    transition: all .5s ease;
    transform: translateX(-280px);
    img{
      width: 110px;
      margin: 44px auto;
      height: 110px;
      border-radius: 50%;
    }
    a{
      font-size: 17px;
      color: rgba(0, 0, 0, .7);
      display: inline-block;
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
    }
  }

}
.m_head_cont_modal_open{
  display: block!important;
}
.m_head_cont_link_open{
  transform: translateX(0)!important;
}
.m_head_cont_btn_open{
  transform: translateX(210px);
  background-color: #000;
  color: #fff;
}
</style>