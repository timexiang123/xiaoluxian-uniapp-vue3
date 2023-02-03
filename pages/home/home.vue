<script setup>
import Tabbar from '@/components/tabbar/tabbar.vue'
import Recommend from './cpns/recommend/recommend.vue'
import FreeCourse from './cpns/free-course/free-course.vue'
import PraticeCourse from './cpns/pratice-course/pratice-course.vue'
import { getSliderData } from '@/service/api/home.js'
import { onLoad, onShow } from '@dcloudio/uni-app'
import {ref} from 'vue'
const tabs = ref([
	{
		name:'今日推荐'
	},
	{
		name:'免费课程'
	},
	{
		name:'实战课程'
	}
])
const currentTabIndex = ref(1)
const scrollViewH = ref(0)
// 获取scrollView的高度
const getScrollViewH = ()=>{
	uni.getSystemInfo({
		success:(res)=>{
			if(res.windowHeight){
				scrollViewH.value =  res.windowHeight - 60 - 70
			}
		}
	})
}
// 切换Tab
const changeTab=(tab)=>{
	if(tab.index === currentTabIndex.value) return
	currentTabIndex.value = tab.index
}
// changeSwiper
const changeSwiper = (e)=>{
	currentTabIndex.value = e.detail.current
}
onLoad(options => {
	uni.hideTabBar()
})
onShow(() => {
	uni.hideTabBar()
	// 获取scrollView的高度
	getScrollViewH()
})
</script>
<template>
	<view class="home-container">
		<!-- 公共头部 -->
		<common-header></common-header>
		<!-- home-content -->
		<view class="home-content">
			<!-- tabs -->
			<view class="tabs-container">
				<u-tabs :list="tabs" :scrollable="false" lineColor="#388fff" lineWidth="88" lineHeight="8" :activeStyle="{
					color:'#388fff',
					fontWeight:'bold'
				}" :current="currentTabIndex" @change="changeTab"></u-tabs>
			</view>
			<!-- content -->
			<view class="home-main" :style="{height:scrollViewH*2+'rpx'}">
				<swiper :current="currentTabIndex" @change="changeSwiper">
					<!-- 今日推荐 -->
					<swiper-item>
						<scroll-view scroll-y>
							<recommend/>
						</scroll-view>
					</swiper-item>
					<!-- 免费课程-->
					<swiper-item>
						<scroll-view scroll-y>
							<free-course />
						</scroll-view>
					</swiper-item>
					<!-- 实战课程 -->
					<swiper-item>
						<scroll-view scroll-y>
							<pratice-course />
						</scroll-view>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</view>
	<!-- tabbar -->
	<tabbar></tabbar>
</template>
<style lang="scss" scoped>
.home-content {
	padding: 120rpx 30rpx 140rpx;
	.tabs-container{
		position: fixed;
		left:0;
		right:0;
		top:120rpx;
		height:44px;
		:deep(.u-tabs__wrapper__nav__line) {
			left: 44rpx;
		}
	}
	.home-main{
		padding-top:44px;
			swiper{
				height:100%;
				scroll-view{
					height:100%;
				}
			}
	}

}
</style>
