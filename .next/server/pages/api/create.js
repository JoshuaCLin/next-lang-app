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
exports.id = "pages/api/create";
exports.ids = ["pages/api/create"];
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

/***/ "(api)/./pages/api/create.ts":
/*!*****************************!*\
  !*** ./pages/api/create.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction handler(req, res) {\n    if (req.method === \"POST\") {\n        const result = POST(req);\n        res.status(result ? 200 : 500).json({\n            isOk: result ? \"Y\" : \"N\"\n        });\n        return;\n    }\n    if (req.method === \"DELETE\") {\n        const result = DELETE(req);\n        res.status(result ? 200 : 500).json({\n            isOk: result ? \"Y\" : \"N\"\n        });\n        return;\n    }\n    if (req.method === \"GET\") {\n        res.status(404).json({\n            isOk: \"N\"\n        });\n        return;\n    }\n}\nfunction POST(req) {\n    // const { key, ...data } = req.body;\n    const { key } = req.body;\n    delete req.body[\"key\"];\n    const data = req.body;\n    try {\n        Object.keys(data).forEach((filename)=>{\n            const content = JSON.parse((0,fs__WEBPACK_IMPORTED_MODULE_0__.readFileSync)(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"json\", `${filename}.json`)).toString());\n            const updateContent = {\n                ...content,\n                [key]: data[filename]\n            };\n            (0,fs__WEBPACK_IMPORTED_MODULE_0__.writeFileSync)(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"json\", `${filename}.json`), JSON.stringify(updateContent));\n        });\n        return true;\n    } catch (err) {\n        console.error(err);\n        return false;\n    }\n}\nfunction DELETE(req) {\n    const { key } = req.body;\n    try {\n        const dirPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), `json`);\n        // 讀取指定目錄\n        let files = (0,fs__WEBPACK_IMPORTED_MODULE_0__.readdirSync)(dirPath);\n        files.forEach((file)=>{\n            // 檢查檔案是否為 .json 文件\n            if (path__WEBPACK_IMPORTED_MODULE_1___default().extname(file) === \".json\") {\n                let content = JSON.parse((0,fs__WEBPACK_IMPORTED_MODULE_0__.readFileSync)(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"json\", `${file}`)).toString());\n                if (content.hasOwnProperty(key)) {\n                    // 檢查有沒有key\n                    delete content[key];\n                    (0,fs__WEBPACK_IMPORTED_MODULE_0__.writeFileSync)(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"json\", `${file}`), JSON.stringify(content));\n                }\n            }\n        });\n        return true;\n    } catch (err) {\n        console.error(err);\n        return false;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWFkRmlsZVN5bmMsIHdyaXRlRmlsZVN5bmMsIHJlYWRkaXJTeW5jIH0gZnJvbSAnZnMnO1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbnR5cGUgRGF0YSA9IHtcbiAgaXNPazogc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhPikge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gUE9TVChyZXEpO1xuICAgIHJlcy5zdGF0dXMocmVzdWx0ID8gMjAwIDogNTAwKS5qc29uKHsgaXNPazogcmVzdWx0ID8gJ1knIDogJ04nIH0pO1xuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHJlcS5tZXRob2QgPT09ICdERUxFVEUnKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gREVMRVRFKHJlcSk7XG4gICAgcmVzLnN0YXR1cyhyZXN1bHQgPyAyMDAgOiA1MDApLmpzb24oeyBpc09rOiByZXN1bHQgPyAnWScgOiAnTicgfSk7XG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IGlzT2s6ICdOJyB9KTtcbiAgICByZXR1cm5cbiAgfVxufVxuXG5mdW5jdGlvbiBQT1NUKHJlcTogTmV4dEFwaVJlcXVlc3QpIHtcbiAgLy8gY29uc3QgeyBrZXksIC4uLmRhdGEgfSA9IHJlcS5ib2R5O1xuICBjb25zdCB7a2V5fSA9IHJlcS5ib2R5XG4gIGRlbGV0ZSByZXEuYm9keVsna2V5J11cbiAgY29uc3QgZGF0YSA9IHJlcS5ib2R5XG4gIHRyeSB7XG4gICAgT2JqZWN0LmtleXMoZGF0YSkuZm9yRWFjaCgoZmlsZW5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSBKU09OLnBhcnNlKHJlYWRGaWxlU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2pzb24nLCBgJHtmaWxlbmFtZX0uanNvbmApKS50b1N0cmluZygpKTtcbiAgICAgIGNvbnN0IHVwZGF0ZUNvbnRlbnQgPSB7IC4uLmNvbnRlbnQsIFtrZXldOiBkYXRhW2ZpbGVuYW1lXSB9O1xuICAgICAgd3JpdGVGaWxlU3luYyhwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgJ2pzb24nLCBgJHtmaWxlbmFtZX0uanNvbmApLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVDb250ZW50KSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gREVMRVRFKHJlcTogTmV4dEFwaVJlcXVlc3QpIHtcbiAgY29uc3QgeyBrZXkgfSA9IHJlcS5ib2R5O1xuICB0cnkge1xuICAgIGNvbnN0IGRpclBhdGggPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgYGpzb25gKTtcbiAgICAvLyDoroDlj5bmjIflrprnm67pjIRcbiAgICBsZXQgZmlsZXMgPSByZWFkZGlyU3luYyhkaXJQYXRoKTtcbiAgICBmaWxlcy5mb3JFYWNoKChmaWxlKSA9PiB7XG4gICAgICAvLyDmqqLmn6XmqpTmoYjmmK/lkKbngrogLmpzb24g5paH5Lu2XG4gICAgICBpZiAocGF0aC5leHRuYW1lKGZpbGUpID09PSAnLmpzb24nKSB7XG4gICAgICAgIGxldCBjb250ZW50ID0gSlNPTi5wYXJzZShyZWFkRmlsZVN5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdqc29uJywgYCR7ZmlsZX1gKSkudG9TdHJpbmcoKSk7XG4gICAgICAgIGlmIChjb250ZW50Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAvLyDmqqLmn6XmnInmspLmnIlrZXlcbiAgICAgICAgICBkZWxldGUgY29udGVudFtrZXldO1xuICAgICAgICAgIHdyaXRlRmlsZVN5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksICdqc29uJywgYCR7ZmlsZX1gKSwgSlNPTi5zdHJpbmdpZnkoY29udGVudCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJyZWFkRmlsZVN5bmMiLCJ3cml0ZUZpbGVTeW5jIiwicmVhZGRpclN5bmMiLCJwYXRoIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInJlc3VsdCIsIlBPU1QiLCJzdGF0dXMiLCJqc29uIiwiaXNPayIsIkRFTEVURSIsImtleSIsImJvZHkiLCJkYXRhIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJmaWxlbmFtZSIsImNvbnRlbnQiLCJKU09OIiwicGFyc2UiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsInRvU3RyaW5nIiwidXBkYXRlQ29udGVudCIsInN0cmluZ2lmeSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImRpclBhdGgiLCJmaWxlcyIsImZpbGUiLCJleHRuYW1lIiwiaGFzT3duUHJvcGVydHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/create.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/create.ts"));
module.exports = __webpack_exports__;

})();