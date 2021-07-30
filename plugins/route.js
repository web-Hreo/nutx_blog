export default ({ app }) => {
  // 用于判断当前页面是否从新闻动态（公示公告）详情页回归
  app.router.beforeEach((to, from, next) => {
  //  document.body.scrollTop = 0
  //  document.documentElement.scrollTop = 0
    next()
  })
}
