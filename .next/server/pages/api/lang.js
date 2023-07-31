"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/lang";
exports.ids = ["pages/api/lang"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/lang.ts":
/*!***************************!*\
  !*** ./pages/api/lang.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction handler(req, res) {\n    if (req.method === \"GET\") {\n        const files = (0,fs__WEBPACK_IMPORTED_MODULE_0__.readdirSync)(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"json\"));\n        res.status(200).json({\n            isOk: \"Y\",\n            files: files.map((file)=>file.split(\".\")[0])\n        });\n    } else {\n        res.status(404).json({\n            isOk: \"N\",\n            files: []\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGFuZy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUNpQztBQUNUO0FBT1QsU0FBU0UsUUFBUUMsR0FBbUIsRUFBRUMsR0FBMEI7SUFDN0UsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDeEIsTUFBTUMsUUFBUU4sK0NBQVdBLENBQUNDLGdEQUFTLENBQUNPLFFBQVFDLEdBQUcsSUFBSTtRQUNuREwsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxNQUFNO1lBQUtOLE9BQU9BLE1BQU1PLEdBQUcsQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7UUFBRTtJQUNuRixPQUFPO1FBQ0xYLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsTUFBTTtZQUFLTixPQUFPLEVBQUU7UUFBQztJQUM5QztBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGFuZy1hcHAvLi9wYWdlcy9hcGkvbGFuZy50cz81YTRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgcmVhZGRpclN5bmMgfSBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxudHlwZSBEYXRhID0ge1xuICBpc09rOiBzdHJpbmc7XG4gIGZpbGVzOiBzdHJpbmdbXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2U8RGF0YT4pIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgY29uc3QgZmlsZXMgPSByZWFkZGlyU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2pzb24nKSk7XG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBpc09rOiAnWScsIGZpbGVzOiBmaWxlcy5tYXAoKGZpbGUpID0+IGZpbGUuc3BsaXQoJy4nKVswXSkgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBpc09rOiAnTicsIGZpbGVzOiBbXSB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInJlYWRkaXJTeW5jIiwicGF0aCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJmaWxlcyIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwic3RhdHVzIiwianNvbiIsImlzT2siLCJtYXAiLCJmaWxlIiwic3BsaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/lang.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/lang.ts"));
module.exports = __webpack_exports__;

})();