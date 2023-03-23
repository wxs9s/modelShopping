<template>
	<view>
		<view class="bar-sticky">
			　　<navigationBar custom="true"> 　　　
					首页
				　　</navigationBar>
		</view>
		<!-- 搜索框 -->
		<view class="searchInput">
			<input  class="uni-input" placeholder-class="iconfont icon-sousuo"  placeholder-style="color: #C0C0C0;font-size: 30rpx;" type="text" placeholder="搜索优惠券" />
		</view>
		<!-- 横向滚动菜单 -->
		<scroll-view :scroll-left="scrolllLeft" scroll-x="true" class="bookshelf-content">
		 <block v-for="(item, index) in titles" :key="index">
		  <view :class="tabIndex == index ? 'active':''" class="item" @click="changeTitle(index)">
			<text class="item-title">{{item.name}}</text>
		  </view>
		</block>
	  </scroll-view>
	  <view class="mt10">
		  <block v-for="(item,index) in dataList" :key="index">
			  <view :class="item.status == 1 ? 'addOpacity': ''" class="cart-box flex flex-between" @click="toDetail(item)">
			  		<view class="flex">
			  			<image :src="item.picUrl"></image>
			  			<view class="cart-content ml20">
			  				<view class="title">{{item.name}}</view>
			  				<!-- <view class="title">{{item.desc}}</view> -->
			  				<!-- <view class="title">已成交{{item.hadSale}}个，<text style="color: black;font-size: 28rpx;">在售{{item.onSale}}个</text></view> -->
			  				<view class="title">{{item.brief}}</view>
			  			</view>
			  		</view>
			  		<view class="cart-right">
			  			<view class="title">￥{{item.retailPrice}}</view>
			  			<view class="title">￥{{item.counterPrice}}</view>
			  		</view>
			  </view>
		  </block>
	  	 </view>
		 <view v-show="loadMore.isLoadMore">
		 	<uni-load-more :status="loadMore.loadStatus"></uni-load-more>
		 </view>
	</view>
	<!-- <view v-else></view> -->
</template>

<script>
	import navigationBar from '../../myComponents/navBar/navigationBar.vue'
	export default {
		components: {
			navigationBar
		},
		props: {
			titles: {
				type: Array,
				default() {
					return []
				}
			},
			dataList: {
				type: Array,
				default() {
					return []
				}
			},
			loadMore: {
				type: Object,
				default: {}
			}
		},
		data() {
			return {
				tabIndex: 0,
				scrolllLeft: 0,
			}
		},
		methods: {
			changeTitle(index) {
				// uni.showNavigationBarLoading()
				this.tabIndex = index
				this.scrolllLeft = index * 75
				this.$emit('changeList',index)
			},
			toDetail(data) {
				this.$emit('toDetail', data)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.searchInput {
		border-radius: 50rpx;
		margin: 20rpx;
		padding: 10rpx;
		background-color: #F8F8F8;
		text-align: center;
	}
	.bookshelf-content {
		white-space: nowrap; // 滚动必须加的属性
		width: 100%;
		padding-top: 20rpx;
		margin: 0 auto;
		.item {
		  width: 12%;
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
	  		&:nth-child(2), &:nth-child(3) {
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
			  opacity:0.6;
		  }
		  .title {
			  opacity:0.6;
		  }
		  
	  }
</style>
