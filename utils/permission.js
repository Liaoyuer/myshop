/**
 * 本模块封装了Android、iOS的应用权限判断、打开应用权限设置界面、以及位置系统服务是否开启
 */

var isIos
// #ifdef APP-PLUS
isIos = (plus.os.name == "iOS")
// #endif

// 判断推送权限是否开启
function judgeIosPermissionPush() {
	var result = {msg:'',state:false};
	var UIApplication = plus.ios.import("UIApplication");
	var app = UIApplication.sharedApplication();
	var enabledTypes = 0;
	if (app.currentUserNotificationSettings) {
		var settings = app.currentUserNotificationSettings();
		enabledTypes = settings.plusGetAttribute("types");
		if (enabledTypes == 0) {
			result.msg = '推送权限没有开启'
			result.state = false
		} else {
			result.state = true;
		}
		plus.ios.deleteObject(settings);
	} else {
		enabledTypes = app.enabledRemoteNotificationTypes();
		if (enabledTypes == 0) {
			result.msg = '推送权限没有开启!'
			result.state = false
		} else {
			result.state = true;
		}
	}
	plus.ios.deleteObject(app);
	plus.ios.deleteObject(UIApplication);
	return result;
}

// 判断定位权限是否开启
function judgeIosPermissionLocation() {
	var result = {msg:'',state:false};
	var cllocationManger = plus.ios.import("CLLocationManager");
	var status = cllocationManger.authorizationStatus();
	if(status != 2){
		result.state = true
	}else{
		result.msg  = '没有开启定位权限'
		result.state = false
	}
	// 以下代码判断了手机设备的定位是否关闭，推荐另行使用方法 checkSystemEnableLocation
	/* var enable = cllocationManger.locationServicesEnabled();
	var status = cllocationManger.authorizationStatus();
	console.log("enable:" + enable);
	console.log("status:" + status);
	if (enable && status != 2) {
		result = true;
		console.log("手机定位服务已开启且已授予定位权限");
	} else {
		console.log("手机系统的定位没有打开或未给予定位权限");
	} */
	plus.ios.deleteObject(cllocationManger);
	return result;
}

// 判断麦克风权限是否开启
function judgeIosPermissionRecord() {
	var result = {msg:'',state:false};
	var avaudiosession = plus.ios.import("AVAudioSession");
	var avaudio = avaudiosession.sharedInstance();
	var permissionStatus = avaudio.recordPermission();
	console.log("permissionStatus:" + permissionStatus);
	if (permissionStatus == 1684369017 || permissionStatus == 1970168948) {
		result.msg = "麦克风权限没有开启"
		result.state = false
	} else {
		result.state = true;
	}
	plus.ios.deleteObject(avaudiosession);
	return result;
}

// 判断相机权限是否开启
function judgeIosPermissionCamera() {
	var result = {msg:'',state:false};
	var AVCaptureDevice = plus.ios.import("AVCaptureDevice");
	var authStatus = AVCaptureDevice.authorizationStatusForMediaType('vide');
	console.log("authStatus:" + authStatus);
	if (authStatus == 3) {
		result.state = true;
	} else {
		result.msg = "相机权限没有开启"
		result.state = false
	}
	plus.ios.deleteObject(AVCaptureDevice);
	return result;
}

// 判断相册权限是否开启
function judgeIosPermissionPhotoLibrary() {
	var result = {msg:'',state:false};
	var PHPhotoLibrary = plus.ios.import("PHPhotoLibrary");
	var authStatus = PHPhotoLibrary.authorizationStatus();
	if (authStatus == 3) {
		result.state = true;
	} else {
		result.msg = "相册权限没有开启"
		result.state = false
	}
	plus.ios.deleteObject(PHPhotoLibrary);
	return result;
}

// 判断通讯录权限是否开启
function judgeIosPermissionContact() {
	var result = {msg:'',state:false};
	var CNContactStore = plus.ios.import("CNContactStore");
	var cnAuthStatus = CNContactStore.authorizationStatusForEntityType(0);
	if (cnAuthStatus == 3) {
		result.state = true;
	} else {
		result.msg = "通讯录权限没有开启"
		result.state = false
	}
	plus.ios.deleteObject(CNContactStore);
	return result;
}

