<script setup></script>

<template>
	<view class="about-container">
		<u-navbar title="关于我们" leftIconSize="20px" autoBack placeholder></u-navbar>
		<view class="content">
			<view class="logo">
				<image src="/static/logo.png"></image>
			</view>
			<view class="fns">
				<u-cell-group>
					<u-cell  title="用户服务协议" isLink center clickable url="/pages/login/sla"></u-cell>
					<u-cell  title="隐私政策" isLink center clickable url="/pages/login/pri"></u-cell>
				</u-cell-group>
			</view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.about-container{
		:deep(.u-navbar__content){
			border-bottom:1px solid #eee;
		}
		.content{
			.logo image{
				display: block;
				width:400rpx;
				height:400rpx;
				margin:0 auto;
			}
			.fns{
				:deep(.u-cell__title-text){
					font-size:14px;
					color:#3b4144;
				}
				:deep(.uicon-arrow-right){
					span{
						font-size:16px;
					}
				}
			}
		}
	}
</style>
