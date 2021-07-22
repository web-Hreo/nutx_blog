export default ({ store, route, redirect }) => {
  // console.log(route)
  route.matched.forEach((item, index) => {
    item.meta.title = route.meta[index].title || ''
  })
}
