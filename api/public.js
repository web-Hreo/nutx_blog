import request from './request'
const appKey ='09b204bf1bf14028b01dfb2ffb9d45eb'

//查询文章 标签 日志长度
export function getLength(params) {
  return request({
    url: `public/length`,
    method: 'get',
    params,
  })
}
//查询所有日志
export function getMood(params) {
  return request({
    url: `article/all`,
    method: 'get',
    params,
  })
}
//查询个人信息
export function getUserDesc(params) {
  return request({
    url: `user/desc`,
    method: 'get',
    params,
  })
}
//查询所有项目
export function getProjectList(params) {
  return request({
    url: `project/all`,
    method: 'get',
    params,
  })
}
// 获取所有资源
export function getNavigation(params) {
  return request({
    url: `navigation/getNavigation`,
    method: 'get',
    params,
  })
}
/**
 * @desc 获取当前用户ip及地址  
 * @param {*} params 
 * @returns 
 */
export function getApiAddress(params) {
  return request({
    url: `https://api.it120.cc/common/ip`,
    method: 'get',
    params,
  })
}
//获取天气 和风天气 https://dev.qweather.com/
export function getWeather(params) {
  return request({
    url: `https://devapi.qweather.com/v7/weather/now?location=101010100&key=8ac42cf130174c918871b2d9cd6bbed7`,
    method: 'get',
    params,
  })
}
/**
 * @desc 获取当前用户ip及地址  
 * @param {*} params 
 * @returns 
 */
// 将地址逆转为经纬度坐标
// export function getWeather () {
//   return new Promise((resolve, reject) => {
//     window.getInfo = (res) => { resolve(res.result) }
//     const script = document.createElement('script')
//     script.src = `http://www.weather.com.cn/data/sk/101010100.html`
//     document.body.appendChild(script)
//     setTimeout(() => {
//       document.body.removeChild(script)
//     }, 1000)
//   })
// }
/**
 * @desc 获取当前用户ip及地址  
 * @param {*} params 
 * @returns 
 */
// 将地址逆转为经纬度坐标
export function getUserIp () {
  return new Promise((resolve, reject) => {
    window.getInfo = (res) => { resolve(res.result) }
    const script = document.createElement('script')
    script.src = `http://pv.sohu.com/cityjson?ie=utf-8?callback=getInfo`
    document.body.appendChild(script)
    setTimeout(() => {
      document.body.removeChild(script)
    }, 1000)
  })
}