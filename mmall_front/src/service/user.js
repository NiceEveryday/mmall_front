var _mm = require('util/mm.js')
var _user = {
	login : function(resolve,reject){
        _mm.request({
           url : _mm.getServerUrl('/user/login.do'),
           method : 'POST',
           success :  resolve,
           error : reject
        });
	},	
	loadUserInfo : function(resolve,reject){
        _mm.request({
           url : _mm.getServerUrl('/user/user_info.do'),
           success :  resolve,
           error : reject
        });
	},
}
module.exports = _user
