<template>
	<view class="goods-list">
		<goods-list :goods="goods" @goodsItemClick="goGoodsDetail"></goods-list>
		<view class="isOver" v-if="flag">
			-----我是有底线的-----
		</view>
	</view>
</template>

<script>
	import goodsList from "../../components/goos-list/goods-list.vue"
	export default {
		data() {
			return {
				pageindex: 1,
				flag: false,
				goods: [
					{
						id: 0,
						url: "https://yanxuan-item.nosdn.127.net/c6af4c495f4de9d339291a9d8a2a3b6f.png?type=webp&quality=95&thumbnail=265x265&imageView",
						nowPrice: "$2199",
						oldPrice: "$2499",
						detail: "出差旅行酒店喝上放心水，折叠电水壶"
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
					},
					{
						id: 3,
						url: "https://yanxuan-item.nosdn.127.net/c6af4c495f4de9d339291a9d8a2a3b6f.png?type=webp&quality=95&thumbnail=265x265&imageView",
						nowPrice: "$2199",
						oldPrice: "$2499",
						detail: "出差旅行酒店喝上放心水，折叠电水壶"
					},
					{
						id: 4,
						url: "https://yanxuan-item.nosdn.127.net/c6af4c495f4de9d339291a9d8a2a3b6f.png?type=webp&quality=95&thumbnail=265x265&imageView",
						nowPrice: "$2199",
						oldPrice: "$2499",
						detail: "出差旅行酒店喝上放心水，折叠电水壶"
					},
					{
						id: 5,
						url: "https://yanxuan-item.nosdn.127.net/c6af4c495f4de9d339291a9d8a2a3b6f.png?type=webp&quality=95&thumbnail=265x265&imageView",
						nowPrice: "$2199",
						oldPrice: "$2499",
						detail: "出差旅行酒店喝上放心水，折叠电水壶"
					},
					{
						id: 6,
						url: "https://yanxuan-item.nosdn.127.net/c6af4c495f4de9d339291a9d8a2a3b6f.png?type=webp&quality=95&thumbnail=265x265&imageView",
						nowPrice: "$2199",
						oldPrice: "$2499",
						detail: "出差旅行酒店喝上放心水，折叠电水壶"
					},
					{
						id: 7,
						url: "https://yanxuan-item.nosdn.127.net/c6af4c495f4de9d339291a9d8a2a3b6f.png?type=webp&quality=95&thumbnail=265x265&imageView",
						nowPrice: "$2199",
						oldPrice: "$2499",
						detail: "出差旅行酒店喝上放心水，折叠电水壶"
					},
					{
						id: 8,
						url: "https://yanxuan-item.nosdn.127.net/c6af4c495f4de9d339291a9d8a2a3b6f.png?type=webp&quality=95&thumbnail=265x265&imageView",
						nowPrice: "$2199",
						oldPrice: "$2499",
						detail: "出差旅行酒店喝上放心水，折叠电水壶"
					}
				]
			}
		},
		onLoad() {
			// this.getGoodsList()
		},
		//触底事件
		onReachBottom() {
			if(this.goods.length>5) return this.flag = true
			this.pageindex++
			this.getGoodsList()
		},
		//下拉刷新
		onPullDownRefresh() {
			this.pageindex = 1
			this.goods = []
			this.flag = false
			setTimeout(()=>{
			// this.getGoodsList(()=>{
				// uni.stopPullDownRefresh()
			// })
			},1000)
		},
		methods: {
			async getGoodsList(callBack){
				const res = await this.$myRequest({
					url: ""+this.pageindex
				})
				// this.goods = [...this.goods,...res.data.message]
				callBack && callBack()
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
	.goods-list{
		background: #eee;
		.isOver{
			width: 100%;
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
			color: #3F536E;
			font-size: 32rpx;
		}
	}
</style>
