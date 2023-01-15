import request from "../request";
//获取热搜课程
export function getHotRecommend(){
	return request({
		url:'/course/keywords/getHotKeywords'
	})
}
//获取搜索结果
export function getSearchResult(data){
	return request({
		url:'/course/search',
		method:'POST',
		data
	})
}