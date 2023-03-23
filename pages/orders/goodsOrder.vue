<template>
	<Order :titles="titles" :goodsList="goodsList" @changeList="getGoodsList" @getOrderDetail="getOrderDetail"></Order>
</template>

<script>
	import Order from '../../myComponents/goods/orderComponent.vue'
	export default {
		components: {
			Order
		},
		data() {
			return {
				titles: ['全部','待支付','待发货','已完成'],
				goodsList: []
			}
		},
		onLoad: function(option) {
			this.getGoodsList(option.index)
			// uni.request({
			// 	url: getApp().globalData.apiUrl + '/demo/wx/order/list',
			// 	method: 'GET',
			// 	data: {
			// 		// todo
			// 		// showType: options.index
			// 		showType: 0
			// 	},
			// 	success: (res) => {
			// 		console.log(res.data.data.data)
			// 		this.goodsList = res.data.data.data
			// 	}
			// })
		},
		methods: {
			getGoodsList(type) {
				uni.request({
					url: getApp().globalData.apiUrl + '/demo/wx/order/list',
					method: 'GET',
					data: {
						// todo
						// showType: options.index
						showType: 0
					},
					success: (res) => {
						if(res.data.errNo == 501) {
							
						}
						console.log(res.data.data.data)
						this.goodsList = res.data.data.data
					}
				})
			},
			getOrderDetail(data) {
				console.log(data)
				uni.navigateTo({
					url: 'ordersDetail?orderId=' + data.id + '&status=' + data.orderStatusText
 				})
			}
		}
	}
</script>

<style>
</style>
