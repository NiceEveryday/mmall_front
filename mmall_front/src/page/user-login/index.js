'use strict'
require('./index.css')
require('page/common/nav-simple/index.js')
require('page/common/footer/footer.css')
var m = require('../module/test.js')
var _user = require('service/user.js')
var _mm = require('util/mm.js')
console.log('hello login')


var page = {
	init : function(){
        this.bindEvent();
	},
	bindEvent : function(){
	    var _this = this;
        $('#login-btn').click(function(){
             _this.submit()
        });

        //键盘enter监听
        $('.form-main').keyup(function(e){
        	if(e.keyCode == 13){
        	    _this.submit()
          }
        });

	},
	submit : function(){
		console.log('enter submit')
	    var result = this.validateLogin();
        if(!result.isSuccess){

           $('.error').show().find('.err-msg').text(result.msg);
        }else{
           $('.error').hide().find('.err-msg').text('');
            var username =  $.trim($('#username').val())
            var pwd = $.trim($('#pwd').val())
            _user.login(username,pwd);
        }
	},
	validateLogin : function(){
        var result = {
       	   isSuccess : true,
           msg : ''
        };
        var username =  $.trim($('#username').val())
        var pwd = $.trim($('#pwd').val())
        if(!_mm.validate(username,'not_null')){
            result.isSuccess = false;
            result.msg = '账号为空'; 
        }else if(!_mm.validate(pwd,'not_null')){
            result.isSuccess = false;
            result.msg = '密码为空'; 
        }
        return result;
	}
}

$(function(){
	page.init();
})

