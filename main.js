import Vue from 'vue'
import App from './App'

import { myRequest } from 'utils/api.js'

import utils from './utils'
import config from './config'
import ajax from './ajax'
import store from "./store"

import globalMixin from "./mixin"
import * as filters from "./utils/filters.js"

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

Vue.prototype.$myRequest = myRequest
Vue.prototype.$config = config
Vue.prototype.$ajax = ajax
Vue.prototype.$utils = utils
Vue.prototype.$store = store

Vue.filter("formatDate",(date)=>{
	const nDate = new Date()
	const year = nDate.getFullYear()
	const month = (nDate.getMonth()+1).toString().padStart(2,0)
	const day = nDate.getDay().toString().padStart(2,0)
	// console.log(nDate)
	return year+"-"+month+"-"+day
})

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