// 判断日历权限是否开启
function judgeIosPermissionCalendar() {
	var result = {msg:'',state:false};
	var EKEventStore = plus.ios.import("EKEventStore");
	var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(0);
	if (ekAuthStatus == 3) {
		result.state = true;
	} else {
		result.msg = "日历权限没有开启"
		result.state = false
	}
	plus.ios.deleteObject(EKEventStore);
	return result;
}

// 判断备忘录权限是否开启
function judgeIosPermissionMemo() {
	var result = {msg:'',state:false};
	var EKEventStore = plus.ios.import("EKEventStore");
	var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(1);
	if (ekAuthStatus == 3) {
		result.state = true;
	} else {
		result.msg = "备忘录权限没有开启"
		result.state = false
	}
	plus.ios.deleteObject(EKEventStore);
	return result;
}

// Android权限查询
function requestAndroidPermission(ids) {
	let permissionID = ids.split('|')
	return new Promise((resolve, reject) => {
		plus.android.requestPermissions(
			permissionID, // 理论上支持多个权限同时查询，但实际上本函数封装只处理了一个权限的情况。有需要的可自行扩展封装
			function(resultObj) {
				var result = {msg:'',state:false};
				for (var i = 0; i < resultObj.granted.length; i++) {
					var grantedPermission = resultObj.granted[i];
					result.state = 1;
				}
				for (var i = 0; i < resultObj.deniedPresent.length; i++) {
					var deniedPresentPermission = resultObj.deniedPresent[i];
					result.msg = '您没有访问权限,请到权限设置中开启'
					result.state = 0
				}
				for (var i = 0; i < resultObj.deniedAlways.length; i++) {
					var deniedAlwaysPermission = resultObj.deniedAlways[i];
					result.msg = '您的权限被永久拒绝,请到权限设置中开启'
					result.state = -1
				}
				resolve(result);
				// 若所需权限被拒绝,则打开APP设置界面,可以在APP设置界面打开相应权限
				// if (result != 1) {
				// gotoAppPermissionSetting()
				// }
			},
			function(error) {
				console.log('申请权限错误：' + error.code + " = " + error.message);
				resolve({
					code: error.code,
					message: error.message
				});
			}
		);
	});
}

// 使用一个方法，根据参数判断权限
async function judgeIosPermission(permissionID) {
	if (permissionID == "location") {
		return await judgeIosPermissionLocation()
	} else if (permissionID == "camera") {
		return await judgeIosPermissionCamera()
	} else if (permissionID == "photoLibrary") {
		return await judgeIosPermissionPhotoLibrary()
	} else if (permissionID == "camera|photoLibrary") {
		return await judgeIosPermissionCamera() && judgeIosPermissionPhotoLibrary()
	} else if (permissionID == "record") {
		return await judgeIosPermissionRecord()
	} else if (permissionID == "push") {
		return await judgeIosPermissionPush()
	} else if (permissionID == "contact") {
		return await judgeIosPermissionContact()
	} else if (permissionID == "calendar") {
		return await judgeIosPermissionCalendar()
	} else if (permissionID == "memo") {
		return await judgeIosPermissionMemo()
	}
	return await {state:false,msg:''};
}

// 跳转到**应用**的权限页面
function gotoAppPermissionSetting() {
	if (isIos) {
		var UIApplication = plus.ios.import("UIApplication");
		var application2 = UIApplication.sharedApplication();
		var NSURL2 = plus.ios.import("NSURL");	
		var setting2 = NSURL2.URLWithString("app-settings:");
		application2.openURL(setting2);

		plus.ios.deleteObject(setting2);
		plus.ios.deleteObject(NSURL2);
		plus.ios.deleteObject(application2);
	} else {
		// console.log(plus.device.vendor);
		var Intent = plus.android.importClass("android.content.Intent");
		var Settings = plus.android.importClass("android.provider.Settings");
		var Uri = plus.android.importClass("android.net.Uri");
		var mainActivity = plus.android.runtimeMainActivity();
		var intent = new Intent();
		intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
		var uri = Uri.fromParts("package", mainActivity.getPackageName(), null);
		intent.setData(uri);
		mainActivity.startActivity(intent);
	}
}

