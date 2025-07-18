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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "__barrel_optimize__?names=CssBaseline,ThemeProvider!=!./node_modules/@mui/material/esm/index.js":
/*!*******************************************************************************************************!*\
  !*** __barrel_optimize__?names=CssBaseline,ThemeProvider!=!./node_modules/@mui/material/esm/index.js ***!
  \*******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CssBaseline: () => (/* reexport safe */ _CssBaseline_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   ThemeProvider: () => (/* reexport safe */ _Users_mikhail_Downloads_eth_explorer_node_modules_mui_material_esm_styles_index_js__WEBPACK_IMPORTED_MODULE_1__.ThemeProvider)\n/* harmony export */ });\n/* harmony import */ var _CssBaseline_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CssBaseline/index.js */ \"./node_modules/@mui/material/esm/CssBaseline/index.js\");\n/* harmony import */ var _Users_mikhail_Downloads_eth_explorer_node_modules_mui_material_esm_styles_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@mui/material/esm/styles/index.js */ \"./node_modules/@mui/material/esm/styles/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_CssBaseline_index_js__WEBPACK_IMPORTED_MODULE_0__, _Users_mikhail_Downloads_eth_explorer_node_modules_mui_material_esm_styles_index_js__WEBPACK_IMPORTED_MODULE_1__]);\n([_CssBaseline_index_js__WEBPACK_IMPORTED_MODULE_0__, _Users_mikhail_Downloads_eth_explorer_node_modules_mui_material_esm_styles_index_js__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1Dc3NCYXNlbGluZSxUaGVtZVByb3ZpZGVyIT0hLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9lc20vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDK0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldGgtZXhwbG9yZXIvLi9ub2RlX21vZHVsZXMvQG11aS9tYXRlcmlhbC9lc20vaW5kZXguanM/ZGE0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ3NzQmFzZWxpbmUgfSBmcm9tIFwiLi9Dc3NCYXNlbGluZS9pbmRleC5qc1wiXG5leHBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIi9Vc2Vycy9taWtoYWlsL0Rvd25sb2Fkcy9ldGgtZXhwbG9yZXIvbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvZXNtL3N0eWxlcy9pbmRleC5qc1wiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=CssBaseline,ThemeProvider!=!./node_modules/@mui/material/esm/index.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_CssBaseline_ThemeProvider_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=CssBaseline,ThemeProvider!=!@mui/material */ \"__barrel_optimize__?names=CssBaseline,ThemeProvider!=!./node_modules/@mui/material/esm/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ \"./store/index.ts\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/theme */ \"./store/theme.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_store_theme__WEBPACK_IMPORTED_MODULE_4__, _barrel_optimize_names_CssBaseline_ThemeProvider_mui_material__WEBPACK_IMPORTED_MODULE_5__]);\n([_store_theme__WEBPACK_IMPORTED_MODULE_4__, _barrel_optimize_names_CssBaseline_ThemeProvider_mui_material__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"initial-scale=1, width=device-width\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mikhail/Downloads/eth-explorer/pages/_app.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.googleapis.com\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mikhail/Downloads/eth-explorer/pages/_app.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"preconnect\",\n                        href: \"https://fonts.gstatic.com\",\n                        crossOrigin: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mikhail/Downloads/eth-explorer/pages/_app.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        href: \"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap\",\n                        rel: \"stylesheet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/mikhail/Downloads/eth-explorer/pages/_app.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/mikhail/Downloads/eth-explorer/pages/_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n                store: _store__WEBPACK_IMPORTED_MODULE_2__.store,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CssBaseline_ThemeProvider_mui_material__WEBPACK_IMPORTED_MODULE_5__.ThemeProvider, {\n                    theme: _store_theme__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_CssBaseline_ThemeProvider_mui_material__WEBPACK_IMPORTED_MODULE_5__.CssBaseline, {}, void 0, false, {\n                            fileName: \"/Users/mikhail/Downloads/eth-explorer/pages/_app.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"/Users/mikhail/Downloads/eth-explorer/pages/_app.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/mikhail/Downloads/eth-explorer/pages/_app.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/mikhail/Downloads/eth-explorer/pages/_app.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEyRDtBQUNwQjtBQUNOO0FBR0o7QUFDTTtBQUVwQixTQUFTTSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzVELHFCQUNFOzswQkFDRSw4REFBQ0osa0RBQUlBOztrQ0FDSCw4REFBQ0s7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFhQyxNQUFLOzs7Ozs7a0NBQzVCLDhEQUFDRjt3QkFBS0MsS0FBSTt3QkFBYUMsTUFBSzt3QkFBNEJDLGFBQVk7Ozs7OztrQ0FDcEUsOERBQUNIO3dCQUNDRSxNQUFLO3dCQUNMRCxLQUFJOzs7Ozs7Ozs7Ozs7MEJBR1IsOERBQUNYLGlEQUFRQTtnQkFBQ0MsT0FBT0EseUNBQUtBOzBCQUNwQiw0RUFBQ0gsd0dBQWFBO29CQUFDSyxPQUFPQSxvREFBS0E7O3NDQUN6Qiw4REFBQ0osc0dBQVdBOzs7OztzQ0FDWiw4REFBQ007NEJBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V0aC1leHBsb3Jlci8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGhlbWVQcm92aWRlciwgQ3NzQmFzZWxpbmUgfSBmcm9tICdAbXVpL21hdGVyaWFsJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi9zdG9yZSc7XG5cbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3N0b3JlL3RoZW1lJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIGNyb3NzT3JpZ2luPVwiXCIgLz5cbiAgICAgICAgPGxpbmsgXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXI6d2dodEA0MDA7NTAwOzcwMCZkaXNwbGF5PXN3YXBcIiBcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCIgXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICAgIDwvUHJvdmlkZXI+XG4gICAgPC8+XG4gICk7XG59Il0sIm5hbWVzIjpbIlRoZW1lUHJvdmlkZXIiLCJDc3NCYXNlbGluZSIsIlByb3ZpZGVyIiwic3RvcmUiLCJIZWFkIiwidGhlbWUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImNyb3NzT3JpZ2luIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./store/blockSlice.ts":
