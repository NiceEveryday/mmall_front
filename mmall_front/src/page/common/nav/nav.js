'use strict'
require('./nav.css')
var _user = require('service/user.js');
var _cart = require('service/cart.js');
var _mm   = require('util/mm.js');
var nav = {
	init : function(){
       // this.bindEvent();
       // this.loadUserInfo();
       // this.loadCartCount();
       return this;
	},

	// bindEvent : function(){
 //       $('.js-login').click(function(){
 //       	    _mm.doLogin();
 //       });
 //       $('.js-register').click(function(){
 //       	    window.location.href = './register.html';
 //       });
 //       $('.js-logout').click(function(){
 //       	    window.location.reload();
 //       });

	// },

	// loadUserInfo : function(){
 //        _user.loadUserInfo(function(res){
 //            $('.user.not-login').hide().sublings('.username').text(res.username)
 //        },function(res){
 //            _mm.errorTip(res.errorMsg)
 //        })
	// },

	// loadCartCount : function(){
 //        _cart.loadCartCount(function(res){
 //            $('.cart-count').text(res || 0);
 //        },function(res){
 //            $('.cart-count').text(0);
 //        })
	// }

}
module.exports = nav.init()

