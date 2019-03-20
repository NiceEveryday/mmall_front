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
        //验证username是否重复
        $('#username').blur(function(){
            console.log('username' + $('#username').val())
            var username =  $.trim($('#username').val());

            if(!username){
                return;
            } 
            _user.checkUsername(username,function(res){
                $('.error').hide()
                },function(errorMsg){
                console.log('errorMsg')
                $('.error').show().find('.err-msg').text(errorMsg);
            });
        });

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
        var formData = {
            username        : $.trim($('#username').val()),
            password        : $.trim($('#pwd').val()),
            passwordConfirm : $.trim($('#pwd-confirm').val()),
            phone           : $.trim($('#phone').val()),
            email           : $.trim($('#email').val()),
            question        : $.trim($('#question').val()),
            answer          : $.trim($('#answer').val())
        };
	    var result = this.validateLogin();
        if(!result.isSuccess){
           $('.error').show().find('.err-msg').text(result.msg);
        }else{
           $('.error').hide().find('.err-msg').text('');
            _user.register(formData,function(res){
                window.location.href = './result.html?type=register' 
            },function(errMsg){
                _mm.errorTip(errMsg);
            });
        }
	},
	validateLogin : function(){
        var result = {
       	   isSuccess : true,
           msg : ''
        };
        var username =  $.trim($('#username').val());
        var pwd = $.trim($('#pwd').val());
        var pwd_confirm = $.trim($('#pwd-confirm').val());
        var phone = $.trim($('#phone').val());
        var email = $.trim($('#email').val());
        var question = $.trim($('#question').val());
        var answer = $.trim($('#answer').val());
        if(!_mm.validate(username,'not_null')){
            result.isSuccess = false;
            result.msg = '账号为空'; 
        }else if(!_mm.validate(pwd,'not_null')){
            result.isSuccess = false;
            result.msg = '密码为空'; 
        }else if(!_mm.validate(pwd_confirm,'not_null')){
            result.isSuccess = false;
            result.msg = '验证密码为空'; 
        }else if(pwd.length < 6 ){
            result.isSuccess = false;
            result.msg = '密码小于6位'; 
        }else if(pwd !== pwd_confirm){
            result.isSuccess = false;
            result.msg = '两次密码不相等'; 
        }else if(!_mm.validate(phone,'not_null')){
            result.isSuccess = false;
            result.msg = '手机号为空'; 
        }
        else if(!_mm.validate(phone,'phone')){
            result.isSuccess = false;
            result.msg = '手机号格式不正确'; 
        }else if(!_mm.validate(email,'not_null')){
            result.isSuccess = false;
            result.msg = 'email为空'; 
        }else if(!_mm.validate(email,'email')){
            result.isSuccess = false;
            result.msg = 'email格式不正确'; 
        }else if(!_mm.validate(question,'not_null')){
            result.isSuccess = false;
            result.msg = '问题为空'; 
        }else if(!_mm.validate(answer,'not_null')){
            result.isSuccess = false;
            result.msg = '问题的答案为空'; 
        }

        return result;
	}
}

$(function(){
	page.init();
})

