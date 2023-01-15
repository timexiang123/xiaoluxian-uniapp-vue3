import request from '../request'
//上传单个文件
export function uploadSingleFile(file) {
	return new Promise((resolve,reject)=>{
		uni.uploadFile({
			url:'/upload/uploadFile',
			filePath:file,
			header:{
				'Source':'D42A64FCC77B7102BA17B29C0FCECF37BA000AC33AA2E69E0CB82ABC39115A45AD72BF2E565A07C65B6B23CF256747D5DB70D11225F123F853D99784ADA6679B197451CBF61E0A1ECEB1268EA9F32D7C'
			},
			success:(res)=>{
				resolve(res)
			},
			fail:(err)=>{
				reject(err)
			}
		})
	})
}
//生成随机token
export function createToken(){
	return request({
		url:'/token/createToken',
		method:'POST',
		headers:{
			notNeedToast:true
		}
	})
}
