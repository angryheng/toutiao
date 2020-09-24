import { toString } from './tools'

export const getItem = (_key) => {
  const data = window.localStorage.getItem(_key)
  try {
    return JSON.parse(data)
  } catch (e) {
    return data
  } finally {}
}
export const setItem = (_key, _val) => {
  window.localStorage.setItem(_key, toString(_val))
}
export const removeItem = (_key) => {
  window.localStorage.removeItem(_key)
}
