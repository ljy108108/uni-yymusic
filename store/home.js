import { reqGetBanners } from "../api"

const state = {
	banners:[]
}
const actions = {
	async getBanners({commit}){
		let result = await reqGetBanners()
		console.log(result)
		if(result.data.code == 200){
			commit('GETBANNERS',result.data.banners)
		}
	}
}

const mutations = {
	GETBANNERS(state,banners){
		state.banners = banners
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