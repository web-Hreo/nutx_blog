<template>
  <div class="error">
    <div class="errir-img">
      <img src="~/assets/image/error/error.png" alt="" />
    </div>
    <h2 v-if="error.statusCode == 404">该页面不存在</h2>
    <h2 v-else>请求发生错误 请返回刷新重试</h2>
    <!-- <ul>
      <li><nuxt-link to="/">HOME</nuxt-link></li>
    </ul> -->
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
<style lang="less">
@media screen and (min-width: 768px) {
  .error {
    padding-top: 90px;
    width: 100%;
    text-align: center;
  }
  .errir-img {
    margin: auto;
    width: 600px;
    height: 585px;
    transition: all 0.5s ease-out;
    img {
      width: 100%;
      height: 100%;
    }
  }
  h2 {
    color: #cccccc;
    font-size: 20px;
  }
}
@media screen and (max-width: 767.9px) {
  .error {
    padding-top: 3.2rem;
    width: 100%;
    margin-bottom: 1.333333rem;
    text-align: center;
  }
  .errir-img {
    margin: auto;
    width: 8rem;
    transition: all 0.5s ease-out;
    img {
      width: 100%;
      height: 100%;
    }
  }
  h2 {
    color: #cccccc;
    font-size: 0.373333rem;
  }
}
</style>
