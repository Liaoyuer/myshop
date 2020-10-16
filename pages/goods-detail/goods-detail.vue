<template>
	<view class="goods_detial">
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image src="https://tpc.googlesyndication.com/simgad/884031202149209054?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qn9AwrwP5KBIeEc1mO0Jvn-2W0yeQ"></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=1188981460,2253255296&fm=173&app=49&f=JPEG?w=312&h=208&s=E4A2B1F100816CE52AB8D82203008052" mode="aspectFit"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>￥6788</text>
				<text>￥8788</text>
			</view>
			<view class="goods_name">
				boxShadow 属性把一个或多个下拉阴影添加到框上。该属性是一个用逗号分隔阴影的列表。
			</view>
		</view>
		<view class="line"></view>
		<view class="boxx2">
			<view class="">货号：132485412</view>
			<view class="">库存：200</view>
		</view>
		<view class="line"></view>
		<view class="box3">
			<view class="tit">
				详情介绍
			</view>
			<view class="content">
				内容
			</view>
		</view>
		<view class="goods_nav">
			<uni-goods-nav :fill="true"  :options="options" :buttonGroup="buttonGroup"  @click="onClick" @buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		data() {
			return {
				options: [{
						icon: 'headphones',
						text: '客服',
					}, {
						icon: 'shop',
						text: '店铺',
						info: 2,
						infoBackgroundColor:'#007aff',
						infoColor:"red"
					}, {
						icon: 'cart',
						text: '购物车',
						info: 12
					}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
				    }]
			}
		},
		methods: {
			onClick (e) {
				uni.showToast({
				  title: `点击${e.content.text}`,
				  icon: 'none'
				})
			  },
			buttonClick (e) {
				console.log(e)
				this.options[2].info++
			  }
		},
		components: {uniGoodsNav}
	}
</script>

<style lang="scss">
	.goods_detial{
		swiper{
			height: 700rpx;
			// image{
			// 	width: 100%;
			// 	height: 100%;
			// }
		}
		.box1{
			padding: 20rpx;
			.price{
				font-size: 35rpx;
				line-height: 80rpx;
				color: $shop-color;
				text:nth-child(2){
					color: #ccc;
					font-size: 28rpx;
					text-decoration: line-through;
					margin-left: 20rpx;
				}
			}
			.goods_name{
				font-size: 32rpx;
				line-height: 60rpx;
			}
		}
		.boxx2{
			padding: 0 20rpx;
			font-size: 32rpx;
			line-height: 70rpx;
		}
		.box3{
			padding-bottom: 50rpx;
			.tit{
				font-size: 32rpx;
				padding-left: 20rpx;
				border-bottom: 1px solid #eee;
				line-height: 80rpx;
			}
			.content{
				padding: 20rpx;
				font-size: 28rpx;
				color: #333;
			}
		}
		.goods_nav{
			position: fixed;
			width: 100%;
			bottom: 0;
		}
	}
	.line{
		height: 10rpx;
		width: 750rpx;
		background: #eee;
	}
</style>
