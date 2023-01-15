import request from "../request";
export function getUserService(code){
	return request({
		url:'/agreement/getAgreementByCode?code='+code
	})
}