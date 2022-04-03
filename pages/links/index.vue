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
      <div class="note warning no-icon" style="">亲友 —— 洛范九畴初</div>
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
      <div class="note warning no-icon" style="">常客 —— 临池鸟迹舒</div>
      <el-row class="linkeBox" :gutter="10">
        <el-col :xs="24" :sm="12" :md="8"  v-for="item in regularsList" :key="item._id">
          <div class="link-item" :class="{'link-item-hover':item.url !=='#'}" >
            <a :href="item.url==='#'?'javascript:void(0);':item.url" :title="item.title" :target="item.url==='#'?'_self':'_blank'" data-pjax-state="external">
              <img :src="item.avatar"><span class="sitename">{{item.title}}</span>
              <p class="linkdes">{{item.desc}}</p>
            </a>
          </div>
        </el-col>
      </el-row>
    </div>
    <!-- 失联 -->
    <div class="lose" v-if="loseList.length>0">
      <div class="note warning no-icon" style="">失联 —— 挥手长相谢</div>
      <el-row class="linkeBox" :gutter="10">
        <el-col :xs="24" :sm="12" :md="8"  v-for="item in loseList" :key="item._id">
          <div class="link-item" :class="{'link-item-hover':item.url !=='#'}" >
              <a>
                <p class="lose-img"></p>
                <span class="sitename">{{item.title}}</span>
                <p class="linkdes">{{item.desc}}</p>
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
    <div class="note defalut no-icon" style="">本站信息<br/>
      站点名称：小何_前端个人博客<br/>
      描述：保持热爱 奔赴山海<br/>
      链接：http://www.heblogs.cn<br/>
      头像：http://cdn.heblogs.cn/avatar.jpg
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