import request from 'network/request'

export const login = (data) => {
  return request({ method: 'post', url: '/app/v1_0/authorizations', data })
}

export const sendCode = (mobile) => {
  return request({ method: 'get', url: `/app/v1_0/sms/codes/${mobile}` })
}
