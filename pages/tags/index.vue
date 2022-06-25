<!--
  @name: 'tags',
  @describe: 归档-文章标签
  @author: HeHua,
  @createDate: 2021年07月22日 00:48:18,
  @changeDate: ,
-->
<template>
  <div id='tags'>
    <p class="note warning no-icon" style="margin-left:15px">文章标签数量：{{length.tags_length}}</p>
    <ul class="fc mt-20">
      <li v-for="item in tagList" :key="item.id" :style="randomRgb()">
        <router-link :to="`tags/${item.name}?pageNo=1`">🔖 {{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getTags } from '~/api/tags'
import { getLength } from '~/api/public'
export default {
  name: 'tags',

  components: {},
  async asyncData() {
    const {data} = await getTags()
    const length = (await getLength()).data
    return{tagList:data,length}
  },

  data () {
    return {
      tagList: [],//tag列表
      length:{}//length列表
    }
  },
  async created(){
    // const {data} = await getTags()
    // console.log('data',data);
    // this.tagList =data
  },
  mounted () {},

  destroyed () {},

  methods: {
      //该方法返回一个不规则背景色
    randomRgb(item) {
      let R = Math.floor(Math.random() * 200);
      let G = Math.floor(Math.random() * 200);
      let B = Math.floor(Math.random() * 200);
      return { background: "rgb(" + R + "," + G + "," + B + ")" };
    }
  },
    
  head(){
    return{
      title:'Hhua_前端个人博客_文章标签',
    }
  }
}

</script>
<style lang='less' scoped>
  #tags{
    background-color: #fff;
    border-radius: 10px;
    width: 100%;
    margin-top: 15px;
    box-sizing: border-box;
    padding: 15px;
  }
  ul{
    flex-wrap: wrap;
  }
  li{
    // font-family: "Linux Biolinum", "Noto Serif SC", Helvetica, Arial, Menlo, Monaco, monospace, sans-serif;
    font-size: 16px;
    color: #fff;
    border-radius: 6px;
    padding: 0 10px;
    height: 40px;
    line-height: 40px;
    display: inline-block;
    margin: 0 15px 15px;
    @media only screen and (max-width: 766.99px) {//m端
      font-size: 13px;
      padding: 5px 9px;
    }
    a{
      display: block;
      width: 100%;
      height: 100%;
      color: #fff;
    }
  }
  .note{
    width: calc(100% - 15px);
  }
</style>