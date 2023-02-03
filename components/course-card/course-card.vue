<script setup>
defineProps({
	course: {
		type: Object,
		default() {
			return {}
		}
	}
})
</script>
<template>
	<view class="course-card">
		<view class="card-left">
			<u--image
				:src="course.courseCover"
				width="300rpx"
				height="186rpx"
				radius="10rpx"
			></u--image>
			<image
				src="/static/vip-icon.png"
				class="vip-icon"
				v-if="course.isMember == 1 && course.discountPrice"
			></image>
		</view>
		<view class="card-right">
			<view class="course-name nowrap">{{ course.courseName }}</view>
			<view class="course-desc">
				{{ course.description || '该课程暂无简介' }}
			</view>
			<view class="course-price">
				<!-- 免费学习 -->
				<view class="free-learn" v-if="course.discountPrice == 0">
					<view class="left">免费学习</view>
					<view class="right">￥{{ course.discountPrice }}</view>
				</view>
				<!-- 会员免费 -->
				<view class="vip-free" v-if="course.discountPrice && course.isMember == 1">
					<view class="left">会员专享</view>
					<view class="right">￥{{ course.discountPrice }}</view>
				</view>
				<!-- 付费学习 -->
				<view class="pay-learn" v-if="course.discountPrice && course.isMember != 1">
					<view class="right">￥{{ course.discountPrice }}</view>
				</view>
			</view>
		</view>
	</view>
</template>
<style lang="scss" scoped>
.course-card {
	display: flex;
	align-items: center;
	.card-left {
		position: relative;
		width: 300rpx;
		.vip-icon {
			position: absolute;
			top: 8rpx;
			right: 8rpx;
			width: 52rpx;
			height: 22rpx;
		}
	}
	.card-right {
		max-width: 380rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		line-height: 1.5;
		margin-left: 30rpx;
		.course-name {
			font-size: 32rpx;
			font-family: Microsoft YaHei;
			font-weight: 400;
			text-align: left;
			color: #191919;
			margin-top: -8rpx;
		}
		.course-desc {
			font-size: 28rpx;
			line-height: 1.6;
			font-family: Microsoft YaHei;
			color: #c5c5c5;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			overflow: hidden;
			text-overflow: ellipsis;
			-webkit-box-orient: vertical;
			text-align: left;
			margin: 10rpx 0;
			min-height: 90rpx;
		}
		.course-price > view {
			display: flex;
			align-items: center;
		}
		.course-price {
			.free-learn {
				.left {
					margin-right: 20rpx;
					color: #388fff;
					font-size: 24rpx;
				}
				.right {
					font-size: 32rpx;
					font-weight: bold;
					color: #388fff;
				}
			}
			.vip-free {
				.left {
					margin-right: 14rpx;
					color: #fff;
					width: 120rpx;
					height: 40rpx;
					line-height:30rpx;
					background: linear-gradient(90deg, #ff928e, #fe7062 99%);
					border-radius: 40rpx 0 40rpx 0;
					padding: 4rpx 24rpx;
					font-size: 24rpx;
				}
				.right {
					font-size: 32rpx;
					font-weight: bold;
					color: #f00;
				}
			}
			.pay-learn{
				.right {
					font-size: 32rpx;
					font-weight: bold;
					color: #f00;
				}
			}
		}
	}
}
</style>
