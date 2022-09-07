import axios from '@/utils/request'
export const getRecommendAPI = (username, password) => {
  return axios({
    url: '/user/login',
    method: 'POST',
    data: { username, password }
  })
}
