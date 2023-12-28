import request from '@/utils/request'

export function getNewsList() {
  return request({
    url: '/system/notice/list',
    method: 'get'
  })
}
