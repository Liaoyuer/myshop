import Vue from 'vue'
import Vuex from 'vuex'

import mutations from "./mutations"
import * as actions from "./actions"
import * as getters from "./getters"
import state from "./state"
import utils from '../utils/index.js';

Vue.use(Vuex)

const myPlugin = store => {
  // 当 store 初始化后调用
  const userInfo = uni.getStorageSync('member')
  
  if(userInfo){
	  store.commit('SETUSERINFO',JSON.parse(userInfo))
  }
  
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
  })
  
}

const store = new Vuex.Store({
	mutations,
	actions,
	getters,
	state,
	plugins:[myPlugin]
})

export default store