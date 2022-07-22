//引入封装的请求接口
import {myRequest} from './api.js'

//banner 
export const reqGetBanners = ()=> myRequest({
	url:'/banner'
})