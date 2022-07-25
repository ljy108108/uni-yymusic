<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	uni-page-head { display: none; } 
	@font-face {
	  font-family: "iconfont"; /* Project id 3537670 */
	  src: url('@/static/iconfont.woff2?t=1658750718225') format('woff2'),
	       url('@/static/iconfont.woff?t=1658750718225') format('woff'),
	       url('@/static/iconfont.ttf?t=1658750718225') format('truetype');
	}
	
	.iconfont {
	  font-family: "iconfont" !important;
	  font-size: 16px;
	  font-style: normal;
	  -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
	}
	
	.icon-shuaxin:before {
	  content: "\e628";
	}
	
	.icon-xingxing:before {
	  content: "\e60e";
	}
	
	.icon-gedan1:before {
	  content: "\e61b";
	}
	
	.icon-zhuanjiguangpan:before {
	  content: "\e64b";
	}
	
	.icon-shu:before {
	  content: "\e634";
	}
	
	.icon-PCbofangye_paihangbang:before {
	  content: "\e642";
	}
	
	.icon-icon_zhibo-mian:before {
	  content: "\e65b";
	}
	
	.icon-wodeguanzhu:before {
	  content: "\e616";
	}
	
	.icon-search:before {
	  content: "\e6e1";
	}
	
	.icon-rili:before {
	  content: "\e8b4";
	}
	
	.icon-diantai:before {
	  content: "\e636";
	}
	
	.icon-maikefeng-copy:before {
	  content: "\e771";
	}
	
	.icon-plus-copy:before {
	  content: "\e770";
	}
	
	.icon-favoriteslist:before {
	  content: "\e69b";
	}
	
	.icon-radio:before {
	  content: "\e6cd";
	}
	
	.icon--music-copy:before {
	  content: "\e76b";
	}
	
	.icon--music:before {
	  content: "\e666";
	}
	
	.icon-Musicdisc-copy:before {
	  content: "\e76c";
	}
	
	.icon-guanzhu-copy:before {
	  content: "\e76d";
	}
	
	.icon-radioguangbo-copy:before {
	  content: "\e76e";
	}
	
	.icon-netease-cloud-music-line-copy:before {
	  content: "\e76f";
	}
	
	.icon-Musicdisc:before {
	  content: "\e629";
	}
	
	.icon-guanzhu:before {
	  content: "\e6cf";
	}
	
	.icon-netease-cloud-music-line:before {
	  content: "\e76a";
	}
	
	.icon-yinle:before {
	  content: "\e63b";
	}
	
	.icon-radioguangbo:before {
	  content: "\e6de";
	}
	
	
</style>
