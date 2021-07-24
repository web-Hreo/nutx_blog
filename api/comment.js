import request from './request'

const baseUrl = 'comment'

export function getComment(params) {
  return request({
    url: `${baseUrl}/`,
    method: 'get',
    params,
  })
}

//增加留言
/**
 * @param {来源 应为 article/mood/comment} from 
 * @param {来源id 当from为article/mood时 需要该参数} fromId
 * @param {来源ip} fromIp
 * @param {留言者名字} leavingName
 * @param {留言者邮箱} leavingEmail
 * @param {留言者头像} leavingAvatar
 * @param {留言者输入内容} leavingCont
 * @param {留言者可访问网站} leavingUrl
 * 
 * @param {留言id 无需用户传 会自己生成} commentId
 * @param {父级留言id 默认为0 如果回复他人传他人id做为父id} parentId
 * @param {回复层级 默认0为留言 1为1级回复 2为2级回复} replyLevel
 * @param {他人名称 当replyLevel不为0时 回复他人必传} replyName
 */
export function addComment(params) {
  return request({
    url: `${baseUrl}/`,
    method: 'post',
    data:params,
  })
}