/*!*****************************!*\
  !*** ./store/blockSlice.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   fetchBlock: () => (/* binding */ fetchBlock)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst providers = [\n    \"https://rpc.ankr.com/eth\",\n    \"https://eth.drpc.org\",\n    \"https://cloudflare-eth.com\"\n];\nconst initialState = {\n    number: null,\n    hash: null,\n    transactions: [],\n    loading: false,\n    error: null\n};\nconst fetchBlock = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)(\"block/fetchBlock\", async (blockNumber)=>{\n    for (const url of providers){\n        try {\n            const res = await fetch(url, {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    jsonrpc: \"2.0\",\n                    method: \"eth_getBlockByNumber\",\n                    params: [\n                        blockNumber,\n                        true\n                    ],\n                    id: 1\n                })\n            });\n            if (!res.ok) continue;\n            const data = await res.json();\n            if (data.result) return data.result;\n        } catch  {}\n    }\n    throw new Error(\"Failed to fetch block data from providers\");\n});\nconst blockSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"block\",\n    initialState,\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(fetchBlock.pending, (state)=>{\n            state.loading = true;\n            state.error = null;\n        }).addCase(fetchBlock.fulfilled, (state, action)=>{\n            state.loading = false;\n            state.error = null;\n            state.number = action.payload.number;\n            state.hash = action.payload.hash;\n            state.transactions = action.payload.transactions || [];\n        }).addCase(fetchBlock.rejected, (state, action)=>{\n            state.loading = false;\n            state.error = action.error.message || \"Error loading block\";\n        });\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blockSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9ibG9ja1NsaWNlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBaUU7QUFFakUsTUFBTUUsWUFBWTtJQUNoQjtJQUNBO0lBQ0E7Q0FDRDtBQWdCRCxNQUFNQyxlQUEyQjtJQUMvQkMsUUFBUTtJQUNSQyxNQUFNO0lBQ05DLGNBQWMsRUFBRTtJQUNoQkMsU0FBUztJQUNUQyxPQUFPO0FBQ1Q7QUFFTyxNQUFNQyxhQUFhUixrRUFBZ0JBLENBQ3hDLG9CQUNBLE9BQU9TO0lBQ0wsS0FBSyxNQUFNQyxPQUFPVCxVQUFXO1FBQzNCLElBQUk7WUFDRixNQUFNVSxNQUFNLE1BQU1DLE1BQU1GLEtBQUs7Z0JBQzNCRyxRQUFRO2dCQUNSQyxTQUFTO29CQUFFLGdCQUFnQjtnQkFBbUI7Z0JBQzlDQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQ25CQyxTQUFTO29CQUNUTCxRQUFRO29CQUNSTSxRQUFRO3dCQUFDVjt3QkFBYTtxQkFBSztvQkFDM0JXLElBQUk7Z0JBQ047WUFDRjtZQUVBLElBQUksQ0FBQ1QsSUFBSVUsRUFBRSxFQUFFO1lBQ2IsTUFBTUMsT0FBTyxNQUFNWCxJQUFJWSxJQUFJO1lBQzNCLElBQUlELEtBQUtFLE1BQU0sRUFBRSxPQUFPRixLQUFLRSxNQUFNO1FBQ3JDLEVBQUUsT0FBTSxDQUFDO0lBQ1g7SUFDQSxNQUFNLElBQUlDLE1BQU07QUFDbEIsR0FDQTtBQUVGLE1BQU1DLGFBQWEzQiw2REFBV0EsQ0FBQztJQUM3QjRCLE1BQU07SUFDTnpCO0lBQ0EwQixVQUFVLENBQUM7SUFDWEMsZUFBZSxDQUFDQztRQUNkQSxRQUNHQyxPQUFPLENBQUN2QixXQUFXd0IsT0FBTyxFQUFFLENBQUNDO1lBQzVCQSxNQUFNM0IsT0FBTyxHQUFHO1lBQ2hCMkIsTUFBTTFCLEtBQUssR0FBRztRQUNoQixHQUNDd0IsT0FBTyxDQUFDdkIsV0FBVzBCLFNBQVMsRUFBRSxDQUFDRCxPQUFPRTtZQUNyQ0YsTUFBTTNCLE9BQU8sR0FBRztZQUNoQjJCLE1BQU0xQixLQUFLLEdBQUc7WUFDZDBCLE1BQU05QixNQUFNLEdBQUdnQyxPQUFPQyxPQUFPLENBQUNqQyxNQUFNO1lBQ3BDOEIsTUFBTTdCLElBQUksR0FBRytCLE9BQU9DLE9BQU8sQ0FBQ2hDLElBQUk7WUFDaEM2QixNQUFNNUIsWUFBWSxHQUFHOEIsT0FBT0MsT0FBTyxDQUFDL0IsWUFBWSxJQUFJLEVBQUU7UUFDeEQsR0FDQzBCLE9BQU8sQ0FBQ3ZCLFdBQVc2QixRQUFRLEVBQUUsQ0FBQ0osT0FBT0U7WUFDcENGLE1BQU0zQixPQUFPLEdBQUc7WUFDaEIyQixNQUFNMUIsS0FBSyxHQUFHNEIsT0FBTzVCLEtBQUssQ0FBQytCLE9BQU8sSUFBSTtRQUN4QztJQUNKO0FBQ0Y7QUFFQSxpRUFBZVosV0FBV2EsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXRoLWV4cGxvcmVyLy4vc3RvcmUvYmxvY2tTbGljZS50cz8zMDBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBjcmVhdGVBc3luY1RodW5rIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5cbmNvbnN0IHByb3ZpZGVycyA9IFtcbiAgXCJodHRwczovL3JwYy5hbmtyLmNvbS9ldGhcIixcbiAgXCJodHRwczovL2V0aC5kcnBjLm9yZ1wiLFxuICBcImh0dHBzOi8vY2xvdWRmbGFyZS1ldGguY29tXCJcbl07XG5cbmludGVyZmFjZSBUcmFuc2FjdGlvbiB7XG4gIGhhc2g6IHN0cmluZztcbiAgZnJvbTogc3RyaW5nO1xuICB0bzogc3RyaW5nIHwgbnVsbDtcbn1cblxuaW50ZXJmYWNlIEJsb2NrU3RhdGUge1xuICBudW1iZXI6IHN0cmluZyB8IG51bGw7XG4gIGhhc2g6IHN0cmluZyB8IG51bGw7XG4gIHRyYW5zYWN0aW9uczogVHJhbnNhY3Rpb25bXTtcbiAgbG9hZGluZzogYm9vbGVhbjtcbiAgZXJyb3I6IHN0cmluZyB8IG51bGw7XG59XG5cbmNvbnN0IGluaXRpYWxTdGF0ZTogQmxvY2tTdGF0ZSA9IHtcbiAgbnVtYmVyOiBudWxsLFxuICBoYXNoOiBudWxsLFxuICB0cmFuc2FjdGlvbnM6IFtdLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgZXJyb3I6IG51bGwsXG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hCbG9jayA9IGNyZWF0ZUFzeW5jVGh1bmsoXG4gICdibG9jay9mZXRjaEJsb2NrJyxcbiAgYXN5bmMgKGJsb2NrTnVtYmVyOiBzdHJpbmcpID0+IHtcbiAgICBmb3IgKGNvbnN0IHVybCBvZiBwcm92aWRlcnMpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIGpzb25ycGM6ICcyLjAnLFxuICAgICAgICAgICAgbWV0aG9kOiAnZXRoX2dldEJsb2NrQnlOdW1iZXInLFxuICAgICAgICAgICAgcGFyYW1zOiBbYmxvY2tOdW1iZXIsIHRydWVdLFxuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgfSksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghcmVzLm9rKSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIGlmIChkYXRhLnJlc3VsdCkgcmV0dXJuIGRhdGEucmVzdWx0O1xuICAgICAgfSBjYXRjaCB7fVxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBibG9jayBkYXRhIGZyb20gcHJvdmlkZXJzJyk7XG4gIH1cbik7XG5cbmNvbnN0IGJsb2NrU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdibG9jaycsXG4gIGluaXRpYWxTdGF0ZSxcbiAgcmVkdWNlcnM6IHt9LFxuICBleHRyYVJlZHVjZXJzOiAoYnVpbGRlcikgPT4ge1xuICAgIGJ1aWxkZXJcbiAgICAgIC5hZGRDYXNlKGZldGNoQmxvY2sucGVuZGluZywgKHN0YXRlKSA9PiB7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XG4gICAgICB9KVxuICAgICAgLmFkZENhc2UoZmV0Y2hCbG9jay5mdWxmaWxsZWQsIChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgIHN0YXRlLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xuICAgICAgICBzdGF0ZS5udW1iZXIgPSBhY3Rpb24ucGF5bG9hZC5udW1iZXI7XG4gICAgICAgIHN0YXRlLmhhc2ggPSBhY3Rpb24ucGF5bG9hZC5oYXNoO1xuICAgICAgICBzdGF0ZS50cmFuc2FjdGlvbnMgPSBhY3Rpb24ucGF5bG9hZC50cmFuc2FjdGlvbnMgfHwgW107XG4gICAgICB9KVxuICAgICAgLmFkZENhc2UoZmV0Y2hCbG9jay5yZWplY3RlZCwgKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgc3RhdGUubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5lcnJvci5tZXNzYWdlIHx8ICdFcnJvciBsb2FkaW5nIGJsb2NrJztcbiAgICAgIH0pO1xuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGJsb2NrU2xpY2UucmVkdWNlcjsiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjcmVhdGVBc3luY1RodW5rIiwicHJvdmlkZXJzIiwiaW5pdGlhbFN0YXRlIiwibnVtYmVyIiwiaGFzaCIsInRyYW5zYWN0aW9ucyIsImxvYWRpbmciLCJlcnJvciIsImZldGNoQmxvY2siLCJibG9ja051bWJlciIsInVybCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwianNvbnJwYyIsInBhcmFtcyIsImlkIiwib2siLCJkYXRhIiwianNvbiIsInJlc3VsdCIsIkVycm9yIiwiYmxvY2tTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImV4dHJhUmVkdWNlcnMiLCJidWlsZGVyIiwiYWRkQ2FzZSIsInBlbmRpbmciLCJzdGF0ZSIsImZ1bGZpbGxlZCIsImFjdGlvbiIsInBheWxvYWQiLCJyZWplY3RlZCIsIm1lc3NhZ2UiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/blockSlice.ts\n");

