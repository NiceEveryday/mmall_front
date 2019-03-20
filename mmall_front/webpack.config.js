/*
* @Author: puzhenwen
* @Date:   2019-03-04 22:32:02
* @Last Modified by:   puzhenwen
* @Last Modified time: 2019-03-07 05:49:08
*/

var webpack = require('webpack')
var Ex = require('extract-text-webpack-plugin');
const htmlWebpackPlugin = require("html-webpack-plugin");

//环境变量配置 dev / online
var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev'
console.log('WEBPACK_ENV-------------------' + WEBPACK_ENV)
var htmlPlugin = function(name,title){
	return {
		        template: "./src/view/"+name+".html",
		        filename:"./view/"+name+".html",
            title:title,
		        inject:true,
		        hash:true,
		        //指定打包的模块
		        chunks:['common',name]
    }
} 
var config=  {
  entry: {
     'index':['./src/page/index/index.js'],
     'user-login':['./src/page/user-login/index.js'],
     'user-register':['./src/page/user-register/index.js'],
     'common':['./src/page/common/index.js'],
     'result':['./src/page/result/index.js']


  },
  //使其能使用localhost
  devServer: {
        port: 8088,
        inline: true,
        proxy : {
            '**/*.do' : {
                target: 'http://test.happymmall.com',
                changeOrigin : true
            }
        }
   },
  output: {
  	//存放目录
  	path: './dist',
  	//访问目录
  	publicPath:'/dist',
    filename: './js/[name].js'
    }, 
  externals :{
	'jquery' : 'window.jQuery'
  },
  module:{
	  	  loaders: [
	  	  {
			  test: /\.*css$/,
			  loader: Ex.extract('style-loader', 'css-loader') // 单独打包出CSS，这里配置注意下
	      },
	      {
	          test: /\.(png|img|gif|jpg|woff|svg|eot|ttf)\??.*$/,
			  loader: 'url-loader?limit=100&name=./resource/[name].[ext]' // 单独打包出CSS，这里配置注意下
	      },
        {
        test: /\.string$/,
        loader: 'html-loader'// 
        }
      ]
  },

  resolve:{
    alias:{
    	util: __dirname + '/src/util',
    	service: __dirname + '/src/service',
    	page: __dirname + '/src/page',
    	view: __dirname + '/src/view',
      image: __dirname + '/src/image',
      node_modules: __dirname + '/node_modules'

     }
  },
 
  plugins:[
   //独立统一模块
    new webpack.optimize.CommonsChunkPlugin({
		name : 'common',
		filename : './js/common.js'
    }),

    new Ex("./css/[name].css"),
    new htmlWebpackPlugin(htmlPlugin('index'),'首页'),
    new htmlWebpackPlugin(htmlPlugin('user-login'),'登录'),
    new htmlWebpackPlugin(htmlPlugin('user-register'),'注册'),
    new htmlWebpackPlugin(htmlPlugin('result'),'结果提示'),
    new htmlWebpackPlugin(htmlPlugin('test'),'测试css')
  ]
};

if('dev' === WEBPACK_ENV){
	config.entry.common.push('webpack-dev-server/client?http://localhost:8088/')

}

module.exports = config
