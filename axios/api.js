import request from './request'

const baseUrl = ''
// const baseUrl = '/api/course'

export function getJson(params) {
  return request({
    url: `/json`,
    method: 'get',
    params,
  })
}
export function setPerson(params) {
  return request({
    url: `/user/addPerson`,
    method: 'post',
    data:params,
  })
}
export function getPerson(params) {
  return request({
    url: `/user/getPerson`,
    method: 'get',
    params,
  })
}
export function update(params) {
  return request({
    url: `/user/update`,
    method: 'post',
    data:params,
  })
}
export function deletePer(params) {
  return request({
    url: `/user/deletePer`,
    method: 'delete',
    data:params,
  })
}
// export function apiAddress(params) {
//   console.log(1);
//   return request({
//     url: `/json`,
//     method: 'get',
//     params,
//   })
// }

// import {
//   get,
//   post
// } from './request';

// /*@地址查询*/
// export const apiAddress = () => get('https://api.it120.cc/common/ip')

// /*
//  *@天气查询
//  *@params	{String}	city [可通过 城市中英文名称、ID和IP地址进行，例如city=北京，city=beijing，city=CN101010100，city= 60.194.130.1]
//  */
// export const weather = (city) => get('/jdapi/he/freeweather?city=' + city + '&appkey=09b204bf1bf14028b01dfb2ffb9d45eb')