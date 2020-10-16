<template>
	<view class="news">
		<news-item :list="newList" @itemClick="goDetail"></news-item>
	</view>
</template>

<script>
	import newsItem from "../../components/news-item/news-item.vue"
	export default {
		data() {
			return {
				newList: [{
					id: 1,
					title: "传链接，预览结果始终显示该链接在 urls 中第一次出现的位置。",
					add_time: "2020-10-15",
					click: 1,
					img_url: "https://yanxuan-item.nosdn.127.net/c6af4c495f4de9d339291a9d8a2a3b6f.png?type=webp&quality=95&thumbnail=265x265&imageView"
				},{
					id: 2,
					title: "传链接，预览结果始终显示该链接在 urls 中第一次出现的位置。",
					add_time: "2020-10-15",
					click: 1,
					img_url: "https://yanxuan-item.nosdn.127.net/c6af4c495f4de9d339291a9d8a2a3b6f.png?type=webp&quality=95&thumbnail=265x265&imageView"
				}]
			}
		},
		methods: {
			goDetail(id){
				uni.navigateTo({
					url: "/pages/news-detail/news-detail?id="+id
				})
			}
		},
		components:{
			"news-item": newsItem
		}
	}
</script>

<style lang="scss">
	.news{
		
	}
</style>
