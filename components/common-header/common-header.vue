<script setup>
	import {navigateTo} from '@/utils/utils.js'
	// 去关于页面
	const toAboutPage = ()=>{
		navigateTo('/pages/about/about')
	}
</script>
<template>
	<view class="common-header">
		<view class="header-main">
			<view class="header-left">
				<view class="left">
					<u-icon name="search" color="#000" size="44rpx"></u-icon>
					<text>去搜索</text>
				</view>
				<view class="right">
					<u-icon name="scan" color="#000" size="44rpx"></u-icon>
				</view>
			</view>
			<view class="header-right" @click="toAboutPage">
				<image src="/static/header-message.png" alt="信息" />
			</view>
		</view>
	</view>
</template>


<style lang="scss" scoped>
	.common-header{
		position:fixed;
		left:0;
		right:0;
		top:0;
		height:120rpx;
		background-color: rgb(255,255,255);
		border-bottom: 1rpx solid #fafbfc;
		.header-main{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding:0 30rpx;
			height:100%;
		}
		.header-left{
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex:1;
			height:60rpx;
			padding:0 16rpx;
			border-radius:30rpx;
			background-color: #f0f1f3;
			.left{
				display: flex;
				align-items: center;
				text{
					font-size:24rpx;
					color:#848e94;
				}
			}
		}
		.header-right{
			image{
				width:44rpx;
				height:44rpx;
				margin-left:44rpx;
			}
		}
	}
</style>