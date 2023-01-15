import request from '../request'
//获取所有Vip列表
export function getAllVips(){
	return request({
		url:'/vip/getAllVips',
		method:'POST'
	})
}