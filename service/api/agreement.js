import request from '../request'
export default function getAgreementByCode(code){
	return request({
		url:'/agreement/getAgreementByCode?code='+code
	})
}