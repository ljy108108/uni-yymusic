//引入封装的请求接口
import {myRequest} from './api.js'
// import myRequest from './api.js'
//banner 
export const reqGetBanners = ()=> myRequest({
	url:'/banner'
})

// 首页推荐歌单
export const reqRecommendList = ()=>myRequest({
	url:'/personalized?limit=6'
})
