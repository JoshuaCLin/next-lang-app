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
exports.id = "pages/api/query/[key]";
exports.ids = ["pages/api/query/[key]"];
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

/***/ "(api)/./pages/api/query/[key].ts":
/*!**********************************!*\
  !*** ./pages/api/query/[key].ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction handler(req, res) {\n    const key = req.query.key;\n    if (req.method === \"GET\") {\n        try {\n            const files = (0,fs__WEBPACK_IMPORTED_MODULE_0__.readdirSync)(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"json\"));\n            const result = files.reduce((pre, file)=>{\n                const content = (0,fs__WEBPACK_IMPORTED_MODULE_0__.readFileSync)(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"json\", file));\n                const data = JSON.parse(content.toString());\n                pre = {\n                    ...pre,\n                    [file.split(\".\")[0]]: data[key] ?? \"\"\n                };\n                return pre;\n            }, {});\n            res.status(200).json(result);\n            return;\n        } catch (err) {\n            res.status(400).json({});\n            return;\n        }\n    } else {\n        res.status(404).json({\n            isOk: \"N\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcXVlcnkvW2tleV0udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDK0M7QUFDdkI7QUFNVCxTQUFTRyxRQUFRQyxHQUFtQixFQUFFQyxHQUEwQjtJQUM3RSxNQUFNQyxNQUFNRixJQUFJRyxLQUFLLENBQUNELEdBQUc7SUFDekIsSUFBSUYsSUFBSUksTUFBTSxLQUFLLE9BQU87UUFDeEIsSUFBSTtZQUNGLE1BQU1DLFFBQVFSLCtDQUFXQSxDQUFDQyxnREFBUyxDQUFDUyxRQUFRQyxHQUFHLElBQUk7WUFDbkQsTUFBTUMsU0FBU0osTUFBTUssTUFBTSxDQUE0QixDQUFDQyxLQUFLQztnQkFDM0QsTUFBTUMsVUFBVWpCLGdEQUFZQSxDQUFDRSxnREFBUyxDQUFDUyxRQUFRQyxHQUFHLElBQUksUUFBUUk7Z0JBQzlELE1BQU1FLE9BQU9DLEtBQUtDLEtBQUssQ0FBQ0gsUUFBUUksUUFBUTtnQkFDeENOLE1BQU07b0JBQUUsR0FBR0EsR0FBRztvQkFBRSxDQUFDQyxLQUFLTSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFSixJQUFJLENBQUNaLElBQUksSUFBSTtnQkFBRztnQkFDdEQsT0FBT1M7WUFDVCxHQUFHLENBQUM7WUFDSlYsSUFBSWtCLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNYO1lBQ3JCO1FBQ0YsRUFBRSxPQUFPWSxLQUFLO1lBQ1pwQixJQUFJa0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQyxDQUFDO1lBQ3RCO1FBQ0Y7SUFDRixPQUFPO1FBQ0xuQixJQUFJa0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFRSxNQUFNO1FBQUk7SUFDbkM7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2xhbmctYXBwLy4vcGFnZXMvYXBpL3F1ZXJ5L1trZXldLnRzPzQyZmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5pbXBvcnQgeyByZWFkRmlsZVN5bmMsIHJlYWRkaXJTeW5jIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbnR5cGUgRGF0YSA9IHtcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhPikge1xuICBjb25zdCBrZXkgPSByZXEucXVlcnkua2V5IGFzIHN0cmluZztcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZpbGVzID0gcmVhZGRpclN5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdqc29uJykpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gZmlsZXMucmVkdWNlPHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0+KChwcmUsIGZpbGUpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHJlYWRGaWxlU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2pzb24nLCBmaWxlKSk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGNvbnRlbnQudG9TdHJpbmcoKSk7XG4gICAgICAgIHByZSA9IHsgLi4ucHJlLCBbZmlsZS5zcGxpdCgnLicpWzBdXTogZGF0YVtrZXldID8/ICcnIH07XG4gICAgICAgIHJldHVybiBwcmU7XG4gICAgICB9LCB7fSk7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXN1bHQpO1xuICAgICAgcmV0dXJuXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXMuc3RhdHVzKDQwMCkuanNvbih7fSk7XG4gICAgICByZXR1cm5cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBpc09rOiAnTicgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJyZWFkRmlsZVN5bmMiLCJyZWFkZGlyU3luYyIsInBhdGgiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwia2V5IiwicXVlcnkiLCJtZXRob2QiLCJmaWxlcyIsImpvaW4iLCJwcm9jZXNzIiwiY3dkIiwicmVzdWx0IiwicmVkdWNlIiwicHJlIiwiZmlsZSIsImNvbnRlbnQiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwidG9TdHJpbmciLCJzcGxpdCIsInN0YXR1cyIsImpzb24iLCJlcnIiLCJpc09rIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/query/[key].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/query/[key].ts"));
module.exports = __webpack_exports__;

})();