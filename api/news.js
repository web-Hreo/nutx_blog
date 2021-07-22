import request from './request'

const baseUrl = '/tags'
// const baseUrl = '/api/course'

export function getArticle(params) {
  return request({
    url: `${baseUrl}`,
    method: 'get',
    params,
  })
}

export function getArticleDetails(id) {
  return request({
    url: `${baseUrl}/${id}`,
    method: 'get',
  })
}
