<!--
  @name: 'tags',
  @describe: 归档-文章标签
  @author: HeHua,
  @createDate: 2021年07月22日 00:48:18,
  @changeDate: ,
-->
<template>
  <div id='tags'>
    <p class="note warning no-icon" style="margin-left:15px">文章标签数量：80</p>
    <ul class="fc mt-20">
      <li v-for="item in tagList" :key="item.id" :style="randomRgb()">🔖 {{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import { getTags } from '~/api/tags'
export default {
  name: 'tags',

  components: {},
  async asyncData() {
    const {data} = await getTags()
    console.log('data',data);
    // this.tagList =data
    return{tagList:data}
  },

  data () {
    return {
      tagList: [
        // { id: 1, name: "HTML(5)", path: "#" },
        // { id: 2, name: "CSS(3)", path: "#" },
        // { id: 3, name: "JavaScript", path: "#" },
        // { id: 4, name: "ES6", path: "#" },
        // { id: 5, name: "jQuery", path: "#" },
        // { id: 6, name: "UI框架", path: "#" },
        // { id: 7, name: "VUE", path: "#" },
        // { id: 8, name: "React", path: "#" },
        // { id: 9, name: "Angular", path: "#" },
        // { id: 10, name: "Node", path: "#" },
        // { id: 11, name: "MongoDB", path: "#" },
        // { id: 12, name: "Webpack", path: "#" },
        // { id: 13, name: "git", path: "#" },
        // { id: 13, name: "数据结构", path: "#" },
      ],
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
    font-family: "Linux Biolinum", "Noto Serif SC", Helvetica, Arial, Menlo, Monaco, monospace, sans-serif;
    font-size: 16px;
    color: #fff;
    border-radius: 6px;
    padding: 10px;
    display: inline-block;
    margin: 0 15px 15px;
  }
  .note{
    width: calc(100% - 15px);
  }
</style>