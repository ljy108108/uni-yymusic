<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
			<view v-for="banner in banners" :key="banner.encodeId">
				<image :src='banner.imageUrl'></image>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
			this.$store.dispatch('getBanners')
			console.log(this)
			//获取热歌榜
			// this.getHotPlaylist()
		},
		computed:{
			
			...mapState({
				banners:state=> state.home.banners
			})
		},
		methods: {
			// async getHotPlaylist(){
			// 	console.log('111')
			// 	const result = await this.$myRequest({
			// 		// url:'/search?keywords=h'
			// 		url:'/banner'
			// 	})
			// 	console.log(this,result)
			// }

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
