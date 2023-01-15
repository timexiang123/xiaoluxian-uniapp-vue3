import request from '../request'
//获取购物车商品
export function getCarList(){
	return request({
		url:'/shopcar/getShopCarList',
		headers:{
			needToken:true
		}
	})
}
//添加到购物车
export function addToCart(token,memberId,courseId){
	return request({
		url:'/shopcar/addShopCar',
		method:'POST',
		headers:{
			token,
			needToken:true
		},
		data:{
			memberId,courseId
		}
	})
}
//从购物车删除
export function  deleteFromCart(token,selectedCourses){
	return request({
		url:'/shopcar/deleteShopCars',
		headers:{
			token,
			needToken:true
		},
		method:'POST',
		data:selectedCourses
	})
}