<template>
	<view class="profile-container">我的</view>
	<tabbar currentPath="profile"></tabbar>
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
<style lang="scss" scoped></style>
