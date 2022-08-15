import request from '@/utils/request'

export function fetchList(params) {
  return request({
    url: '/vue-element-admin/article/list',
    method: 'get',
    params
  })
}

export function updateArticle(data) {
  return request({
    url: '/vue-element-admin/article/update',
    method: 'post',
    data
  })
}