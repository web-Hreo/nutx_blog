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
//获取天气 http://www.tianqiapi.com/user/index
export function getWeather(params) {
  return request({
    url: `https://www.tianqiapi.com/free/day?appid=58211714&appsecret=m6u0Ufq5`,
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