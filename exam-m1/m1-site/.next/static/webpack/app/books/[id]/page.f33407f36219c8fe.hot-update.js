"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/books/[id]/page",{

/***/ "(app-pages-browser)/./src/components/ConfirmModal.tsx":
/*!*****************************************!*\
  !*** ./src/components/ConfirmModal.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ConfirmModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction ConfirmModal(param) {\n    var isOpen = param.isOpen, onClose = param.onClose, onConfirm = param.onConfirm, message = param.message;\n    if (!isOpen) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-6 rounded shadow-lg text-center space-y-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-lg\",\n                    children: message\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PAVILION\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\components\\\\ConfirmModal.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center space-x-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: onClose,\n                            className: \"bg-gray-300 text-black py-2 px-4 rounded\",\n                            children: \"Annuler\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\PAVILION\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\components\\\\ConfirmModal.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: onConfirm,\n                            className: \"bg-red-500 text-white py-2 px-4 rounded\",\n                            children: \"Supprimer\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\PAVILION\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\components\\\\ConfirmModal.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\PAVILION\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\components\\\\ConfirmModal.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\PAVILION\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\components\\\\ConfirmModal.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PAVILION\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\components\\\\ConfirmModal.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_c = ConfirmModal;\nvar _c;\n$RefreshReg$(_c, \"ConfirmModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbmZpcm1Nb2RhbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBU2UsU0FBU0EsYUFBYSxLQUtqQjtRQUpsQkMsU0FEbUMsTUFDbkNBLFFBQ0FDLFVBRm1DLE1BRW5DQSxTQUNBQyxZQUhtQyxNQUduQ0EsV0FDQUMsVUFKbUMsTUFJbkNBO0lBRUEsSUFBSSxDQUFDSCxRQUFRLE9BQU87SUFFcEIscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBRUQsV0FBVTs4QkFBV0Y7Ozs7Ozs4QkFDeEIsOERBQUNDO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQ0NDLFNBQVNQOzRCQUNUSSxXQUFVO3NDQUNYOzs7Ozs7c0NBR0QsOERBQUNFOzRCQUNDQyxTQUFTTjs0QkFDVEcsV0FBVTtzQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtLQTdCd0JOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NvbmZpcm1Nb2RhbC50c3g/NWU0MSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbnRlcmZhY2UgQ29uZmlybU1vZGFsUHJvcHMge1xyXG4gIGlzT3BlbjogYm9vbGVhbjtcclxuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xyXG4gIG9uQ29uZmlybTogKCkgPT4gdm9pZDtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbmZpcm1Nb2RhbCh7XHJcbiAgaXNPcGVuLFxyXG4gIG9uQ2xvc2UsXHJcbiAgb25Db25maXJtLFxyXG4gIG1lc3NhZ2UsXHJcbn06IENvbmZpcm1Nb2RhbFByb3BzKSB7XHJcbiAgaWYgKCFpc09wZW4pIHJldHVybiBudWxsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWJsYWNrIGJnLW9wYWNpdHktNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTYgcm91bmRlZCBzaGFkb3ctbGcgdGV4dC1jZW50ZXIgc3BhY2UteS00XCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPnttZXNzYWdlfTwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgc3BhY2UteC00XCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktMzAwIHRleHQtYmxhY2sgcHktMiBweC00IHJvdW5kZWRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBbm51bGVyXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17b25Db25maXJtfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIHRleHQtd2hpdGUgcHktMiBweC00IHJvdW5kZWRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTdXBwcmltZXJcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkNvbmZpcm1Nb2RhbCIsImlzT3BlbiIsIm9uQ2xvc2UiLCJvbkNvbmZpcm0iLCJtZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ConfirmModal.tsx\n"));

/***/ })

});