<template>
	<view class="pay">
		<view class="bar-sticky">
			　　<navigationBar custom="true"> 
					<view class="">
						<view class="">订单详情</view>
						<!-- <image src="../../static/images/logo.jpeg" mode=""></image> -->
					</view>　　　
				　　</navigationBar>
		</view>
		<!-- 商品信息 -->
		<view class="flex pay-info">
			<!-- 左边 -->
			<view class="pay-image">
				<image :src="goods.gallery[0]" mode=""></image>
			</view>
			<!-- 右边 -->
			<view class="ml20 pay-name">
				<view>{{goods.name}}</view>
				<view class="flex flex-between">
					<view>￥ {{goods.retailPrice}}</view>
					<view class="flex">
						<view class="pay-icon" @click="reduce"><image src="../../static/images/goods/minus-circle.svg"></image></view>
						<!-- <uni-icons class="iconfont icon-minus-circle pay-icon" /> -->
						<view style="padding: 5rpx 20rpx;">{{num}}</view>
						<view class="pay-icon" @click="increase">
							<image src="../../static/images/goods/jiahao.svg" class="pay-icon"></image>
						</view>
						<!-- <uni-icons class="iconfont icon-jiahao pay-icon"/> -->
					</view>
				</view>
				
			</view>
		</view>
		<!-- 价格 -->
		<view class="">
			<view class="flex flex-between mt20">
				<view>小计</view>
				<view>{{goods.retailPrice}}</view>
			</view>
			<view class="flex flex-between mt20">
				<view>实付金额</view>
				<view style="color: #ff7575">{{totalCount}}</view>
			</view>
		</view>
		<!-- 下单 -->
		<view class="submit-pay" @click="submitPay">
			￥{{totalCount}} 确认下单
		</view>
	</view>
</template>

<script>
	import navigationBar from '../../myComponents/navBar/navigationBar.vue'
	export default {
		components: {
			navigationBar
		},
		data() {
			return {
				goods: {},
				num: 1,
				totalCount: 0
			}
		},
		onLoad: function(option) {
			// uni.request({
			// 	url: getApp().globalData.apiUrl + '/demo/wx/goods/detail',
			// 	method: 'GET',
			// 	data: {
			// 		// id: option.id
			// 		id: 23860
			// 	},
			// 	success: (res) => {
			// 		this.goods = res.data.data.info
			// 		// let productList = res.data.data.productList
			// 		let list = [{num: 3}]
			// 		this.goods.productList = list
			// 		console.log(this.goods)
			// 		this.totalCount = this.num * this.goods.retailPrice
			// 	}
			// })
			this.goods = JSON.parse(decodeURIComponent(option.data))
		},
		methods: {
			reduce() {
				if(this.num < 1) {
					this.num -= 1;
				}else {
					uni.showToast({
					    title: '最少购买1件',
						icon: 'none',
					    duration: 2000
					});
				}
				this.totalCount = this.num * this.goods.retailPrice
			},
			increase() {
				if(this.num >= this.goods.productList[0].num) {
					uni.showToast({
					    title: '最多只能购买'+this.goods.productList[0].num+'件' ,
					    icon: 'none',
						duration: 2000
					});
				}else {
					this.num += 1;
				}
				this.totalCount = this.num * this.goods.retailPrice
			}
		}
	}
</script>

<style lang="scss">
	.pay {
		// width: 100%;
		margin: 20rpx;
		// padding: 20rpx;
		.pay-image {
			width: 150rpx;
			height: 150rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.pay-info {
			padding-bottom: 20rpx;
			border-bottom: 1px dashed #C0C0C0;
			.pay-name {
				width: 80%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				.pay-icon {
					color: #ff7575;
					width: 50rpx;
					height: 50rpx;
					image {
						width: 100%;
						height: 100%;
					}
				}
			}
		}
		.submit-pay {
			color: white;
			background-color: #ff7575;
			text-align: center;
			margin: 30rpx 0;
			padding: 20rpx 0;
		}
	}
</style>
