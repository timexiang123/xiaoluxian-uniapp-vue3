<script setup>
import tabbar from '@/components/tabbar/tabbar.vue'
import { onLoad, onShow } from '@dcloudio/uni-app'
import { ref } from 'vue'
import {navigateTo} from '@/utils/utils.js'
import {
	getFirstCategories,
	getSecondCategories
} from '@/service/api/category.js'
const contentH = ref(0)
const leftList = ref([])
const rightList = ref([])
const activeIndex = ref(0)
// 获取内容高度
const getContentH = () => {
	uni.getSystemInfo({
		success: res => {
			if (res.windowHeight) {
				contentH.value = res.windowHeight
			}
		}
	})
}
// 切换分类
const switchCategory = (index, id) => {
	if (activeIndex.value === index) return
	activeIndex.value = index
	// 请求二级分类数据
	getSecondCategoryData(id)
}
// 点击去分类详情
const toClassifyDetail = (id)=>{
	navigateTo('/pages/classification-detail/classification-detail?id='+id)
}
// 获取一级分类数据
const getFirstCategoryData = () => {
	getFirstCategories()
		.then(res => {
			if (res?.list?.length) {
				leftList.value = [{ id: -1, categoryName: '全部' }, ...res.list]
			}
		})
		.catch(err => {
			console.log(err)
		})
}
// 获取二级分类数据
const getSecondCategoryData = categoryId => {
	getSecondCategories(categoryId)
		.then(res => {
			if (res?.list?.length) {
				rightList.value = res.list
			}
		})
		.catch(err => {
			console.log(err)
		})
}
onLoad(options => {
	uni.hideTabBar()
	getContentH()
	getFirstCategoryData()
	getSecondCategoryData()
})
onShow(() => {
	uni.hideTabBar()
})
</script>
<template>
	<view class="classify-container">
		<!-- 公共头部 -->
		<common-header></common-header>
		<view class="content" :style="{ height: contentH * 2 + 'rpx' }">
			<scroll-view scroll-y class="left-content">
				<view class="category-list">
					<view
						class="category-item"
						:class="{ active: activeIndex === index }"
						v-for="(category, index) in leftList"
						:key="category.id"
						@click="switchCategory(index, category.id)"
					>
						<text>{{ category.categoryName }}</text>
					</view>
				</view>
			</scroll-view>
			<scroll-view scroll-y class="right-content">
				<view class="banner">
					<image src="/static/category-banner.png"></image>
				</view>
				<view class="category-list">
					<view
						class="category-item"
						v-for="category in rightList"
						:key="category.id"
						@click="toClassifyDetail(category.id)"
					>
						<u--image
							:src="
								category.thumbnail ||
									'/static/default_category.png'
							"
							width="90rpx"
							height="90rpx"
							shape="circle"
						></u--image>
						<text>{{category.categoryName}}</text>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
	<tabbar currentPath="classify"></tabbar>
</template>
<style lang="scss" scoped>
.classify-container {
	.content {
		display: flex;
		padding: 60px 0 70px;
		> scroll-view {
			color: #f00;
			height: 100%;
		}
		.left-content {
			width: 216rpx;
			background-color: #f7f7f7;
			.category-item {
				text-align: center;
				line-height: 120rpx;
				font-size: 16px;
				color: #777;
				border-right: 8rpx solid transparent;
				background-color: #f7f7f7;
				&.active {
					border-color: #388fff;
					color: #388fff;
					background-color: #fff;
				}
			}
		}
		.right-content {
			flex: 1;
			padding: 0 30rpx;
			.banner image {
				display: block;
				width: 239 * 2rpx;
				height: 96 * 2rpx;
				margin-top:20rpx;
			}
			.category-list{
				display: flex;
				flex-wrap: wrap;
				margin-top:44rpx;
				.category-item{
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					width:33.33333333333333%;
					margin-bottom: 64rpx;
					text{
						color:#a9a9a9;
						font-size: 24rpx;
						margin-top: 28rpx;
					}
				}
			}
		}
	}
}
</style>
