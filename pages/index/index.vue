<template>
	<view class="home">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/d6ed1b2226639929f5cab7bc27bac203.jpg?type=webp&imageView&quality=95&thumbnail=1920x420" mode="aspectFit"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://yanxuan.nosdn.127.net/4eeb9ae4999ad727da1542a5e5ab3588.jpg?type=webp&imageView&quality=95&thumbnail=1920x420" mode="aspectFit"></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav flex">
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<goods-list :goods="goods" @goodsItemClick="goGoodsDetail"></goods-list>
		</view>
	</view>
</template>

<script>
	import goodsList from "../../components/goos-list/goods-list.vue"
	export default {
		data() {
			return {
				navs: [
					{
						icon: "iconfont icon-shengdanjie-bangbangtang",
						title: "黑马超市",
						path: "../goods/goods"
					},
					{
						icon: "iconfont icon-shengdanjie-xingxing",
						title: "联系我们",
						path: "../contact/contact"
					},
					{
						icon: "iconfont icon-shengdanjie-qiqiu",
						title: "社区图片",
						path: "../pics/pics"
					},
					{
						icon: "iconfont icon-shengdanjie-shengdanmao",
						title: "学习视频",
						path: "../videos/videos"
					}
				],
				goods: [
					{
						id: 0,
						url: "https://yanxuan-item.nosdn.127.net/c6af4c495f4de9d339291a9d8a2a3b6f.png?type=webp&quality=95&thumbnail=265x265&imageView",
						nowPrice: "$2199",
						oldPrice: "$2499",
						detail: "出差旅行酒店喝上放心水，折叠电水壶出差旅行酒店喝上放心水，折叠电水壶出差旅行酒店喝上放心水，折叠电水壶出差旅行酒店喝上放心水，折叠电水壶"
					},
					{
						id: 1,
						url: "https://yanxuan-item.nosdn.127.net/c6af4c495f4de9d339291a9d8a2a3b6f.png?type=webp&quality=95&thumbnail=265x265&imageView",
						nowPrice: "$2199",
						oldPrice: "$2499",
						detail: "出差旅行酒店喝上放心水，折叠电水壶"
					},
					{
						id: 2,
						url: "https://yanxuan-item.nosdn.127.net/c6af4c495f4de9d339291a9d8a2a3b6f.png?type=webp&quality=95&thumbnail=265x265&imageView",
						nowPrice: "$2199",
						oldPrice: "$2499",
						detail: "出差旅行酒店喝上放心水，折叠电水壶"
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			//导航点击的处理函数
			navItemClick(url){
				uni.navigateTo({
					url
				})
			},
			//导航到商品详情页面
			goGoodsDetail(id){
				uni.navigateTo({
					url: "../goods-detail/goods-detail?id="+id
				})
			}
		},
		components:{
			"goods-list": goodsList
		}
	}
</script>

<style lang="scss">
	.home{
		swiper{
			width: 750rpx;
			height: 380rpx;
			// image{
			// 	width: 100%;
			// 	height: 100%;
			// }
		}
		.nav_item{
			width: 25%;
			text-align: center;
			view{
				width: 120rpx;
				height: 120rpx;
				border-radius: 60rpx;
				background: $shop-color;
				margin: 10rpx auto;
				line-height: 120rpx;
				color: #fff;
				font-size: 50rpx;
			}
			text{
				font-size: 30rpx;
			}
		}
		.hot_goods{
			background: #eee;
			overflow: hidden;
			margin-top: 10rpx;
			.tit{
				height: 50px;
				line-height: 50px;
				color: $shop-color;
				text-align: center;
				letter-spacing: 20px;
				font-size: 40rpx;
				background: #fff;
				margin: 7rpx 0;
			}
			
		}
	}
</style>
