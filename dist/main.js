/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_game_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game_view.js */ \"./src/scripts/game_view.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById(\"canvas\");\n  canvas.width = 900;\n  canvas.height = 630;\n  var ctx = canvas.getContext(\"2d\"); // ctx.fillStyle = \"#ecd8f1\";\n  // ctx.fillRect(0, 0, canvas.width, canvas.height);\n\n  var game = new _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  new _scripts_game_view_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, ctx).run();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBRSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQUQsRUFBQUEsTUFBTSxDQUFDRSxLQUFQLEdBQWUsR0FBZjtBQUNBRixFQUFBQSxNQUFNLENBQUNHLE1BQVAsR0FBZ0IsR0FBaEI7QUFDQSxNQUFNQyxHQUFHLEdBQUdKLE1BQU0sQ0FBQ0ssVUFBUCxDQUFrQixJQUFsQixDQUFaLENBSmdELENBS2hEO0FBQ0E7O0FBQ0EsTUFBTUMsSUFBSSxHQUFHLElBQUlWLHdEQUFKLEVBQWI7QUFDQSxNQUFJQyw2REFBSixDQUFhUyxJQUFiLEVBQW1CRixHQUFuQixFQUF3QkcsR0FBeEI7QUFDSCxDQVREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmVsaW5lLWZldmVyLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lLmpzXCI7XG5pbXBvcnQgR2FtZVZpZXcgZnJvbSBcIi4vc2NyaXB0cy9nYW1lX3ZpZXcuanNcIjtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpO1xuICAgIGNhbnZhcy53aWR0aCA9IDkwMDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gNjMwO1xuICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgLy8gY3R4LmZpbGxTdHlsZSA9IFwiI2VjZDhmMVwiO1xuICAgIC8vIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuICAgIG5ldyBHYW1lVmlldyhnYW1lLCBjdHgpLnJ1bigpO1xufSk7Il0sIm5hbWVzIjpbIkdhbWUiLCJHYW1lVmlldyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNhbnZhcyIsImdldEVsZW1lbnRCeUlkIiwid2lkdGgiLCJoZWlnaHQiLCJjdHgiLCJnZXRDb250ZXh0IiwiZ2FtZSIsInJ1biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/arrow.js":
/*!******************************!*\
  !*** ./src/scripts/arrow.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Arrow; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Arrow = function Arrow() {\n  _classCallCheck(this, Arrow);\n\n  this.color = \"\";\n  this.size = \"\";\n  this.speed = \"\";\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9hcnJvdy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7SUFBcUJBLFFBQ2pCLGlCQUFjO0FBQUE7O0FBQ1YsT0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDQSxPQUFLQyxJQUFMLEdBQVksRUFBWjtBQUNBLE9BQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mZWxpbmUtZmV2ZXIvLi9zcmMvc2NyaXB0cy9hcnJvdy5qcz82NmQyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFycm93IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IFwiXCI7XG4gICAgICAgIHRoaXMuc2l6ZSA9IFwiXCI7XG4gICAgICAgIHRoaXMuc3BlZWQgPSBcIlwiO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiQXJyb3ciLCJjb2xvciIsInNpemUiLCJzcGVlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/arrow.js\n");

/***/ }),

