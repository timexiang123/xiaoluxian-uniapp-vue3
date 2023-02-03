<script setup>
import { onMounted, ref } from 'vue'
import { getRecommendData } from '@/service/api/home.js'
const list = ref([])
onMounted(() => {
	getRecommendData()
		.then(res => {
			if (res?.pageInfo?.list?.length) {
				list.value = res.pageInfo.list
			}
		})
		.catch(err => console.log(err))
})
</script>
<template>
	<view class="most-recommend">
		<section-title title="推荐好课"></section-title>
		<scroll-view scroll-x v-if="list.length">
			<view class="course-list">
				<view class="course-item" v-for="item in list" :key="item.id">
					<view class="top">
						<u--image
							:src="item.courseCover"
							width="264rpx"
							height="130rpx"
						></u--image>
						<image
							src="/static/vip-icon.png"
							class="vip-icon"
							v-if="item.discountPrice && item.isMember != 0"
						></image>
					</view>
					<view class="bottom">
						<view class="course-name">{{ item.courseName }}</view>
						<view class="course-price">
							<!-- 免费学习 -->
							<view
								class="free-learn"
								v-if="item.discountPrice == 0"
							>
								<view class="left">免费学习</view>
								<view class="right">￥0</view>
							</view>
							<!-- 会员免费 -->
							<view
								class="vip-free"
								v-if="item.discountPrice && item.isMember == 1"
							>
								<view class="left">会员免费</view>
								<view class="right">
									￥{{ item.discountPrice }}
								</view>
							</view>
							<!-- 付费学习 -->
							<view
								class="pay-learn"
								v-if="item.discountPrice && item.isMember != 1"
							>
								<view class="right">
									￥{{ item.discountPrice }}
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>
<style lang="scss" scoped>
.course-list {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 820rpx;
	height: 620rpx;
	flex-wrap: wrap;
}
.course-item {
	width: 264rpx;
	height: 286rpx;
	overflow: hidden;
	border: 1rpx solid rgba(27, 39, 94, 0.1);
	border-radius: 10rpx;
	display: flex;
	flex-direction: column;
	background-color: #fff;
	.top {
		position: relative;
		.vip-icon {
			position: absolute;
			top: 8rpx;
			right: 8rpx;
			width: 52rpx;
			height: 22rpx;
		}
	}
	.bottom {
		padding-left: 20rpx;
		margin-bottom: 10rpx;
		.course-name {
			font-size: 32rpx;
			text-align: left;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			overflow: hidden;
			text-overflow: ellipsis;
			-webkit-box-orient: vertical;
			line-height: 1.2;
			padding: 12rpx 0;
			min-height: 100rpx;
		}
		.course-price > view {
			display: flex;
			align-items: center;
		}
		.course-price {
			.free-learn {
				> view {
					color: #388fff;
				}
				.left {
					margin-right: 20rpx;
				}
			}
			.vip-free {
				.left {
					font-size: 22rpx;
					font-family: MicrosoftYaHei-Bold;
					font-weight: 700;
					color: #fff;
					height: 40rpx;
					width: 120rpx;
					text-align: center;
					line-height: 34rpx;
					background: linear-gradient(90deg, #ff928e, #fe7062 99%);
					border-radius: 40rpx 0 40rpx 0;
					padding: 2rpx 12rpx;
					margin-right: 10rpx;
				}
				.right {
					font-size: 22rpx;
					font-weight: 800;
					color: #f00;
				}
			}
			.pay-learn {
				.right {
					font-size: 22rpx;
					font-weight: 800;
					color: #f00;
				}
			}
		}
	}
}
</style>
