<!--
  @name: 'article',
  @describe: 文章存档
  @author: HeHua,
  @createDate: 2021年07月22日 00:46:08,
  @changeDate: ,
-->
<template>
  <div id='article' class="pt-25">
    <div class="article-box ">
      <el-row >
        <div class="article-cont">
          <div class="article-list">
            <div v-for="(item,index) in articleList" :key="index" class="list-item">
              <h3>{{ item.date }}</h3>
              <div  v-for="(MIt,MIn) in item.list" :key="MIn">
                <h4>{{MIt.date}}</h4>
                <ul class="list-ul">
                  <li v-for="(DIt, DIn) in MIt.list" :key="DIn">
                    <p>
                      <span class="list-date">{{ DIt.date }}</span>
                      <a href="" class="list-name">{{ DIt.name }}</a>
                    </p>
                  </li>
                </ul> 
              </div>
            </div>
          </div>
        </div>
      </el-row>
    </div>

  
  </div>
</template>

<script>
export default {
  name: 'article',

  components: {},

  data () {
    return {
      menuActive:'2',
      labelList: [
        { id: 1, label: "HTML(5)", path: "#" },
        { id: 2, label: "CSS(3)", path: "#" },
        { id: 3, label: "JavaScript", path: "#" },
        { id: 4, label: "ES6", path: "#" },
        { id: 5, label: "jQuery", path: "#" },
        { id: 6, label: "UI框架", path: "#" },
        { id: 7, label: "VUE", path: "#" },
        { id: 8, label: "React", path: "#" },
        { id: 9, label: "Angular", path: "#" },
        { id: 10, label: "Node", path: "#" },
        { id: 11, label: "MongoDB", path: "#" },
        { id: 12, label: "Webpack", path: "#" },
        { id: 13, label: "git", path: "#" }
      ],
      articleList:[
        {
          date:'2021',
          list:[
            {
              date:'2021-12',
              list:[
                { id:1,name:'js一些操作运算符',num:100,date:'2020-08-07' },
                { id:2,name:'decodeURIComponent在解析浏览器参数中含有%时报错处理',num:100,date:'2020-08-07' },
              ]
            }
          ]
        },
        {
          date:'2021',
          list:[
            {
              date:'2021-12',
              list:[
                { id:1,name:'js一些操作运算符',num:100,date:'2020-08-07' },
                { id:2,name:'decodeURIComponent在解析浏览器参数中含有%时报错处理',num:100,date:'2020-08-07' },
              ]
            }
          ]
        },
        {
          date:'2021',
          list:[
            {
              date:'2021-12',
              list:[
                { id:1,name:'js一些操作运算符',num:100,date:'2020-08-07' },
                { id:2,name:'decodeURIComponent在解析浏览器参数中含有%时报错处理',num:100,date:'2020-08-07' },
                { id:2,name:'decodeURIComponent在解析浏览器参数中含有%时报错处理',num:100,date:'2020-08-07' },
                { id:2,name:'decodeURIComponent在解析浏览器参数中含有%时报错处理',num:100,date:'2020-08-07' },
                { id:2,name:'decodeURIComponent在解析浏览器参数中含有%时报错处理',num:100,date:'2020-08-07' },
                { id:2,name:'decodeURIComponent在解析浏览器参数中含有%时报错处理',num:100,date:'2020-08-07' },
                { id:2,name:'decodeURIComponent在解析浏览器参数中含有%时报错处理',num:100,date:'2020-08-07' },
                { id:2,name:'decodeURIComponent在解析浏览器参数中含有%时报错处理',num:100,date:'2020-08-07' },
                { id:2,name:'decodeURIComponent在解析浏览器参数中含有%时报错处理',num:100,date:'2020-08-07' },
              ]
            }
          ]
        },
   
      ]
    }
  },

  mounted () {},

  destroyed () {},

  methods: {
    select(index){
      console.log(index);
      this.menuActive = index
    }
  },
    
  head(){
    return{
      title:'Hhua_前端个人博客_文章归档',
    }
  }
}

</script>
<style lang='less' scoped>
  #article{
    width: 100%;
    padding-bottom: 20px;
    font-family: Product Sans !important;
    letter-spacing: 1px;
    .article-box{

    }
    .article-menu{
      background-color: #fff;
      margin-right: 10px;
      .el-menu-vertical-demo{
        border-right: none;
      }
    }
    .article-cont{
      width: 100%;
      box-sizing: border-box;
      // padding: 30px;
      // background-color: #fff;
      .el-tag{
        // cursor: pointer;
      }
      .label-list{
        flex-wrap: wrap;
      }
      .label-item{
        color: #000;
        box-sizing: border-box;
        width: 49%;
        padding: 10px 20px;
        margin-top: 20px;
        background-color: #f5f5f5;
        // cursor: pointer;
        border-radius: 5px;
        transition: all .2s ease-in;
        letter-spacing: 1px;
        &:hover{
          color: #409EFF;
          background-color: rgba(0, 0, 0, .1);
        }
        &:nth-child(1),
        &:nth-child(2){
          margin-top: 0;
        }
      }
    }
    .list-item{
      // padding: 30px 10px 40px;
      padding: 30px;
      border-left: none;
      box-shadow: none;
      margin-top: -10px;
      margin-bottom: 30px;
      background-color: #fff;
      border-radius: 10px;
      h3{
        padding: 10px 0;
        font-size: 30px;
        margin: 0;
        line-height: 1.5;
        font-family: Product Sans !important;
        font-weight: 600 !important;
        letter-spacing: .5px;
      }
      h4{
        font-size: 22px;
      }
    }
    .list-ul{
      // list-style-type: disc;
      li{
        padding: 5px 0;
        margin: 10px 0;
        .list-date{
          margin: 12px 0 10px;
          font-size: 15px;
          color: #615b5b;
          background: #f1f2f3;
          border-radius: 4px;
          font-size: 14px;
          padding: 3px 5px 3px 7px;
          background: #f1f2f3;
          border-radius: 4px;
          font-style: normal;
          margin-right: 10px;
              }
        .list-name{
          // color: #3d658d;
          text-decoration: none
        }
        .list-num{
          color: #a8ced8;
          margin-left: 30px;
        }
      }
    }

  }
</style>