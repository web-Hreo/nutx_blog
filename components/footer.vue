<template>
  <div id="footer">
    <p>
      Copyright © 2021
      <a href="javascript:;" title="花未央个人博客">何华_前端个人博客</a>
      All rights reserved
    </p>
    <p>
      <img src="https://www.yxiaowei.com/Public/static/images/beian.png" />
      <a target="_blank" href="#" title="花未央个人博客" rel="nofollow">赣公网安备 00000000000000号</a>
    </p>
    <p>本站总访问量为 7483 次 访客数为 3325 人</p>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  }
};
</script>

<style lang='less' scoped>
#footer {
  font-size: 12px;

  width: 100%;
  background: transparent;
  color: #a5a4a4;
  text-align: center;
  padding: 20px 0;
  a {
    color: #a5a4a4;
    font-size: 12px;
  }
  img {
    display: inline-block;
    vertical-align: sub;
    margin-left: 10px;
  }
}
</style>