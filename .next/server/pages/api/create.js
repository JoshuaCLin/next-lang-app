"use strict";
(() => {
var exports = {};
exports.id = 5;
exports.ids = [5];
exports.modules = {

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 4691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);


function handler(req, res) {
    if (req.method === "POST") {
        const result = POST(req);
        res.status(result ? 200 : 500).json({
            isOk: result ? "Y" : "N"
        });
        return;
    }
    if (req.method === "DELETE") {
        const result = DELETE(req);
        res.status(result ? 200 : 500).json({
            isOk: result ? "Y" : "N"
        });
        return;
    }
    if (req.method === "GET") {
        res.status(404).json({
            isOk: "N"
        });
        return;
    }
}
function POST(req) {
    // const { key, ...data } = req.body;
    const { key } = req.body;
    delete req.body["key"];
    const data = req.body;
    try {
        Object.keys(data).forEach((filename)=>{
            const content = JSON.parse((0,fs__WEBPACK_IMPORTED_MODULE_0__.readFileSync)(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "json", `${filename}.json`)).toString());
            const updateContent = {
                ...content,
                [key]: data[filename]
            };
            (0,fs__WEBPACK_IMPORTED_MODULE_0__.writeFileSync)(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "json", `${filename}.json`), JSON.stringify(updateContent));
        });
        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
}
function DELETE(req) {
    const { key } = req.body;
    try {
        const dirPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), `json`);
        // 讀取指定目錄
        let files = (0,fs__WEBPACK_IMPORTED_MODULE_0__.readdirSync)(dirPath);
        files.forEach((file)=>{
            // 檢查檔案是否為 .json 文件
            if (path__WEBPACK_IMPORTED_MODULE_1___default().extname(file) === ".json") {
                let content = JSON.parse((0,fs__WEBPACK_IMPORTED_MODULE_0__.readFileSync)(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "json", `${file}`)).toString());
                if (content.hasOwnProperty(key)) {
                    // 檢查有沒有key
                    delete content[key];
                    (0,fs__WEBPACK_IMPORTED_MODULE_0__.writeFileSync)(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "json", `${file}`), JSON.stringify(content));
                }
            }
        });
        return true;
    } catch (err) {
        console.error(err);
        return false;
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4691));
module.exports = __webpack_exports__;

})();