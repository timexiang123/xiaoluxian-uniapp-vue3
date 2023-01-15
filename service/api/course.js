import request from "../request";
//查看课程是否有权限
export function hasCourseAuth(courseId,chapterId=""){
	return request({
		url:'/course/checkAuth',
		headers:{
			needToken:true
		},
		data:{
			courseId,chapterId
		}
	})
}
//获取课程详情
export function getCourseDetail(courseId){
	return request({
		url:'/course/getDetail?courseId='+courseId
	})
}
//搜索课程
export function searchCourse(data){
	return request({
		url:'/course/search',
		method:'POST',
		data
	})
}
//查询我的课程
export function getMyCourses(pageNum){
	return request({
		url:'/course/myCourses',
		method:'POST',
		headers:{
			needToken:true
		},
		data:{
			pageNum
		}
	})
}
//播放课程
export function getPlayDetail(courseId,chapterId){
	return request({
		url:'/player/play',
		data:{
			courseId,chapterId
		},
		headers:{
			needToken:true
		}
	})
}
//记录播放历史
export function recordPlayHistory(token,data){
	return request({
		url:'/course/history/recordHistory',
		method:'POST',
		headers:{
			token,
			needToken:true,
			notNeedToast:true
		},
		data
	})
}
//获取最后一次播放记录
export function getLastHistory(data){
	return request({
		url:'/course/history/getLastHistoryByChapterId',
		headers:{
			needToken:true,
			notNeedToast:true
		},
		data
	})
}