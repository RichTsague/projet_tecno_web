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

/***/ "(app-pages-browser)/./node_modules/next/dist/api/navigation.js":
/*!**************************************************!*\
  !*** ./node_modules/next/dist/api/navigation.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../client/components/navigation */ \"(app-pages-browser)/./node_modules/next/dist/client/components/navigation.js\");\n/* harmony import */ var _client_components_navigation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_client_components_navigation__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _client_components_navigation__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n//# sourceMappingURL=navigation.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYXBpL25hdmlnYXRpb24uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdEOztBQUVoRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2FwaS9uYXZpZ2F0aW9uLmpzPzc4MWEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4uL2NsaWVudC9jb21wb25lbnRzL25hdmlnYXRpb25cIjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmF2aWdhdGlvbi5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/next/dist/api/navigation.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/authors/[id]/page.tsx":
/*!***************************************!*\
  !*** ./src/app/authors/[id]/page.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AuthorDetails; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_EditAuthorForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/EditAuthorForm */ \"(app-pages-browser)/./src/components/EditAuthorForm.tsx\");\n/* harmony import */ var _components_ConfirmModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ConfirmModal */ \"(app-pages-browser)/./src/components/ConfirmModal.tsx\");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/Modal */ \"(app-pages-browser)/./src/components/Modal.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction AuthorDetails(param) {\n    var _this = this;\n    var params = param.params;\n    var _author_books;\n    _s();\n    var router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            id: 1,\n            name: \"Victor Hugo\",\n            bio: \"Victor Hugo \\xe9tait un po\\xe8te, romancier et dramaturge fran\\xe7ais.\",\n            photo: \"https://via.placeholder.com/150\",\n            books: [\n                \"Les Mis\\xe9rables\",\n                \"Notre-Dame de Paris\"\n            ]\n        },\n        {\n            id: 2,\n            name: \"Albert Camus\",\n            bio: \"Albert Camus \\xe9tait un philosophe, \\xe9crivain et journaliste fran\\xe7ais.\",\n            photo: \"https://via.placeholder.com/150\",\n            books: [\n                \"L’\\xc9tranger\",\n                \"La Peste\"\n            ]\n        },\n        {\n            id: 3,\n            name: \"Honor\\xe9 de Balzac\",\n            bio: \"Honor\\xe9 de Balzac \\xe9tait un romancier fran\\xe7ais.\",\n            photo: \"https://via.placeholder.com/150\",\n            books: [\n                \"Le P\\xe8re Goriot\",\n                \"Eug\\xe9nie Grandet\"\n            ]\n        }\n    ]), 2), authors = _useState[0], setAuthors = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), 2), isEditModalOpen = _useState1[0], setEditModalOpen = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), 2), isDeleteModalOpen = _useState2[0], setDeleteModalOpen = _useState2[1];\n    var author = authors.find(function(a) {\n        return a.id === parseInt(params.id);\n    });\n    if (!author) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Auteur non trouv\\xe9.\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\PAVILION\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n            lineNumber: 40,\n            columnNumber: 12\n        }, this);\n    }\n    var handleUpdate = function(updatedAuthor) {\n        setAuthors(authors.map(function(a) {\n            return a.id === updatedAuthor.id ? updatedAuthor : a;\n        }));\n        setEditModalOpen(false);\n    };\n    var handleDelete = function() {\n        setAuthors(authors.filter(function(a) {\n            return a.id !== author.id;\n        }));\n        setDeleteModalOpen(false);\n        router.push(\"/authors\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center space-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: author.photo,\n                        alt: author.name,\n                        className: \"w-24 h-24 rounded-full object-cover\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PAVILION\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-3xl font-bold\",\n                        children: author.name\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PAVILION\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PAVILION\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"mt-4 text-gray-700\",\n                children: author.bio\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PAVILION\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"mt-6 text-2xl font-bold\",\n                children: \"Livres \\xe9crits\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PAVILION\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"mt-4 list-disc list-inside\",\n                children: (_author_books = author.books) === null || _author_books === void 0 ? void 0 : _author_books.map(function(book, index) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: book\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\PAVILION\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PAVILION\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-6 flex space-x-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return setEditModalOpen(true);\n                        },\n                        className: \"bg-yellow-500 text-white py-2 px-4 rounded\",\n                        children: \"Modifier\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PAVILION\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                        lineNumber: 79,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return setDeleteModalOpen(true);\n                        },\n                        className: \"bg-red-500 text-white py-2 px-4 rounded\",\n                        children: \"Supprimer\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\PAVILION\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                        lineNumber: 85,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\PAVILION\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Modal__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                isOpen: isEditModalOpen,\n                onClose: function() {\n                    return setEditModalOpen(false);\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EditAuthorForm__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    author: author,\n                    onSubmit: handleUpdate,\n                    onClose: function() {\n                        return setEditModalOpen(false);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PAVILION\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PAVILION\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ConfirmModal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                isOpen: isDeleteModalOpen,\n                onClose: function() {\n                    return setDeleteModalOpen(false);\n                },\n                onConfirm: handleDelete,\n                message: \"\\xcates-vous s\\xfbr de vouloir supprimer \".concat(author.name, \" ?\")\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PAVILION\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n                lineNumber: 103,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PAVILION\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\app\\\\authors\\\\[id]\\\\page.tsx\",\n        lineNumber: 62,\n        columnNumber: 5\n    }, this);\n}\n_s(AuthorDetails, \"QJDnJmVt33v6gZODPrY8ZBeco6g=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = AuthorDetails;\nvar _c;\n$RefreshReg$(_c, \"AuthorDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXV0aG9ycy9baWRdL3BhZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUU0QztBQUNYO0FBQytCO0FBQ0o7QUFDZDtBQUUvQixTQUFTSyxjQUFjLEtBQXNDOztRQUF0QyxlQUFFQztRQWlFL0JDOztJQWhFUCxJQUFNQyxTQUFTUiwwREFBU0E7SUFDeEIsSUFBOEJDLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQztRQUNyQztZQUNFUSxJQUFJO1lBQ0pDLE1BQU07WUFDTkMsS0FBSztZQUNMQyxPQUFPO1lBQ1BDLE9BQU87Z0JBQUM7Z0JBQWtCO2FBQXNCO1FBQ2xEO1FBQ0E7WUFDRUosSUFBSTtZQUNKQyxNQUFNO1lBQ05DLEtBQUs7WUFDTEMsT0FBTztZQUNQQyxPQUFPO2dCQUFDO2dCQUFjO2FBQVc7UUFDbkM7UUFDQTtZQUNFSixJQUFJO1lBQ0pDLE1BQU07WUFDTkMsS0FBSztZQUNMQyxPQUFPO1lBQ1BDLE9BQU87Z0JBQUM7Z0JBQWtCO2FBQWtCO1FBQzlDO0tBQ0QsT0F0Qk1DLFVBQXVCYixjQUFkYyxhQUFjZDtJQXVCOUIsSUFBNENBLGFBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxZQUE5Q2Usa0JBQXFDZixlQUFwQmdCLG1CQUFvQmhCO0lBQzVDLElBQWdEQSxhQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsWUFBbERpQixvQkFBeUNqQixlQUF0QmtCLHFCQUFzQmxCO0lBRWhELElBQU1NLFNBQVNPLFFBQVFNLElBQUksQ0FBQyxTQUFDQztlQUFNQSxFQUFFWixFQUFFLEtBQUthLFNBQVNoQixPQUFPRyxFQUFFOztJQUU5RCxJQUFJLENBQUNGLFFBQVE7UUFDWCxxQkFBTyw4REFBQ2dCO3NCQUFJOzs7Ozs7SUFDZDtJQUVBLElBQU1DLGVBQWUsU0FBQ0M7UUFNcEJWLFdBQ0VELFFBQVFZLEdBQUcsQ0FBQyxTQUFDTDttQkFBT0EsRUFBRVosRUFBRSxLQUFLZ0IsY0FBY2hCLEVBQUUsR0FBR2dCLGdCQUFnQko7O1FBRWxFSixpQkFBaUI7SUFDbkI7SUFFQSxJQUFNVSxlQUFlO1FBQ25CWixXQUFXRCxRQUFRYyxNQUFNLENBQUMsU0FBQ1A7bUJBQU1BLEVBQUVaLEVBQUUsS0FBS0YsT0FBT0UsRUFBRTs7UUFDbkRVLG1CQUFtQjtRQUNuQlgsT0FBT3FCLElBQUksQ0FBQztJQUNkO0lBRUEscUJBQ0UsOERBQUNOO1FBQUlPLFdBQVU7OzBCQUNiLDhEQUFDUDtnQkFBSU8sV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUNDQyxLQUFLekIsT0FBT0ssS0FBSzt3QkFDakJxQixLQUFLMUIsT0FBT0csSUFBSTt3QkFDaEJvQixXQUFVOzs7Ozs7a0NBRVosOERBQUNJO3dCQUFHSixXQUFVO2tDQUFzQnZCLE9BQU9HLElBQUk7Ozs7Ozs7Ozs7OzswQkFFakQsOERBQUN5QjtnQkFBRUwsV0FBVTswQkFBc0J2QixPQUFPSSxHQUFHOzs7Ozs7MEJBQzdDLDhEQUFDeUI7Z0JBQUdOLFdBQVU7MEJBQTBCOzs7Ozs7MEJBQ3hDLDhEQUFDTztnQkFBR1AsV0FBVTsyQkFDWHZCLGdCQUFBQSxPQUFPTSxLQUFLLGNBQVpOLG9DQUFBQSxjQUFjbUIsR0FBRyxDQUFDLFNBQUNZLE1BQU1DO3lDQUN4Qiw4REFBQ0M7a0NBQWdCRjt1QkFBUkM7Ozs7Ozs7Ozs7OzBCQUdiLDhEQUFDaEI7Z0JBQUlPLFdBQVU7O2tDQUNiLDhEQUFDVzt3QkFDQ0MsU0FBUzttQ0FBTXpCLGlCQUFpQjs7d0JBQ2hDYSxXQUFVO2tDQUNYOzs7Ozs7a0NBR0QsOERBQUNXO3dCQUNDQyxTQUFTO21DQUFNdkIsbUJBQW1COzt3QkFDbENXLFdBQVU7a0NBQ1g7Ozs7Ozs7Ozs7OzswQkFNSCw4REFBQzFCLHlEQUFLQTtnQkFBQ3VDLFFBQVEzQjtnQkFBaUI0QixTQUFTOzJCQUFNM0IsaUJBQWlCOzswQkFDOUQsNEVBQUNmLGtFQUFjQTtvQkFDYkssUUFBUUE7b0JBQ1JzQyxVQUFVckI7b0JBQ1ZvQixTQUFTOytCQUFNM0IsaUJBQWlCOzs7Ozs7Ozs7Ozs7MEJBS3BDLDhEQUFDZCxnRUFBWUE7Z0JBQ1h3QyxRQUFRekI7Z0JBQ1IwQixTQUFTOzJCQUFNekIsbUJBQW1COztnQkFDbEMyQixXQUFXbkI7Z0JBQ1hvQixTQUFTLDRDQUFrRCxPQUFaeEMsT0FBT0csSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7QUFJbkU7R0F0R3dCTDs7UUFDUEwsc0RBQVNBOzs7S0FERksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9hdXRob3JzL1tpZF0vcGFnZS50c3g/NGY2OCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEVkaXRBdXRob3JGb3JtIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvRWRpdEF1dGhvckZvcm0nO1xyXG5pbXBvcnQgQ29uZmlybU1vZGFsIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvQ29uZmlybU1vZGFsJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTW9kYWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aG9yRGV0YWlscyh7IHBhcmFtcyB9OiB7IHBhcmFtczogeyBpZDogc3RyaW5nIH0gfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IFthdXRob3JzLCBzZXRBdXRob3JzXSA9IHVzZVN0YXRlKFtcclxuICAgIHtcclxuICAgICAgaWQ6IDEsXHJcbiAgICAgIG5hbWU6ICdWaWN0b3IgSHVnbycsXHJcbiAgICAgIGJpbzogJ1ZpY3RvciBIdWdvIMOpdGFpdCB1biBwb8OodGUsIHJvbWFuY2llciBldCBkcmFtYXR1cmdlIGZyYW7Dp2Fpcy4nLFxyXG4gICAgICBwaG90bzogJ2h0dHBzOi8vdmlhLnBsYWNlaG9sZGVyLmNvbS8xNTAnLFxyXG4gICAgICBib29rczogWydMZXMgTWlzw6lyYWJsZXMnLCAnTm90cmUtRGFtZSBkZSBQYXJpcyddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDIsXHJcbiAgICAgIG5hbWU6ICdBbGJlcnQgQ2FtdXMnLFxyXG4gICAgICBiaW86ICdBbGJlcnQgQ2FtdXMgw6l0YWl0IHVuIHBoaWxvc29waGUsIMOpY3JpdmFpbiBldCBqb3VybmFsaXN0ZSBmcmFuw6dhaXMuJyxcclxuICAgICAgcGhvdG86ICdodHRwczovL3ZpYS5wbGFjZWhvbGRlci5jb20vMTUwJyxcclxuICAgICAgYm9va3M6IFsnTOKAmcOJdHJhbmdlcicsICdMYSBQZXN0ZSddLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgaWQ6IDMsXHJcbiAgICAgIG5hbWU6ICdIb25vcsOpIGRlIEJhbHphYycsXHJcbiAgICAgIGJpbzogJ0hvbm9yw6kgZGUgQmFsemFjIMOpdGFpdCB1biByb21hbmNpZXIgZnJhbsOnYWlzLicsXHJcbiAgICAgIHBob3RvOiAnaHR0cHM6Ly92aWEucGxhY2Vob2xkZXIuY29tLzE1MCcsXHJcbiAgICAgIGJvb2tzOiBbJ0xlIFDDqHJlIEdvcmlvdCcsICdFdWfDqW5pZSBHcmFuZGV0J10sXHJcbiAgICB9LFxyXG4gIF0pO1xyXG4gIGNvbnN0IFtpc0VkaXRNb2RhbE9wZW4sIHNldEVkaXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0RlbGV0ZU1vZGFsT3Blbiwgc2V0RGVsZXRlTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgYXV0aG9yID0gYXV0aG9ycy5maW5kKChhKSA9PiBhLmlkID09PSBwYXJzZUludChwYXJhbXMuaWQpKTtcclxuXHJcbiAgaWYgKCFhdXRob3IpIHtcclxuICAgIHJldHVybiA8ZGl2PkF1dGV1ciBub24gdHJvdXbDqS48L2Rpdj47XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVVcGRhdGUgPSAodXBkYXRlZEF1dGhvcjoge1xyXG4gICAgaWQ6IG51bWJlcjtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIHBob3RvOiBzdHJpbmc7XHJcbiAgICBiaW86IHN0cmluZztcclxuICB9KSA9PiB7XHJcbiAgICBzZXRBdXRob3JzKFxyXG4gICAgICBhdXRob3JzLm1hcCgoYSkgPT4gKGEuaWQgPT09IHVwZGF0ZWRBdXRob3IuaWQgPyB1cGRhdGVkQXV0aG9yIDogYSkpXHJcbiAgICApO1xyXG4gICAgc2V0RWRpdE1vZGFsT3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gKCkgPT4ge1xyXG4gICAgc2V0QXV0aG9ycyhhdXRob3JzLmZpbHRlcigoYSkgPT4gYS5pZCAhPT0gYXV0aG9yLmlkKSk7XHJcbiAgICBzZXREZWxldGVNb2RhbE9wZW4oZmFsc2UpO1xyXG4gICAgcm91dGVyLnB1c2goJy9hdXRob3JzJyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicC02XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC00XCI+XHJcbiAgICAgICAgPGltZ1xyXG4gICAgICAgICAgc3JjPXthdXRob3IucGhvdG99XHJcbiAgICAgICAgICBhbHQ9e2F1dGhvci5uYW1lfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy0yNCBoLTI0IHJvdW5kZWQtZnVsbCBvYmplY3QtY292ZXJcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtYm9sZFwiPnthdXRob3IubmFtZX08L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwibXQtNCB0ZXh0LWdyYXktNzAwXCI+e2F1dGhvci5iaW99PC9wPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwibXQtNiB0ZXh0LTJ4bCBmb250LWJvbGRcIj5MaXZyZXMgw6ljcml0czwvaDI+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJtdC00IGxpc3QtZGlzYyBsaXN0LWluc2lkZVwiPlxyXG4gICAgICAgIHthdXRob3IuYm9va3M/Lm1hcCgoYm9vaywgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT57Ym9va308L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgZmxleCBzcGFjZS14LTRcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRFZGl0TW9kYWxPcGVuKHRydWUpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiYmcteWVsbG93LTUwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBNb2RpZmllclxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldERlbGV0ZU1vZGFsT3Blbih0cnVlKX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgdGV4dC13aGl0ZSBweS0yIHB4LTQgcm91bmRlZFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgU3VwcHJpbWVyXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIE1vZGFsZSBkZSBtb2RpZmljYXRpb24gKi99XHJcbiAgICAgIDxNb2RhbCBpc09wZW49e2lzRWRpdE1vZGFsT3Blbn0gb25DbG9zZT17KCkgPT4gc2V0RWRpdE1vZGFsT3BlbihmYWxzZSl9PlxyXG4gICAgICAgIDxFZGl0QXV0aG9yRm9ybVxyXG4gICAgICAgICAgYXV0aG9yPXthdXRob3J9XHJcbiAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlVXBkYXRlfVxyXG4gICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0RWRpdE1vZGFsT3BlbihmYWxzZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Nb2RhbD5cclxuXHJcbiAgICAgIHsvKiBNb2RhbGUgZGUgY29uZmlybWF0aW9uICovfVxyXG4gICAgICA8Q29uZmlybU1vZGFsXHJcbiAgICAgICAgaXNPcGVuPXtpc0RlbGV0ZU1vZGFsT3Blbn1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXREZWxldGVNb2RhbE9wZW4oZmFsc2UpfVxyXG4gICAgICAgIG9uQ29uZmlybT17aGFuZGxlRGVsZXRlfVxyXG4gICAgICAgIG1lc3NhZ2U9e2DDinRlcy12b3VzIHPDu3IgZGUgdm91bG9pciBzdXBwcmltZXIgJHthdXRob3IubmFtZX0gP2B9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsIkVkaXRBdXRob3JGb3JtIiwiQ29uZmlybU1vZGFsIiwiTW9kYWwiLCJBdXRob3JEZXRhaWxzIiwicGFyYW1zIiwiYXV0aG9yIiwicm91dGVyIiwiaWQiLCJuYW1lIiwiYmlvIiwicGhvdG8iLCJib29rcyIsImF1dGhvcnMiLCJzZXRBdXRob3JzIiwiaXNFZGl0TW9kYWxPcGVuIiwic2V0RWRpdE1vZGFsT3BlbiIsImlzRGVsZXRlTW9kYWxPcGVuIiwic2V0RGVsZXRlTW9kYWxPcGVuIiwiZmluZCIsImEiLCJwYXJzZUludCIsImRpdiIsImhhbmRsZVVwZGF0ZSIsInVwZGF0ZWRBdXRob3IiLCJtYXAiLCJoYW5kbGVEZWxldGUiLCJmaWx0ZXIiLCJwdXNoIiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiaDEiLCJwIiwiaDIiLCJ1bCIsImJvb2siLCJpbmRleCIsImxpIiwiYnV0dG9uIiwib25DbGljayIsImlzT3BlbiIsIm9uQ2xvc2UiLCJvblN1Ym1pdCIsIm9uQ29uZmlybSIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/authors/[id]/page.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/ConfirmModal.tsx":
