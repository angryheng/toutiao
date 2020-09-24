import { setItem } from 'utils/localStorage'
import { USER_TOKEN } from './type'
const mutations = {
  setToken(state, payload) {
    state.token = payload
    // 持久化数据
    setItem(USER_TOKEN, state.token)
  }
}

export default mutations
