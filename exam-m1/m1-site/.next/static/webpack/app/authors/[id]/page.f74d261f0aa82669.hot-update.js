"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/authors/[id]/page",{

/***/ "(app-pages-browser)/./src/app/authors/[id]/page.tsx":
/*!***************************************!*\
  !*** ./src/app/authors/[id]/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AuthorDetails; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"(app-pages-browser)/./node_modules/tslib/tslib.es6.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"(app-pages-browser)/./node_modules/next/dist/api/router.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api */ \"(app-pages-browser)/./src/app/services/api.js\");\n/* harmony import */ var _AuthorDetails_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AuthorDetails.module.css */ \"(app-pages-browser)/./src/app/authors/[id]/AuthorDetails.module.css\");\n/* harmony import */ var _AuthorDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_AuthorDetails_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction AuthorDetails() {\n    var _this = this;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), author = _useState[0], setAuthor = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), 2), books = _useState1[0], setBooks = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), 2), error = _useState2[0], setError = _useState2[1];\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), 2), isClient = _useState3[0], setIsClient = _useState3[1]; // Pour vérifier si on est côté client\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    // S'assurer que le code s'exécute côté client\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setIsClient(true);\n    }, []);\n    // Une fois que le composant est monté côté client, récupérer l'id de l'auteur\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (isClient) {\n            var id = router.query.id; // Cela sera accessible après le montage côté client\n            if (id) {\n                var fetchAuthorAndBooks = function() {\n                    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_6__._)(function() {\n                        var authorResponse, booksResponse, error;\n                        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_7__.__generator)(this, function(_state) {\n                            switch(_state.label){\n                                case 0:\n                                    _state.trys.push([\n                                        0,\n                                        3,\n                                        ,\n                                        4\n                                    ]);\n                                    return [\n                                        4,\n                                        _services_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/authors/\".concat(id))\n                                    ];\n                                case 1:\n                                    authorResponse = _state.sent();\n                                    setAuthor(authorResponse.data);\n                                    return [\n                                        4,\n                                        _services_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/books?authorId=\".concat(id))\n                                    ];\n                                case 2:\n                                    booksResponse = _state.sent();\n                                    setBooks(booksResponse.data);\n                                    return [\n                                        3,\n                                        4\n                                    ];\n                                case 3:\n                                    error = _state.sent();\n                                    console.error(\"Erreur lors de la r\\xe9cup\\xe9ration des d\\xe9tails de l'auteur:\", error);\n                                    setError(\"Auteur non trouv\\xe9.\");\n                                    return [\n                                        3,\n                                        4\n                                    ];\n                                case 4:\n                                    return [\n                                        2\n                                    ];\n                            }\n                        });\n                    });\n                    return function fetchAuthorAndBooks() {\n                        return _ref.apply(this, arguments);\n                    };\n                }();\n                fetchAuthorAndBooks();\n            }\n        }\n    }, [\n        isClient,\n        router.query\n    ]); // Dépendance sur `isClient` et `router.query` pour démarrer la récupération\n    // Si l'on n'est pas encore côté client, ne rien afficher\n    if (!isClient) {\n        return null;\n    }\n    // Gestion des erreurs\n    if (error) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_AuthorDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_AuthorDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().error),\n                    children: error\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: function() {\n                        return router.push(\"/authors\");\n                    },\n                    className: (_AuthorDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().returnButton),\n                    children: \"Retour \\xe0 la liste des auteurs\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n            lineNumber: 68,\n            columnNumber: 7\n        }, this);\n    }\n    // Si l'auteur n'est pas encore récupéré\n    if (!author) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_AuthorDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_AuthorDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().loading),\n                children: \"Chargement des d\\xe9tails de l'auteur...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                lineNumber: 81,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n            lineNumber: 80,\n            columnNumber: 7\n        }, this);\n    }\n    // Rendu de l'auteur et de ses livres\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_AuthorDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_AuthorDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                children: [\n                    author.firstName,\n                    \" \",\n                    author.lastName\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_AuthorDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().authorDetails),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: author.photo || \"/images/default-author.jpg\",\n                        alt: \"\".concat(author.firstName, \" \").concat(author.lastName),\n                        className: (_AuthorDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().authorPhoto)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_AuthorDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().info),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: (_AuthorDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().subTitle),\n                                children: \"D\\xe9tails de l'Auteur\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Pr\\xe9nom :\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 14\n                                    }, this),\n                                    \" \",\n                                    author.firstName\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                lineNumber: 98,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                        children: \"Nom :\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                        lineNumber: 99,\n                                        columnNumber: 14\n                                    }, this),\n                                    \" \",\n                                    author.lastName\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: (_AuthorDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().subTitle),\n                                children: \"Livres publi\\xe9s\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 11\n                            }, this),\n                            books.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                children: books.map(function(book) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: (_AuthorDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().bookItem),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                                    children: book.title\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                                    lineNumber: 106,\n                                                    columnNumber: 22\n                                                }, _this),\n                                                \" (\",\n                                                book.yearPublished,\n                                                \")\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                            lineNumber: 106,\n                                            columnNumber: 19\n                                        }, _this)\n                                    }, book.id, false, {\n                                        fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 17\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 13\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Aucun livre publi\\xe9 par cet auteur.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return router.push(\"/authors\");\n                },\n                className: (_AuthorDetails_module_css__WEBPACK_IMPORTED_MODULE_4___default().returnButton),\n                children: \"Retour \\xe0 la liste des auteurs\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Rich Tsague\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n        lineNumber: 88,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthorDetails, \"4u/SAcvU7RVd2jwvgpIWfYXSfeI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = AuthorDetails;\nvar _c;\n$RefreshReg$(_c, \"AuthorDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aG9ycy9baWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFd0M7QUFDSTtBQUNQO0FBQ1c7QUFlakMsU0FBU0s7OztJQUN0QixJQUE0QkosWUFBQUEsK0RBQUFBLENBQUFBLCtDQUFRQSxDQUFnQixXQUE3Q0ssU0FBcUJMLGNBQWJNLFlBQWFOO0lBQzVCLElBQTBCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQVMsRUFBRSxPQUF0Q08sUUFBbUJQLGVBQVpRLFdBQVlSO0lBQzFCLElBQTBCQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQWdCLFdBQTNDUyxRQUFtQlQsZUFBWlUsV0FBWVY7SUFDMUIsSUFBZ0NBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxZQUFsQ1csV0FBeUJYLGVBQWZZLGNBQWVaLGVBQWlCLHNDQUFzQztJQUV2RixJQUFNYSxTQUFTZCxzREFBU0E7SUFFeEIsOENBQThDO0lBQzlDRSxnREFBU0EsQ0FBQztRQUNSVyxZQUFZO0lBQ2QsR0FBRyxFQUFFO0lBRUwsOEVBQThFO0lBQzlFWCxnREFBU0EsQ0FBQztRQUNSLElBQUlVLFVBQVU7WUFDWixJQUFNLEtBQVNFLE9BQU9FLEtBQUssQ0FBbkJELElBQXFCLG9EQUFvRDtZQUVqRixJQUFJQSxJQUFJO2dCQUNOLElBQU1FOytCQUFzQjs0QkFHbEJDLGdCQUlBQyxlQUVDVDs7Ozs7Ozs7OztvQ0FOZ0I7O3dDQUFNUCxxREFBR0EsQ0FBQ2lCLEdBQUcsQ0FBQyxZQUFlLE9BQUhMOzs7b0NBQTNDRyxpQkFBaUI7b0NBQ3ZCWCxVQUFVVyxlQUFlRyxJQUFJO29DQUdQOzt3Q0FBTWxCLHFEQUFHQSxDQUFDaUIsR0FBRyxDQUFDLG1CQUFzQixPQUFITDs7O29DQUFqREksZ0JBQWdCO29DQUN0QlYsU0FBU1UsY0FBY0UsSUFBSTs7Ozs7O29DQUNwQlg7b0NBQ1BZLFFBQVFaLEtBQUssQ0FBQyxvRUFBNERBO29DQUMxRUMsU0FBUzs7Ozs7Ozs7Ozs7b0JBRWI7b0NBYk1NOzs7O2dCQWVOQTtZQUNGO1FBQ0Y7SUFDRixHQUFHO1FBQUNMO1FBQVVFLE9BQU9FLEtBQUs7S0FBQyxHQUFHLDRFQUE0RTtJQUUxRyx5REFBeUQ7SUFDekQsSUFBSSxDQUFDSixVQUFVO1FBQ2IsT0FBTztJQUNUO0lBRUEsc0JBQXNCO0lBQ3RCLElBQUlGLE9BQU87UUFDVCxxQkFDRSw4REFBQ2E7WUFBSUMsV0FBV3BCLDRFQUFnQjs7OEJBQzlCLDhEQUFDc0I7b0JBQUVGLFdBQVdwQix3RUFBWTs4QkFBR007Ozs7Ozs4QkFDN0IsOERBQUNpQjtvQkFBT0MsU0FBUzsrQkFBTWQsT0FBT2UsSUFBSSxDQUFDOztvQkFBYUwsV0FBV3BCLCtFQUFtQjs4QkFBRTs7Ozs7Ozs7Ozs7O0lBS3RGO0lBRUEsd0NBQXdDO0lBQ3hDLElBQUksQ0FBQ0UsUUFBUTtRQUNYLHFCQUNFLDhEQUFDaUI7WUFBSUMsV0FBV3BCLDRFQUFnQjtzQkFDOUIsNEVBQUNzQjtnQkFBRUYsV0FBV3BCLDBFQUFjOzBCQUFFOzs7Ozs7Ozs7OztJQUdwQztJQUVBLHFDQUFxQztJQUNyQyxxQkFDRSw4REFBQ21CO1FBQUlDLFdBQVdwQiw0RUFBZ0I7OzBCQUM5Qiw4REFBQzRCO2dCQUFHUixXQUFXcEIsd0VBQVk7O29CQUFHRSxPQUFPNEIsU0FBUztvQkFBQztvQkFBRTVCLE9BQU82QixRQUFROzs7Ozs7OzBCQUNoRSw4REFBQ1o7Z0JBQUlDLFdBQVdwQixnRkFBb0I7O2tDQUNsQyw4REFBQ2lDO3dCQUNDQyxLQUFLaEMsT0FBT2lDLEtBQUssSUFBSTt3QkFDckJDLEtBQUssR0FBdUJsQyxPQUFwQkEsT0FBTzRCLFNBQVMsRUFBQyxLQUFtQixPQUFoQjVCLE9BQU82QixRQUFRO3dCQUMzQ1gsV0FBV3BCLDhFQUFrQjs7Ozs7O2tDQUUvQiw4REFBQ21CO3dCQUFJQyxXQUFXcEIsdUVBQVc7OzBDQUN6Qiw4REFBQ3VDO2dDQUFHbkIsV0FBV3BCLDJFQUFlOzBDQUFFOzs7Ozs7MENBQ2hDLDhEQUFDc0I7O2tEQUFFLDhEQUFDbUI7a0RBQU87Ozs7OztvQ0FBaUI7b0NBQUV2QyxPQUFPNEIsU0FBUzs7Ozs7OzswQ0FDOUMsOERBQUNSOztrREFBRSw4REFBQ21CO2tEQUFPOzs7Ozs7b0NBQWM7b0NBQUV2QyxPQUFPNkIsUUFBUTs7Ozs7OzswQ0FFMUMsOERBQUNXO2dDQUFHdEIsV0FBV3BCLDJFQUFlOzBDQUFFOzs7Ozs7NEJBQy9CSSxNQUFNdUMsTUFBTSxHQUFHLGtCQUNkLDhEQUFDQzswQ0FDRXhDLE1BQU15QyxHQUFHLENBQUMsU0FBQ0M7eURBQ1YsOERBQUNDO3dDQUFpQjNCLFdBQVdwQiwyRUFBZTtrREFDMUMsNEVBQUNzQjs7OERBQUUsOERBQUNtQjs4REFBUUssS0FBS2pCLEtBQUs7Ozs7OztnREFBVTtnREFBR2lCLEtBQUtHLGFBQWE7Z0RBQUM7Ozs7Ozs7dUNBRC9DSCxLQUFLbkMsRUFBRTs7Ozs7Ozs7OztxREFNcEIsOERBQUNXOzBDQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSVQsOERBQUNDO2dCQUFPQyxTQUFTOzJCQUFNZCxPQUFPZSxJQUFJLENBQUM7O2dCQUFhTCxXQUFXcEIsK0VBQW1COzBCQUFFOzs7Ozs7Ozs7Ozs7QUFLdEY7R0FuR3dCQzs7UUFNUEwsa0RBQVNBOzs7S0FORksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hdXRob3JzL1tpZF0vcGFnZS50c3g/NGY2OCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpJztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0F1dGhvckRldGFpbHMubW9kdWxlLmNzcyc7XHJcblxyXG5pbnRlcmZhY2UgQXV0aG9yIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgcGhvdG8/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBCb29rIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgeWVhclB1Ymxpc2hlZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRob3JEZXRhaWxzKCkge1xyXG4gIGNvbnN0IFthdXRob3IsIHNldEF1dGhvcl0gPSB1c2VTdGF0ZTxBdXRob3IgfCBudWxsPihudWxsKTtcclxuICBjb25zdCBbYm9va3MsIHNldEJvb2tzXSA9IHVzZVN0YXRlPEJvb2tbXT4oW10pO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2lzQ2xpZW50LCBzZXRJc0NsaWVudF0gPSB1c2VTdGF0ZShmYWxzZSk7IC8vIFBvdXIgdsOpcmlmaWVyIHNpIG9uIGVzdCBjw7R0w6kgY2xpZW50XHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAvLyBTJ2Fzc3VyZXIgcXVlIGxlIGNvZGUgcydleMOpY3V0ZSBjw7R0w6kgY2xpZW50XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldElzQ2xpZW50KHRydWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gVW5lIGZvaXMgcXVlIGxlIGNvbXBvc2FudCBlc3QgbW9udMOpIGPDtHTDqSBjbGllbnQsIHLDqWN1cMOpcmVyIGwnaWQgZGUgbCdhdXRldXJcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGlzQ2xpZW50KSB7XHJcbiAgICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTsgLy8gQ2VsYSBzZXJhIGFjY2Vzc2libGUgYXByw6hzIGxlIG1vbnRhZ2UgY8O0dMOpIGNsaWVudFxyXG5cclxuICAgICAgaWYgKGlkKSB7XHJcbiAgICAgICAgY29uc3QgZmV0Y2hBdXRob3JBbmRCb29rcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIFLDqWN1cMOpcmVyIGxlcyBkw6l0YWlscyBkZSBsJ2F1dGV1clxyXG4gICAgICAgICAgICBjb25zdCBhdXRob3JSZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQoYC9hdXRob3JzLyR7aWR9YCk7XHJcbiAgICAgICAgICAgIHNldEF1dGhvcihhdXRob3JSZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFLDqWN1cMOpcmVyIGxlcyBsaXZyZXMgZGUgY2V0IGF1dGV1clxyXG4gICAgICAgICAgICBjb25zdCBib29rc1Jlc3BvbnNlID0gYXdhaXQgYXBpLmdldChgL2Jvb2tzP2F1dGhvcklkPSR7aWR9YCk7XHJcbiAgICAgICAgICAgIHNldEJvb2tzKGJvb2tzUmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJldXIgbG9ycyBkZSBsYSByw6ljdXDDqXJhdGlvbiBkZXMgZMOpdGFpbHMgZGUgbFxcJ2F1dGV1cjonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIHNldEVycm9yKCdBdXRldXIgbm9uIHRyb3V2w6kuJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZmV0Y2hBdXRob3JBbmRCb29rcygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW2lzQ2xpZW50LCByb3V0ZXIucXVlcnldKTsgLy8gRMOpcGVuZGFuY2Ugc3VyIGBpc0NsaWVudGAgZXQgYHJvdXRlci5xdWVyeWAgcG91ciBkw6ltYXJyZXIgbGEgcsOpY3Vww6lyYXRpb25cclxuXHJcbiAgLy8gU2kgbCdvbiBuJ2VzdCBwYXMgZW5jb3JlIGPDtHTDqSBjbGllbnQsIG5lIHJpZW4gYWZmaWNoZXJcclxuICBpZiAoIWlzQ2xpZW50KSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIC8vIEdlc3Rpb24gZGVzIGVycmV1cnNcclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5lcnJvcn0+e2Vycm9yfTwvcD5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvYXV0aG9ycycpfSBjbGFzc05hbWU9e3N0eWxlcy5yZXR1cm5CdXR0b259PlxyXG4gICAgICAgICAgUmV0b3VyIMOgIGxhIGxpc3RlIGRlcyBhdXRldXJzXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIC8vIFNpIGwnYXV0ZXVyIG4nZXN0IHBhcyBlbmNvcmUgcsOpY3Vww6lyw6lcclxuICBpZiAoIWF1dGhvcikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmxvYWRpbmd9PkNoYXJnZW1lbnQgZGVzIGTDqXRhaWxzIGRlIGwnYXV0ZXVyLi4uPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvLyBSZW5kdSBkZSBsJ2F1dGV1ciBldCBkZSBzZXMgbGl2cmVzXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT57YXV0aG9yLmZpcnN0TmFtZX0ge2F1dGhvci5sYXN0TmFtZX08L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF1dGhvckRldGFpbHN9PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17YXV0aG9yLnBob3RvIHx8IFwiL2ltYWdlcy9kZWZhdWx0LWF1dGhvci5qcGdcIn1cclxuICAgICAgICAgIGFsdD17YCR7YXV0aG9yLmZpcnN0TmFtZX0gJHthdXRob3IubGFzdE5hbWV9YH1cclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmF1dGhvclBob3RvfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvfT5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zdWJUaXRsZX0+RMOpdGFpbHMgZGUgbCdBdXRldXI8L2gyPlxyXG4gICAgICAgICAgPHA+PHN0cm9uZz5QcsOpbm9tIDo8L3N0cm9uZz4ge2F1dGhvci5maXJzdE5hbWV9PC9wPlxyXG4gICAgICAgICAgPHA+PHN0cm9uZz5Ob20gOjwvc3Ryb25nPiB7YXV0aG9yLmxhc3ROYW1lfTwvcD5cclxuXHJcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtzdHlsZXMuc3ViVGl0bGV9PkxpdnJlcyBwdWJsacOpczwvaDM+XHJcbiAgICAgICAgICB7Ym9va3MubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIHtib29rcy5tYXAoKGJvb2spID0+IChcclxuICAgICAgICAgICAgICAgIDxsaSBrZXk9e2Jvb2suaWR9IGNsYXNzTmFtZT17c3R5bGVzLmJvb2tJdGVtfT5cclxuICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz57Ym9vay50aXRsZX08L3N0cm9uZz4gKHtib29rLnllYXJQdWJsaXNoZWR9KTwvcD5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8cD5BdWN1biBsaXZyZSBwdWJsacOpIHBhciBjZXQgYXV0ZXVyLjwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvYXV0aG9ycycpfSBjbGFzc05hbWU9e3N0eWxlcy5yZXR1cm5CdXR0b259PlxyXG4gICAgICAgIFJldG91ciDDoCBsYSBsaXN0ZSBkZXMgYXV0ZXVyc1xyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXBpIiwic3R5bGVzIiwiQXV0aG9yRGV0YWlscyIsImF1dGhvciIsInNldEF1dGhvciIsImJvb2tzIiwic2V0Qm9va3MiLCJlcnJvciIsInNldEVycm9yIiwiaXNDbGllbnQiLCJzZXRJc0NsaWVudCIsInJvdXRlciIsImlkIiwicXVlcnkiLCJmZXRjaEF1dGhvckFuZEJvb2tzIiwiYXV0aG9yUmVzcG9uc2UiLCJib29rc1Jlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJwIiwiYnV0dG9uIiwib25DbGljayIsInB1c2giLCJyZXR1cm5CdXR0b24iLCJsb2FkaW5nIiwiaDEiLCJ0aXRsZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiYXV0aG9yRGV0YWlscyIsImltZyIsInNyYyIsInBob3RvIiwiYWx0IiwiYXV0aG9yUGhvdG8iLCJpbmZvIiwiaDIiLCJzdWJUaXRsZSIsInN0cm9uZyIsImgzIiwibGVuZ3RoIiwidWwiLCJtYXAiLCJib29rIiwibGkiLCJib29rSXRlbSIsInllYXJQdWJsaXNoZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/authors/[id]/page.tsx\n"));

/***/ })

});