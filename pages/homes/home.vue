<template>
	<view>
		<!-- <view class="bar-sticky">
			　　<navigationBar custom="true"> 
					<view class="logo ">
						<view class="logo-family"></view>
						<image src="../../static/images/logo.jpeg" mode=""></image>
					</view>　　　
				　　</navigationBar>
		</view> -->
		<view class="flex flex-around">
			<view class="">
				<view>新人帮助</view>
				<view>快速了解赚钱方式</view>
				<view>去看看</view>
			</view>
			<view class="">
				<view class="">
					<view>邀请赚钱</view>
					<view>邀请好友使用有提成</view>
				</view>
				<view class="">
					<view>麻豆攻略</view>
					<view>玩转平台攻略</view>
				</view>
			</view>
		</view>
		<!-- 通告广场 -->
		<view class="flex flex-around">
			<view>通告广场</view>
			<view>查看更多 ></view>
		</view>
		<view class="flex flex1 flex-wrap flex-between" >
			<view class="flex3" v-for="(good,j) of goodsList" :key="j">
				<image style="width: 200rpx;height: 200rpx;" :src="good.img"></image>
				<view>{{good.title}}</view>
				<view>{{good.type}}</view>
				<view class="flex flex-around">
					<view>已报名{{good.signCount}}</view>
					<view>刚刚</view>
				</view>
			</view>
		</view>
		<!-- 优质网拍 -->
		<view class="flex flex-center">
			<view>优质网拍</view>
			<view>种草</view>
		</view>
		<view class="flex flex-wrap flex-around" >
			<view style="width: 45%;" v-for="(good,j) of goodsList" :key="j">
				<image class="goodPictureImg" :src="good.img">
					<view class="smallPic">
						aaa
					</view>
				</image>
				<view>{{good.title}}</view>
				<view>{{good.type}}</view>
				<view class="flex flex-around">
					<view>已报名{{good.signCount}}</view>
					<view>刚刚</view>
				</view>
			</view>
		</view>
		
		<!-- 优惠分类 -->
		<view v-for="(item,index) of categoryList" :key="index">
			<Cata_Title v-if="menuList[index] !== '券类'" :name="item.keywords" :title="item.keywords" />

			<!-- 分类 -->
			<!-- <view class="nav mt10">
				<view v-if="menuList[index] == '券类'" class="nav-toger" v-for="(catagory,i) in item.children" :key="i">
					<view class="nav-item">
						<image :src="catagory.picUrl" mode=""></image>
					</view>
					<view class="nav-text"><text style="text-align: center;">{{catagory.name}}</text></view>
				</view>
			</view> -->
			<!-- 热门充值 -->
			<!-- <view v-if="menuList[index] == '热门充值'" class="flex flex-wrap flex-around mt10">
				<view class="pay" v-for="(item,k) in item.children" :style="{'backgroundColor': payColor[k]}">
					<view class="pay-item">{{item.name}}</view>
					<view class="pay-item">{{item.desc}}</view>
				</view>
			</view> -->
			<!-- 热门活动 -->
			<view  class="flex flex-around mt10">
				<view class="activity" v-for="(hotgood,l) of hotGoodsList" :key="l">
					<view class="activity1">
						<image :src="hotgood.picUrl"></image>
					</view>
					<view class="mt10">{{hotgood.name}}</view>
					<view class="flex flex-between mt10">
						<view class="content-item">
							<view class="paper"><text>低价: {{hotgood.retailPrice}}元</text></view>
							<view class="paper"><text>原价: {{hotgood.counterPrice}}元</text></view>
						</view>
						<view class="like-button">去砍价</view>
					</view>
				</view>
			</view>
			<!-- 热门礼券 -->
			<!-- <view class="mt10">
					<view class="cart-box flex flex-between" v-for="(item,m) in cartList" @click="toCardDetail(item)">
						<view class="flex">
							<image :src="item.image"></image>
							<view class="cart-content ml20">
								<view class="title">{{item.name}}</view>
								<view class="title">{{item.desc}}</view>
								<view class="title">已成交{{item.hadSale}}个，<text style="color: black;font-size: 28rpx;">在售{{item.onSale}}个</text></view>
								<view class="title">{{item.promise}}</view>
							</view>
						</view>
						<view class="cart-right">
							<view class="title">￥{{item.newPaper}}</view>
							<view class="title">￥{{item.oldPaper}}</view>
						</view>
					</view>
				</view> -->
		</view>
	</view>

	</view>
</template>

