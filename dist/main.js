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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_game_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game_view.js */ \"./src/scripts/game_view.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  var canvas = document.getElementById(\"game-canvas\");\n  canvas.width = 900;\n  canvas.height = 630;\n  var ctx = canvas.getContext(\"2d\");\n  var game = new _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  var gameView = new _scripts_game_view_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, ctx);\n  gameView.run();\n  gameView.start();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUVBRSxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2hELE1BQU1DLE1BQU0sR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLGFBQXhCLENBQWY7QUFDQUQsRUFBQUEsTUFBTSxDQUFDRSxLQUFQLEdBQWUsR0FBZjtBQUNBRixFQUFBQSxNQUFNLENBQUNHLE1BQVAsR0FBZ0IsR0FBaEI7QUFDQSxNQUFNQyxHQUFHLEdBQUdKLE1BQU0sQ0FBQ0ssVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLElBQUlWLHdEQUFKLEVBQWI7QUFDQSxNQUFNVyxRQUFRLEdBQUcsSUFBSVYsNkRBQUosQ0FBYVMsSUFBYixFQUFtQkYsR0FBbkIsQ0FBakI7QUFDQUcsRUFBQUEsUUFBUSxDQUFDQyxHQUFUO0FBQ0FELEVBQUFBLFFBQVEsQ0FBQ0UsS0FBVDtBQUNILENBVEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mZWxpbmUtZmV2ZXIvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWUuanNcIjtcbmltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi9zY3JpcHRzL2dhbWVfdmlldy5qc1wiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lLWNhbnZhc1wiKTtcbiAgICBjYW52YXMud2lkdGggPSA5MDA7XG4gICAgY2FudmFzLmhlaWdodCA9IDYzMDtcbiAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuICAgIGNvbnN0IGdhbWVWaWV3ID0gbmV3IEdhbWVWaWV3KGdhbWUsIGN0eCk7XG4gICAgZ2FtZVZpZXcucnVuKCk7XG4gICAgZ2FtZVZpZXcuc3RhcnQoKTtcbn0pOyJdLCJuYW1lcyI6WyJHYW1lIiwiR2FtZVZpZXciLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsIndpZHRoIiwiaGVpZ2h0IiwiY3R4IiwiZ2V0Q29udGV4dCIsImdhbWUiLCJnYW1lVmlldyIsInJ1biIsInN0YXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/arrow.js":
/*!******************************!*\
  !*** ./src/scripts/arrow.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Arrow; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar PROPERTIES = {\n  SIZE: 50,\n  SPEED: 5\n};\n\nvar Arrow = /*#__PURE__*/function () {\n  function Arrow() {\n    _classCallCheck(this, Arrow);\n\n    this.color = \"#ffffff\";\n    this.strokeColor = \"#ed1851\";\n    this.size = PROPERTIES.SIZE;\n    this.speed = PROPERTIES.SPEED;\n  }\n\n  _createClass(Arrow, [{\n    key: \"newArrow\",\n    value: function newArrow(ctx, startX, startY, endX, endY) {\n      ctx.beginPath();\n      ctx.moveTo(startX, startY);\n      ctx.lineTo(endX, endY);\n      ctx.stroke();\n      ctx.closePath();\n    }\n  }]);\n\n  return Arrow;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9hcnJvdy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsSUFBTUEsVUFBVSxHQUFHO0FBQ2ZDLEVBQUFBLElBQUksRUFBRSxFQURTO0FBRWZDLEVBQUFBLEtBQUssRUFBRTtBQUZRLENBQW5COztJQUtxQkM7QUFDakIsbUJBQWM7QUFBQTs7QUFDVixTQUFLQyxLQUFMLEdBQWEsU0FBYjtBQUNBLFNBQUtDLFdBQUwsR0FBbUIsU0FBbkI7QUFDQSxTQUFLQyxJQUFMLEdBQVlOLFVBQVUsQ0FBQ0MsSUFBdkI7QUFDQSxTQUFLTSxLQUFMLEdBQWFQLFVBQVUsQ0FBQ0UsS0FBeEI7QUFDSDs7OztXQUVELGtCQUFTTSxHQUFULEVBQWNDLE1BQWQsRUFBc0JDLE1BQXRCLEVBQThCQyxJQUE5QixFQUFvQ0MsSUFBcEMsRUFBMEM7QUFDdENKLE1BQUFBLEdBQUcsQ0FBQ0ssU0FBSjtBQUNBTCxNQUFBQSxHQUFHLENBQUNNLE1BQUosQ0FBV0wsTUFBWCxFQUFtQkMsTUFBbkI7QUFDQUYsTUFBQUEsR0FBRyxDQUFDTyxNQUFKLENBQVdKLElBQVgsRUFBaUJDLElBQWpCO0FBQ0FKLE1BQUFBLEdBQUcsQ0FBQ1EsTUFBSjtBQUNBUixNQUFBQSxHQUFHLENBQUNTLFNBQUo7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL2ZlbGluZS1mZXZlci8uL3NyYy9zY3JpcHRzL2Fycm93LmpzPzY2ZDIiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUFJPUEVSVElFUyA9IHtcbiAgICBTSVpFOiA1MCxcbiAgICBTUEVFRDogNVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXJyb3cgeyBcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jb2xvciA9IFwiI2ZmZmZmZlwiO1xuICAgICAgICB0aGlzLnN0cm9rZUNvbG9yID0gXCIjZWQxODUxXCJcbiAgICAgICAgdGhpcy5zaXplID0gUFJPUEVSVElFUy5TSVpFO1xuICAgICAgICB0aGlzLnNwZWVkID0gUFJPUEVSVElFUy5TUEVFRDtcbiAgICB9XG5cbiAgICBuZXdBcnJvdyhjdHgsIHN0YXJ0WCwgc3RhcnRZLCBlbmRYLCBlbmRZKSB7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgICAgY3R4Lm1vdmVUbyhzdGFydFgsIHN0YXJ0WSk7XG4gICAgICAgIGN0eC5saW5lVG8oZW5kWCwgZW5kWSk7XG4gICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiUFJPUEVSVElFUyIsIlNJWkUiLCJTUEVFRCIsIkFycm93IiwiY29sb3IiLCJzdHJva2VDb2xvciIsInNpemUiLCJzcGVlZCIsImN0eCIsInN0YXJ0WCIsInN0YXJ0WSIsImVuZFgiLCJlbmRZIiwiYmVnaW5QYXRoIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiY2xvc2VQYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/arrow.js\n");

/***/ }),

