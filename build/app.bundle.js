/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/bin/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// require('babel-register');
	// require('babel-polyfill');
	var cats = __webpack_require__(2);
	// var webpack = require('webpack');
	// var $ = require('jquery');
	//  import 'babel-polyfill';没下载babel-register
	//  import cats from './cats';
	//  import $ from 'jquery';

	//1
	// $('<h1>CAT</h1>').appendTo('body');
	//  const ul = $('<ul></ul>').appendTo('body');
	//  for (const cat of cats) {
	//      $('<li></li>').text(cat).appendTo(ul);
	//  }
	//2
	{
	  var a = 10;
	  var b = 1;
	}
	console.log(b); //a undefined
	//3
	var s = 'hello';
	for (var i = 0; i < s.length; i++) {
	  console.log(s[i]);
	}
	console.log(i); // 内存泄露 5


	//4
	// var tmp = 123;

	// if (true) {
	//   tmp = 'abc'; // ReferenceError
	//   let tmp;
	// }

	//5
	if (true) {
	  // TDZ开始
	  tmp = 'abc'; // ReferenceError
	  console.log(tmp); // ReferenceError 其实用babel转化，他会转成对的形式就不报错了

	  var tmp = void 0; // TDZ结束
	  console.log(tmp); // undefined

	  tmp = 123;
	  console.log(tmp); // 123
	}
	//6
	{
	  var _num = 2;var num = 2;
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	var cats = ['dave', 'henry', 'mary', 'RR'];
	module.exports = cats;

/***/ }
/******/ ]);