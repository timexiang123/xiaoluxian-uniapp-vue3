<template>
	<view class="study-container">学习</view>
	<tabbar currentPath="study"></tabbar>
</template>
<script setup>
	import tabbar from '@/components/tabbar/tabbar.vue'
	import { onLoad, onShow } from '@dcloudio/uni-app'
		onLoad(options => {
			uni.hideTabBar()
		})
		onShow(() => {
			uni.hideTabBar()
		})
</script>
<style lang='scss' scoped></style>