<script>
	import navigationBar from '../../myComponents/navBar/navigationBar.vue'
	import Cata_Title from '../../myComponents/catagory/cataTitle.vue'
	export default {
		components: {
			Cata_Title,
			navigationBar
		},
		data() {
			return {
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				// menuList: [],
				payColor: ['#da1045', '#da4f10', '#10da27', '#109cda'],
				// categoryList: [],
				// movieGoodsList: [],
				// hotGoodsList: [],
				goodsList: [
					{
						title: '黑色平面口罩',
						img: '../../static/images/kendeji.jpg',
						type: '增拍',
						signCount: 99
					},
					{
						title: '黑色平面口罩',
						img: '../../static/images/kendeji.jpg',
						type: '增拍',
						signCount: 99
					},
					{
						title: '黑色平面口罩',
						img: '../../static/images/kendeji.jpg',
						type: '增拍',
						signCount: 99
					},
					{
						title: '黑色平面口罩',
						img: '../../static/images/kendeji.jpg',
						type: '增拍',
						signCount: 99
					}
				],
				categoryList: [
					[
						{img: '../../static/images/home/meishi.png', name: '美食券'},
						{img: '../../static/images/home/yinliao.png', name: '饮品券'},
						{img: '../../static/images/home/gouwu.png', name: '购物券'},
						{img: '../../static/images/home/shipin.png', name: '视频券'},
					],
					[
						{img: '../../static/images/home/dianying.png', name: '观影券'},
						{img: '../../static/images/home/jiaotongchuhang.png', name: '出行券'},
						{img: '../../static/images/home/ziyuan.png', name: '洗车券'},
						{img: '../../static/images/home/shoujichongzhi.png', name: '我的订单'},
					],
				],
				menuList: ['券类','电影购票','热门充值','热门活动','热门礼券'],
				payList: [
					{
						'name': '美食饮品',
						'catagory': '盒马先生、肯德基、麦当劳',
						'description': '超低价充值'
					},
					{
						'name': '商超购物',
						'catagory': '沃尔玛、百果园、购物',
						'description': '超低价充值'
					},
					{
						'name': '生活出行',
						'catagory': '美团、滴滴、高德',
						'description': '超低价充值'
					},
					{
						'name': '视频电影',
						'catagory': '腾讯、爱奇艺、芒果TV',
						'description': '超低价充值'
					}
				],
				hotGoodsList: [
					{
						'name': '肯德基50元代金券',
						'newPaper': 0.01,
						'oldPaper': 38.00,
						'image': '../../static/images/kendeji.jpg'
					},
					{
						'name': '麦当劳100元代金券',
						'newPaper': 0.01,
						'oldPaper': 88.00,
						'image': '../../static/images/maidanglao.jpeg'
					}
				],
				cartList: [
					{
						'id': 1,
						'name': '肯德基50元代金券',
						'desc': '实体店消费抵扣',
						'newPaper': 0.01,
						'oldPaper': 38.00,
						'image': '../../static/images/kendeji.jpg',
						'hadSale': 230,
						'onSale': 400,
						'promise': '品质保证，售后无忧'
					},
					{
						'id': 2,
						'name': '肯德基50元代金券',
						'desc': '实体店消费抵扣',
						'newPaper': 0.01,
						'oldPaper': 38.00,
						'image': '../../static/images/maidanglao.jpeg',
						'hadSale': 230,
						'onSale': 400,
						'promise': '品质保证，售后无忧'
					},
					{
						'id': 3,
						'name': '肯德基50元代金券',
						'desc': '实体店消费抵扣',
						'newPaper': 0.01,
						'oldPaper': 38.00,
						'image': '../../static/images/kendeji.jpg',
						'hadSale': 230,
						'onSale': 400,
						'promise': '品质保证，售后无忧'
					},
					{
						'id': 4,
						'name': '肯德基50元代金券',
						'desc': '实体店消费抵扣',
						'newPaper': 0.01,
						'oldPaper': 38.00,
						'image': '../../static/images/maidanglao.jpeg',
						'hadSale': 230,
						'onSale': 400,
						'promise': '品质保证，售后无忧'
					}
				],
			}
		},
		onLoad() {
			// this.init()
		},
		methods: {
			init() {
				uni.showLoading({
					title: '加载中'
				})
				uni.request({
					url: getApp().globalData.apiUrl + '/demo/wx/catalog/all',
					method: 'GET',
					success: (res) => {
						uni.hideLoading()
						let secondObj = {}
						// 一级菜单
						this.categoryList = res.data.data.categoryList
						// 二级菜单
						secondObj = res.data.data.allList
						for (let i = 0; i < this.categoryList.length; i++) {
							this.menuList.push(this.categoryList[i].name)
							this.categoryList[i].children = secondObj[this.categoryList[i].id].filter(item => item.deleted == false)
							console.log(this.categoryList)
							if (this.categoryList[i].name == '电影购票') {
								uni.showLoading({
									title: '加载中'
								})
								uni.request({
									url: getApp().globalData.apiUrl + '/demo/wx/goods/list?categoryId=' + this.categoryList[i].children[0].id,
									method: 'GET',
									success: (res) => {
										this.movieGoodsList = res.data.data.goodsList
										uni.hideLoading()
									}
								})
							}
							if (this.categoryList[i].name == '热门活动') {
								uni.showLoading({
									title: '加载中'
								})
								uni.request({
									url: getApp().globalData.apiUrl + '/demo/wx/goods/list?categoryId=' + this.categoryList[i].children[0].id,
									method: 'GET',
									success: (res) => {
										this.hotGoodsList = res.data.data.goodsList
										// console.log(5,this.hotGoodsList)
										uni.hideLoading()
									}
								})
							}
							// if(this.categoryList[i].children) {
							// 	uni.request({
							// 		url: getApp().globalData.apiUrl + '/demo/wx/goods/list?categoryId=' + this.categoryList[i].children[0].id,
							// 		method: 'GET',
							// 		success: (res) => {
							// 			this.$nextTick(() => {
							// 				this.goodsAllList[i] = res.data.data.goodsList
							// 				console.log(3, this.goodsAllList)
							// 			})

							// 		}
							// 	})
							// }
						}
					}
				})
			},
			toCardDetail(data) {
				uni.navigateTo({
					url: 'cardDetail?data=' + encodeURIComponent(JSON.stringify(data))
				})
			}
		}

	}
