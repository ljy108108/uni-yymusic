import Vue from 'vue'
import App from './App'
//引入封装的请求接口
// import {myRequest} from './util/api.js'
// Vue.prototype.$myRequest = myRequest
// 引入vuex
import store from '@/store/index.js'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()
