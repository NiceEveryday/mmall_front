var conf = {
     ServerHost : ''
};
var _mm = {
	request : function(param){
	   var _this = this
     console.log('good')
     $.ajax({
       	type  : param.method       ||  'get',
       	url      : param.url       ||  '',
       	dataType : param.dataType  ||  'json',
        // data     : param.data || '',
        success : function(res){
          console.log('sussccesss')
          console.log(JSON.stringify(res))
        	if(res.status === 0){
        		  typeof param.success === 'function' && param.success(res)
        	}else if(res.status === 10){
                _this.doLogin()
        	}
        },
        error : function(err){
              typeof param.error === 'function' && param.error(err.status)
        }
     });
	},
	doLogin : function(){
		 window.location.href = './login.html?redirect=' + encodingURIComponent(window.location.href)
	},
  getServerUrl : function(path){
     return conf.ServerHost + path;
  },
  getParam : function(name){
     var reg = new RegExp('(^|&)' + name + '=([^$]*(&|$))');
     var result = window.location.search.substr(1).match(reg);
     return result ? decodeURIComponent(result[2]) : null;
  }
}

module.exports = _mm