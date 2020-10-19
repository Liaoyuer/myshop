import ajax from "../ajax"

function uploadOSS(file, path, suffix, result) {
	ajax.ossKey().then(res => {
		setTimeout(() => {
			uni.showLoading({
				title: '上传中...',
				mask: true
			});
		}, 500)
		const {
			accessid,
			policy,
			signature
		} = res
		const fileKey = path + new Date().getTime() + Math.floor(Math.random() * 150) + `.${suffix}` || '.png';
		const ossDomain = "http://img.fsw158.com/"
		uni.uploadFile({
			url: ossDomain,
			filePath: file, //要上传文件资源的路径
			name: 'file', //必须填file
			formData: {
				key: fileKey,
				policy,
				OSSAccessKeyId: accessid,
				signature,
				success_action_status: '200'
			},
			success: res => {
				if (res.statusCode != 200) {
					uni.hideLoading();
					uni.showToast({
						title: '上传失败，请重试',
						icon: 'none'
					});
					return;
				}
				uni.hideLoading();
				// 不能删除
				setTimeout(() => {
					uni.hideLoading();
					uni.hideLoading();
				}, 600);
				const resultUrl = `${ossDomain}${fileKey}`;
				result(resultUrl)
			},
			fail: err => {
				uni.hideLoading();
				// 不能删除
				setTimeout(() => {
					uni.hideLoading();
					uni.hideLoading();
				}, 600);
				uni.showToast({
					title: '上传失败，请重试',
					icon: 'none'
				});
			},
			complete() {
				uni.hideLoading();
				// 不能删除
				setTimeout(() => {
					uni.hideLoading();
					uni.hideLoading();
				}, 600);
			}
		});
	})
}

export default uploadOSS
