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
  <div id='links'>
    <!-- 亲友 -->
    <div class="relatives" v-if="relativesList.length>0">
      <div class="note warning no-icon" style="">亲友 —— 没有不劳而获的工作，更没有坐享其成的收获</div>
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
      <div class="note warning no-icon" style="">常客 —— 没有不劳而获的工作，更没有坐享其成的收获</div>
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
      <div class="note warning no-icon" style="">失联 —— 黎耀辉 好久不见</div>
      <el-row class="linkeBox" :gutter="10">
        <el-col :xs="24" :sm="12" :md="8"  v-for="item in relativesList" :key="item._id">
          <div class="link-item" :class="{'link-item-hover':item.url !=='#'}" >
            <a :href="item.url==='#'?'javascript:void(0);':item.url" :title="item.title" :target="item.url==='#'?'_self':'_blank'" data-pjax-state="external">
              <img :src="item.avatar"><span class="sitename">{{item.title}}</span>
              <p class="linkdes">{{item.title}}</p>
            </a>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="note defalut no-icon" style="">
      只接受博客 / 资源网类的网站进行友链互换
      持续未更新/链接无法访问/违规 自动取消友链<br/>
      请在下方评论区提供贵站友链信息：<br/>
      站点名称、一句话描述、链接、头像
    </div>
    <div class="note defalut no-icon" style="">
      本站信息<br/>
     站点名称：小何_前端个人博客<br/>
      描述：保持热爱 奔赴山海<br/>
      链接：http://www.heblogs.cn<br/>
      头像：https://cdn.jsdelivr.net/gh/web-Hreo/nutx_blog/static/avatar.jpg
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
    console.log(data);
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
      linkList:[
        { id:1,name:'reuixiy',title:'我的博客审美来源，哲学/简约美/细节美',imgSrc:'https://site-1258928558.cos.ap-guangzhou.myqcloud.com/javadoop.png',href:'https://io-oi.me/' },
        { id:2,name:'reuixiy',title:'我的博客审美来源，哲学/简约美/细节美',imgSrc:'https://site-1258928558.cos.ap-guangzhou.myqcloud.com/javadoop.png',href:'https://io-oi.me/' },
        { id:3,name:'reuixiy',title:'我的博客审美来源，哲学/简约美/细节美',imgSrc:'https://site-1258928558.cos.ap-guangzhou.myqcloud.com/javadoop.png',href:'https://io-oi.me/' },
        { id:4,name:'reuixiy',title:'我的博客审美来源，哲学/简约美/细节美',imgSrc:'https://site-1258928558.cos.ap-guangzhou.myqcloud.com/javadoop.png',href:'https://io-oi.me/' },
        { id:5,name:'reuixiy',title:'我的博客审美来源，哲学/简约美/细节美',imgSrc:'https://site-1258928558.cos.ap-guangzhou.myqcloud.com/javadoop.png',href:'https://io-oi.me/' },
        { id:6,name:'reuixiy',title:'我的博客审美来源，哲学/简约美/细节美',imgSrc:'https://site-1258928558.cos.ap-guangzhou.myqcloud.com/javadoop.png',href:'https://io-oi.me/' },
        { id:7,name:'reuixiy',title:'我的博客审美来源，哲学/简约美/细节美',imgSrc:'https://site-1258928558.cos.ap-guangzhou.myqcloud.com/javadoop.png',href:'https://io-oi.me/' },
        { id:8,name:'reuixiy',title:'我的博客审美来源，哲学/简约美/细节美',imgSrc:'https://site-1258928558.cos.ap-guangzhou.myqcloud.com/javadoop.png',href:'https://io-oi.me/' },
      ]
    }
  },

 async  mounted () {
   console.log(this.relativesList);
   console.log(this.regularsList);
   console.log(this.loseList);
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
}

</style>