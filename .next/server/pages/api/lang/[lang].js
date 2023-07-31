"use strict";
(() => {
var exports = {};
exports.id = 133;
exports.ids = [133];
exports.modules = {

/***/ 7147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 6885:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction


function handler(req, res) {
    const lang = req.query?.lang;
    if (req.method === "GET") {
        const result = GET(req, lang);
        res.status(result.isOk === "Y" ? 200 : 500).json(result);
        return;
    }
    if (req.method === "POST") {
        const result = POST(req, lang);
        res.status(result ? 200 : 500).json({
            isOk: result ? "Y" : "N"
        });
        return;
    }
    if (req.method === "DELETE") {
        const result = DELETE(req, lang);
        res.status(result ? 200 : 500).json({
            isOk: result ? "Y" : "N"
        });
        return;
    }
    res.status(404).json({
        isOk: "N"
    });
}
function GET(req, lang) {
    try {
        const data = (0,fs__WEBPACK_IMPORTED_MODULE_0__.readFileSync)(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), `json/${lang}.json`));
        return {
            isOk: "Y",
            data: JSON.parse(data.toString())
        };
    } catch (err) {
        return {
            isOk: "N",
            data: {}
        };
    }
}
function POST(req, lang) {
    const payload = req.body;
    (0,fs__WEBPACK_IMPORTED_MODULE_0__.writeFileSync)(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), `json/${lang}.json`), JSON.stringify(payload));
    return true;
}
function DELETE(req, lang) {
    try {
        (0,fs__WEBPACK_IMPORTED_MODULE_0__.unlinkSync)(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), `json/${lang}.json`));
        return true;
    } catch (err) {
        return false;
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6885));
module.exports = __webpack_exports__;

})();