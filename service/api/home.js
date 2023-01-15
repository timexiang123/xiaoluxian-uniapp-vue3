import request from "../request";

//轮播图
export function getSliderData(){
	return request({
		url:"/slider/getSliders"
	});
}
//新上好课
export function getMostNewData(){
	return request({
		url:"/course/mostNew",
		method:"POST",
		data:{
			pageNum:1,
			pageSize:3
		}
	});
}
//推荐好课
export function getRecommendData(){
	return request({
		url:"/course/search",
		method:"POST",
		data:{
			entity:{
				sortBy:"clicks-desc"
			},
			pageNum:1,
			pageSize:6
		}
	});
}
//大家都在看
export function getMostHeatData(page){
	return request({
		url:"/course/mostHeat",
		method:"POST",
		data:{
			pageNum:page,
			pageSize:3
		}
	});
}

//免费课程
export function getFreeData(page,sortBy){
	return request({
		url:"/course/search",
		method:"POST",
		data:{
			pageNum:page,
			pageSize:10,
			entity:{
				isFree:1,
				sortBy
			}
		}
	});
}

//实战课程
export function getPraticeData(page,sortBy){
	return request({
		url:"/course/search",
		method:"POST",
		data:{
			pageNum:page,
			pageSize:10,
			entity:{
				courseLevel:3,
				sortBy
			}
		}
	});
}