/***/ }),

/***/ "./store/index.ts":
/*!************************!*\
  !*** ./store/index.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _blockSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockSlice */ \"./store/blockSlice.ts\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        block: _blockSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWtEO0FBQ1Y7QUFFakMsTUFBTUUsUUFBUUYsZ0VBQWNBLENBQUM7SUFDbENHLFNBQVM7UUFDUEMsT0FBT0gsbURBQVlBO0lBQ3JCO0FBQ0YsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL2V0aC1leHBsb3Jlci8uL3N0b3JlL2luZGV4LnRzP2I1YjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCBibG9ja1JlZHVjZXIgZnJvbSAnLi9ibG9ja1NsaWNlJztcblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICByZWR1Y2VyOiB7XG4gICAgYmxvY2s6IGJsb2NrUmVkdWNlcixcbiAgfSxcbn0pO1xuXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiBzdG9yZS5nZXRTdGF0ZT47XG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaDsiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJibG9ja1JlZHVjZXIiLCJzdG9yZSIsInJlZHVjZXIiLCJibG9jayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/index.ts\n");

/***/ }),

/***/ "./store/theme.ts":
/*!************************!*\
  !*** ./store/theme.ts ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__]);\n_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    palette: {\n        primary: {\n            main: \"#3f51b5\"\n        },\n        secondary: {\n            main: \"#f50057\"\n        },\n        background: {\n            default: \"#f5f5f5\",\n            paper: \"#ffffff\"\n        }\n    },\n    typography: {\n        fontFamily: [\n            '\"Inter\"',\n            \"-apple-system\",\n            \"BlinkMacSystemFont\",\n            '\"Segoe UI\"',\n            \"Roboto\",\n            '\"Helvetica Neue\"',\n            \"Arial\",\n            \"sans-serif\"\n        ].join(\",\")\n    },\n    components: {\n        MuiButton: {\n            styleOverrides: {\n                root: {\n                    textTransform: \"none\"\n                }\n            }\n        },\n        MuiTableCell: {\n            styleOverrides: {\n                root: {\n                    padding: \"12px 16px\"\n                }\n            }\n        }\n    }\n}));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS90aGVtZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFtRDtBQUVuRCxpRUFBZUEsaUVBQVdBLENBQUM7SUFDekJDLFNBQVM7UUFDUEMsU0FBUztZQUNQQyxNQUFNO1FBQ1I7UUFDQUMsV0FBVztZQUNURCxNQUFNO1FBQ1I7UUFDQUUsWUFBWTtZQUNWQyxTQUFTO1lBQ1RDLE9BQU87UUFDVDtJQUNGO0lBQ0FDLFlBQVk7UUFDVkMsWUFBWTtZQUNWO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7WUFDQTtZQUNBO1lBQ0E7U0FDRCxDQUFDQyxJQUFJLENBQUM7SUFDVDtJQUNBQyxZQUFZO1FBQ1ZDLFdBQVc7WUFDVEMsZ0JBQWdCO2dCQUNkQyxNQUFNO29CQUNKQyxlQUFlO2dCQUNqQjtZQUNGO1FBQ0Y7UUFDQUMsY0FBYztZQUNaSCxnQkFBZ0I7Z0JBQ2RDLE1BQU07b0JBQ0pHLFNBQVM7Z0JBQ1g7WUFDRjtRQUNGO0lBQ0Y7QUFDRixFQUFFLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ldGgtZXhwbG9yZXIvLi9zdG9yZS90aGVtZS50cz85NWM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBwcmltYXJ5OiB7XG4gICAgICBtYWluOiAnIzNmNTFiNScsXG4gICAgfSxcbiAgICBzZWNvbmRhcnk6IHtcbiAgICAgIG1haW46ICcjZjUwMDU3JyxcbiAgICB9LFxuICAgIGJhY2tncm91bmQ6IHtcbiAgICAgIGRlZmF1bHQ6ICcjZjVmNWY1JyxcbiAgICAgIHBhcGVyOiAnI2ZmZmZmZicsXG4gICAgfSxcbiAgfSxcbiAgdHlwb2dyYXBoeToge1xuICAgIGZvbnRGYW1pbHk6IFtcbiAgICAgICdcIkludGVyXCInLFxuICAgICAgJy1hcHBsZS1zeXN0ZW0nLFxuICAgICAgJ0JsaW5rTWFjU3lzdGVtRm9udCcsXG4gICAgICAnXCJTZWdvZSBVSVwiJyxcbiAgICAgICdSb2JvdG8nLFxuICAgICAgJ1wiSGVsdmV0aWNhIE5ldWVcIicsXG4gICAgICAnQXJpYWwnLFxuICAgICAgJ3NhbnMtc2VyaWYnLFxuICAgIF0uam9pbignLCcpLFxuICB9LFxuICBjb21wb25lbnRzOiB7XG4gICAgTXVpQnV0dG9uOiB7XG4gICAgICBzdHlsZU92ZXJyaWRlczoge1xuICAgICAgICByb290OiB7XG4gICAgICAgICAgdGV4dFRyYW5zZm9ybTogJ25vbmUnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aVRhYmxlQ2VsbDoge1xuICAgICAgc3R5bGVPdmVycmlkZXM6IHtcbiAgICAgICAgcm9vdDoge1xuICAgICAgICAgIHBhZGRpbmc6ICcxMnB4IDE2cHgnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7Il0sIm5hbWVzIjpbImNyZWF0ZVRoZW1lIiwicGFsZXR0ZSIsInByaW1hcnkiLCJtYWluIiwic2Vjb25kYXJ5IiwiYmFja2dyb3VuZCIsImRlZmF1bHQiLCJwYXBlciIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5Iiwiam9pbiIsImNvbXBvbmVudHMiLCJNdWlCdXR0b24iLCJzdHlsZU92ZXJyaWRlcyIsInJvb3QiLCJ0ZXh0VHJhbnNmb3JtIiwiTXVpVGFibGVDZWxsIiwicGFkZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/theme.ts\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

module.exports = import("@mui/material/styles");;

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("@mui/system");;

/***/ }),

