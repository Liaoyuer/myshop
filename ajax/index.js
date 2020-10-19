import apis from "./apis.js"
import config from "@/config"
import utils from "@/utils"
import store from "@/store"

function ajax(method = "POST",path = "",params = "", data={}, showLoading = true, showToast = true) {
	if (showLoading) {
		uni.showLoading({
			title: "加载中...",
			mask: true
		})
	}
	let url = `${config.api}/${path}${params}`
	
	//自定义请求头信息
	let header = {
		"content-type": "application/x-www-form-urlencoded"
	}
	const token = utils.getLocalStornage("token")
	if (token) {
		header.Authorization = token
	}
	
	return new Promise ((resolve, reject) => {
		uni.request({
			url,
			method,
			data,
			header,
			success: (res) => {
				const statusCode = res.statusCode
				if (statusCode == 400 || statusCode == 402) {
					uni.removeStorageSync("token")
					uni.hideLoading()
					
					return
				}
				if (res.data.status == 200) {
					
				} else if (res.dats.status == 402) {
					uni.hideLoading()
				} else {
					
				}
			},
			fail: (err) => {
				uni.hideLoading()
				uni.showToast({
					title: "请求失败，请重试",
					icon: "none",
					position: "center"
				});
				reject(err)
			}
		});
	})
}
export default {
	// 获取验证码
	getCode() {
		return ajax("GET", apis.code, "", {}, false, false)
	}
}