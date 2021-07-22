export default ({ app }) => {
  // 用于判断当前页面是否从新闻动态（公示公告）详情页回归
  app.router.beforeEach((to, from, next) => {
    const boolean =
      (to.name === 'dynamic' && from.name === 'dynamic-detail') ||
      (to.name === 'notice' && from.name === 'notice-detail')
    if (boolean) {
      localStorage.setItem('isDetailFrom', true)
    }
    next()
  })
}
