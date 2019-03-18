'use strict'
require('./header.css')
var _mm   = require('util/mm.js');
var _this = this;
var header = {
	onLoad : function(){
		var keyword = $('.search-input').val();
		if(keyword){
		   $('.search-input').val(keyword);
	    }
	},
	bindEvent : function(){
		var _this = this;
        $('.search-btn').click(function(){
        	  _this.submitSearch();
        });
        $('.search-input').keyup(function(e){
        	if(e.keyCode === 13){
        	   _this.submitSearch();
        	}
        })
	},
	init : function(){
        this.bindEvent();
    },
	//绑定键盘事件
	submitSearch : function(){
		var keyword = $.trim($('.search-input').val());
		if(keyword){
		   window.location.href = './list?keyword=' + keyword;
	    }else{
	       _mm.goHome();
	    }
	},
};
header.init();