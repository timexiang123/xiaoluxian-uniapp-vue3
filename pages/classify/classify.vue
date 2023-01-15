<template>
	<view class="classify-container">分类页</view>
	<tabbar currentPath='classify'></tabbar>
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