// 检查系统的设备服务是否开启
// var checkSystemEnableLocation = async function () {
function checkSystemEnableLocation() {
	if (isIos) {
		var result = false;
		var cllocationManger = plus.ios.import("CLLocationManager");
		var result = cllocationManger.locationServicesEnabled();
		console.log("系统定位开启:" + result);
		plus.ios.deleteObject(cllocationManger);
		return result;
	} else {
		var context = plus.android.importClass("android.content.Context");
		var locationManager = plus.android.importClass("android.location.LocationManager");
		var main = plus.android.runtimeMainActivity();
		var mainSvr = main.getSystemService(context.LOCATION_SERVICE);
		var result = mainSvr.isProviderEnabled(locationManager.GPS_PROVIDER);
		console.log("系统定位开启:" + result);
		return result
	}
}

//permissionID 传参整合方便统一调用
var permissionIDs =  {
	location:isIos ? 'location':'android.permission.ACCESS_FINE_LOCATION',
	push:isIos?'push':'',
	camera:isIos?'camera':'android.permission.CAMERA',
	photoLibrary:isIos?'photoLibrary':'android.permission.READ_EXTERNAL_STORAGE',
	record:isIos?'record':'android.permission.RECORD_AUDIO',
	contact:isIos?'contact':'android.permission.READ_CONTACTS',
	calendar:isIos?'calendar':'android.permission.READ_CALENDAR',
	memo:isIos?'memo':'',
	'camera|photoLibrary':isIos?'camera|photoLibrary':'android.permission.CAMERA|android.permission.READ_EXTERNAL_STORAGE',
	'android.permission.ACCESS_COARSE_LOCATION':isIos?'':'android.permission.ACCESS_COARSE_LOCATION',
	'android.permission.READ_EXTERNAL_STORAGE':isIos?'':'android.permission.READ_EXTERNAL_STORAGE',
	'android.permission.WRITE_EXTERNAL_STORAGE':isIos?'':'android.permission.WRITE_EXTERNAL_STORAGE',
	'android.permission.READ_CONTACTS':isIos?'':'android.permission.READ_CONTACTS',
	'android.permission.WRITE_CONTACTS':isIos?'':'android.permission.WRITE_CONTACTS',
	'android.permission.READ_CALENDAR':isIos?'':'android.permission.READ_CALENDAR',
	'android.permission.WRITE_CALENDAR':isIos?'':'android.permission.WRITE_CALENDAR',
	'android.permission.READ_SMS':isIos?'':'android.permission.READ_SMS',
	'android.permission.SEND_SMS':isIos?'':'android.permission.SEND_SMS',
	'android.permission.RECEIVE_SMS':isIos?'':'android.permission.RECEIVE_SMS',
	'android.permission.READ_PHONE_STATE':isIos?'':'android.permission.READ_PHONE_STATE',
	'android.permission.CALL_PHONE':isIos?'':'android.permission.CALL_PHONE',
	'android.permission.READ_CALL_LOG':isIos?'':'android.permission.READ_CALL_LOG'
}

//统一调用获取权限信息
function judgePermission(permissionID){
	 return new Promise(async(resolve, reject) => {
		 let permission = permissionIDs[permissionID]
		 let promises = await isIos ? (!permission ? true : judgeIosPermission(permission)):(!permission ? true : requestAndroidPermission(permission))
		 promises.then(res=>{
		 	if(res.state==-1 || res.state==false){
				uni.showModal({
					title:res.msg,
					success:(res)=>{
						if(res.confirm){
							gotoAppPermissionSetting()
						}
					}
				})
		 	}
		 })
	})
}

module.exports = {
	judgePermission:judgePermission,
	judgeIosPermission: judgeIosPermission,
	requestAndroidPermission: requestAndroidPermission,
	checkSystemEnableLocation: checkSystemEnableLocation,
	gotoAppPermissionSetting: gotoAppPermissionSetting
}
