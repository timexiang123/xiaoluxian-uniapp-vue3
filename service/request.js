//封装网络请求
import { Decrypt } from "../utils/aes/aes";
import {
	BASEURL
} from "./constances";
export default function request(params) {
	if (typeof params !== 'object' || params == null) {
		throw new Error("所传参数必须是对象类型");
	} else {
		return new Promise((resolve, reject) => {
			if(params.headers == undefined || Boolean(params.headers.notNeedToast) === false){
				uni.showLoading({
					title: "请求数据中..."
				})
			}
			//请求拦截器
			if( params.headers && params.headers.needToken){
				const token = Decrypt(uni.getStorageSync('token'))
				if(token){
					params.headers.Authorization = token
				}else{
					return uni.showToast({
						title:'请先登录',
						icon:'none'
					})
				}
			}
			uni.request({
				url: BASEURL + (params.url || ""),
				data: params.data || {},
				header: Object.assign({
					'Source': 'D42A64FCC77B7102BA17B29C0FCECF37BA000AC33AA2E69E0CB82ABC39115A45AD72BF2E565A07C65B6B23CF256747D5DB70D11225F123F853D99784ADA6679B197451CBF61E0A1ECEB1268EA9F32D7C'
				}, params.headers || {}),
				method: params.method || 'GET',
				success: (res) => {
					if (res.data.meta.success) {
						resolve(res.data.data);
					}else{
						uni.showToast({
							title: res.data.meta.msg || '失败',
							icon:"error"
						})
						reject(res.data.meta.msg || '失败')
					}
				},
				fail: (error) => {
					uni.showToast({
						title: '失败',
						icon:'error'
					})
					console.log(error)
				},
				complete: () => {
					uni.hideLoading();
				}
			})
		});
	}
}