</script>
<style lang="scss">
	.goodPictureImg {
		width: 100%;
		max-height: 300rpx;
		position: absolute;
		.smallPic {
			position: relative;
			bottom: 0;
			right: 10;
		}
	}
	.swiper-item {
		width: 100%;

		image {
			width: 100%;
		}
	}

	.nav {
		width: 750rpx;
		display: flex;
		flex-wrap: wrap;
	}

	.nav-toger {
		width: 187.5rpx;
		margin: 20rpx 0;

	}

	.nav-item {
		width: 50rpx;
		height: 50rpx;
		margin: 0 auto;

		image {
			width: 100%;
			height: 100%;
		}
	}

	.nav-text {
		text-align: center;
	}
	.search-bg {
		background-image: linear-gradient(to right, red , yellow);
		padding: 20rpx;
		.searchInput {
			border-radius: 50rpx;
			margin: 0 20rpx;
			padding: 10rpx;
			background-color: #F8F8F8;
			text-align: center;
		}
	}
	

	.pay {
		width: 43%;
		margin: 10rpx;
		padding: 10rpx;
		background-color: red;
		border: 1rpx solid #D3D3D3;
		border-radius: 10rpx;
		box-shadow: 5rpx 5rpx 8rpx #D3D3D3;

		.pay-item {
			display: block;
			color: white;
			text-align: center;
			padding: 10rpx;

			&:nth-child(1) {
				font-size: 32rpx;
			}

			&:nth-child(2) {
				font-size: 24rpx;
			}

			&:nth-child(3) {
				font-size: 28rpx;
			}
		}
	}

	.activity {
		width: 44%;
		// height: 300rpx;
	}

	.activity1 {
		height: 200rpx;

		// width: 44%;
		image {
			width: 100%;
			height: 100%;
		}
	}

	.content-item {
		.paper {
			&:nth-child(1) {
				color: red;
				font-size: 30rpx;
			}

			&:nth-child(2) {
				color: gray;
				font-size: 28rpx;
				text-decoration: line-through;
			}
		}
	}

	.like-button {
		padding: 10rpx;
		height: 50rpx;
		// margin: auto;
		background-color: #da4f10;
		border: 1rpx solid D3D3D3;
		border-radius: 5rpx;
		color: white;
		text-align: center;
		line-height: 50rpx;
	}

	// 热门礼券
	.cart-box {
		width: 92%;
		margin: 20rpx;
		padding: 10rpx;
		border: 1px solid #E5E5E5;
		box-shadow: 10rpx 10rpx 10rpx #E5E5E5;

		image {
			width: 150rpx;
			height: 150rpx;
			border-radius: 50%;
		}
	}

	.cart-content {
		.title {
			&:nth-child(1) {
				font-size: 32rpx;
				font-weight: 700;
			}

			&:nth-child(2),
			&:nth-child(3) {
				color: gray;
				font-size: 26rpx;
			}

			&:nth-child(4) {
				color: #DF5000;
				font-size: 28rpx;
			}
		}
	}

	.cart-right {
		margin: auto 10rpx;

		.title {
			&:nth-child(1) {
				color: red;
			}

			&:nth-child(2) {
				font-size: 26rpx;
				color: gray;
				text-decoration: line-through;
			}
		}
	}
</style>
