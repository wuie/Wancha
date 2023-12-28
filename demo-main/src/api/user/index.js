import request from '@/utils/request'

export function loginFn(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}
export function getUserInfo(params){
  return request({
    url:'/user',
    method:'get',
    params
  })
}
export function editPassWordinfo(data){
  return request({
    url:'/user/restPwd',
    method:'put',
    data
  })
}
