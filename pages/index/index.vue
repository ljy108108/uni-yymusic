<template>
	<view class="home">
		<view class="top">
			<view class="iconfont icon-favoriteslist">
			</view>
			<view class="top_search">
				<text class="iconfont icon-favoriteslist"></text>恋爱告急，最近很火哟~
			</view>
			<view class="iconfont icon-maikefeng-copy">
			</view>
		</view>
		<swiper class="swiper" indicator-color="rgba(0, 0, 0, .2)" indicator-active-color="#f8f8f8" :indicator-dots="true" autoplay :interval="3000" :duration="1000">
			<swiper-item v-for="banner in banners" :key="banner.encodeId">
				<view class="swiper-item">
					<image :src='banner.imageUrl'></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 导航 -->
		<scroll-view class="nav" scroll-X="true" >
			<view class="nav-item" v-for="(nav,index) in navs" :key="index">
				<view :class="nav.iconfont">
				</view>
				<text>{{nav.text}}</text>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import {mapState} from 'vuex'
	export default {
		data() {
			return {
				title: 'Hello',
				//nav 导航
				navs:[
					{
						text:'每日推荐',
						path:'/pages/daycomment/daycomment',
						iconfont:'iconfont icon-rili'
					},
					{
						text:'私人FM',
						path:'/pages/daycomment/daycomment',
						iconfont:'iconfont icon-diantai'
					},
					{
						text:'歌单',
						path:'/pages/daycomment/daycomment',
						iconfont:'iconfont icon-gedan1'
					},
					{
						text:'排行榜',
						path:'/pages/daycomment/daycomment',
						iconfont:'iconfont icon-PCbofangye_paihangbang'
					},
					{
						text:'有声书',
						path:'/pages/daycomment/daycomment',
						iconfont:'iconfont icon-shu'
					},
					{
						text:'数字专辑',
						path:'/pages/daycomment/daycomment',
						iconfont:'iconfont icon-zhuanjiguangpan'
					},
					{
						text:'直播',
						path:'/pages/daycomment/daycomment',
						iconfont:'iconfont icon-icon_zhibo-mian'
					},
					{
						text:'关注新歌',
						path:'/pages/daycomment/daycomment',
						iconfont:'iconfont icon-wodeguanzhu'
					},
					{
						text:'歌房',
						path:'/pages/daycomment/daycomment',
						iconfont:'iconfont icon-xingxing'
					}
				]
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

<style lang="scss">
	.home {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #f5f5f5;
		.top{
			width: 710rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin: 30rpx 0;
			padding: 0 20rpx;
			height: 60rpx;
			.iconfont{
				font-size: 55rpx;
				// width: 15%;
			}
			.top_search{
				width: 70%;
				text-align: center;
				line-height: 60rpx;
				border-radius: 60rpx;
				background-color: #fff;
				font-size: 26rpx;
				color: #888;
			}
		}
		swiper{
			width: 750rpx;
			height: 300rpx;
			.swiper-item{
				display: block;
				height: 300rpx;
				padding: 0 20rpx;
				image{
					width: 100%;
					height: 100%;
					border-radius: 20rpx;
				}
			}
		}
		.nav {
			// display: flex;
			width: 710rpx;
			margin: 30rpx 0;
			.nav-item{
				width: 20%;
				display: inline;
			}
		}
	}

</style>