/***/ "./src/scripts/avatar.js":
/*!*******************************!*\
  !*** ./src/scripts/avatar.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Avatar; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Avatar = /*#__PURE__*/function () {\n  function Avatar() {\n    _classCallCheck(this, Avatar);\n  }\n\n  _createClass(Avatar, [{\n    key: \"animate\",\n    value: function animate() {}\n  }]);\n\n  return Avatar;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9hdmF0YXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFxQkE7QUFDakIsb0JBQWM7QUFBQTtBQUViOzs7O1dBRUQsbUJBQVUsQ0FFVCIsInNvdXJjZXMiOlsid2VicGFjazovL2ZlbGluZS1mZXZlci8uL3NyYy9zY3JpcHRzL2F2YXRhci5qcz9mOWM2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEF2YXRhciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGFuaW1hdGUoKSB7XG5cbiAgICB9XG59Il0sIm5hbWVzIjpbIkF2YXRhciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/avatar.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Game; }\n/* harmony export */ });\n/* harmony import */ var _avatar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatar.js */ \"./src/scripts/avatar.js\");\n/* harmony import */ var _arrow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./arrow.js */ \"./src/scripts/arrow.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Game = /*#__PURE__*/function () {\n  function Game() {\n    _classCallCheck(this, Game);\n\n    this.arrow = [];\n    this.avatar = [];\n    this.BG_COLOR = \"#e6c7f0\";\n    this.DIM_X = 900;\n    this.DIM_Y = 630;\n  }\n\n  _createClass(Game, [{\n    key: \"draw\",\n    value: function draw(ctx) {\n      ctx.fillStyle = this.BG_COLOR;\n      ctx.fillRect(0, 0, this.DIM_X, this.DIM_Y);\n    }\n  }, {\n    key: \"background\",\n    value: function background(ctx) {\n      var img = new Image();\n\n      img.onload = function () {\n        ctx.drawImage(img, 400, 0);\n      };\n\n      img.src = \"../imgs/disco-ball.png\";\n    }\n  }, {\n    key: \"addAvatar\",\n    value: function addAvatar() {}\n  }, {\n    key: \"createArrow\",\n    value: function createArrow() {\n      var newArrow = new _arrow_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n      this.arrow.push(newArrow);\n    }\n  }, {\n    key: \"randomArrow\",\n    value: function randomArrow() {\n      var rand = this.arrow[Math.floor(Math.random() * this.arrow.length)];\n    }\n  }, {\n    key: \"drawScore\",\n    value: function drawScore() {}\n  }, {\n    key: \"checkCollision\",\n    value: function checkCollision() {}\n  }]);\n\n  return Game;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0lBRXFCRTtBQUNqQixrQkFBYztBQUFBOztBQUNWLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLFNBQWhCO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEdBQWI7QUFDQSxTQUFLQyxLQUFMLEdBQWEsR0FBYjtBQUNIOzs7O1dBRUQsY0FBS0MsR0FBTCxFQUFVO0FBQ05BLE1BQUFBLEdBQUcsQ0FBQ0MsU0FBSixHQUFnQixLQUFLSixRQUFyQjtBQUNBRyxNQUFBQSxHQUFHLENBQUNFLFFBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLEtBQUtKLEtBQXhCLEVBQStCLEtBQUtDLEtBQXBDO0FBQ0g7OztXQUVELG9CQUFXQyxHQUFYLEVBQWdCO0FBQ1osVUFBTUcsR0FBRyxHQUFHLElBQUlDLEtBQUosRUFBWjs7QUFDQUQsTUFBQUEsR0FBRyxDQUFDRSxNQUFKLEdBQWEsWUFBVztBQUNwQkwsUUFBQUEsR0FBRyxDQUFDTSxTQUFKLENBQWNILEdBQWQsRUFBbUIsR0FBbkIsRUFBd0IsQ0FBeEI7QUFDSCxPQUZEOztBQUdBQSxNQUFBQSxHQUFHLENBQUNJLEdBQUosR0FBVSx3QkFBVjtBQUNIOzs7V0FFRCxxQkFBWSxDQUVYOzs7V0FFRCx1QkFBYztBQUNWLFVBQUlDLFFBQVEsR0FBRyxJQUFJZixpREFBSixFQUFmO0FBQ0EsV0FBS0UsS0FBTCxDQUFXYyxJQUFYLENBQWdCRCxRQUFoQjtBQUNIOzs7V0FFRCx1QkFBYztBQUNWLFVBQUlFLElBQUksR0FBRyxLQUFLZixLQUFMLENBQVdnQixJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCLEtBQUtsQixLQUFMLENBQVdtQixNQUF0QyxDQUFYLENBQVg7QUFDSDs7O1dBRUQscUJBQVksQ0FFWDs7O1dBRUQsMEJBQWlCLENBRWhCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmVsaW5lLWZldmVyLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBdmF0YXIgZnJvbSBcIi4vYXZhdGFyLmpzXCI7XG5pbXBvcnQgQXJyb3cgZnJvbSBcIi4vYXJyb3cuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYXJyb3cgPSBbXTtcbiAgICAgICAgdGhpcy5hdmF0YXIgPSBbXTtcbiAgICAgICAgdGhpcy5CR19DT0xPUiA9IFwiI2U2YzdmMFwiO1xuICAgICAgICB0aGlzLkRJTV9YID0gOTAwO1xuICAgICAgICB0aGlzLkRJTV9ZID0gNjMwO1xuICAgIH1cblxuICAgIGRyYXcoY3R4KSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLkJHX0NPTE9SO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5ESU1fWCwgdGhpcy5ESU1fWSk7XG4gICAgfVxuXG4gICAgYmFja2dyb3VuZChjdHgpIHtcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCA0MDAsIDApO1xuICAgICAgICB9XG4gICAgICAgIGltZy5zcmMgPSBcIi4uL2ltZ3MvZGlzY28tYmFsbC5wbmdcIjtcbiAgICB9XG5cbiAgICBhZGRBdmF0YXIoKSB7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGNyZWF0ZUFycm93KCkge1xuICAgICAgICBsZXQgbmV3QXJyb3cgPSBuZXcgQXJyb3coKTtcbiAgICAgICAgdGhpcy5hcnJvdy5wdXNoKG5ld0Fycm93KTtcbiAgICB9XG5cbiAgICByYW5kb21BcnJvdygpIHtcbiAgICAgICAgbGV0IHJhbmQgPSB0aGlzLmFycm93W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuYXJyb3cubGVuZ3RoKV07XG4gICAgfVxuXG4gICAgZHJhd1Njb3JlKCkge1xuXG4gICAgfVxuXG4gICAgY2hlY2tDb2xsaXNpb24oKSB7XG5cbiAgICB9XG59Il0sIm5hbWVzIjpbIkF2YXRhciIsIkFycm93IiwiR2FtZSIsImFycm93IiwiYXZhdGFyIiwiQkdfQ09MT1IiLCJESU1fWCIsIkRJTV9ZIiwiY3R4IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJpbWciLCJJbWFnZSIsIm9ubG9hZCIsImRyYXdJbWFnZSIsInNyYyIsIm5ld0Fycm93IiwicHVzaCIsInJhbmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GameView; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar GameView = /*#__PURE__*/function () {\n  function GameView(game, ctx) {\n    _classCallCheck(this, GameView);\n\n    this.game = game;\n    this.ctx = ctx;\n  }\n\n  _createClass(GameView, [{\n    key: \"keyBindings\",\n    value: function keyBindings() {}\n  }, {\n    key: \"run\",\n    value: function run() {\n      this.game.draw(this.ctx);\n    }\n  }, {\n    key: \"start\",\n    value: function start() {\n      this.game.background(this.ctx);\n    }\n  }]);\n\n  return GameView;\n}();\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFxQkE7QUFDakIsb0JBQVlDLElBQVosRUFBa0JDLEdBQWxCLEVBQXVCO0FBQUE7O0FBQ25CLFNBQUtELElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNIOzs7O1dBRUQsdUJBQWMsQ0FFYjs7O1dBRUQsZUFBTTtBQUNGLFdBQUtELElBQUwsQ0FBVUUsSUFBVixDQUFlLEtBQUtELEdBQXBCO0FBQ0g7OztXQUVELGlCQUFRO0FBQ0osV0FBS0QsSUFBTCxDQUFVRyxVQUFWLENBQXFCLEtBQUtGLEdBQTFCO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mZWxpbmUtZmV2ZXIvLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanM/ODBlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lVmlldyB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSwgY3R4KSB7XG4gICAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XG4gICAgICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIH1cblxuICAgIGtleUJpbmRpbmdzKCkge1xuICAgICAgICBcbiAgICB9XG5cbiAgICBydW4oKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5kcmF3KHRoaXMuY3R4KTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5nYW1lLmJhY2tncm91bmQodGhpcy5jdHgpO1xuICAgIH1cbn0iXSwibmFtZXMiOlsiR2FtZVZpZXciLCJnYW1lIiwiY3R4IiwiZHJhdyIsImJhY2tncm91bmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game_view.js\n");

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