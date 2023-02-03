<script setup>
import Banner from './cpns/banner/banner.vue'
import MostNew from './cpns/most-new/most-new.vue'
import MostRecommend from './cpns/most-recommend/most-recommend.vue'
import MostHeat from './cpns/most-heat/most-heat.vue'
import {ref} from 'vue'
</script>
<template>
	<view class="recommend-container">
		<!-- 轮播图 -->
		<banner />
		<!-- 新上好课 -->
		<most-new />
		<!-- 推荐好课 -->
		<most-recommend />
		<!-- 大家都在看 -->
		<most-heat/>
	</view>
</template>

<style lang="scss" scoped></style>
