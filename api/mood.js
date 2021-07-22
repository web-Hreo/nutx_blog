import request from './request'

const baseUrl = 'mood'

//查询所有文章 title tag pageNo
export function getMood(params) {
  return request({
    url: `${baseUrl}/all`,
    method: 'get',
    params,
  })
}
