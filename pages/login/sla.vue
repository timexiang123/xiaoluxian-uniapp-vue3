<script setup>
	import getAgreementByCode from '@/service/api/agreement.js'
	import {ref,onMounted} from 'vue'
	const data = ref({})
	onMounted(()=>{
		getAgreementByCode('6HG6326I').then(res=>{
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
	<view class="sla-container">
		<u-navbar title="小鹿线用户服务协议" leftIconSize="20px" autoBack placeholder></u-navbar>
		<view class="content" v-if="data.id">
			<rich-text :nodes="data.content"></rich-text>
		</view>
	</view>
</template>
<style lang="scss" scoped>
	.sla-container{
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
