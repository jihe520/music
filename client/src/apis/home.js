import httpInstance from "@/utils/http"

// 获取轮播图
export function getBanners() {
  return httpInstance({
    url: '/banner',
    method: 'get'
  })
}

// 获取推荐歌单
export function getSongLists(limit = 10) {
  return httpInstance({
    url: '/songList',
    method: 'get',
    params: { limit }
  })
}

// 获取热门歌手
export function getSingers(limit = 10) {
  return httpInstance({
    url: '/singer',
    method: 'get',
    params: { limit }
  })
} 