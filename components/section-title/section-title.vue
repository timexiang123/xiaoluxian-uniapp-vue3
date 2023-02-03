<script setup>
defineProps({
	title: {
		type: String,
		default: ''
	}
})
</script>
<template>
	<view class="section-title">
		<view class="title-left">{{title }}</view>
		<slot></slot>
	</view>
</template>
<style lang="scss" scoped>
.section-title {
	height: 54rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 26rpx;
	font-family: Microsoft YaHei;
	font-weight: 400;
	color: #a0a4ad;
	margin:30rpx 0;
	.title-left{
		font-size: 40rpx;
		font-family: Microsoft YaHei;
		font-weight: 400;
		color: #333;
	}
}
</style>
