<script setup>
	import {ref} from 'vue'
	import {onLoad} from '@dcloudio/uni-app'
	const courseId = ref('')
	onLoad((options)=>{
		if(options.courseId){
			courseId.value = options.courseId
		}
	})
</script>
<template>
	<view class="course-details">
		课程详情==={{courseId}}
	</view>
</template>
<style lang="scss" scoped></style>

