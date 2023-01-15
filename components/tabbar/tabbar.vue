<template>
	<u-toast ref="uToast"></u-toast>
	<view class="tab">
		<view
			class="tab-item"
			v-for="(item, index) in tabbarList"
			:key="index"
			@tap="changeTab(item.path)"
		>
			<image
				class="tab-img"
				:src="item.path === currentPath ? item.selectedIcon : item.icon"
				mode=""
			></image>
			<text
				class="tab-name"
				:class="item.path === currentPath ? 'seleceted' : ''"
			>
				{{ item.name }}
			</text>
		</view>
		<u-toast ref="uToast" />
	</view>
</template>

<script setup>
import {ref} from 'vue'
import list from './list.js'
const tabbarList = ref(list)
defineProps({
	currentPath:{
		type:String,
		default:'home'
	}
})
// 切换tab
const changeTab = (path)=>{
	if(path === 'study'){
		const userInfo = uni.getStorageSync('userInfo') || {}
		// if(!userInfo.id) return this.toast('请先登录，再查看学习状态')
	}
	uni.switchTab({
		// pages/home/home
		url: '/pages/'+path + '/' + path,
		animationType: 'none'
	})
}

</script>

<style scoped>
/* tabbar */
.tab {
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 9999;
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	height: 70px;
	border-top: 1px solid #eee;
	background-color: #ffffff;
}

.tab-item {
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}

.tab-img {
	width: 42rpx;
	height: 42rpx;
}

.tab-name {
	padding-top: 16rpx;
	font-size: 24rpx;
}

.seleceted {
	color: rgba(62, 139, 248, 1);
}
</style>
