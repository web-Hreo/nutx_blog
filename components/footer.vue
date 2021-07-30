<template>
  <div id="footer">
    <p>
      Copyright © 2021
      <a href="javascript:;" title="小何_前端个人博客">小何_前端个人博客</a>
      <a href="/sitemap.xml" target="_blank">sitemap</a>
    </p>
    <p>
      <img src="https://cdn.jsdelivr.net/gh/web-Hreo/nutx_blog/assets/beian.png" alt="小何_前端个人博客_备案图片">
      <a target="_blank" href="https://beian.miit.gov.cn/" title="小何_前端个人博客" rel="nofollow">赣ICP备2021006777号-1</a>
    </p>
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