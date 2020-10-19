import store from "../store"
// 获取LocalStornage
const getLocalStornage = (name) => {
	try {
		const value = uni.getStorageSync(name);
		if (value) {
			return value
		}
	} catch (e) {
		//error
	}
}
//设置 LocalStornage
const setLocalStornage = (name, value) => {
	try {
		uni.setStorageSync(name, value);
	} catch (e) {
		//error
	}
}
//删除 LocalStornage
const removeLocalStornage = (name) => {
	try {
		uni.removeStorageSync(name)
	} catch (e) {
		//error
	}
}
// 清空本地缓存
const clearremovLocalStornage = () => {
	try {
		uni.clearStorage();
	} catch (e) {
		//error
	}
}
//清空本地缓存
const clearLocalStornage = () => {
	uni.clearLocalStornage();
}
// 验证手机号码
const RegExpPhone = (value) => {
	return /^1\d{10}$/.test(value)
}
// 验证码身份证号码
const RegExpIdCard = (value) => {
	return /^[1-9]\d{14}(\d{2}[0-9xX])?$/.test(value)
}
// 验证邮箱格式
const RegEmail = (value) => {
	return /^[-\w.]{0,64}@([a-zA-Z0-9]{1,63}\.)*[-a-zA-Z0-9]{1,63}$/.test(value)
}
export default{
	getLocalStornage,
	setLocalStornage,
	removeLocalStornage,
	clearLocalStornage,
	RegExpPhone,
	RegExpIdCard,
	RegEmail
}