<template>
	<view class="goods_list flex flex-wrap justify-between">
		<view class="goods_item" v-for="(item,index) in goods" :key="index" @click="navigator(item.id)">
			<image :src="item.url" mode=""></image>
			<view class="price">
				<text>{{item.nowPrice}}</text>
				<text>{{item.oldPrice}}</text>
			</view>
			<view class="name">
				{{item.detail}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ["goods"],
		methods: {
			navigator(id){
				this.$emit("goodsItemClick",id)
			}
		}
	}
</script>

<style lang="scss">
	.goods_list{
		padding: 0 15rpx;
		// text-align: center;
		.goods_item{
			background: #fff;
			width: 355rpx;
			margin: 7rpx 0;
			padding: 15rpx;
			box-sizing: border-box;
			image{
				width: 80%;
				height: 150px;
				display: block;
				margin: 0 auto;
			}
			.price{
				color: $shop-color;
				font-size: 36rpx;
				padding-top: 10rpx;
				text:nth-child(2){
					color: #ccc;
					font-size: 28rpx;
					margin-left: 17rpx;
					text-decoration: line-through;
				}
			}
			.name{
				width: 100%;
				height: 100rpx;
				font-size: 28rpx;
				overflow: hidden;
				line-height: 50rpx;
				padding: 10rpx 0 15rpx 0;
			}
		}
	}
</style>
