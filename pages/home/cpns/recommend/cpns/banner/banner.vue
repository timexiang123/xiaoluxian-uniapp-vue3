<script setup>
import { getSliderData } from '@/service/api/home.js'
import { onMounted, ref } from 'vue'
const list = ref([])
const imageList = ref([])
const current = ref(0)
const changeBanner = banner => {
	current.value = banner.current
}
onMounted(() => {
	getSliderData()
		.then(res => {
			if (res?.list?.length) {
				list.value = res.list
				list.value.forEach(item => {
					imageList.value.push(item.imageUrl)
				})
			}
		})
		.catch(err => {
			console.log('拉取轮播图数据失败', err)
		})
})
</script>
<template>
	<view class="home-banner">
		<u-swiper
			:list="imageList"
			:height="300"
			:radius="10"
			:current="current"
			circular
			@change="changeBanner"
		>
			<template #indicator>
				<view class="dots">
					<view
						class="dot"
						:class="{active:current===index}"
						v-for="(item,index) in imageList"
						:key="item"
					></view>
				</view>
			</template>
		</u-swiper>
	</view>
</template>

<style lang="scss" scoped>
.home-banner {
	margin-top: 30rpx;
	position: relative;
	:deep(.u-swiper__indicator ){
		position: absolute;
		bottom:16rpx;
		right:16rpx;
		.dots{
			position: absolute;
			bottom:0;
			right: 0;
			z-index: 99;
			display: flex;
			justify-content: center;
		}
		
		.dot {
			width: 12rpx;
			height: 8rpx;
			transition: all 0.6s;
			background: rgba(0, 0, 0, 0.1);
			margin-right: 16rpx;
			border-radius: 2rpx;
			&.active {
				width: 16rpx;
				height: 8rpx;
				background-color: #fff;
			}
		}
	}
}
</style>