/*!*****************************************!*\
  !*** ./src/components/ConfirmModal.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ConfirmModal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction ConfirmModal(param) {\n    var isOpen = param.isOpen, onClose = param.onClose, onConfirm = param.onConfirm, message = param.message;\n    if (!isOpen) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-6 rounded shadow-lg text-center space-y-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-lg\",\n                    children: message\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\PAVILION\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\components\\\\ConfirmModal.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center space-x-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: onClose,\n                            className: \"bg-gray-300 text-black py-2 px-4 rounded\",\n                            children: \"Annuler\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\PAVILION\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\components\\\\ConfirmModal.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: onConfirm,\n                            className: \"bg-red-500 text-white py-2 px-4 rounded\",\n                            children: \"Supprimer\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\PAVILION\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\components\\\\ConfirmModal.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\PAVILION\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\components\\\\ConfirmModal.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\PAVILION\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\components\\\\ConfirmModal.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PAVILION\\\\Documents\\\\GitHub\\\\projet_tecno_web\\\\exam-m1\\\\m1-site\\\\src\\\\components\\\\ConfirmModal.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_c = ConfirmModal;\nvar _c;\n$RefreshReg$(_c, \"ConfirmModal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NvbmZpcm1Nb2RhbC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBU2UsU0FBU0EsYUFBYSxLQUtqQjtRQUpsQkMsU0FEbUMsTUFDbkNBLFFBQ0FDLFVBRm1DLE1BRW5DQSxTQUNBQyxZQUhtQyxNQUduQ0EsV0FDQUMsVUFKbUMsTUFJbkNBO0lBRUEsSUFBSSxDQUFDSCxRQUFRLE9BQU87SUFFcEIscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDQztvQkFBRUQsV0FBVTs4QkFBV0Y7Ozs7Ozs4QkFDeEIsOERBQUNDO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQ0NDLFNBQVNQOzRCQUNUSSxXQUFVO3NDQUNYOzs7Ozs7c0NBR0QsOERBQUNFOzRCQUNDQyxTQUFTTjs0QkFDVEcsV0FBVTtzQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtLQTdCd0JOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NvbmZpcm1Nb2RhbC50c3g/NWU0MSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcblxyXG5pbnRlcmZhY2UgQ29uZmlybU1vZGFsUHJvcHMge1xyXG4gIGlzT3BlbjogYm9vbGVhbjtcclxuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xyXG4gIG9uQ29uZmlybTogKCkgPT4gdm9pZDtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbmZpcm1Nb2RhbCh7XHJcbiAgaXNPcGVuLFxyXG4gIG9uQ2xvc2UsXHJcbiAgb25Db25maXJtLFxyXG4gIG1lc3NhZ2UsXHJcbn06IENvbmZpcm1Nb2RhbFByb3BzKSB7XHJcbiAgaWYgKCFpc09wZW4pIHJldHVybiBudWxsO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmaXhlZCBpbnNldC0wIGJnLWJsYWNrIGJnLW9wYWNpdHktNTAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwLTYgcm91bmRlZCBzaGFkb3ctbGcgdGV4dC1jZW50ZXIgc3BhY2UteS00XCI+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZ1wiPnttZXNzYWdlfTwvcD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgc3BhY2UteC00XCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYXktMzAwIHRleHQtYmxhY2sgcHktMiBweC00IHJvdW5kZWRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBBbm51bGVyXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17b25Db25maXJtfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIHRleHQtd2hpdGUgcHktMiBweC00IHJvdW5kZWRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBTdXBwcmltZXJcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIkNvbmZpcm1Nb2RhbCIsImlzT3BlbiIsIm9uQ2xvc2UiLCJvbkNvbmZpcm0iLCJtZXNzYWdlIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ConfirmModal.tsx\n"));

/***/ })

});