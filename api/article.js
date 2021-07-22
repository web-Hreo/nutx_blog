import request from './request'

const baseUrl = 'article'

//查询所有文章 title tag pageNo
export function getArticle(params) {
  return request({
    url: `${baseUrl}/all`,
    method: 'get',
    params,
  })
}
//根据文章id获取文章详情id
export function getArticleDetail(params) {
  return request({
    url: `${baseUrl}/byId`,
    method: 'get',
    params,
  })
}
