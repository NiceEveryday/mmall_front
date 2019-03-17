var Hogan = require('hogan.js');
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
  },
  renderHtml : function(htmlTempelate,data){
      var tempelate = Hogan.compile(htmlTempelate);
      return tempelate.render(data); 
  },
  successTip : function(msg){
      alert(msg||'操作成功');
  },
  errorTip : function(msg){
      alert(msg||'哪里不对了~');
  },
  validate : function(value,type){
      var val = $.trim(value);
      if(type === "not_null"){
           return !!val;
      }else if(type === "phone"){
           return /^1\d{10}$/.test(value);  
      }else if(type === "email"){
           return /^1\d{10}$/.test(value);  
      }
  },
  goHome : function(){
     window.location.href = './index.html';
  }

}

module.exports = _mm