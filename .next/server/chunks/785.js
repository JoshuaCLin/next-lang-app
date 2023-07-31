exports.id = 785;
exports.ids = [785];
exports.modules = {

/***/ 7785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(1527);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(9378);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "antd/lib/spin"
var spin_ = __webpack_require__(261);
var spin_default = /*#__PURE__*/__webpack_require__.n(spin_);
;// CONCATENATED MODULE: ./components/RouteGuard.tsx




const RouteGuard = ({ children })=>{
    const router = (0,router_.useRouter)();
    const [isLogin, setIsLogin] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (typeof localStorage === undefined) return;
        const user = localStorage.getItem("user");
        const password = localStorage.getItem("password");
        const checkIsLogin = ()=>{
            if (user === "pg123" && password === "pg123123" || router.pathname.includes("login")) {
                setIsLogin(true);
            } else {
                setIsLogin(false);
                router.push("/login");
            }
        };
        checkIsLogin();
        const preventAccess = ()=>setIsLogin(false);
        router.events.on("routeChangeStart", preventAccess);
        router.events.on("routeChangeComplete", checkIsLogin);
        return ()=>{
            router.events.off("routeChangeStart", preventAccess);
            router.events.off("routeChangeComplete", checkIsLogin);
        };
    }, [
        router
    ]);
    return isLogin ? children : /*#__PURE__*/ jsx_runtime.jsx("div", {
        id: "loading",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            style: {
                width: "100%"
            },
            children: /*#__PURE__*/ jsx_runtime.jsx((spin_default()), {
                tip: "Loading",
                size: "large",
                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "content"
                })
            })
        })
    });
};
/* harmony default export */ const components_RouteGuard = (RouteGuard);

;// CONCATENATED MODULE: ./pages/_app.tsx



function App({ Component, pageProps }) {
    return /*#__PURE__*/ jsx_runtime.jsx(components_RouteGuard, {
        children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 9378:
/***/ (() => {



/***/ })

};
;