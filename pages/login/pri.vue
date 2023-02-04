<script setup>
	import getAgreementByCode from '@/service/api/agreement.js'
	import {ref,onMounted} from 'vue'
	const data = ref({})
	onMounted(()=>{
		getAgreementByCode('6GFL2QGQ').then(res=>{
			if(res?.data?.id){
				data.value = res.data
			}
			console.log(data.value);
		}).catch(err=>{
			console.log(err);
		})
	})
</script>
<template>
	<view class="pri-container">
		<u-navbar title="小鹿线隐私政策" leftIconSize="20px" autoBack placeholder></u-navbar>
		<view class="content" v-if="data.id">
			<rich-text :nodes="data.content"></rich-text>
		</view>
	</view>
</template>
<style lang="scss" scoped>
	.pri-container{
		:deep(.u-navbar__content){
			border-bottom:1px solid #eee;
		}
		.content{
			padding:30rpx 10rpx;
			line-height: 1.5;
			font-size:14px;
			p{
				margin-bottom: 40rpx;
			}
		}
	}
</style>
