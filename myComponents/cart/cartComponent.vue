<template>
	<view>
		<!-- 横向滚动菜单 -->
		<scroll-view :scroll-left="scrolllLeft" scroll-x="true" class="bookshelf-content">
			<block v-for="(item, index) in titles" :key="index">
				<view :class="tabIndex == index ? 'active':''" class="item" @click="changeTitle(index,item)">
					<text class="item-title">{{item}}</text>
				</view>
			</block>
		</scroll-view>
		<view class="mt10">
			<block v-for="(item,index) in dataList">
				<view :class="item.status == 1 ? 'addOpacity': ''" class="cart-box flex flex-between">
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
			</block>
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
			dataList: {
				type: Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {
				tabIndex: 0,
				scrolllLeft: 0,
			}
		},
		methods: {
			changeTitle(index, val) {
				this.tabIndex = index
				this.scrolllLeft = index * 75
				this.$emit('changeList', val)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bookshelf-content {
		white-space: nowrap; // 滚动必须加的属性
		width: 100%;
		padding-top: 20rpx;
		margin: 0 auto;

		.item {
			width: 30%;
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

	.cart-box {
		width: 92%;
		margin: 20rpx;
		padding: 10rpx;
		border: 1px solid #E5E5E5;
		border-radius: 10rpx;
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

	.active {
		color: red;
		border-bottom: 1px solid #DF5000;
		padding-bottom: 10rpx;
		margin-left: 0;
	}

	.addOpacity {
		background: #efefef;

		image {
			opacity: 0.6;
		}

		.title {
			opacity: 0.6;
		}

	}
</style>
