<template>
	<view class="news_detail">
		<text class="tit">标题</text>
		<view class="info flex justify-between">
			<text>发表时间：</text>
			<text>浏览：</text>
		</view>
		<view class="content">
			<!-- <rich-text :nodes=""></rich-text> -->
			内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 1
			}
		},
		methods: {
			async getNewsDetail(){
				const res = await this.$myRequest({
					url: ""+this.id
				})
			}
		},
		onLoad(options) {
			this.id = options.id
			// this.getNewsDetail()
		}
	}
</script>

<style lang="scss">
.news_detail{
	font-size: 30rpx;
	padding: 0 20rpx;
	.tit{
		display: block;
		width: 710rpx;
		text-align: center;
		margin: 20rpx 0;
	}
	.info{
		
	}
}
</style>
