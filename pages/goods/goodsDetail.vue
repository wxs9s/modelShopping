<template>
	<view class="card-detail m20">
		<view class="bar-sticky">
			　　<navigationBar custom="true"> 
					<view class="">
						<view class="">商品详情</view>
						<!-- <image src="../../static/images/logo.jpeg" mode=""></image> -->
					</view>　　　
				　　</navigationBar>
		</view>
		<!-- 标题 -->
		<view class="detail-title">
			{{goodDetail.name}}
		</view>
		<view class="flex flex-between detail-sale">
			<view>
				{{goodDetail.brief}}
			</view>
			<view>
				已售{{goodDetail.sales}}
			</view>
		</view>
		<!-- 图片 -->
		<view class="flex detail-image">
			<view class="detail-image-item" v-for="(item,index) in goodDetail.gallery" :key="index">
				<image :src="item"></image>
			</view>
		</view>
		<!-- 温馨提示 -->
		<view class="detail-rules">
			<view class="detail-title">
				温馨提示
			</view>
			<view class="detail-tip" v-html="goodDetail.detail"></view>
		</view>
		<!-- 下单 -->
		<view class="big">
			<view class="detail-pay">
				<view class="detail-pay-left">
					<view class="price">
						<text>￥{{goodDetail.retailPrice}}</text>
					</view>
					<view class="price">
						<text>原价 ￥{{goodDetail.counterPrice}}</text>
					</view>
				</view>
				<view class="detail-pay-right" @click="submitPay">
					立即抢购
				</view>
			</view>
			
		</view>
		<!-- <swiper style="width: auto;" class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="(item,index) in goodDetail.gallery" :key="index">
				<view class="card-image">
					<image :src="item"></image>
				</view>
			</swiper-item>
		</swiper> -->

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
				background: ['color1', 'color2', 'color3'],
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				cardObj: {
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
				goodDetail: {}
			}
		},
		onLoad: function(option) {
			uni.request({
				url: getApp().globalData.apiUrl + '/demo/wx/goods/detail',
				method: 'GET',
				data: {
					id: option.id
					// id: 23860
				},
				success: (res) => {
					console.log(res)
					this.goodDetail = res.data.data.info
					let productList = res.data.data.productList
					this.goodDetail.productList = productList
				}
			})
		},
		methods: {
			submitPay() {
				if(this.goodDetail.productList) {
					uni.navigateTo({
						url: '../goods/goodsPay?data=' + encodeURIComponent(JSON.stringify(this.goodDetail))
					})
				}else {
					uni.showToast({
					    title: '库存不足',
						icon: 'none',
					    duration: 2000
					});
				}
			}
		}
	}
</script>

<style lang="scss">
	.card-detail {
		.detail-title {
			font-size: 42rpx;
			font-weight: 700;
			padding-bottom: 10rpx;
		}

		.detail-sale {
			font-size: 24rpx;
			color: #969896;
		}

		.detail-image {
			margin: 20rpx 0;
			.detail-image-item {
				width: 350rpx;
				height: 200rpx;

				image {
					width: 100%;
					height: 100%;
				}

				&:nth-child(n+2) {
					margin-left: 20rpx;
				}
			}

		}
		.detail-rules {
			margin-bottom: 140rpx;
			.detail-tip {
				font-size: 28rpx;
			}
		}
		
		.big {
			position: fixed;
			left: 10rpx;
			right: 10rpx;
			bottom: 20rpx;
		}
		.detail-pay {
			display: flex;
			color: white;
			.detail-pay-left {
				flex: 2;
				background-color: #404040;
				border-radius: 50rpx 0 0 50rpx;
				padding: 10rpx 40rpx;
				.price {
					&:first-child {
						font-size: 28rpx;
						padding-bottom: 5rpx;
					}
					&:last-child {
						font-size: 22rpx;
						text-decoration-line: line-through;
					}
				}
			}
			.detail-pay-right {
				flex: 1;
				font-size: 42rpx;
				text-align: center;
				line-height: 92rpx;
				background-color: #ff7575;
				border-radius: 0 50rpx 50rpx 0;
				padding: 0 20rpx;
				
			}
		}
		
		.card-image {
			width: 100%;
			height: 100rpx;

			img {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
