<template>
	<CartComp :titles="cataTitles" :dataList="contentList" @changeList="changeList"></CartComp>
</template>

<script>
	import CartComp from '../../myComponents/cart/cartComponent.vue'
	export default {
		components: {
			CartComp
		},
		data() {
			return {
				scrolllLeft: 0,
				tabIndex: 0,
				cataTitles: ['美食饮品','商超购物','生活出行','视频电影'],
				contentList: [],
				foodList: [
					{
						'name': '苏宁小店50元礼品卡',
						'desc': '转赠',
						'newPaper': 18.90,
						'oldPaper': 38.00,
						'image': '../../static/images/suning.jpg',
						'hadSale': 230,
						'onSale': 400,
						'promise': '品质保证，售后无忧',
						'status': 0
					},
					{
						'name': '瑞幸咖啡28元抵用券',
						'desc': '瑞幸咖啡小程序或者app使用',
						'newPaper': 12.90,
						'oldPaper': 20.00,
						'image': '../../static/images/ruixing.jpg',
						'hadSale': 130,
						'onSale': 400,
						'promise': '品质保证，售后无忧',
						'status': 0
					},
					{
						'name': '肯德基50元代金券',
						'desc': '实体店消费抵扣',
						'newPaper': 0.01,
						'oldPaper': 38.00,
						'image': '../../static/images/kendeji.jpg',
						'hadSale': 230,
						'onSale': 400,
						'promise': '品质保证，售后无忧',
						'status': 1
					}
				],
				cartList: [
					{
						'name': '肯德基50元代金券',
						'desc': '实体店消费抵扣',
						'newPaper': 0.01,
						'oldPaper': 38.00,
						'image': '../../static/images/kendeji.jpg',
						'hadSale': 230,
						'onSale': 400,
						'promise': '品质保证，售后无忧',
						'status': 0
					},
					{
						'name': '肯德基50元代金券',
						'desc': '实体店消费抵扣',
						'newPaper': 0.01,
						'oldPaper': 38.00,
						'image': '../../static/images/maidanglao.jpeg',
						'hadSale': 230,
						'onSale': 400,
						'promise': '品质保证，售后无忧',
						'status': 0
					},
					{
						'name': '肯德基50元代金券',
						'desc': '实体店消费抵扣',
						'newPaper': 0.01,
						'oldPaper': 38.00,
						'image': '../../static/images/kendeji.jpg',
						'hadSale': 230,
						'onSale': 400,
						'promise': '品质保证，售后无忧',
						'status': 0
					},
					{
						'name': '肯德基50元代金券',
						'desc': '实体店消费抵扣',
						'newPaper': 0.01,
						'oldPaper': 38.00,
						'image': '../../static/images/maidanglao.jpeg',
						'hadSale': 230,
						'onSale': 400,
						'promise': '品质保证，售后无忧',
						'status': 0
					},
					{
						'name': '肯德基50元代金券',
						'desc': '实体店消费抵扣',
						'newPaper': 0.01,
						'oldPaper': 38.00,
						'image': '../../static/images/kendeji.jpg',
						'hadSale': 230,
						'onSale': 400,
						'promise': '品质保证，售后无忧',
						'status': 1
					},
					{
						'name': '肯德基50元代金券',
						'desc': '实体店消费抵扣',
						'newPaper': 0.01,
						'oldPaper': 38.00,
						'image': '../../static/images/maidanglao.jpeg',
						'hadSale': 230,
						'onSale': 400,
						'promise': '品质保证，售后无忧',
						'status': 1
					},
					{
						'name': '肯德基50元代金券',
						'desc': '实体店消费抵扣',
						'newPaper': 0.01,
						'oldPaper': 38.00,
						'image': '../../static/images/kendeji.jpg',
						'hadSale': 230,
						'onSale': 400,
						'promise': '品质保证，售后无忧',
						'status': 1
					},
					{
						'name': '肯德基50元代金券',
						'desc': '实体店消费抵扣',
						'newPaper': 0.01,
						'oldPaper': 38.00,
						'image': '../../static/images/maidanglao.jpeg',
						'hadSale': 230,
						'onSale': 400,
						'promise': '品质保证，售后无忧',
						'status': 1
					}
				]
			}
		},
		created() {
			this.contentList = this.foodList
		},
		methods: {
			changeList(val) {
				switch(val) {
					case '美食券' : this.contentList = this.cartList
						break;
					case '视频券' : this.contentList = this.movieList
						break;
					default: 
						this.contentList = this.movieList
						break
				}
			}
		}
	}
</script>

<style>
</style>
