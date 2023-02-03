<script setup>
	import {onMounted,ref} from 'vue'
	import {getMostNewData} from "@/service/api/home.js"
	const list = ref([])
	onMounted(()=>{
		getMostNewData().then(res=>{
			if(res?.pageInfo?.list?.length){
				list.value = res.pageInfo.list
			}
		}).catch(err=>console.log(err))
	})
</script>

<template>
	<view class="most-new">
		<!-- 标题 -->
		<section-title title="新上好课"></section-title>
		<!-- 课程列表 -->
		<view class="course-list" v-if="list.length">
			<course-card v-for="item in list" :course="item" :key="item.id"></course-card>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.course-list{
		.course-card{
			padding:30rpx 0;
			border-bottom: 1rpx solid #efefef;
		}
	}
</style>
