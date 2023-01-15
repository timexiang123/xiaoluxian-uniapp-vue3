import request from '../request'
//发送注册或者登录验证码
export function sendRegisterOrLoginCaptcha(mobile){
	return request({
		url:'/sms/sendRegisterOrLoginCaptcha?mobile='+mobile,
	})
}

//手机号登录
export function loginByMobile(mobile,captcha){
	return request({
		url:'/u/loginByMobile',
		method:'POST',
		data:{
			mobile,captcha
		}
	})
}
//用户名密码登录
export function loginByPwd(username,password){
	return request({
		url:"/u/loginByJson",
		method:'POST',
		data:{
			username,password
		}
	})
}
//获取个人信息
export function getMemberInfo(token){
	return request({
		url:'/member/getInfo?token='+token,
		headers:{
			needToken:true
		}
	})
}
//修改个人信息
export function updateMemberInfo(token,userInfo){
	return request({
		url:'/member/update',
		headers:{
			token,
			needToken:true
		},
		method:'POST',
		data:userInfo
	})
}
//退出登录
export function logout(){
	return request({
		url:'/u/logout'
	})
}