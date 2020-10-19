import utils from "@/utils"
export default {
	data() {
		return {
		}
	},
	created() {
		
	},
	methods: {
		// 跳转路由
		navigateTo(url) {
			uni.navigateTo({
				url
			});
		},
		reLaunch(url) {
			uni.reLaunch({
				url
			});
		},
		switchTab(url) {
			uni.switchTab({
				url
			});
		},
		goBack() {
			uni.navigateBack()
		},
		// 验证是否登录
		isLogin() {
			const token = utils.getLocalStornage("token")
			if (token) {
				return true
			}
			return false
		},
		// 设置页面标题
		setNavigationBarTitle(title) {
			uni.setNavigationBarTitle({
				title
			});
		},
		showErrorTip(msg) {
			uni.showToast({
				title: msg || '操作失败,请重试',
				icon: 'none'
			});
		},
		showTip(msg) {
			setTimeout(() => {
				uni.showToast({
					title: msg,
					icon: 'none'
				});
			}, 420)
		},
		showSuccessTip(msg) {
			setTimeout(() => {
				uni.showToast({
					title: msg,
					icon: 'success'
				});
			}, 420)
		}
	}
}
