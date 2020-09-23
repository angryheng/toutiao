import axios from 'axios'

const request = config => {
  const instanceAxios = axios.create({
    baseURL: '',
    timeout: 5000
  })
  instanceAxios.interceptors.use.request(
    _conf => _conf,
    _err => _err
  )
  instanceAxios.interceptors.use.response(
    _ret => _ret,
    _err => _err
  )
  return instanceAxios(config)
}

export default request
