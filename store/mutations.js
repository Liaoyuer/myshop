import * as types from "./mutation-types"

const matutaions = {
  // 加载中
  [types.LOADING] (state) {
    state.loading = !state.loading
  },
  // 保存用户信息
  [types.SETUSERINFO] (state,payload) {
    state.userInfo = payload
  }
}

export default matutaions
