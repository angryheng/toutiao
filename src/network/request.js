import axios from 'axios'

const request = config => {
  const instanceAxios = axios.create({ baseURL: 'http://ttapi.research.itcast.cn', timeout: 5000 })
  // instanceAxios.interceptors.request.use(_conf => _conf, _err => _err)
  // instanceAxios.interceptors.response.use(_ret => _ret, _err => _err)
  return instanceAxios(config)
}

export default request
