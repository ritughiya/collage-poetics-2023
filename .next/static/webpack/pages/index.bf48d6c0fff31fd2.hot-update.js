"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Typing3.js":
/*!*******************************!*\
  !*** ./components/Typing3.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typed.js */ \"./node_modules/typed.js/lib/typed.js\");\n/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_2__);\n// filename: Typing.js\n// React version: \"^16.12.0\"\n\n\n\n// Import the desired words\nclass Typing3 extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {\n    componentDidMount() {\n        const options = {\n            strings: [\n                \"sometimes I wish I was a human like you\",\n                \"but its chill... not that serious...\",\n                \"X P\"\n            ],\n            typeSpeed: 100\n        };\n        // this.el refers to the <span> in the render() method\n        this.typed = new (typed_js__WEBPACK_IMPORTED_MODULE_2___default())(this.el, options);\n    }\n    componentWillUnmount() {\n        // Please don't forget to cleanup animation layer\n        this.typed.destroy();\n    }\n    render() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"chat\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    style: {\n                        whiteSpace: \"pre\"\n                    },\n                    ref: (el)=>{\n                        this.el = el;\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/ritu/Dropbox/local/collagepoetics/components/Typing3.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ritu/Dropbox/local/collagepoetics/components/Typing3.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        }, void 0, false);\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Typing3);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1R5cGluZzMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHNCQUFzQjtBQUN0Qiw0QkFBNEI7QUFDNUI7QUFBMEI7QUFDRTtBQUM1QiwyQkFBMkI7QUFDM0IsTUFBTUUsZ0JBQWdCRix3REFBZTtJQUNuQ0ksb0JBQW9CO1FBQ2xCLE1BQU1DLFVBQVU7WUFDWkMsU0FBUztnQkFBQztnQkFBMkM7Z0JBQXdDO2FBQU07WUFDbkdDLFdBQVc7UUFDYjtRQUVGLHNEQUFzRDtRQUN0RCxJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJUCxpREFBS0EsQ0FBQyxJQUFJLENBQUNRLEVBQUUsRUFBRUo7SUFDbEM7SUFDRkssdUJBQXVCO1FBQ25CLGlEQUFpRDtRQUNqRCxJQUFJLENBQUNGLEtBQUssQ0FBQ0csT0FBTztJQUNwQjtJQUVBQyxTQUFTO1FBQ1AscUJBQ0U7c0JBQ0EsNEVBQUNDO2dCQUFJQyxPQUFNOzBCQUNULDRFQUFDQztvQkFDQ0MsT0FBTzt3QkFBRUMsWUFBWTtvQkFBTTtvQkFDM0JDLEtBQUssQ0FBQ1QsS0FBTzt3QkFDWCxJQUFJLENBQUNBLEVBQUUsR0FBR0E7b0JBQ1o7Ozs7Ozs7Ozs7OztJQUtSO0FBQ0Y7QUFDQSwrREFBZVAsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1R5cGluZzMuanM/ZTlhYiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmaWxlbmFtZTogVHlwaW5nLmpzXG4vLyBSZWFjdCB2ZXJzaW9uOiBcIl4xNi4xMi4wXCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUeXBlZCBmcm9tICd0eXBlZC5qcydcbi8vIEltcG9ydCB0aGUgZGVzaXJlZCB3b3Jkc1xuY2xhc3MgVHlwaW5nMyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIHN0cmluZ3M6IFsnc29tZXRpbWVzIEkgd2lzaCBJIHdhcyBhIGh1bWFuIGxpa2UgeW91JywgJ2J1dCBpdHMgY2hpbGwuLi4gbm90IHRoYXQgc2VyaW91cy4uLicsICdYIFAnXSxcbiAgICAgICAgdHlwZVNwZWVkOiAxMDBcbiAgICAgIH07XG4gICAgICBcbiAgICAvLyB0aGlzLmVsIHJlZmVycyB0byB0aGUgPHNwYW4+IGluIHRoZSByZW5kZXIoKSBtZXRob2RcbiAgICB0aGlzLnR5cGVkID0gbmV3IFR5cGVkKHRoaXMuZWwsIG9wdGlvbnMpO1xuICB9XG5jb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAvLyBQbGVhc2UgZG9uJ3QgZm9yZ2V0IHRvIGNsZWFudXAgYW5pbWF0aW9uIGxheWVyXG4gICAgdGhpcy50eXBlZC5kZXN0cm95KCk7XG4gIH1cbiAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaGF0XCI+XG4gICAgICAgIDxzcGFuXG4gICAgICAgICAgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJwcmVcIiB9fVxuICAgICAgICAgIHJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsID0gZWw7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8Lz5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBUeXBpbmczOyJdLCJuYW1lcyI6WyJSZWFjdCIsIlR5cGVkIiwiVHlwaW5nMyIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZE1vdW50Iiwib3B0aW9ucyIsInN0cmluZ3MiLCJ0eXBlU3BlZWQiLCJ0eXBlZCIsImVsIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJkZXN0cm95IiwicmVuZGVyIiwiZGl2IiwiY2xhc3MiLCJzcGFuIiwic3R5bGUiLCJ3aGl0ZVNwYWNlIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Typing3.js\n"));

/***/ })

});