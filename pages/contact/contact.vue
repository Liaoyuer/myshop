<template>
	<view class="contact">
		<image class="img" src="https://f10.baidu.com/it/u1=83108544&u2=2023014971&fm=76" mode=""></image>
		<view class="info">
			<view @click="call">
				联系电话： 400-618-9090（点击拨打）
			</view>
			<view class="">
				联系地址：福建省厦门市集美区
			</view>
		</view>
		<map class="map" :latitude="latitude" :longitude="longitude" :scale="scale" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				latitude: 24.617837,
				longitude: 118.055439,
				scale: 13,
				markers: [{
					latitude: 24.617837,
					longitude: 118.055439,
					iconPath: "../../static/icon/location.png",
					title: "啦啦啦",
					width: 30,
					height: 30,
					callout: {
						content: "嘻嘻",
						color: "white",
						borderRadius: 5,
						bgColor: "red"
					}
				}]
			}
		},
		onLoad() {},
		
		methods: {
			call(){
				uni.makePhoneCall({
				    phoneNumber: '400-618-9090' //仅为示例
				});
			}
		}
	}
</script>

<style lang="scss">
		
	.contact{
		.img{
			width: 750rpx;
			height: 320rpx;
		}
		.info{
			padding: 10rpx 20rpx;
			font-size: 30rpx;
			view{
				line-height: 80rpx;
				border-bottom: 1px solid #eee;
			}
		}
		.map{
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
