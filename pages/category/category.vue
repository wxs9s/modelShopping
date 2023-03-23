<template>
	<CataComp :titles="categoryObj.children" :dataList="contentList" :loadMore="loadMore" @changeList="getGoodsList" @toDetail="toDetail"></CataComp>
</template>

<script>
	import CataComp from '../../myComponents/catagory/cataComponent.vue'
	export default {
		components: {
			CataComp
		},
		data() {
			return {
				name: 'hahahah',
				scrolllLeft: 0,
				tabIndex: 0,
				// cataTitles: ['美食券','视频券','饮品券','观影券','出行券','洗车券','美食券','话费券'],
				contentList: [],
				categoryList: [],
				categoryObj: {},
				query: {
					page: 1,
					size: 5,
				},
				loadMore: {
					isLoadMore: false,
					loadStatus: 'loading'
				},
				goodsCount: 0 // 商品总量
			}
		},
		onLoad() {
			this.init()
			// this.contentList = this.cartList
		},
		onReachBottom() {
			if (!this.loadMore.isLoadMore) { //此处判断，上锁，防止重复请求
				this.loadMore.loadStatus = 'loading'
				this.loadMore.isLoadMore = true
				this.query.page += 1
				let num = this.goodsCount % this.query.size > 0 ? this.goodsCount / this.query.size + 1 : this.goodsCount / this.query.size
				if(this.query.page > num) {
					this.loadMore.loadStatus = 'noMore'
				}else {
					this.getGoodsList(this.tabIndex)
				}
			}
		},
		methods: {
			init() {
				uni.showLoading({
				    title: '加载中'
				});
				uni.request({
					url: getApp().globalData.apiUrl + '/demo/wx/catalog/all',
					method: 'GET',
					success: (res) => {
						this.categoryList = res.data.data.categoryList
						this.categoryObj = this.categoryList.filter((item) => item.name = '券类')[0]
						// 二级菜单
						const secondList = res.data.data.allList
						this.categoryObj.children = secondList[this.categoryObj.id]
						this.getGoodsList(this.tabIndex)
						uni.hideLoading()
					}
				})
			},
			getGoodsList(index) {
				// 如果切换tab,则清空商品信息
				if(this.tabIndex != index) {
					this.contentList = []
					this.query.page = 1
				}
				this.tabIndex = index
				uni.showLoading({
				    title: '加载中'
				});
				uni.request({
					url: getApp().globalData.apiUrl +  '/demo/wx/goods/list?categoryId=' + this.categoryObj.children[index].id,
					method: 'GET',
					data: this.query,
					success: (res) => {
						this.loadMore.isLoadMore = false
						this.contentList.push(...(res.data.data.goodsList))
						this.goodsCount = res.data.data.count
						uni.hideLoading()
					}
				})
			},
			toDetail(data) {
				uni.navigateTo({
					url: '../goods/goodsDetail?id=' + data.id
				})
			}
		}
	}
</script>

<style>
</style>
