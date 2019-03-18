var _mm = require('util/mm.js')
var _cart = {
	loadCartCount : function(resolve,reject){
        _mm.request({
           url : _mm.getServerUrl('/cart/count.do'),
           success :  resolve,
           error : reject
        });
	},
}
module.exports = _cart
