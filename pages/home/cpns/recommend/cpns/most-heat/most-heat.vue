<script setup>
import { onMounted, ref} from 'vue'
import { getMostHeatData } from '@/service/api/home.js'
const page = ref(0)
const hasNextPage = ref(true)
const list = ref([])
const status = ref('loadmore')
// 请求课程数据
const getCoursesData = () => {
	if (hasNextPage.value) {
		page.value++
		status.value = 'loading'
		getMostHeatData(page.value)
			.then(res => {
				if (res?.pageInfo?.list?.length) {
					list.value.push(...res.pageInfo.list)
					hasNextPage.value = res.pageInfo.hasNextPage
					if(hasNextPage.value){
						status.value = 'loadmore'
					}else{
						status.value = 'nomore'
					}
				}
			})
			.catch(err => console.log(err))
	}
}
// 点击去课程详情页
const toCourseDetail = courseId => {
	uni.navigateTo({
		url: '/pages/course-details/course-details?courseId=' + courseId
	})
}
onMounted(getCoursesData)
</script>
<template>
	<view class="most-heat">
		<section-title title="大家都在看"></section-title>
		<view class="course-list" v-if="list.length">
			<course-card
				v-for="item in list"
				:key="item.id"
				:course="item"
				@click="toCourseDetail(item.id)"
			></course-card>
		</view>
		<!-- 加载更多 -->
		<view class="loader-more" v-if="list.length">
			<u-loadmore
				:status="status"
				height="30px"
				fontSize="16px"
				iconSize="17px"
				line
				loadingText="正在加载中..."
				loadingIcon="spinner"
				loadmoreText="点我加载更多数据"
				@loadmore="getCoursesData"
			/>
		</view>
	</view>
</template>
<style lang="scss" scoped>
.course-list {
	.course-card {
		padding: 30rpx 0;
		border-bottom: 1rpx solid #efefef;
	}
}
.loader-more {
	padding: 20rpx 0;
	:deep(.u-loadmore__content) {
		height: 100% !important;
		.u-loadmore__content__text {
			line-height: 20px !important;
		}
	}
}
</style>
