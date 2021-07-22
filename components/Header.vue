<template>
  <div id="head">
    <div id="head_cont">
      <el-row class="head_cont fbc">
        <!-- <el-col :span="8">
          <div class="grid-content bg-purple">
            <div class="head_img">
              <img src="../assets/head/logo.png" alt />
            </div>
          </div>
        </el-col> -->
        <el-col  class="head_nav">
          <div class="grid-content bg-purple">
            <div class="hidden-xs-only fc">
              <p class="head_name">LOGI</p>
              <ul class=" fc ml-20">
                <li v-for="item in routerList" :key="item.id">
                  <a class="active-a" v-if="item.children" href="javascript:void(0);">
                    <span>{{item.name}}</span><i class="iconfont icon-xiala"></i>
                    <ul class="active-hover-a">
                      <li v-for="it in item.children" :key="it.id">
                        <router-link :to="it.path" ><span>{{it.name}}</span></router-link>
                      </li>
                    </ul>
                  </a>
                  <router-link v-else :to="item.path" ><span>{{item.name}}</span></router-link>

                </li>
              </ul>
           
            </div>
            <el-dropdown trigger="click" class="hidden-sm-and-up">
              <span class="el-dropdown-link">
                {{routername}}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="item in routerList" :key="item.id" :command="item.id">
                  <router-link :to="item.path">{{item.name}}</router-link>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-col>
        <el-col class="head_search fec">
          <div>A</div>
          <div>B</div>
          <div>C</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      routerList: [
        { name: "首页", id: 1, path: "/" },
        // { name: "学无止境", id: 2, path: "/style" },
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
        { name: "留言", id: 8, path: "/message" },
        { name: "更多", id: 9, path: "#",
          children:[
            { name: "关于我", id: 10, path: "/aboutMe"},
            { name: "项目分享", id: 11, path: "/project",},
            { name: "学习资源", id: 12, path: "/navigation",},
          ]
        }
      ],
    };
  },
  methods: {},
  computed: {
    routername() {
      let arr = this.routerList.filter(v => v.path == this.$route.path);
      if (arr.length === 0) return "首页";
      return arr[0].name;
    }
  },
};
</script>

<style lang='less' scoped>
#head {
  z-index: 999;
  font-size: 16px;
  position: fixed;
  top: 0;
  width: 100%;
  // overflow: hidden;
  background-color: rgba(255,255,255,0.7);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(10px);
  #head_cont {
    max-width: 1200px;
    min-width: 320px;
    margin: 0 auto;
    height: 80px;
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
    max-width: 600px;
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
          font-size: 16.8px;
          color: #555;
          display: inline-block;
          padding: 0 7px;
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
          &:hover .active-hover-a{
            display: block;
          } 
        }
        .active-hover-a{
          display: none;
          position: absolute;
          transition: all .2s;
          top: 70px;
          left: 0;
          background-color: #fff;
          box-shadow: 0 5px 10px #ccc;
          z-index: 9999;
          width: 180px;
          padding: 10px 0;
          border-radius: 5px;
          li{
            height: 38px;
            line-height: 38px;
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
.el-dropdown {
  width: 100%;
  height: 40px;
  padding-top: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.el-dropdown-link {
  padding-right: 20px;
  font-size: 16px;
  // cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
a {
  color: #555;
  display: inline-block;
  padding: 0 5px;
  width: 100%;
  height: 100%;
}
.router-link-exact-active,
.router-link-active{
  color: #000!important;
}
</style>