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
//获取文章归档列表
export function getArchives(params) {
  return request({
    url: `article/archives`,
    method: 'get',
    params,
  })
}
//获取友链列表
export function getLinks(params) {
  return request({
    url: `links/all`,
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