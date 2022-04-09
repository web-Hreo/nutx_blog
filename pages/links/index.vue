<!--
  @name: 'links',
  @describe: 友链
  @author: HeHua,
  @createDate: 2021年07月22日 00:51:25,
  @changeDate: ,
-->
<!--
  @name: 'links',
  @describe: 关于-关于我
  @author: HeHua,
  @createDate: 2021年07月14日 22:54:00,
  @changeDate: ,
-->
<template>
  <div id='links' class="def-card">
    <!-- 亲友 -->
    <div class="relatives" v-if="relativesList.length>0">
      <div class="links-title" style="">
        <h2>🌱 龙王</h2>
        <p>优质博客 时间倒序</p>
      </div>
      <el-row class="linkeBox" :gutter="10">
        <el-col :xs="24" :sm="12" :md="8"  v-for="item in relativesList" :key="item._id">
          <div class="link-item" :class="{'link-item-hover':item.url !=='#'}" >
            <a :href="item.url==='#'?'javascript:void(0);':item.url" :title="item.title" :target="item.url==='#'?'_self':'_blank'" data-pjax-state="external">
              <img :src="item.avatar"><span class="sitename abc9">{{item.title}}</span>
              <p class="linkdes">{{item.title}}</p>
            </a>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 常客 -->
    <div class="regulars" v-if="regularsList.length>0">
      <div class="links-title" style="">
        <h2>🔥 炙焰</h2>
        <p>博客0+ 时间倒序</p>
        </div>
      <el-row class="linkeBox" :gutter="10">
        <el-col :xs="24" :sm="12" :md="8"  v-for="item in regularsList" :key="item._id">
          <div class="link-item" :class="{'link-item-hover':item.url !=='#'}" >
            <a class="fbc" :href="item.url==='#'?'javascript:void(0);':item.url" :title="item.title" :target="item.url==='#'?'_self':'_blank'">
              <img class="link-img" :src="item.avatar">
              <div class="link-info fc">
                <div>
                  <p class="link-title row_1">{{item.title}}</p>
                  <p class="link-desc row_2">{{item.desc}}</p>
                </div>
              </div>
            </a>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 失联 -->
    <div class="lose" v-if="loseList.length>0">
      <div class="links-title" style="">
        <h2>🛰️ 失联</h2>
        <p>近期无法访问 综合倒序</p>
      </div>
      <el-row class="linkeBox" :gutter="10">
        <el-col :xs="24" :sm="12" :md="8"  v-for="item in loseList" :key="item._id">
          <div class="link-item" :class="{'link-item-hover':item.url !=='#'}" >
              <a class="fbc">
                <p class="lose-img"></p>
                <div class="link-info fc">
                  <div>
                    <p class="link-title row_1">{{item.title}}</p>
                    <p class="link-desc row_2">{{item.desc}}</p>
                  </div>
                </div>
              </a>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- <div class="note defalut no-icon" style="">
      只接受博客 / 资源网类的网站进行友链互换
      持续未更新/链接无法访问/违规 自动取消友链<br/>
      友链展示需要 你的信息格式要包含 站点名称、描述、链接、头像
    </div> -->
    <div class="myInfo" style="">
      <p class="myInfo-title">本站信息</p>
      <p>站点名称：<span>小何_前端个人博客</span> </p>
      <p>描述：<span>保持热爱 奔赴山海</span></p>
      <p>链接：<span>http://www.heblogs.cn</span></p>
      <p>头像：<span>http://cdn.heblogs.cn/avatar.jpg</span></p>
    </div>
    <MyComment from="links"  />
    </div>
</template>

<script>
import MyComment from '~/components/myComment.vue'
import {getLinks} from '~/api/public'
export default {
  async asyncData(context){
    const {data} = await getLinks({pageNo:1,pageSize:100})
    data.data.reverse()
    const relativesList = []//亲友列表
    const regularsList = []//常客列表
    const loseList = []//亲友列表
    data.data.forEach(it =>{
      if(it.type==='亲友'){
        relativesList.push(it)
      }else if(it.type==='常客'){
        regularsList.push(it)
      }else{
        loseList.push(it)
      }
    })
    return { relativesList,regularsList,loseList }
  },

  components: { MyComment },

  data () {
    return {
      linkList:[]
    }
  },

 async  mounted () {
  },

  destroyed () {},

  methods: {
    
  },
    
  head(){
    return{
      title:'Hhua_前端个人博客_友链',
    }
  }
}

</script>
<style lang='less' scoped>
#links{
  border: 1px solid #e3e8f7;
}
.linkeBox{
  margin: 0;
  list-style: none;
  padding: 0;
  width: 100%;
  display: inline-block;
  
  .link-item{
    border: 1px solid #ececec;
    box-sizing: border-box;
    margin: 4px 0;
    position: relative;
    overflow: hidden;
    transition: all .6s;
    border-radius: 10px;
    background-color: #f7f9fe;
    transition: all .2s ease-in;
    cursor: pointer;
    padding: 0 15px;
    height: 95px;
    &:hover{
      background-color: #425aef;
      .link-info{
        color: #ffffff;
      }
      .link-img,.lose-img{
        width: 0;
        height: 0;
      }
    }
    .lose-img{
      width: 65px;
      height: 65px;
      border-radius: 50%;
      background-color: #ccc;
      margin: 15px;
      margin-left: 0;
      transition: all .3s ease-in-out;
      //m端
      @media only screen and (max-width: 766.99px) {
        width: 40px;
        height: 40px;
      }
    }
    .link-img{
      width: 65px;
      height: 65px;
      border-radius: 50%;
      margin: 15px;
      margin-left: 0;
      transition: all .3s ease-in-out;
    }
    .link-info{
      flex: 1;
      color: #363636;
      height: 95px;
      transition: all .3s ease-in-out;
      .link-title{
        font-size: 18px;
        font-weight: 600;
      }
      .link-desc{
        font-size: 15px;
        opacity: .7;
        padding-top: 5px;
        line-height: 20px;
      }
    }
  }
}
.links-title{
  h2{
    font-size: 24px;
    line-height: 48px;
    color: #000;
  }
  p{
    font-size: 14px;
    color: #4c4948;
    line-height: 24px;
  }
}
.myInfo{
  background-color:#f7f9fe;
  padding: 10px;
  border-radius: 10px;
  letter-spacing: 2px;
  .myInfo-title{
    color: #000;
    font-size: 20px;
    padding: 5px 0;
    font-weight: 600;
  }
  p{
    margin-bottom: 5px;
    span{
      display: inline-block;
      background-color: rgba(#425aef, .3);
      border-radius: 10px;
      padding: 2px 8px;
      color: #425aef;
    }
  }
}
</style>