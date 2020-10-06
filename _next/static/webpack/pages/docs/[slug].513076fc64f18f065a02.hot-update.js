webpackHotUpdate_N_E("pages/docs/[slug]",{

/***/ "./components/SidebarLayout.js":
/*!*************************************!*\
  !*** ./components/SidebarLayout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DocumentationLayout; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/jalal/Projects/website/components/SidebarLayout.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction DocumentationLayout(_ref) {\n  _s();\n\n  var _this = this;\n\n  var children = _ref.children,\n      _ref$categories = _ref.categories,\n      categories = _ref$categories === void 0 ? [] : _ref$categories;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  return __jsx(\"div\", {\n    className: \"w-full max-w-screen-xl mx-auto px-6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"lg:flex -mx-6\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    id: \"sidebar\",\n    className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('fixed inset-0 h-full bg-white z-90 w-full border-b -mb-16 lg:-mb-0 lg:static lg:h-auto lg:overflow-y-visible lg:border-b-0 lg:pt-0 lg:w-1/4 lg:block lg:border-0 xl:w-1/5'),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 9\n    }\n  }, Object.keys(categories).sort().map(function (category, i) {\n    if (categories[category].length === 0) return null;\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h3\", {\n      key: i + \"title\",\n      className: \"text-base font-semibold text-gray-600 mb-2 mt-6\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 15\n      }\n    }, category), __jsx(\"ul\", {\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 15\n      }\n    }, categories[category].map(function (_ref2, i) {\n      var title = _ref2.title;\n      return __jsx(\"li\", {\n        key: i,\n        className: \"block py-1 px-1\",\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 59\n        }\n      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n        href: \"/docs/\".concat(title),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 19\n        }\n      }, __jsx(\"a\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 21\n        }\n      }, title)));\n    })));\n  })), __jsx(\"div\", {\n    id: \"content-wrapper\",\n    className: Object(clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('min-h-screen w-full lg:static lg:max-h-full lg:overflow-visible lg:w-3/4 xl:w-4/5'),\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(\"div\", {\n    id: \"content\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 11\n    }\n  }, __jsx(\"div\", {\n    id: \"app\",\n    className: \"flex\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }\n  }, children)))));\n}\n\n_s(DocumentationLayout, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = DocumentationLayout;\n\nvar _c;\n\n$RefreshReg$(_c, \"DocumentationLayout\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyTGF5b3V0LmpzPzJlMjAiXSwibmFtZXMiOlsiRG9jdW1lbnRhdGlvbkxheW91dCIsImNoaWxkcmVuIiwiY2F0ZWdvcmllcyIsInJvdXRlciIsInVzZVJvdXRlciIsImNsc3giLCJPYmplY3QiLCJrZXlzIiwic29ydCIsIm1hcCIsImNhdGVnb3J5IiwiaSIsImxlbmd0aCIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLG1CQUFULE9BQTBEO0FBQUE7O0FBQUE7O0FBQUEsTUFBNUJDLFFBQTRCLFFBQTVCQSxRQUE0QjtBQUFBLDZCQUFsQkMsVUFBa0I7QUFBQSxNQUFsQkEsVUFBa0IsZ0NBQUwsRUFBSztBQUN2RSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRUEsU0FDRTtBQUFLLGFBQVMsRUFBQyxxQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxNQUFFLEVBQUMsU0FETDtBQUVFLGFBQVMsRUFBRUMsb0RBQUksQ0FDYiwyS0FEYSxDQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTCxVQUFaLEVBQXdCTSxJQUF4QixHQUErQkMsR0FBL0IsQ0FBbUMsVUFBQ0MsUUFBRCxFQUFXQyxDQUFYLEVBQWlCO0FBQ25ELFFBQUlULFVBQVUsQ0FBQ1EsUUFBRCxDQUFWLENBQXFCRSxNQUFyQixLQUFnQyxDQUFwQyxFQUF1QyxPQUFPLElBQVA7QUFDdkMsV0FBTyxtRUFDTDtBQUFJLFNBQUcsRUFBRUQsQ0FBQyxHQUFHLE9BQWI7QUFBc0IsZUFBUyxFQUFDLGlEQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQW1GRCxRQUFuRixDQURLLEVBRUw7QUFBSSxTQUFHLEVBQUVDLENBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHVCxVQUFVLENBQUNRLFFBQUQsQ0FBVixDQUFxQkQsR0FBckIsQ0FBeUIsaUJBQVVFLENBQVY7QUFBQSxVQUFFRSxLQUFGLFNBQUVBLEtBQUY7QUFBQSxhQUFnQjtBQUFJLFdBQUcsRUFBRUYsQ0FBVDtBQUFZLGlCQUFTLEVBQUMsaUJBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDeEMsTUFBQyxnREFBRDtBQUFNLFlBQUksa0JBQVdFLEtBQVgsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNHQSxLQURILENBREYsQ0FEd0MsQ0FBaEI7QUFBQSxLQUF6QixDQURILENBRkssQ0FBUDtBQVlELEdBZEEsQ0FOSCxDQURGLEVBeUJFO0FBQ0UsTUFBRSxFQUFDLGlCQURMO0FBRUUsYUFBUyxFQUFFUixvREFBSSxDQUNiLG1GQURhLENBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRTtBQUFLLE1BQUUsRUFBQyxTQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE1BQUUsRUFBQyxLQUFSO0FBQWMsYUFBUyxFQUFDLE1BQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0osUUFESCxDQURGLENBTkYsQ0F6QkYsQ0FERixDQURGO0FBMENEOztHQTdDdUJELG1CO1VBQ1BJLHFEOzs7S0FET0osbUIiLCJmaWxlIjoiLi9jb21wb25lbnRzL1NpZGViYXJMYXlvdXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERvY3VtZW50YXRpb25MYXlvdXQoe2NoaWxkcmVuLCBjYXRlZ29yaWVzID0gW119KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBtYXgtdy1zY3JlZW4teGwgbXgtYXV0byBweC02XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOmZsZXggLW14LTZcIj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGlkPVwic2lkZWJhclwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgJ2ZpeGVkIGluc2V0LTAgaC1mdWxsIGJnLXdoaXRlIHotOTAgdy1mdWxsIGJvcmRlci1iIC1tYi0xNiBsZzotbWItMCBsZzpzdGF0aWMgbGc6aC1hdXRvIGxnOm92ZXJmbG93LXktdmlzaWJsZSBsZzpib3JkZXItYi0wIGxnOnB0LTAgbGc6dy0xLzQgbGc6YmxvY2sgbGc6Ym9yZGVyLTAgeGw6dy0xLzUnLFxuICAgICAgICAgICl9XG4gICAgICAgID5cbiAgICAgICAgICB7T2JqZWN0LmtleXMoY2F0ZWdvcmllcykuc29ydCgpLm1hcCgoY2F0ZWdvcnksIGkpID0+IHtcbiAgICAgICAgICAgIGlmIChjYXRlZ29yaWVzW2NhdGVnb3J5XS5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xuICAgICAgICAgICAgcmV0dXJuIDw+XG4gICAgICAgICAgICAgIDxoMyBrZXk9e2kgKyBcInRpdGxlXCJ9IGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LXNlbWlib2xkIHRleHQtZ3JheS02MDAgbWItMiBtdC02XCI+e2NhdGVnb3J5fTwvaDM+XG4gICAgICAgICAgICAgIDx1bCBrZXk9e2l9PlxuICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzW2NhdGVnb3J5XS5tYXAoKHt0aXRsZX0sIGkpID0+IDxsaSBrZXk9e2l9IGNsYXNzTmFtZT1cImJsb2NrIHB5LTEgcHgtMVwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9kb2NzLyR7dGl0bGV9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+KX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgIH0pfVxuXG5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBpZD1cImNvbnRlbnQtd3JhcHBlclwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgJ21pbi1oLXNjcmVlbiB3LWZ1bGwgbGc6c3RhdGljIGxnOm1heC1oLWZ1bGwgbGc6b3ZlcmZsb3ctdmlzaWJsZSBsZzp3LTMvNCB4bDp3LTQvNSdcbiAgICAgICAgICApfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBpZD1cImNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJhcHBcIiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/SidebarLayout.js\n");

/***/ })

})