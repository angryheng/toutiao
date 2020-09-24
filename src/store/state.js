import { getItem } from 'utils/localStorage'
import { USER_TOKEN } from './type'
const state = {
  token: getItem(USER_TOKEN)
}

export default state
