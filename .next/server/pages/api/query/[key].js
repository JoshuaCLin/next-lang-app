"use strict";
(() => {
var exports = {};
exports.id = 23;
exports.ids = [23];
exports.modules = {

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 8255:
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
    const key = req.query.key;
    if (req.method === "GET") {
        try {
            const files = (0,fs__WEBPACK_IMPORTED_MODULE_0__.readdirSync)(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "json"));
            const result = files.reduce((pre, file)=>{
                const content = (0,fs__WEBPACK_IMPORTED_MODULE_0__.readFileSync)(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), "json", file));
                const data = JSON.parse(content.toString());
                pre = {
                    ...pre,
                    [file.split(".")[0]]: data[key] ?? ""
                };
                return pre;
            }, {});
            res.status(200).json(result);
            return;
        } catch (err) {
            res.status(400).json({});
            return;
        }
    } else {
        res.status(404).json({
            isOk: "N"
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8255));
module.exports = __webpack_exports__;

})();