
'use strict'
console.log('util')
var _mm = require('util/mm.js')
console.log(JSON.stringify(_mm))
// _mm.request({
// 	url:"http://localhost:8088/product/list.do?keyword=1",
// 	success: function(res){
// 		console.log(res);
// 		console.log("sucssssessssssssssssssssssssssssssssss")
// 		console.log("sussssscsssscsssssesss")
// 		console.log("susssssssccsssessssssssss")
// 		console.log("sucssssssssscsessssss")
// 	},
// 	error:   function(errMsg){
// 		console.log(errMsg);
// 	}
// })
console.log(_mm.getParam('test'))
