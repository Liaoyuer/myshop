<template>
	<view class="">
		<view class="news_item flex" v-for="(item,index) in list" :key="index" @click="navigator(item.id)">
			<image :src="item.img_url" mode=""></image>
			<view class="right flex flex-direction justify-between">
				<view class="tit">
					{{item.title}}
				</view>
				<view class="info">
					<text>发表时间：{{item.add_time | formatDate}}</text>
					<text>浏览：{{item.click}}次</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ["list"],
		//过滤器
		filters: {
			formatDate(data){
				const nDate = new Date()
				const year = nDate.getFullYear()
				const month = (nDate.getMonth()+1).toString().padStart(2,0)
				const day = nDate.getDay().toString().padStart(2,0)
				// console.log(nDate)
				return year+"-"+month+"-"+day
			}
		},
		methods:{
			navigator(id){
				this.$emit("itemClick",id)
			}
		}
	}
</script>

<style lang="scss">
	.news_item{
		padding: 10rpx 20rpx;
		border-bottom: 1px solid $shop-color;
		image{
			min-width: 200rpx;
			max-width: 200rpx;
			height: 150rpx;
		}
		.right{
			margin-left: 15rpx;
			.tit{
				font-size: 30rpx;
			}
			.info{
				font-size: 24rpx;
				text:nth-child(2){
					margin-left: 30rpx;
				}
			}
		}
		
	}
</style>
