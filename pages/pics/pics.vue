<template>
	<view class="pics flex">
		<scroll-view class="left" scroll-y="true" >
			<view :class="active===index?'active':''" @click="selectLeftOne(index)" v-for="(item,index) in cates">{{item}}</view>
		</scroll-view>
		<scroll-view class="right" scroll-y="true" >
			<view class="item" v-for="(item,index) in subData" :key="index">
				<image @click="previewImg(item.img_url)" :src="item.img_url" mode=""></image>
				<text>{{item.zhaiyao}}</text>
			</view>
			<text v-if="subData.length===0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,
				cates:["家居生活","家居生活","家居生活","家居生活","家居生活","家居生活","家居生活","家居生活","家居生活","家居生活","家居生活","家居生活","家居生活","家居生活"],
				subData: [{
					id: 1,
					img_url: "https://t11.baidu.com/it/u1=1900852480&u2=4161278891&fm=76",
					zhaiyao: "scroll-view 不适合放长列表，有性能问题。长列表滚动和下拉刷新，应该使用原生导航栏搭配页面级的滚动和下拉刷新实现。包括在app-nvue页面，长列表应该使用list而不是"
				},{
					id: 2,
					img_url: "https://lupic.cdn.bcebos.com/20191203/3016461496_14.jpg",
					zhaiyao: "scroll-view 不适合放长列表，有性能问题。长列表滚动和下拉刷新，应该使用原生导航栏搭配页面级的滚动和下拉刷新实现。包括在app-nvue页面，长列表应该使用list而不是"
				},{
					id: 3,
					img_url: "https://f10.baidu.com/it/u1=83108544&u2=2023014971&fm=76",
					zhaiyao: "scroll-view 不适合放长列表，有性能问题。长列表滚动和下拉刷新，应该使用原生导航栏搭配页面级的滚动和下拉刷新实现。包括在app-nvue页面，长列表应该使用list而不是"
				}]
			}
		},
		methods: {
			async getPics(){
				const res = await this.$myRequest({
					url: ""
				})
			},
			async selectLeftOne(index){
				this.active = index
				//获取右侧的数据
				// const res = await this.$myRequest({
				// 	url: ""
				// })
				// this.subData = []
			},
			previewImg(img_url){
				const urls = this.subData.map(item=>{
					return item.img_url
				})
				uni.previewImage({
					urls,
					current: img_url,
					loop: true
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.pics{
		height: 100%;
		.left{
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;
			view{
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 2px solid #eee;
			}
			.active{
				background: $shop-color;
				color: #fff;
			}
		}
		.right{
			height: 100%;
			width: 530rpx;
			margin: 10rpx auto;
			.item{
				image:{
					width: 520rpx;
					height: 520rpx;
					border-radius: 5rpx;
				}
				text{
					display: block;
					overflow: hidden;
					font-size: 30rpx;
					width: 100%;
					height: 100rpx;
					line-height: 50rpx;
				}
			}
		}
		
	}
</style>