/***/ "./src/scripts/avatar.js":
/*!*******************************!*\
  !*** ./src/scripts/avatar.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Avatar; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Avatar = function Avatar() {\n  _classCallCheck(this, Avatar);\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9hdmF0YXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQXFCQSxTQUNqQixrQkFBYztBQUFBO0FBRWIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mZWxpbmUtZmV2ZXIvLi9zcmMvc2NyaXB0cy9hdmF0YXIuanM/ZjljNiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBdmF0YXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBcbiAgICB9XG59Il0sIm5hbWVzIjpbIkF2YXRhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/avatar.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _avatar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatar.js */ \"./src/scripts/avatar.js\");\n/* harmony import */ var _arrow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow.js */ \"./src/scripts/arrow.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game() {\n    _classCallCheck(this, Game);\n\n    this.arrow = [];\n    this.avatar = [];\n    this.BG_COLOR = \"#bf75be\";\n    this.DIM_X = 900; // debugger\n\n    this.DIM_X = 630; // debugger\n  }\n\n  _createClass(Game, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.fillStyle = \"#ffffff\"; // debugger\n\n      ctx.fillRect = (0, 0, this.DIM_X, this.DIM_Y); // debugger\n    }\n  }, {\n    key: \"addArrow\",\n    value: function addArrow() {// const leftArrow = new Arrow();\n      // const upArrow = new Arrow();\n      // const downArrow = new Arrow();\n      // const rightArrow = new Arrow();\n    }\n  }, {\n    key: \"randomArrow\",\n    value: function randomArrow() {\n      var randomArrow = this.arrow[Math.floor(Math.random() * this.arrow.length)];\n    }\n  }, {\n    key: \"drawScore\",\n    value: function drawScore() {}\n  }, {\n    key: \"checkCollision\",\n    value: function checkCollision() {}\n  }]);\n\n  return Game;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRXFCRTtBQUNqQixrQkFBYztBQUFBOztBQUNWLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLFNBQWhCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEdBQWIsQ0FKVSxDQUtWOztBQUNBLFNBQUtBLEtBQUwsR0FBYSxHQUFiLENBTlUsQ0FPVjtBQUNIOzs7O1dBRUQsY0FBS0MsR0FBTCxFQUFVO0FBQ05BLE1BQUFBLEdBQUcsQ0FBQ0MsU0FBSixHQUFnQixTQUFoQixDQURNLENBRU47O0FBQ0FELE1BQUFBLEdBQUcsQ0FBQ0UsUUFBSixJQUFnQixHQUFHLENBQUgsRUFBTSxLQUFLSCxLQUFYLEVBQWtCLEtBQUtJLEtBQXZDLEVBSE0sQ0FJTjtBQUNIOzs7V0FFRCxvQkFBVyxDQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7OztXQUVELHVCQUFjO0FBQ1YsVUFBSUMsV0FBVyxHQUFHLEtBQUtSLEtBQUwsQ0FBV1MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQixLQUFLWCxLQUFMLENBQVdZLE1BQXRDLENBQVgsQ0FBbEI7QUFDSDs7O1dBRUQscUJBQVksQ0FFWDs7O1dBRUQsMEJBQWlCLENBRWhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmVsaW5lLWZldmVyLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdmF0YXIgZnJvbSBcIi4vYXZhdGFyLmpzXCI7XG5pbXBvcnQgQXJyb3cgZnJvbSBcIi4vYXJyb3cuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXJyb3cgPSBbXTtcbiAgICAgICAgdGhpcy5hdmF0YXIgPSBbXTtcbiAgICAgICAgdGhpcy5CR19DT0xPUiA9IFwiI2JmNzViZVwiO1xuICAgICAgICB0aGlzLkRJTV9YID0gOTAwO1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICB0aGlzLkRJTV9YID0gNjMwO1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgLy8gZGVidWdnZXJcbiAgICAgICAgY3R4LmZpbGxSZWN0ID0gKDAsIDAsIHRoaXMuRElNX1gsIHRoaXMuRElNX1kpO1xuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgIH1cblxuICAgIGFkZEFycm93KCkge1xuICAgICAgICAvLyBjb25zdCBsZWZ0QXJyb3cgPSBuZXcgQXJyb3coKTtcbiAgICAgICAgLy8gY29uc3QgdXBBcnJvdyA9IG5ldyBBcnJvdygpO1xuICAgICAgICAvLyBjb25zdCBkb3duQXJyb3cgPSBuZXcgQXJyb3coKTtcbiAgICAgICAgLy8gY29uc3QgcmlnaHRBcnJvdyA9IG5ldyBBcnJvdygpO1xuICAgIH1cblxuICAgIHJhbmRvbUFycm93KCkge1xuICAgICAgICBsZXQgcmFuZG9tQXJyb3cgPSB0aGlzLmFycm93W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuYXJyb3cubGVuZ3RoKV07XG4gICAgfVxuXG4gICAgZHJhd1Njb3JlKCkge1xuXG4gICAgfVxuXG4gICAgY2hlY2tDb2xsaXNpb24oKSB7XG5cbiAgICB9XG59Il0sIm5hbWVzIjpbIkF2YXRhciIsIkFycm93IiwiR2FtZSIsImFycm93IiwiYXZhdGFyIiwiQkdfQ09MT1IiLCJESU1fWCIsImN0eCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiRElNX1kiLCJyYW5kb21BcnJvdyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameView; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar GameView = /*#__PURE__*/function () {\n  function GameView(game, ctx) {\n    _classCallCheck(this, GameView);\n\n    this.game = game;\n    this.ctx = ctx;\n  }\n\n  _createClass(GameView, [{\n    key: \"keyBindings\",\n    value: function keyBindings() {\n      addEventListener;\n    }\n  }, {\n    key: \"run\",\n    value: function run() {\n      this.game.draw(this.ctx);\n    }\n  }]);\n\n  return GameView;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFxQkE7QUFDakIsb0JBQVlDLElBQVosRUFBa0JDLEdBQWxCLEVBQXVCO0FBQUE7O0FBQ25CLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNIOzs7O1dBRUQsdUJBQWM7QUFDVkMsTUFBQUEsZ0JBQWdCO0FBQ25COzs7V0FFRCxlQUFNO0FBQ0YsV0FBS0YsSUFBTCxDQUFVRyxJQUFWLENBQWUsS0FBS0YsR0FBcEI7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2ZlbGluZS1mZXZlci8uL3NyYy9zY3JpcHRzL2dhbWVfdmlldy5qcz84MGVlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVWaWV3IHtcbiAgICBjb25zdHJ1Y3RvcihnYW1lLCBjdHgpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XG4gICAgfVxuXG4gICAga2V5QmluZGluZ3MoKSB7XG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXJcbiAgICB9XG5cbiAgICBydW4oKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5kcmF3KHRoaXMuY3R4KTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIkdhbWVWaWV3IiwiZ2FtZSIsImN0eCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkcmF3Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game_view.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;