<template>
	<view class="home-container">
		<u-button type="primary" text="确定" @click="btnClick"></u-button>
		<view ref="demo">ref的使用</view>
	</view>
	<!-- tabbar -->
	<tabbar></tabbar>
</template>
<script setup>
import tabbar from '@/components/tabbar/tabbar.vue'
import { getSliderData } from '@/service/api/home.js'
import { onLoad, onShow } from '@dcloudio/uni-app'
onLoad(options => {
	uni.hideTabBar()
})
onShow(() => {
	uni.hideTabBar()
})
const btnClick = () => {
	console.log('btnClick')
	getSliderData()
		.then(res => {
			console.log(res)
		})
		.catch(err => {
			console.log(err)
		})
}
</script>
<style lang="scss" scoped></style>
