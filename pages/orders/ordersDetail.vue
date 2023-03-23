<template>
	<view class="pay">
		<view class="bar-sticky">
			　　<navigationBar custom="true"> 
					<view class="">
						<icon class="iconfont icon-fanhui"></icon>
						<view class="" style="text-align: center;">订单详情</view>
						<!-- <image src="../../static/images/logo.jpeg" mode=""></image> -->
					</view>　　　
				　　</navigationBar>
		</view>
		<!-- 状态信息 -->
		<view class="pay-status m20">
			<view>
				<icon type="success" size="20"/>
				<text class="pl20">{{status | dictFilter }}</text>
			</view>
			<view class="pay-ad pl20 mt10">期待您下次光临~</view>
		</view>
		<view class="order-bg"></view>
		<!-- 商品信息 -->
		<view class="flex pay-info m20">
			<!-- 左边 -->
			<view class="pay-image">
				<image :src="goods.picUrl" mode=""></image>
			</view>
			<!-- 右边 -->
			<view class="ml20 pay-name">
				<view>{{goods.goodsName}}</view>
				<view class="flex flex-between">
					<view>￥{{goods.price}}</view>
					<!-- <view class="flex">
						<view class="pay-icon" @click="reduce"><image src="../../static/images/goods/minus-circle.svg"></image></view>
						<view style="padding: 5rpx 20rpx;">{{num}}</view>
						<view class="pay-icon" @click="increase">
							<image src="../../static/images/goods/jiahao.svg" class="pay-icon"></image>
						</view>
					</view> -->
				</view>
				
			</view>
		</view>
		<view class="order-bg"></view>
		<!-- 券码信息 -->
		<view class="card">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :style="{height: listHeight}">
			                        <swiper-item>
			                            <view class="swiper-item m20">
											<view class="flex">
												<view>卡号</view>
												<view class="ml20">1231312</view>
											</view>
											<view class="flex">
												<view>卡密</view>
												<view class="ml20">2423423</view>
											</view>
											<view class="flex" style="justify-content: center;">
												<view class="card-img">
													<image src="../../static/images/dianying.png" @load="fixSwiperHeight('.swiper-item')"></image>
												</view>
											</view>
											
										</view>
			                        </swiper-item>
			                        <swiper-item>
			                            <view class="swiper-item uni-bg-green">B</view>
			                        </swiper-item>
			                        <swiper-item>
			                            <view class="swiper-item uni-bg-blue">C</view>
			                        </swiper-item>
			                    </swiper>
		</view>
		<view class="order-bg"></view>
		<!-- 订单信息 -->
		<view class="m20">
			<view>订单信息</view>
			<view style="font-size: 28rpx;">
				<view class="flex flex-between mt20">
					<view>订单编号</view>
					<view>{{orderInfo.orderSn}}</view>
				</view>
				<view class="flex flex-between mt20">
					<view>商品总额</view>
					<view>{{orderInfo.actualPrice}}</view>
				</view>
				<view class="flex flex-between mt20">
					<view>下单时间</view>
					<view>{{orderInfo.addTime}}</view>
				</view>
			</view>
		</view>
		<view class="order-bg"></view>
		<!-- 下单 -->
		<!-- <view class="submit-pay" @click="submitPay">
			￥{{totalCount}} 确认下单
		</view> -->
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
				orderInfo: {},
				num: 1,
				totalCount: 0,
				status: 0,
				background: ['color1', 'color2', 'color3'],
				            indicatorDots: true,
				            autoplay: false,
				            interval: 2000,
				            duration: 500,
							listHeight: 0
			}
		},
		onLoad: function(option) {
			this.status = 102
			// this.status = option.status
			uni.request({
				url: getApp().globalData.apiUrl + '/demo/wx/order/detail',
				method: 'GET',
				data: {
					orderId: 12,
					// orderId: option.orderId
				},
				success: (res) => {
					console.log(res)
					this.goods = res.data.data.orderGoods[0]
					this.orderInfo = res.data.data.orderInfo
				}
			})
			// this.goods = JSON.parse(decodeURIComponent(option.data))
			
		},
		filters: {
			nameFilter(data) {
				if (data.length > 12) {
					return data = data.slice(0, 12) + '...'
				}
		
			},
			dictFilter(data) {
				let result = ''
				if (data == 101) {
					result = '待付款'
				} else if (data == 102 || data == 103) {
					result = '已取消'
				} else if (data == 201) {
					result = '待发货'
				} else if (data == 202) {
					result = '退款中'
				} else if (data == 203) {
					result = '已退款'
				} else if (data == 301) {
					result = '已发货'
				} else if (data == 401 || data == 402) {
					result = '已完成'
				} else {
					result = ''
				}
				return result
			}
		},
		methods: {
			fixSwiperHeight(className){
					let _this = this
					let info = uni.createSelectorQuery().select(className);
					info.boundingClientRect((data) => {
			            _this.listHeight = data.height + 30 + 'px'; 
					}).exec();
				}
			// reduce() {
			// 	if(this.num < 1) {
			// 		this.num -= 1;
			// 	}else {
			// 		uni.showToast({
			// 		    title: '最少购买1件',
			// 			icon: 'none',
			// 		    duration: 2000
			// 		});
			// 	}
			// 	this.totalCount = this.num * this.goods.retailPrice
			// },
			// increase() {
			// 	if(this.num >= this.goods.productList[0].num) {
			// 		uni.showToast({
			// 		    title: '最多只能购买'+this.goods.productList[0].num+'件' ,
			// 		    icon: 'none',
			// 			duration: 2000
			// 		});
			// 	}else {
			// 		this.num += 1;
			// 	}
			// 	this.totalCount = this.num * this.goods.retailPrice
			// }
		}
	}
</script>

<style lang="scss" scoped>
	.pay {
		// width: 100%;
		// margin: 20rpx;
		// padding: 20rpx;
		.pay-status {
			text-align: center;
			.pay-ad {
				font-size: 26rpx;
				color: #C0C0C0;
			}
		}
		.pay-image {
			width: 150rpx;
			height: 150rpx;
			border-radius: 30rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.pay-info {
			padding-bottom: 20rpx;
			// border-bottom: 1px dashed #C0C0C0;
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
		.order-bg {
			height: 20rpx;
			background-color: #F5F5F5;
		}
		.submit-pay {
			color: white;
			background-color: #ff7575;
			text-align: center;
			margin: 30rpx 0;
			padding: 20rpx 0;
		}
		.card {
			.card-img {
				width: 200rpx;
				height: 200rpx;
				padding: 20rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
		
	}
</style>
