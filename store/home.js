import { reqGetBanners,reqRecommendList } from "../api"

const state = {
	banners:[],
	//推荐歌单
	recommendList:[]
}
const actions = {
	async getBanners({commit}){
		let result = await reqGetBanners()
		console.log(result)
		if(result.data.code == 200){
			commit('GETBANNERS',result.data.banners)
		}
	},
	async getRecommendList({commit}){
		let result = await reqRecommendList()
		console.log(result)
		if(result.data.code == 200){
			commit('GETRECOMMENTLIST',result.data.result)
		}
	}
}

const mutations = {
	GETBANNERS(state,banners){
		state.banners = banners
	},
	GETRECOMMENTLIST(store,recommendList){
		state.recommendList = recommendList
	}
}

const getters = {
	
}
export default {
	state,
	actions,
	mutations,
	getters
}