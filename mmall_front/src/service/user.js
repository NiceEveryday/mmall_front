var _mm = require('util/mm.js')
var _user = {


  login : function(data){
       console.log(888)
        _mm.request({
           url : _mm.getServerUrl('/user/login.do'),
           method : 'POST',
           data : data
        });
  },
	loadUserInfo : function(resolve,reject){
        _mm.request({
           url : _mm.getServerUrl('/user/user_info.do'),
           success :  resolve,
           error : reject
        });
	},
  // checkUsername : function(username,resolve,reject){
  //      console.log(888)
  //       _mm.request({
  //         url : _mm.getServerUrl('/user/check_valid.do'),
  //         method : 'POST',
  //         data : {
  //           type : 'username',
  //           str : username
  //         },
  //         success :  resolve,
  //         error : reject
  //       });
  // }
  // 检查用户名
  checkUsername : function(username, resolve, reject){
      _mm.request({
          url     : _mm.getServerUrl('/user/check_valid.do'),
          data    : {
              type    : 'username',
              str     : username
          },
          method  : 'POST',
          success : resolve,
          error   : reject
      });
  },

   register : function(userinfo, resolve, reject){
      _mm.request({
          url     : _mm.getServerUrl('/user/register.do'),
          data    : userinfo,
          method  : 'POST',
          success : resolve,
          error   : reject
      });
  },
}
module.exports = _user
