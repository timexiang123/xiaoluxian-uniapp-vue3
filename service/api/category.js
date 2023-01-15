import request from '../request'
//获取一级分类
export function getFirstCategories(){
	return request({
		url:'/course/category/getFirstCategorys'
	})
}
//获取二级分类
export function getSecondCategories(categoryId = -1){
	return request({
		url:'/course/category/getSecondCategorys?categoryId='+categoryId
	})
}
//获取分类详情
export function getCategoryDetail(id){
	return request({
		url:'/course/category/get?id='+id
	})
}