/***/ "@mui/system/DefaultPropsProvider":
/*!***************************************************!*\
  !*** external "@mui/system/DefaultPropsProvider" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = import("@mui/system/DefaultPropsProvider");;

/***/ }),

/***/ "@mui/system/InitColorSchemeScript":
/*!****************************************************!*\
  !*** external "@mui/system/InitColorSchemeScript" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = import("@mui/system/InitColorSchemeScript");;

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = import("@mui/system/colorManipulator");;

/***/ }),

/***/ "@mui/system/createBreakpoints":
/*!************************************************!*\
  !*** external "@mui/system/createBreakpoints" ***!
  \************************************************/
/***/ ((module) => {

module.exports = import("@mui/system/createBreakpoints");;

/***/ }),

/***/ "@mui/system/createStyled":
/*!*******************************************!*\
  !*** external "@mui/system/createStyled" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = import("@mui/system/createStyled");;

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

module.exports = import("@mui/system/createTheme");;

/***/ }),

/***/ "@mui/system/cssVars":
/*!**************************************!*\
  !*** external "@mui/system/cssVars" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("@mui/system/cssVars");;

/***/ }),

/***/ "@mui/system/spacing":
/*!**************************************!*\
  !*** external "@mui/system/spacing" ***!
  \**************************************/
/***/ ((module) => {

module.exports = import("@mui/system/spacing");;

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = import("@mui/system/styleFunctionSx");;

/***/ }),

/***/ "@mui/system/useThemeProps":
/*!********************************************!*\
  !*** external "@mui/system/useThemeProps" ***!
  \********************************************/
/***/ ((module) => {

module.exports = import("@mui/system/useThemeProps");;

/***/ }),

/***/ "@mui/utils/deepmerge":
/*!***************************************!*\
  !*** external "@mui/utils/deepmerge" ***!
  \***************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/deepmerge");;

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/formatMuiErrorMessage");;

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = import("@mui/utils/generateUtilityClass");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@mui"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();