<script setup>
import { ref, onMounted, computed } from 'vue'
import { searchCourse } from '@/service/api/course.js'
const tabs = ref([
	{
		sortBy: null,
		label: '综合推荐'
	},
	{
		sortBy: 'clicks-desc',
		label: '最新上架'
	},
	{
		sortBy: 'purchase-desc',
		label: '浏览最多'
	}
])
const activeTabIndex = ref(0)
const pageNum = ref(0)
const hasNextPage = ref(true)
const list = ref([])
const status = ref('loadmore')
// 切换tab
const switchTab = index => {
	if (activeTabIndex.value === index) return
	activeTabIndex.value = index
	resetData()
	getCoursesData()
}
const currentSortBy = computed(() => tabs.value[activeTabIndex.value].sortBy)
const resetData = () => {
	pageNum.value = 0
	hasNextPage.value = true
	list.value = []
	status.value = 'loadmore'
}
// 查询课程
const getCoursesData = () => {
	if (hasNextPage.value) {
		pageNum.value++
		status.value = 'loading'
		searchCourse({
			pageNum: pageNum.value,
			pageSize: 10,
			entity: {
				isFree: 1,
				sortBy: currentSortBy.value
			}
		})
			.then(res => {
				if (res?.pageInfo?.list?.length) {
					list.value.push(...res.pageInfo.list)
					hasNextPage.value = res.pageInfo.hasNextPage
					if (hasNextPage.value) {
						status.value = 'loadmore'
					} else {
						status.value = 'nomore'
					}
				}
			})
			.catch(err => console.log(err))
	}
}
onMounted(getCoursesData)
</script>
<template>
	<view class="free-container">
		<!-- tabs -->
		<view class="tabs">
			<view
				class="tab-item"
				:class="{ active: activeTabIndex === index }"
				v-for="(tab, index) in tabs"
				@click="switchTab(index)"
				:key="tab.label"
			>
				<text>{{ tab.label }}</text>
			</view>
		</view>
		<!-- list -->
		<view class="course-list" v-if="list.length">
			<course-card
				v-for="course in list"
				:key="course.id"
				:course="course"
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
.free-container {
	.tabs {
		display: flex;
		align-items: center;
		margin: 30rpx 0;
		.tab-item {
			color: #a0a4ad;
			margin-right: 30rpx;
			&.active text {
				color: #388fff;
				font-weight: bold;
			}
		}
	}
	.course-list {
		.course-card {
			margin-bottom: 30rpx;
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
}
</style>
