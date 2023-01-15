import request from '../request'
//获取订单信息
export function getOrderInfo(data){
	return request({
		url:'/order/settlement',
		headers:{
			needToken:true
		},
		method:'POST',
		data
	})
}
//查询订单
export function queryOrders(pageNum=1,orderStatus=null){
	return request({
		url:'/order/getByMemberId',
		method:'POST',
		headers:{
			needToken:true
		},
		data:{
			pageNum,
			pageSize:10,
			entity:{
				orderStatus
			}
		}
	})
}

//创建支付宝订单
export function createZfbOrder(token,data){
	return request({
		url:'/pay/alipay/createOrder',
		method:'POST',
		headers:{
			token,
			needToken:true,
		},
		data
	})
}

//创建微信订单
export function createWxOrder(token,data){
	return request({
		url:'/pay/wxpay/createOrder',
		method:'POST',
		headers:{
			token,
			needToken:true,
		},
		data
	})
}