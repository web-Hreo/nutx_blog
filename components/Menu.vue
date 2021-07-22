<!--
  @name: 'menu',
  @describe: 左侧菜单
  @author: HeHua,
  @createDate: 2021年07月12日 15:38:20,
  @changeDate: ,
-->
<template>
  <div id='my_menu'>
    <el-menu
      default-active="1"
      @select="select"
      class="el-menu-vertical-demo"
      >
      <el-menu-item v-for="(item, index) in menuList" :key="index" :index="item.index" >
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'menu',
  props:{
    menuList:{ type:Array },
  },
  components: {},

  data () {
    return {}
  },

  methods: {
    //点击事件反射
    select(index){
      this.menuList.forEach(it =>{
        if(it.index === index){
          this.$emit('sel',it)
        }
      })
    },
  }
}

</script>
<style lang='less' scoped>

</style>