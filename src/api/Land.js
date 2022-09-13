import axios from '@/utils/request'
export const getRecommendAPI = (username, password) => {
  return axios({
    url: '/user/login',
    method: 'POST',
    data: { username, password }
  })
}

/**
 * 轮播图
 * @returns Promise
 */
export const getSlideAPI = () => {
  return axios({
    url: '/home/swiper'
  })
}

/**
 * 租房小组数据
 * @returns Promise
 */
export const getRenHouseAPI = (id) => {
  return axios({
    url: '/home/groups',
    data: { area: id }
  })
}

/**
 * 热门城市
 * @returns Promise
 */
export const getHotCityAPI = (id) => {
  return axios({
    url: '/area/hot',
    params: { level: id }
  })
}

/**
 * 城市列表
 * @param {Object} id
 * @returns Promise
 */
export const getCityListAPI = (id) => {
  return axios({
    url: '/area/city',
    params: { level: id }
  })
}
