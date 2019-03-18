'use strict'


require('./nav_side.css')
var _mm   = require('util/mm.js');
var templateIndex = require('./index.string')
var nav_side = {
	option :{
       name : '',
       navList :[
          {name : 'user-center',  desc : '个人中心',   href : './user-center.html'},
          {name : 'order-list',   desc : '我的订单',   href :'./order-list.html'}, 
          {name : 'pass-update',  desc : '修改密码',   href : './pass-update.html'}, 
          {name : 'about',        desc : '关于mmall',  href : './about.html'}
       ]
	},
	init : function(option){
		$.extend(this.option,option);
		this.renderNav(); 
	},
	renderNav : function(){
		console.log('this.option.navList.length' + this.option.navList.length)
		console.log(this.option.name)
		for(var i = 0, lengthList = this.option.navList.length;i < lengthList;i++){
             if(this.option.navList[i].name === this.option.name){
             	    console.log('isActive' + i)
             	    this.option.navList[i].isActive = true; 
             }
		}
	     //渲染数据
        var navHtml = _mm.renderHtml(templateIndex,{
         	navList : this.option.navList
         });

         //将html放入容器
        $('.nav-side').html(navHtml)
         
	}
		
}
module.exports = nav_side

 