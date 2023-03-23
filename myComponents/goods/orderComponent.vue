<template>
	<view class="">
		<scroll-view :scroll-left="scrolllLeft" scroll-x="true" class="bookshelf-content">
			<block v-for="(item, index) in titles" :key="index">
				<view :class="tabIndex == index ? 'active':''" class="order-item" @click="changeTitle(index)">
					<text class="item-title">{{item}}</text>
				</view>
			</block>
		</scroll-view>
		<view class="order-info">
			<view class="order-item" v-for="(item,i) in goodsList" :key="i" @click="toOrderDetail(item)">
				<view class="order-name flex flex-between">
					<view>{{item.goodsList[0].goodsName | nameFilter}}</view>
					<view class="order-status">{{item.orderStatusText | dictFilter }}</view>
				</view>
				<view class="order-message flex">
					<view class="order-image">
						<image :src="item.goodsList[0].picUrl"></image>
					</view>
					<view class="order-text">
						<view class="flex flex-between">
							<view>￥{{item.goodsList[0].price}}</view>
							<view>× {{item.goodsList[0].number}}</view>
						</view>
						<view>下单时间：{{item.addTime}}</view>
					</view>
				</view>
				<view class="flex flex-end m10" style="font-size: 28rpx;">
					总价 ￥{{item.actualPrice}}
				</view>
				<view class="order-status-btn">
					<view class="order-btn">{{btn[item.orderStatusText]}}</view>
				</view>
				<!-- <view style="height: 20rpx;background-color: #C0C0C0;"></view> -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			titles: {
				type: Array,
				default () {
					return []
				}
			},
			goodsList: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {
				tabIndex: 0,
				btn: {
					101: '去支付',
					102: '重新购买',
					103: '重新购买',
					201: '提醒发货',
					203: '重新购买',
					401: '重新购买',
					402: '重新购买'
				}
			}
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
			changeTitle(index) {
				// uni.showNavigationBarLoading()
				this.tabIndex = index
				this.scrolllLeft = index * 75
				this.$emit('changeList', index)
			},
			toOrderDetail(data) {
				this.$emit('getOrderDetail', data)
			}
		}
	}
</script>

<style lang="scss">
	.bookshelf-content {
		white-space: nowrap; // 滚动必须加的属性
		width: 100%;
		padding-top: 20rpx;
		margin: 0 auto;

		.order-item {
			width: 17%;
			padding: 10rpx 30rpx;
			// margin-right: 20rpx;
			display: inline-block;
			vertical-align: top;

			// padding-left: 20rpx;
			.item-title {
				display: block; // 让字体换行
				width: 90%;
				font-size: 30rpx;
				line-height: 40rpx;
				text-align: center;
			}
		}
	}

	.active {
		color: red;
		border-bottom: 1px solid #DF5000;
		padding-bottom: 10rpx;
		margin-left: 0;
	}

	.order-info {
		border-top: 1px solid #999999;
		background-color: #EEEEEE;

		.order-item {
			background-color: white;
			margin: 20rpx;
			padding: 20rpx;
			border-radius: 30rpx;

			// margin-bottom: 20rpx;
			.order-name {
				margin-bottom: 10rpx;

				// color: #999999;
				.order-status {
					color: #FF5511;
					font-size: 28rpx;
				}
			}

			.order-image {
				flex: 1;
				width: 150rpx;
				height: 150rpx;

				image {
					width: 100%;
					height: 100%;
				}
			}

			.order-text {
				flex: 3;
				color: #808080;
				font-size: 28rpx;
				margin-left: 20rpx;
				padding-top: 25rpx;
			}

			.order-status-btn {
				display: flex;
				justify-content: flex-end;
				margin-right: 10rpx;

				.order-btn {
					font-weight: 400;
					font-size: 28rpx;
					color: #FF5511;
					border-radius: 50rpx;
					border: 1px solid #FF5511;
					padding: 10rpx 40rpx;
				}
			}

		}
	}
</style>
