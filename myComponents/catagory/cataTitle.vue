<template>
	<!-- 分类 -->
	<view class="catagory">
		<view class="cata_title">
			<icon class="iconfont icon-sousuo"></icon>
			<text>{{name}}</text>
		</view>
		<view style="color: red;">
			...
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			name: {
				type: String,
				default: 'bb'
			}
		},
		data() {
			return {}
		}
	}
</script>

<style lang="scss" scoped>
	.catagory {
		display: flex;
		justify-content: space-between;
		margin: 20rpx 0 0;
		padding: 20rpx;
		border-bottom: 1px solid #F7F7F7;
	}
	.cata_title{
		text {
			font-size: 32rpx;
		}
	}
</style>
