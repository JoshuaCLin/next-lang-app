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
exports.id = "pages/api/lang/[lang]";
exports.ids = ["pages/api/lang/[lang]"];
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

/***/ "(api)/./pages/api/lang/[lang].ts":
/*!**********************************!*\
  !*** ./pages/api/lang/[lang].ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\nfunction handler(req, res) {\n    const lang = req.query?.lang;\n    if (req.method === \"GET\") {\n        const result = GET(req, lang);\n        res.status(result.isOk === \"Y\" ? 200 : 500).json(result);\n        return;\n    }\n    if (req.method === \"POST\") {\n        const result = POST(req, lang);\n        res.status(result ? 200 : 500).json({\n            isOk: result ? \"Y\" : \"N\"\n        });\n        return;\n    }\n    if (req.method === \"DELETE\") {\n        const result = DELETE(req, lang);\n        res.status(result ? 200 : 500).json({\n            isOk: result ? \"Y\" : \"N\"\n        });\n        return;\n    }\n    res.status(404).json({\n        isOk: \"N\"\n    });\n}\nfunction GET(req, lang) {\n    try {\n        const data = (0,fs__WEBPACK_IMPORTED_MODULE_0__.readFileSync)(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), `json/${lang}.json`));\n        return {\n            isOk: \"Y\",\n            data: JSON.parse(data.toString())\n        };\n    } catch (err) {\n        return {\n            isOk: \"N\",\n            data: {}\n        };\n    }\n}\nfunction POST(req, lang) {\n    const payload = req.body;\n    (0,fs__WEBPACK_IMPORTED_MODULE_0__.writeFileSync)(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), `json/${lang}.json`), JSON.stringify(payload));\n    return true;\n}\nfunction DELETE(req, lang) {\n    try {\n        (0,fs__WEBPACK_IMPORTED_MODULE_0__.unlinkSync)(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), `json/${lang}.json`));\n        return true;\n    } catch (err) {\n        return false;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbGFuZy9bbGFuZ10udHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSw2RUFBNkU7QUFFSztBQUMxRDtBQU9ULFNBQVNJLFFBQVFDLEdBQW1CLEVBQUVDLEdBQTBCO0lBQzdFLE1BQU1DLE9BQU9GLElBQUlHLEtBQUssRUFBRUQ7SUFDeEIsSUFBSUYsSUFBSUksTUFBTSxLQUFLLE9BQU87UUFDeEIsTUFBTUMsU0FBU0MsSUFBSU4sS0FBS0U7UUFDeEJELElBQUlNLE1BQU0sQ0FBQ0YsT0FBT0csSUFBSSxLQUFLLE1BQU0sTUFBTSxLQUFLQyxJQUFJLENBQUNKO1FBQ2pEO0lBQ0Y7SUFFQSxJQUFJTCxJQUFJSSxNQUFNLEtBQUssUUFBUTtRQUN6QixNQUFNQyxTQUFTSyxLQUFLVixLQUFLRTtRQUN6QkQsSUFBSU0sTUFBTSxDQUFDRixTQUFTLE1BQU0sS0FBS0ksSUFBSSxDQUFDO1lBQUVELE1BQU1ILFNBQVMsTUFBTTtRQUFJO1FBQy9EO0lBQ0Y7SUFFQSxJQUFJTCxJQUFJSSxNQUFNLEtBQUssVUFBVTtRQUMzQixNQUFNQyxTQUFTTSxPQUFPWCxLQUFLRTtRQUMzQkQsSUFBSU0sTUFBTSxDQUFDRixTQUFTLE1BQU0sS0FBS0ksSUFBSSxDQUFDO1lBQUVELE1BQU1ILFNBQVMsTUFBTTtRQUFJO1FBQy9EO0lBQ0Y7SUFFQUosSUFBSU0sTUFBTSxDQUFDLEtBQUtFLElBQUksQ0FBQztRQUFFRCxNQUFNO0lBQUk7QUFDbkM7QUFFQSxTQUFTRixJQUFJTixHQUFtQixFQUFFRSxJQUFZO0lBQzVDLElBQUk7UUFDRixNQUFNVSxPQUFPakIsZ0RBQVlBLENBQUNHLGdEQUFTLENBQUNnQixRQUFRQyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUViLEtBQUssS0FBSyxDQUFDO1FBQ3RFLE9BQU87WUFBRU0sTUFBTTtZQUFLSSxNQUFNSSxLQUFLQyxLQUFLLENBQUNMLEtBQUtNLFFBQVE7UUFBSTtJQUN4RCxFQUFFLE9BQU9DLEtBQUs7UUFDWixPQUFPO1lBQUVYLE1BQU07WUFBS0ksTUFBTSxDQUFDO1FBQUU7SUFDL0I7QUFDRjtBQUVBLFNBQVNGLEtBQUtWLEdBQW1CLEVBQUVFLElBQVk7SUFDN0MsTUFBTWtCLFVBQVVwQixJQUFJcUIsSUFBSTtJQUN4QnpCLGlEQUFhQSxDQUFDRSxnREFBUyxDQUFDZ0IsUUFBUUMsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFYixLQUFLLEtBQUssQ0FBQyxHQUFHYyxLQUFLTSxTQUFTLENBQUNGO0lBQzVFLE9BQU87QUFDVDtBQUVBLFNBQVNULE9BQU9YLEdBQW1CLEVBQUVFLElBQVk7SUFDL0MsSUFBSTtRQUNGTCw4Q0FBVUEsQ0FBQ0MsZ0RBQVMsQ0FBQ2dCLFFBQVFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRWIsS0FBSyxLQUFLLENBQUM7UUFDdkQsT0FBTztJQUNULEVBQUUsT0FBT2lCLEtBQUs7UUFDWixPQUFPO0lBQ1Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2xhbmctYXBwLy4vcGFnZXMvYXBpL2xhbmcvW2xhbmddLnRzPzQ5NjgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dC5qcyBBUEkgcm91dGUgc3VwcG9ydDogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvYXBpLXJvdXRlcy9pbnRyb2R1Y3Rpb25cbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgcmVhZEZpbGUsIHJlYWRGaWxlU3luYywgd3JpdGVGaWxlLCB3cml0ZUZpbGVTeW5jLCB1bmxpbmtTeW5jIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbnR5cGUgRGF0YSA9IHtcbiAgaXNPazogc3RyaW5nO1xuICBkYXRhPzogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2U8RGF0YT4pIHtcbiAgY29uc3QgbGFuZyA9IHJlcS5xdWVyeT8ubGFuZyBhcyBzdHJpbmc7XG4gIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgIGNvbnN0IHJlc3VsdCA9IEdFVChyZXEsIGxhbmcpO1xuICAgIHJlcy5zdGF0dXMocmVzdWx0LmlzT2sgPT09ICdZJyA/IDIwMCA6IDUwMCkuanNvbihyZXN1bHQpO1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQT1NUJykge1xuICAgIGNvbnN0IHJlc3VsdCA9IFBPU1QocmVxLCBsYW5nKTtcbiAgICByZXMuc3RhdHVzKHJlc3VsdCA/IDIwMCA6IDUwMCkuanNvbih7IGlzT2s6IHJlc3VsdCA/ICdZJyA6ICdOJyB9KTtcbiAgICByZXR1cm5cbiAgfVxuXG4gIGlmIChyZXEubWV0aG9kID09PSAnREVMRVRFJykge1xuICAgIGNvbnN0IHJlc3VsdCA9IERFTEVURShyZXEsIGxhbmcpO1xuICAgIHJlcy5zdGF0dXMocmVzdWx0ID8gMjAwIDogNTAwKS5qc29uKHsgaXNPazogcmVzdWx0ID8gJ1knIDogJ04nIH0pO1xuICAgIHJldHVyblxuICB9XG5cbiAgcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBpc09rOiAnTicgfSk7XG59XG5cbmZ1bmN0aW9uIEdFVChyZXE6IE5leHRBcGlSZXF1ZXN0LCBsYW5nOiBzdHJpbmcpOiBEYXRhIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkYXRhID0gcmVhZEZpbGVTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBganNvbi8ke2xhbmd9Lmpzb25gKSk7XG4gICAgcmV0dXJuIHsgaXNPazogJ1knLCBkYXRhOiBKU09OLnBhcnNlKGRhdGEudG9TdHJpbmcoKSkgfTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHsgaXNPazogJ04nLCBkYXRhOiB7fSB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIFBPU1QocmVxOiBOZXh0QXBpUmVxdWVzdCwgbGFuZzogc3RyaW5nKSB7XG4gIGNvbnN0IHBheWxvYWQgPSByZXEuYm9keTtcbiAgd3JpdGVGaWxlU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgYGpzb24vJHtsYW5nfS5qc29uYCksIEpTT04uc3RyaW5naWZ5KHBheWxvYWQpKTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIERFTEVURShyZXE6IE5leHRBcGlSZXF1ZXN0LCBsYW5nOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICB1bmxpbmtTeW5jKHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBganNvbi8ke2xhbmd9Lmpzb25gKSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbInJlYWRGaWxlU3luYyIsIndyaXRlRmlsZVN5bmMiLCJ1bmxpbmtTeW5jIiwicGF0aCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJsYW5nIiwicXVlcnkiLCJtZXRob2QiLCJyZXN1bHQiLCJHRVQiLCJzdGF0dXMiLCJpc09rIiwianNvbiIsIlBPU1QiLCJERUxFVEUiLCJkYXRhIiwiam9pbiIsInByb2Nlc3MiLCJjd2QiLCJKU09OIiwicGFyc2UiLCJ0b1N0cmluZyIsImVyciIsInBheWxvYWQiLCJib2R5Iiwic3RyaW5naWZ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/lang/[lang].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/lang/[lang].ts"));
module.exports = __webpack_exports__;

})();