const BASE_URL = "https://music.cyrilstudio.top"
export const myRequest = (options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL + options.url,
			data:options.data || {},
			method:options.method || 'GET',
			success:(res)=>{
				// console.log(res)
				if(res.data.code !== 200){
					return uni.showToast({
						title:'获取数据失败'
					})
				}
				//获取成功
				resolve(res)
			},
			fail:(err)=>{
				uni.showToast({
					title:'请求接口失败'
				})
				reject(err)
			}
		})
	})
}


