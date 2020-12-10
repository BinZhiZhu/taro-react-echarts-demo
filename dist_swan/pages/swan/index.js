(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["pages/swan/index"],{

/***/ "./node_modules/babel-loader/lib/index.js!./src/pages/swan/index.jsx":
/*!******************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./src/pages/swan/index.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Index; });
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/cjs/react.production.min.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/components/mini/index.js");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.scss */ "./src/pages/swan/index.scss");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_swan_chart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/swan-chart */ "./src/components/swan-chart/index.js");
/* harmony import */ var _components_swan_chart__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_swan_chart__WEBPACK_IMPORTED_MODULE_7__);









var Index = /*#__PURE__*/function (_Component) {
  Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Index, _Component);

  var _super = Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(Index);

  function Index() {
    Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Index);

    return _super.apply(this, arguments);
  }

  Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Index, [{
    key: "componentWillMount",
    value: function componentWillMount() {}
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {}
  }, {
    key: "componentDidShow",
    value: function componentDidShow() {}
  }, {
    key: "componentDidHide",
    value: function componentDidHide() {}
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__[/* View */ "b"], {
        className: "swan-index"
      },  true && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_swan_chart__WEBPACK_IMPORTED_MODULE_7___default.a, null));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);



/***/ }),

/***/ "./src/components/swan-chart/index.js":
/*!********************************************!*\
  !*** ./src/components/swan-chart/index.js ***!
  \********************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports) {

/**
 * @file ECharts line series
 */
var option = {
  color: ['#37A2DA', '#67E0E3', '#9FE6B8'],
  legend: {
    data: ['A', 'B', 'C'],
    top: 10,
    left: 'center',
    z: 100
  },
  grid: {
    containLabel: true
  },
  tooltip: {
    show: true,
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: {
    x: 'center',
    type: 'value',
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    } // show: false

  },
  series: [{
    name: 'A',
    type: 'line',
    smooth: true,
    data: [18, 36, 65, 30, 78, 40, 33]
  }, {
    name: 'B',
    type: 'line',
    smooth: true,
    data: [12, 50, 51, 35, 70, 30, 20]
  }, {
    name: 'C',
    type: 'line',
    smooth: true,
    data: [10, 30, 31, 50, 40, 20, 10]
  }]
};
Component({
  // properties:{
  //   options: {
  //     type: Object,
  //     value: {}
  //   },
  // },
  data: {
    option: option
  }
});

/***/ }),

/***/ "./src/pages/swan/index.jsx":
/*!**********************************!*\
  !*** ./src/pages/swan/index.jsx ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib!./index.jsx */ "./node_modules/babel-loader/lib/index.js!./src/pages/swan/index.jsx");


var config = {"navigationBarTitleText":"百度智能小程序echarts使用示例"};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_babel_loader_lib_index_js_index_jsx__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/swan/index', {}, config || {}))



/***/ }),

/***/ "./src/pages/swan/index.scss":
/*!***********************************!*\
  !*** ./src/pages/swan/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/swan/index.jsx","runtime","taro","vendors"]]]);
//# sourceMappingURL=index.js.map