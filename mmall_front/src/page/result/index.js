require('./index.css')
require('page/common/nav-simple/index.js')
require('page/common/footer/footer.css')

var _mm   = require('util/mm.js');

$(function(){
	var type = _mm.getParam('type') || 'default';
	$('.' + type + '-success').show()

})