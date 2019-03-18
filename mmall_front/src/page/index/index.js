
'use strict'
require('page/common/nav-simple/index.js')
require('page/common/nav/nav.js')
require('page/common/footer/footer.css')
require('page/common/header/header.js')
var navSide = require('page/common/nav-side/nav_side.js')

navSide.init({
	name : 'user-center'
})
// console.log('util')
// var _mm = require('util/mm.js')
// console.log(JSON.stringify(_mm))
// // _mm.request({
// // 	url:"http://localhost:8088/product/list.do?keyword=1",
// // 	success: function(res){
// // 		console.log(res);
// // 		console.log("sucssssessssssssssssssssssssssssssssss")
// // 		console.log("sussssscsssscsssssesss")
// // 		console.log("susssssssccsssessssssssss")
// // 		console.log("sucssssssssscsessssss")
// // 	},
// // 	error:   function(errMsg){
// // 		console.log(errMsg);
// // 	}
// // })

// var html = '<div>{{data}}</div>'
// var data = {
// 	data : '12333'
// }
// console.log(_mm.renderHtml(html,data));
// require('./index.css')

