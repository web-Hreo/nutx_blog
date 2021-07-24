/**
 * 封装Axios
 * 处理请求、响应错误信息
 */
import axios from 'axios' // 引用axios
// import { message } from '~/api/message'

// create an axios instance
const service = axios.create({
  // baseURL: 'http://120.26.59.199:3000', // 正式环境
  baseURL: 'http://localhost:3000', // 正式环境
  timeout: 1800000, // request timeout
})
// 对响应码做出处理 可自行补充
const err = (error) => {
  if (error.response) {
    // const data = error.response.data
    // const userInfo = Vue.ls.get(USER_INFO)
    switch (error.response.status) {
      case 404:
        // message(data.msg, 'error')
        break
      default:
        // message(data.msg, 'error')
        break
    }
  }
  return Promise.reject(error)
}

// request interceptor  请求拦截器
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// response interceptor 响应拦截器
service.interceptors.response.use((response) => {
  const res = response.data // res is my own data
  if (res.success === false) {
    // message(res.message, 'error')
  }
  return res
}, err)

export default service // 导出封装后的axios
