"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/authors/page",{

/***/ "(app-pages-browser)/./src/app/authors/page.tsx":
/*!**********************************!*\
  !*** ./src/app/authors/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Authors; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var _swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_object_spread_props */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_object_spread_props.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_to_consumable_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_to_consumable_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"(app-pages-browser)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ \"(app-pages-browser)/./src/app/services/api.js\");\n/* harmony import */ var _AuthorsPage_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthorsPage.module.css */ \"(app-pages-browser)/./src/app/authors/AuthorsPage.module.css\");\n/* harmony import */ var _AuthorsPage_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AuthorsPage_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Authors() {\n    var _this = this;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), authors = _useState[0], setAuthors = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), books = _useState1[0], setBooks = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), 2), selectedAuthor = _useState2[0], setSelectedAuthor = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        title: \"\",\n        yearPublished: \"\"\n    }), 2), newBook = _useState3[0], setNewBook = _useState3[1];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_4__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), isModalOpen = _useState4[0], setModalOpen = _useState4[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var fetchAuthorsAndBooks = function() {\n            var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_5__._)(function() {\n                var authorsResponse, booksResponse, error;\n                return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            _state.trys.push([\n                                0,\n                                3,\n                                ,\n                                4\n                            ]);\n                            return [\n                                4,\n                                _services_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/authors\")\n                            ];\n                        case 1:\n                            authorsResponse = _state.sent();\n                            console.log(\"Authors fetched:\", authorsResponse.data); // Ajout d'un log\n                            setAuthors(authorsResponse.data);\n                            return [\n                                4,\n                                _services_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/books\")\n                            ];\n                        case 2:\n                            booksResponse = _state.sent();\n                            console.log(\"Books fetched:\", booksResponse.data); // Ajout d'un log\n                            setBooks(booksResponse.data);\n                            return [\n                                3,\n                                4\n                            ];\n                        case 3:\n                            error = _state.sent();\n                            console.error(\"Erreur lors de la r\\xe9cup\\xe9ration des donn\\xe9es:\", error);\n                            return [\n                                3,\n                                4\n                            ];\n                        case 4:\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return function fetchAuthorsAndBooks() {\n                return _ref.apply(this, arguments);\n            };\n        }();\n        fetchAuthorsAndBooks();\n    }, []);\n    var handleAuthorClick = function(author) {\n        console.log(\"Author clicked:\", author); // Ajout d'un log\n        setSelectedAuthor(author);\n        setModalOpen(true);\n    };\n    var createBook = function() {\n        var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_5__._)(function(authorId) {\n            var response, error;\n            return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_6__.__generator)(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        console.log(\"Adding book:\", newBook); // Ajout d'un log\n                        _state.label = 1;\n                    case 1:\n                        _state.trys.push([\n                            1,\n                            3,\n                            ,\n                            4\n                        ]);\n                        return [\n                            4,\n                            _services_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/books\", (0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_7__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_8__._)({}, newBook), {\n                                authorId: authorId\n                            }))\n                        ];\n                    case 2:\n                        response = _state.sent();\n                        console.log(\"Book added:\", response.data); // Ajout d'un log\n                        setBooks((0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_9__._)(books).concat([\n                            response.data\n                        ]));\n                        setNewBook({\n                            title: \"\",\n                            yearPublished: \"\"\n                        }); // Réinitialiser le formulaire\n                        return [\n                            3,\n                            4\n                        ];\n                    case 3:\n                        error = _state.sent();\n                        console.error(\"Erreur lors de l'ajout du livre:\", error);\n                        return [\n                            3,\n                            4\n                        ];\n                    case 4:\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function createBook(authorId) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_AuthorsPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Liste des Auteurs\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: authors.map(function(author) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        onClick: function() {\n                            return handleAuthorClick(author);\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: [\n                                author.firstName,\n                                \" \",\n                                author.lastName\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 13\n                        }, _this)\n                    }, author.id, false, {\n                        fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this),\n            isModalOpen && selectedAuthor && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_AuthorsPage_module_css__WEBPACK_IMPORTED_MODULE_3___default().modal),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: [\n                            selectedAuthor.firstName,\n                            \" \",\n                            selectedAuthor.lastName\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: \"Ajouter un Livre\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Titre\",\n                        value: newBook.title,\n                        onChange: function(e) {\n                            return setNewBook((0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_7__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_8__._)({}, newBook), {\n                                title: e.target.value\n                            }));\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"number\",\n                        placeholder: \"Ann\\xe9e de publication\",\n                        value: newBook.yearPublished,\n                        onChange: function(e) {\n                            return setNewBook((0,_swc_helpers_object_spread_props__WEBPACK_IMPORTED_MODULE_7__._)((0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_8__._)({}, newBook), {\n                                yearPublished: e.target.value\n                            }));\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n                        lineNumber: 86,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return createBook(selectedAuthor.id);\n                        },\n                        children: \"Ajouter Livre\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n                lineNumber: 77,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\page.tsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, this);\n}\n_s(Authors, \"DS+CZqOLFV1TLl0OHXdbb3zIQUo=\");\n_c = Authors;\nvar _c;\n$RefreshReg$(_c, \"Authors\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aG9ycy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNEM7QUFDVjtBQUNZO0FBZ0IvQixTQUFTSTs7O0lBQ3RCLElBQThCSixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVcsRUFBRSxPQUE1Q0ssVUFBdUJMLGNBQWRNLGFBQWNOO0lBQzlCLElBQTBCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVMsRUFBRSxPQUF0Q08sUUFBbUJQLGVBQVpRLFdBQVlSO0lBQzFCLElBQTRDQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQWdCLFdBQTdEUyxpQkFBcUNULGVBQXJCVSxvQkFBcUJWO0lBQzVDLElBQThCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUM7UUFBRVcsT0FBTztRQUFJQyxlQUFlO0lBQUcsUUFBL0RDLFVBQXVCYixlQUFkYyxhQUFjZDtJQUM5QixJQUFvQ0EsYUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFDLFlBQXRDZSxjQUE2QmYsZUFBaEJnQixlQUFnQmhCO0lBRXBDQyxnREFBU0EsQ0FBQztRQUNSLElBQU1nQjt1QkFBdUI7b0JBRW5CQyxpQkFJQUMsZUFHQ0M7Ozs7Ozs7Ozs7NEJBUGlCOztnQ0FBTWxCLHFEQUFHQSxDQUFDbUIsR0FBRyxDQUFDOzs7NEJBQWhDSCxrQkFBa0I7NEJBQ3hCSSxRQUFRQyxHQUFHLENBQUMsb0JBQW9CTCxnQkFBZ0JNLElBQUksR0FBSSxpQkFBaUI7NEJBQ3pFbEIsV0FBV1ksZ0JBQWdCTSxJQUFJOzRCQUVUOztnQ0FBTXRCLHFEQUFHQSxDQUFDbUIsR0FBRyxDQUFDOzs7NEJBQTlCRixnQkFBZ0I7NEJBQ3RCRyxRQUFRQyxHQUFHLENBQUMsa0JBQWtCSixjQUFjSyxJQUFJLEdBQUksaUJBQWlCOzRCQUNyRWhCLFNBQVNXLGNBQWNLLElBQUk7Ozs7Ozs0QkFDcEJKOzRCQUNQRSxRQUFRRixLQUFLLENBQUMsd0RBQStDQTs7Ozs7Ozs7Ozs7WUFFakU7NEJBWk1IOzs7O1FBY05BO0lBQ0YsR0FBRyxFQUFFO0lBRUwsSUFBTVEsb0JBQW9CLFNBQUNDO1FBQ3pCSixRQUFRQyxHQUFHLENBQUMsbUJBQW1CRyxTQUFVLGlCQUFpQjtRQUMxRGhCLGtCQUFrQmdCO1FBQ2xCVixhQUFhO0lBQ2Y7SUFFQSxJQUFNVzttQkFBYSw0RUFBT0M7Z0JBR2hCQyxVQUlDVDs7Ozt3QkFOVEUsUUFBUUMsR0FBRyxDQUFDLGdCQUFnQlYsVUFBVyxpQkFBaUI7Ozs7Ozs7Ozt3QkFFckM7OzRCQUFNWCxxREFBR0EsQ0FBQzRCLElBQUksQ0FBQyxVQUFVLHNJQUFLakI7Z0NBQVNlLFVBQUFBOzs7O3dCQUFsREMsV0FBVzt3QkFDakJQLFFBQVFDLEdBQUcsQ0FBQyxlQUFlTSxTQUFTTCxJQUFJLEdBQUksaUJBQWlCO3dCQUM3RGhCLFNBQVMsb0VBQUlEOzRCQUFPc0IsU0FBU0wsSUFBSTs7d0JBQ2pDVixXQUFXOzRCQUFFSCxPQUFPOzRCQUFJQyxlQUFlO3dCQUFHLElBQUssOEJBQThCOzs7Ozs7d0JBQ3RFUTt3QkFDUEUsUUFBUUYsS0FBSyxDQUFDLG9DQUFvQ0E7Ozs7Ozs7Ozs7O1FBRXREO3dCQVZNTyxXQUFvQkM7Ozs7SUFZMUIscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVc3QiwwRUFBZ0I7OzBCQUM5Qiw4REFBQytCOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNIOzBCQUNFMUIsUUFBUThCLEdBQUcsQ0FBQyxTQUFDVDt5Q0FDWiw4REFBQ0s7d0JBQW9CSyxTQUFTO21DQUFNWCxrQkFBa0JDOztrQ0FDcEQsNEVBQUNXOztnQ0FBSVgsT0FBT1ksU0FBUztnQ0FBQztnQ0FBRVosT0FBT2EsUUFBUTs7Ozs7Ozt1QkFEL0JiLE9BQU9jLEVBQUU7Ozs7Ozs7Ozs7O1lBT3RCekIsZUFBZU4sZ0NBQ2QsOERBQUNzQjtnQkFBSUMsV0FBVzdCLHNFQUFZOztrQ0FDMUIsOERBQUNrQzs7NEJBQUk1QixlQUFlNkIsU0FBUzs0QkFBQzs0QkFBRTdCLGVBQWU4QixRQUFROzs7Ozs7O2tDQUN2RCw4REFBQ0c7a0NBQUc7Ozs7OztrQ0FDSiw4REFBQ0M7d0JBQ0NDLE1BQUs7d0JBQ0xDLGFBQVk7d0JBQ1pDLE9BQU9qQyxRQUFRRixLQUFLO3dCQUNwQm9DLFVBQVUsU0FBQ0M7bUNBQU1sQyxXQUFXLHNJQUFLRDtnQ0FBU0YsT0FBT3FDLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7Ozs7a0NBRWpFLDhEQUFDSDt3QkFDQ0MsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsT0FBT2pDLFFBQVFELGFBQWE7d0JBQzVCbUMsVUFBVSxTQUFDQzttQ0FBTWxDLFdBQVcsc0lBQUtEO2dDQUFTRCxlQUFlb0MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzs7Ozs7OztrQ0FFekUsOERBQUNJO3dCQUFPZCxTQUFTO21DQUFNVCxXQUFXbEIsZUFBZStCLEVBQUU7O2tDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLaEU7R0E1RXdCcEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hdXRob3JzL3BhZ2UudHN4P2NmZDkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXBpIGZyb20gJy4uL3NlcnZpY2VzL2FwaSc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9BdXRob3JzUGFnZS5tb2R1bGUuY3NzJztcclxuXHJcbmludGVyZmFjZSBBdXRob3Ige1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICBwaG90bz86IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIEJvb2sge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICB5ZWFyUHVibGlzaGVkOiBudW1iZXI7XHJcbiAgYXV0aG9yOiBBdXRob3I7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEF1dGhvcnMoKSB7XHJcbiAgY29uc3QgW2F1dGhvcnMsIHNldEF1dGhvcnNdID0gdXNlU3RhdGU8QXV0aG9yW10+KFtdKTtcclxuICBjb25zdCBbYm9va3MsIHNldEJvb2tzXSA9IHVzZVN0YXRlPEJvb2tbXT4oW10pO1xyXG4gIGNvbnN0IFtzZWxlY3RlZEF1dGhvciwgc2V0U2VsZWN0ZWRBdXRob3JdID0gdXNlU3RhdGU8QXV0aG9yIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW25ld0Jvb2ssIHNldE5ld0Jvb2tdID0gdXNlU3RhdGUoeyB0aXRsZTogJycsIHllYXJQdWJsaXNoZWQ6ICcnIH0pO1xyXG4gIGNvbnN0IFtpc01vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hBdXRob3JzQW5kQm9va3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgYXV0aG9yc1Jlc3BvbnNlID0gYXdhaXQgYXBpLmdldCgnL2F1dGhvcnMnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnQXV0aG9ycyBmZXRjaGVkOicsIGF1dGhvcnNSZXNwb25zZS5kYXRhKTsgIC8vIEFqb3V0IGQndW4gbG9nXHJcbiAgICAgICAgc2V0QXV0aG9ycyhhdXRob3JzUmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJvb2tzUmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KCcvYm9va3MnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnQm9va3MgZmV0Y2hlZDonLCBib29rc1Jlc3BvbnNlLmRhdGEpOyAgLy8gQWpvdXQgZCd1biBsb2dcclxuICAgICAgICBzZXRCb29rcyhib29rc1Jlc3BvbnNlLmRhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsYSByw6ljdXDDqXJhdGlvbiBkZXMgZG9ubsOpZXM6XCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBmZXRjaEF1dGhvcnNBbmRCb29rcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQXV0aG9yQ2xpY2sgPSAoYXV0aG9yOiBBdXRob3IpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiQXV0aG9yIGNsaWNrZWQ6XCIsIGF1dGhvcik7ICAvLyBBam91dCBkJ3VuIGxvZ1xyXG4gICAgc2V0U2VsZWN0ZWRBdXRob3IoYXV0aG9yKTtcclxuICAgIHNldE1vZGFsT3Blbih0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjcmVhdGVCb29rID0gYXN5bmMgKGF1dGhvcklkOiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiQWRkaW5nIGJvb2s6XCIsIG5ld0Jvb2spOyAgLy8gQWpvdXQgZCd1biBsb2dcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoJy9ib29rcycsIHsgLi4ubmV3Qm9vaywgYXV0aG9ySWQgfSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiQm9vayBhZGRlZDpcIiwgcmVzcG9uc2UuZGF0YSk7ICAvLyBBam91dCBkJ3VuIGxvZ1xyXG4gICAgICBzZXRCb29rcyhbLi4uYm9va3MsIHJlc3BvbnNlLmRhdGFdKTtcclxuICAgICAgc2V0TmV3Qm9vayh7IHRpdGxlOiAnJywgeWVhclB1Ymxpc2hlZDogJycgfSk7ICAvLyBSw6lpbml0aWFsaXNlciBsZSBmb3JtdWxhaXJlXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbCdham91dCBkdSBsaXZyZTpcIiwgZXJyb3IpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxoMT5MaXN0ZSBkZXMgQXV0ZXVyczwvaDE+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAge2F1dGhvcnMubWFwKChhdXRob3IpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXthdXRob3IuaWR9IG9uQ2xpY2s9eygpID0+IGhhbmRsZUF1dGhvckNsaWNrKGF1dGhvcil9PlxyXG4gICAgICAgICAgICA8aDI+e2F1dGhvci5maXJzdE5hbWV9IHthdXRob3IubGFzdE5hbWV9PC9oMj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHsvKiBNb2RhbCBkZSBkw6l0YWlsIGRlIGwnYXV0ZXVyICovfVxyXG4gICAgICB7aXNNb2RhbE9wZW4gJiYgc2VsZWN0ZWRBdXRob3IgJiYgKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9PlxyXG4gICAgICAgICAgPGgyPntzZWxlY3RlZEF1dGhvci5maXJzdE5hbWV9IHtzZWxlY3RlZEF1dGhvci5sYXN0TmFtZX08L2gyPlxyXG4gICAgICAgICAgPGgzPkFqb3V0ZXIgdW4gTGl2cmU8L2gzPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRyZVwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtuZXdCb29rLnRpdGxlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld0Jvb2soeyAuLi5uZXdCb29rLCB0aXRsZTogZS50YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFubsOpZSBkZSBwdWJsaWNhdGlvblwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtuZXdCb29rLnllYXJQdWJsaXNoZWR9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3Qm9vayh7IC4uLm5ld0Jvb2ssIHllYXJQdWJsaXNoZWQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY3JlYXRlQm9vayhzZWxlY3RlZEF1dGhvci5pZCl9PkFqb3V0ZXIgTGl2cmU8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXBpIiwic3R5bGVzIiwiQXV0aG9ycyIsImF1dGhvcnMiLCJzZXRBdXRob3JzIiwiYm9va3MiLCJzZXRCb29rcyIsInNlbGVjdGVkQXV0aG9yIiwic2V0U2VsZWN0ZWRBdXRob3IiLCJ0aXRsZSIsInllYXJQdWJsaXNoZWQiLCJuZXdCb29rIiwic2V0TmV3Qm9vayIsImlzTW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwiZmV0Y2hBdXRob3JzQW5kQm9va3MiLCJhdXRob3JzUmVzcG9uc2UiLCJib29rc1Jlc3BvbnNlIiwiZXJyb3IiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImhhbmRsZUF1dGhvckNsaWNrIiwiYXV0aG9yIiwiY3JlYXRlQm9vayIsImF1dGhvcklkIiwicmVzcG9uc2UiLCJwb3N0IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDEiLCJtYXAiLCJvbkNsaWNrIiwiaDIiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImlkIiwibW9kYWwiLCJoMyIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/authors/page.tsx\n"));

/***/ })

});