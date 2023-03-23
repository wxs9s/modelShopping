<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	},
	globalData: {
		apiUrl: 'http://192.168.1.6:8080',
		enterprise: null,
		openId: '',
		userInfo: {}
	}
};
</script>

<style>
/* 引入iconfont图标样式 */
@import url("./static/fonts/iconfont.css");
@import url("./static/css/common.css");
@import url("./static/css/index.css");
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */

</style>
