import * as types from "./mutation-types"

// 加载
export const loading = function({
	commit
}) {
	commit(types.LOADING)
}

// 保存用户信息
export const setUserInfo = function({commit},payload) {
	commit(types.SETUSERINFO,payload)
}
