import request from '../request'
//获取我的收藏课程
export function getMyFavorCourses(pageNum){
	return request({
		url:'/favorite/getByMemberId',
		headers:{
			needToken:true
		},
		method:'POST',
		data:{
			pageNum
		}
	})
}
//获取收藏
export function getFavoriate(memberId,courseId){
	return request({
		url:'/favorite/getFavorite',
		headers:{
			needToken:true
		},
		data:{memberId,courseId}
	})
}

//添加收藏课程
export function addFavorCourse(token,courseId){
	return request({
		url:'/favorite/addFavorite',
		method:'POST',
		headers:{
			token,
			needToken:true
		},
		data:{
			courseId
		}
	})
}
//取消收藏课程
export function cancelMyFavorCourse(token,memberId,courseId){
	return request({
		url:'/favorite/deleteFavorite',
		headers:{
			token,
			needToken:true
		},
		data:{
			memberId,courseId
		}
	})
}