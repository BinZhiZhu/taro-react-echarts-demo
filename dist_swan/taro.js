(swan["webpackJsonp"] = swan["webpackJsonp"] || []).push([["taro"],{

/***/ "./node_modules/@tarojs/api/dist/index.esm.js":
/*!****************************************************!*\
  !*** ./node_modules/@tarojs/api/dist/index.esm.js ***!
  \****************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, window) {/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

if (typeof Object.assign !== 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.assign = function (target) {
    // .length of function is 2
    if (target == null) {
      // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource != null) {
        // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }

    return to;
  };
}

if (typeof Object.defineProperties !== 'function') {
  Object.defineProperties = function (obj, properties) {
    function convertToDescriptor(desc) {
      function hasProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }

      function isCallable(v) {
        // NB: modify as necessary if other values than functions are callable.
        return typeof v === 'function';
      }

      if (_typeof(desc) !== 'object' || desc === null) {
        throw new TypeError('bad desc');
      }

      var d = {};
      if (hasProperty(desc, 'enumerable')) d.enumerable = !!desc.enumerable;

      if (hasProperty(desc, 'configurable')) {
        d.configurable = !!desc.configurable;
      }

      if (hasProperty(desc, 'value')) d.value = desc.value;
      if (hasProperty(desc, 'writable')) d.writable = !!desc.writable;

      if (hasProperty(desc, 'get')) {
        var g = desc.get;

        if (!isCallable(g) && typeof g !== 'undefined') {
          throw new TypeError('bad get');
        }

        d.get = g;
      }

      if (hasProperty(desc, 'set')) {
        var s = desc.set;

        if (!isCallable(s) && typeof s !== 'undefined') {
          throw new TypeError('bad set');
        }

        d.set = s;
      }

      if (('get' in d || 'set' in d) && ('value' in d || 'writable' in d)) {
        throw new TypeError('identity-confused descriptor');
      }

      return d;
    }

    if (_typeof(obj) !== 'object' || obj === null) throw new TypeError('bad obj');
    properties = Object(properties);
    var keys = Object.keys(properties);
    var descs = [];

    for (var i = 0; i < keys.length; i++) {
      descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);
    }

    for (var _i = 0; _i < descs.length; _i++) {
      Object.defineProperty(obj, descs[_i][0], descs[_i][1]);
    }

    return obj;
  };
}

var ENV_TYPE = {
  WEAPP: 'WEAPP',
  WEB: 'WEB',
  RN: 'RN',
  SWAN: 'SWAN',
  ALIPAY: 'ALIPAY',
  TT: 'TT',
  QQ: 'QQ',
  JD: 'JD'
};
var _env = null; // 一个taro项目肯定运行同样的环境

function getEnv() {
  if (_env) return _env;

  if (typeof jd !== 'undefined' && jd.getSystemInfo) {
    _env = ENV_TYPE.JD;
    return ENV_TYPE.JD;
  }

  if (typeof qq !== 'undefined' && qq.getSystemInfo) {
    _env = ENV_TYPE.QQ;
    return ENV_TYPE.QQ;
  }

  if (typeof tt !== 'undefined' && tt.getSystemInfo) {
    _env = ENV_TYPE.TT;
    return ENV_TYPE.TT;
  }

  if (typeof wx !== 'undefined' && wx.getSystemInfo) {
    _env = ENV_TYPE.WEAPP;
    return ENV_TYPE.WEAPP;
  }

  if (typeof swan !== 'undefined' && swan.getSystemInfo) {
    _env = ENV_TYPE.SWAN;
    return ENV_TYPE.SWAN;
  }

  if (typeof my !== 'undefined' && my.getSystemInfo) {
    _env = ENV_TYPE.ALIPAY;
    return ENV_TYPE.ALIPAY;
  }

  if (typeof global !== 'undefined' && global.__fbGenNativeModule) {
    _env = ENV_TYPE.RN;
    return ENV_TYPE.RN;
  }

  if (typeof window !== 'undefined') {
    _env = ENV_TYPE.WEB;
    return ENV_TYPE.WEB;
  }

  return 'Unknown environment';
}

function render() {}

var Chain = /*#__PURE__*/function () {
  function Chain(requestParams) {
    var interceptors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, Chain);

    this.index = index;
    this.requestParams = requestParams;
    this.interceptors = interceptors;
  }

  _createClass(Chain, [{
    key: "proceed",
    value: function proceed(requestParams) {
      this.requestParams = requestParams;

      if (this.index >= this.interceptors.length) {
        throw new Error('chain 参数错误, 请勿直接修改 request.chain');
      }

      var nextInterceptor = this._getNextInterceptor();

      var nextChain = this._getNextChain();

      var p = nextInterceptor(nextChain);
      var res = p["catch"](function (err) {
        return Promise.reject(err);
      });
      if (typeof p.abort === 'function') res.abort = p.abort;
      return res;
    }
  }, {
    key: "_getNextInterceptor",
    value: function _getNextInterceptor() {
      return this.interceptors[this.index];
    }
  }, {
    key: "_getNextChain",
    value: function _getNextChain() {
      return new Chain(this.requestParams, this.interceptors, this.index + 1);
    }
  }]);

  return Chain;
}();

var Link = /*#__PURE__*/function () {
  function Link(interceptor) {
    _classCallCheck(this, Link);

    this.taroInterceptor = interceptor;
    this.chain = new Chain();
  }

  _createClass(Link, [{
    key: "request",
    value: function request(requestParams) {
      var _this = this;

      this.chain.interceptors = this.chain.interceptors.filter(function (interceptor) {
        return interceptor !== _this.taroInterceptor;
      });
      this.chain.interceptors.push(this.taroInterceptor);
      return this.chain.proceed(_objectSpread2({}, requestParams));
    }
  }, {
    key: "addInterceptor",
    value: function addInterceptor(interceptor) {
      this.chain.interceptors.push(interceptor);
    }
  }, {
    key: "cleanInterceptors",
    value: function cleanInterceptors() {
      this.chain = new Chain();
    }
  }]);

  return Link;
}();

function timeoutInterceptor(chain) {
  var requestParams = chain.requestParams;
  var p;
  var res = new Promise(function (resolve, reject) {
    var timeout = setTimeout(function () {
      timeout = null;
      reject(new Error('网络链接超时,请稍后再试！'));
    }, requestParams && requestParams.timeout || 60000);
    p = chain.proceed(requestParams);
    p.then(function (res) {
      if (!timeout) return;
      clearTimeout(timeout);
      resolve(res);
    })["catch"](function (err) {
      timeout && clearTimeout(timeout);
      reject(err);
    });
  });
  if (p !== undefined && typeof p.abort === 'function') res.abort = p.abort;
  return res;
}

function logInterceptor(chain) {
  var requestParams = chain.requestParams;
  var method = requestParams.method,
      data = requestParams.data,
      url = requestParams.url; // eslint-disable-next-line no-console

  console.log("http ".concat(method || 'GET', " --> ").concat(url, " data: "), data);
  var p = chain.proceed(requestParams);
  var res = p.then(function (res) {
    // eslint-disable-next-line no-console
    console.log("http <-- ".concat(url, " result:"), res);
    return res;
  });
  if (typeof p.abort === 'function') res.abort = p.abort;
  return res;
}

var interceptors = /*#__PURE__*/Object.freeze({
  __proto__: null,
  timeoutInterceptor: timeoutInterceptor,
  logInterceptor: logInterceptor
});
var onAndSyncApis = {
  onSocketOpen: true,
  onSocketError: true,
  onSocketMessage: true,
  onSocketClose: true,
  onBackgroundAudioPlay: true,
  onBackgroundAudioPause: true,
  onBackgroundAudioStop: true,
  onNetworkStatusChange: true,
  onAccelerometerChange: true,
  onCompassChange: true,
  onBluetoothAdapterStateChange: true,
  onBluetoothDeviceFound: true,
  onBLEConnectionStateChange: true,
  onBLECharacteristicValueChange: true,
  onBeaconUpdate: true,
  onBeaconServiceChange: true,
  onUserCaptureScreen: true,
  onHCEMessage: true,
  onGetWifiList: true,
  onWifiConnected: true,
  onDeviceMotionChange: true,
  setStorageSync: true,
  getStorageSync: true,
  getStorageInfoSync: true,
  removeStorageSync: true,
  clearStorageSync: true,
  getSystemInfoSync: true,
  getExtConfigSync: true,
  getLogManager: true,
  onMemoryWarning: true,
  reportMonitor: true,
  reportAnalytics: true,
  navigateToSmartGameProgram: true,
  // 文件
  getFileSystemManager: true,
  getLaunchOptionsSync: true,
  onPageNotFound: true,
  onError: true,
  onAppShow: true,
  onAppHide: true,
  offPageNotFound: true,
  offError: true,
  offAppShow: true,
  offAppHide: true,
  onAudioInterruptionEnd: true,
  onAudioInterruptionBegin: true,
  onLocationChange: true,
  offLocationChange: true,
  // 基础
  onUnhandledRejection: true,
  offUnhandledRejection: true,
  onThemeChange: true,
  offThemeChange: true,
  // 界面
  onKeyboardHeightChange: true,
  offKeyboardHeightChange: true
};
var noPromiseApis = {
  // 媒体
  stopRecord: true,
  getRecorderManager: true,
  pauseVoice: true,
  stopVoice: true,
  pauseBackgroundAudio: true,
  stopBackgroundAudio: true,
  getBackgroundAudioManager: true,
  createAudioContext: true,
  createInnerAudioContext: true,
  createVideoContext: true,
  createCameraContext: true,
  createLivePlayerContext: true,
  createLivePusherContext: true,
  // 位置
  createMapContext: true,
  // 设备
  canIUse: true,
  startAccelerometer: true,
  stopAccelerometer: true,
  startCompass: true,
  stopCompass: true,
  // 界面
  hideToast: true,
  hideLoading: true,
  showNavigationBarLoading: true,
  hideNavigationBarLoading: true,
  createAnimation: true,
  createSelectorQuery: true,
  createOffscreenCanvas: true,
  createCanvasContext: true,
  // createContext: true,
  drawCanvas: true,
  hideKeyboard: true,
  stopPullDownRefresh: true,
  createIntersectionObserver: true,
  // 菜单
  getMenuButtonBoundingClientRect: true,
  onWindowResize: true,
  offWindowResize: true,
  // 调试
  setEnableDebug: true,
  getRealtimeLogManager: true,
  getLogManager: true,
  // 拓展接口
  arrayBufferToBase64: true,
  base64ToArrayBuffer: true,
  getAccountInfoSync: true,
  getUpdateManager: true,
  createWorker: true,
  // 广告
  createRewardedVideoAd: true,
  createInterstitialAd: true
};
var otherApis = {
  // 网络
  uploadFile: true,
  downloadFile: true,
  connectSocket: true,
  sendSocketMessage: true,
  closeSocket: true,
  // 媒体
  chooseImage: true,
  chooseMessageFile: true,
  previewImage: true,
  getImageInfo: true,
  compressImage: true,
  saveImageToPhotosAlbum: true,
  startRecord: true,
  playVoice: true,
  setInnerAudioOption: true,
  getAvailableAudioSources: true,
  getBackgroundAudioPlayerState: true,
  playBackgroundAudio: true,
  seekBackgroundAudio: true,
  chooseVideo: true,
  saveVideoToPhotosAlbum: true,
  loadFontFace: true,
  // 文件
  saveFile: true,
  getFileInfo: true,
  getSavedFileList: true,
  getSavedFileInfo: true,
  removeSavedFile: true,
  openDocument: true,
  // 数据缓存
  setStorage: true,
  getStorage: true,
  getStorageInfo: true,
  removeStorage: true,
  clearStorage: true,
  // 导航
  navigateBack: true,
  navigateTo: true,
  redirectTo: true,
  switchTab: true,
  reLaunch: true,
  // 位置
  startLocationUpdate: true,
  startLocationUpdateBackground: true,
  stopLocationUpdate: true,
  getLocation: true,
  chooseLocation: true,
  openLocation: true,
  // 设备
  getSystemInfo: true,
  getNetworkType: true,
  makePhoneCall: true,
  scanCode: true,
  setClipboardData: true,
  getClipboardData: true,
  openBluetoothAdapter: true,
  closeBluetoothAdapter: true,
  getBluetoothAdapterState: true,
  startBluetoothDevicesDiscovery: true,
  stopBluetoothDevicesDiscovery: true,
  getBluetoothDevices: true,
  getConnectedBluetoothDevices: true,
  createBLEConnection: true,
  closeBLEConnection: true,
  getBLEDeviceServices: true,
  getBLEDeviceCharacteristics: true,
  readBLECharacteristicValue: true,
  writeBLECharacteristicValue: true,
  notifyBLECharacteristicValueChange: true,
  startBeaconDiscovery: true,
  stopBeaconDiscovery: true,
  getBeacons: true,
  setScreenBrightness: true,
  getScreenBrightness: true,
  setKeepScreenOn: true,
  vibrateLong: true,
  vibrateShort: true,
  addPhoneContact: true,
  getHCEState: true,
  startHCE: true,
  stopHCE: true,
  sendHCEMessage: true,
  startWifi: true,
  stopWifi: true,
  connectWifi: true,
  getWifiList: true,
  setWifiList: true,
  getConnectedWifi: true,
  startDeviceMotionListening: true,
  stopDeviceMotionListening: true,
  // 界面
  pageScrollTo: true,
  showToast: true,
  showLoading: true,
  showModal: true,
  showActionSheet: true,
  setNavigationBarTitle: true,
  setNavigationBarColor: true,
  setTabBarBadge: true,
  removeTabBarBadge: true,
  showTabBarRedDot: true,
  hideTabBarRedDot: true,
  setTabBarStyle: true,
  setTabBarItem: true,
  showTabBar: true,
  hideTabBar: true,
  setTopBarText: true,
  startPullDownRefresh: true,
  canvasToTempFilePath: true,
  canvasGetImageData: true,
  canvasPutImageData: true,
  setBackgroundColor: true,
  setBackgroundTextStyle: true,
  getSelectedTextRange: true,
  hideHomeButton: true,
  // 第三方平台
  getExtConfig: true,
  // 开放接口
  login: true,
  checkSession: true,
  authorize: true,
  getUserInfo: true,
  checkIsSupportFacialRecognition: true,
  startFacialRecognitionVerify: true,
  startFacialRecognitionVerifyAndUploadVideo: true,
  faceVerifyForPay: true,
  requestPayment: true,
  showShareMenu: true,
  hideShareMenu: true,
  updateShareMenu: true,
  getShareInfo: true,
  chooseAddress: true,
  addCard: true,
  openCard: true,
  openSetting: true,
  getSetting: true,
  getWeRunData: true,
  navigateToMiniProgram: true,
  navigateBackMiniProgram: true,
  chooseInvoice: true,
  chooseInvoiceTitle: true,
  checkIsSupportSoterAuthentication: true,
  startSoterAuthentication: true,
  checkIsSoterEnrolledInDevice: true,
  // 订阅消息
  requestSubscribeMessage: true,
  setEnableDebug: true,
  // 支付宝小程序API
  getOpenUserInfo: true,
  // 百度小程序专有 API
  // 百度小程序 AI 相关
  ocrIdCard: true,
  ocrBankCard: true,
  ocrDrivingLicense: true,
  ocrVehicleLicense: true,
  textReview: true,
  textToAudio: true,
  imageAudit: true,
  advancedGeneralIdentify: true,
  objectDetectIdentify: true,
  carClassify: true,
  dishClassify: true,
  logoClassify: true,
  animalClassify: true,
  plantClassify: true,
  setPageInfo: true,
  // 用户信息
  getSwanId: true,
  // 百度收银台支付
  requestPolymerPayment: true,
  // 打开小程序
  navigateToSmartProgram: true,
  navigateBackSmartProgram: true,
  preloadSubPackage: true
};

function initPxTransform(config) {
  var _config$designWidth = config.designWidth,
      designWidth = _config$designWidth === void 0 ? 700 : _config$designWidth,
      _config$deviceRatio = config.deviceRatio,
      deviceRatio = _config$deviceRatio === void 0 ? {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  } : _config$deviceRatio;
  this.config = this.config || {};
  this.config.designWidth = designWidth;
  this.config.deviceRatio = deviceRatio;
}
/* eslint-disable camelcase */


var Taro = {
  Events: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["Events"],
  eventCenter: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["eventCenter"],
  getEnv: getEnv,
  ENV_TYPE: ENV_TYPE,
  render: render,
  noPromiseApis: noPromiseApis,
  onAndSyncApis: onAndSyncApis,
  otherApis: otherApis,
  initPxTransform: initPxTransform,
  Link: Link,
  interceptors: interceptors,
  Current: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["Current"],
  getCurrentInstance: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"],
  useDidShow: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useDidShow"],
  useDidHide: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useDidHide"],
  usePullDownRefresh: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["usePullDownRefresh"],
  useReachBottom: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useReachBottom"],
  usePageScroll: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["usePageScroll"],
  useResize: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useResize"],
  useShareAppMessage: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useShareAppMessage"],
  useTabItemTap: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useTabItemTap"],
  useTitleClick: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useTitleClick"],
  useOptionMenuClick: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useOptionMenuClick"],
  usePullIntercept: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["usePullIntercept"],
  useShareTimeline: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useShareTimeline"],
  useAddToFavorites: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useAddToFavorites"],
  useReady: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useReady"],
  useRouter: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["useRouter"],
  options: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["options"],
  nextTick: _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["nextTick"]
};
/* harmony default export */ __webpack_exports__["default"] = (Taro);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ }),

/***/ "./node_modules/@tarojs/components/mini/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@tarojs/components/mini/index.js ***!
  \*******************************************************/
/*! exports provided: View, Icon, Progress, RichText, Text, Button, Checkbox, CheckboxGroup, Editor, Form, Input, Label, Picker, PickerView, PickerViewColumn, Radio, RadioGroup, Slider, Switch, CoverImage, Textarea, CoverView, MatchMedia, MoveableArea, MoveableView, ScrollView, Swiper, SwiperItem, FunctionalPageNavigator, Navigator, Audio, Camera, Image, LivePlayer, LivePusher, Video, Map, Canvas, Ad, OfficialAccount, OpenData, WebView, NavigationBar, PageMeta, Block, MovableArea, MovableView, Slot */
/*! exports used: Button, View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return View; });
/* unused harmony export Icon */
/* unused harmony export Progress */
/* unused harmony export RichText */
/* unused harmony export Text */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* unused harmony export Checkbox */
/* unused harmony export CheckboxGroup */
/* unused harmony export Editor */
/* unused harmony export Form */
/* unused harmony export Input */
/* unused harmony export Label */
/* unused harmony export Picker */
/* unused harmony export PickerView */
/* unused harmony export PickerViewColumn */
/* unused harmony export Radio */
/* unused harmony export RadioGroup */
/* unused harmony export Slider */
/* unused harmony export Switch */
/* unused harmony export CoverImage */
/* unused harmony export Textarea */
/* unused harmony export CoverView */
/* unused harmony export MatchMedia */
/* unused harmony export MoveableArea */
/* unused harmony export MoveableView */
/* unused harmony export ScrollView */
/* unused harmony export Swiper */
/* unused harmony export SwiperItem */
/* unused harmony export FunctionalPageNavigator */
/* unused harmony export Navigator */
/* unused harmony export Audio */
/* unused harmony export Camera */
/* unused harmony export Image */
/* unused harmony export LivePlayer */
/* unused harmony export LivePusher */
/* unused harmony export Video */
/* unused harmony export Map */
/* unused harmony export Canvas */
/* unused harmony export Ad */
/* unused harmony export OfficialAccount */
/* unused harmony export OpenData */
/* unused harmony export WebView */
/* unused harmony export NavigationBar */
/* unused harmony export PageMeta */
/* unused harmony export Block */
/* unused harmony export MovableArea */
/* unused harmony export MovableView */
/* unused harmony export Slot */
var View = 'view';
var Icon = 'icon';
var Progress = 'progress';
var RichText = 'rich-text';
var Text = 'text';
var Button = 'button';
var Checkbox = 'checkbox';
var CheckboxGroup = 'checkbox-group';
var Editor = 'editor';
var Form = 'form';
var Input = 'input';
var Label = 'label';
var Picker = 'picker';
var PickerView = 'picker-view';
var PickerViewColumn = 'picker-view-column';
var Radio = 'radio';
var RadioGroup = 'radio-group';
var Slider = 'slider';
var Switch = 'switch';
var CoverImage = 'cover-image';
var Textarea = 'textarea';
var CoverView = 'cover-view';
var MatchMedia = 'match-media';
var MoveableArea = 'moveable-area';
var MoveableView = 'moveable-view';
var ScrollView = 'scroll-view';
var Swiper = 'swiper';
var SwiperItem = 'swiper-item';
var FunctionalPageNavigator = 'functional-page-navigator';
var Navigator = 'navigator';
var Audio = 'audio';
var Camera = 'camera';
var Image = 'image';
var LivePlayer = 'live-player';
var LivePusher = 'live-pusher';
var Video = 'video';
var Map = 'map';
var Canvas = 'canvas';
var Ad = 'ad';
var OfficialAccount = 'official-account';
var OpenData = 'open-data';
var WebView = 'web-view';
var NavigationBar = 'navigation-bar';
var PageMeta = 'page-meta';
var Block = 'block';
var MovableArea = 'movable-area';
var MovableView = 'movable-view';
var Slot = 'slot';

/***/ }),

/***/ "./node_modules/@tarojs/mini-runner/dist/template/comp.js":
/*!****************************************************************!*\
  !*** ./node_modules/@tarojs/mini-runner/dist/template/comp.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-undef */

var runtime_1 = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js"); // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore


Component(runtime_1.createRecursiveComponentConfig());

/***/ }),

/***/ "./node_modules/@tarojs/react/dist/react.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/@tarojs/react/dist/react.esm.js ***!
  \******************************************************/
/*! exports provided: default, createPortal, findDOMNode, render, unmountComponentAtNode, unstable_batchedUpdates */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createPortal */
/* unused harmony export findDOMNode */
/* unused harmony export render */
/* unused harmony export unmountComponentAtNode */
/* unused harmony export unstable_batchedUpdates */
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var react_reconciler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reconciler */ "./node_modules/react-reconciler/cjs/react-reconciler.production.min.js");
/* harmony import */ var react_reconciler__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reconciler__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var scheduler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! scheduler */ "./node_modules/scheduler/cjs/scheduler.production.min.js");
/* harmony import */ var scheduler__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(scheduler__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js");







function isString(o) {
  return typeof o === 'string';
}

function isObject(o) {
  return o !== null && Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(o) === 'object';
}

function isFunction(o) {
  return typeof o === 'function';
}

function isNumber(o) {
  return typeof o === 'number';
}

function selectEnv(options) {
  var option;

  if (false) {} else if (false) {} else if (false) {} else if (true) {
    option = options.swan;
  } else {}

  return option || options.default || Object.create(null);
}

var touchEvents = {
  bindTouchStart: '',
  bindTouchMove: '',
  bindTouchEnd: '',
  bindTouchCancel: '',
  bindLongTap: ''
};

function singleQuote(s) {
  return "'".concat(s, "'");
}

var View = Object.assign({
  'hover-class': singleQuote('none'),
  'hover-stop-propagation': 'false',
  'hover-start-time': '50',
  'hover-stay-time': '400',
  animation: '',
  bindAnimationStart: '',
  bindAnimationIteration: '',
  bindAnimationEnd: '',
  bindTransitionEnd: ''
}, touchEvents);
var Icon = {
  type: '',
  size: '23',
  color: ''
};
var Map$1 = Object.assign({
  longitude: '',
  latitude: '',
  scale: '16',
  markers: '[]',
  covers: '',
  polyline: '[]',
  circles: '[]',
  controls: '',
  'include-points': '[]',
  'show-location': '',
  polygons: '',
  subkey: '',
  'layer-style': '1',
  rotate: '0',
  skew: 'skew',
  'enable-3D': 'false',
  'show-compass': 'false',
  'show-scale': 'false',
  'enable-overlooking': 'false',
  'enable-zoom': 'true',
  'enable-scroll': 'true',
  'enable-rotate': 'false',
  'enable-satellite': 'false',
  'enable-traffic': 'false',
  setting: '[]',
  bindMarkerTap: '',
  bindLabelTap: '',
  bindControlTap: '',
  bindCalloutTap: '',
  bindUpdated: '',
  bindRegionChange: '',
  bindPoiTap: ''
}, touchEvents);
var Progress = {
  percent: '',
  'show-info': 'false',
  'border-radius': '0',
  'font-size': '16',
  'stroke-width': '6',
  color: singleQuote('#09BB07'),
  activeColor: singleQuote('#09BB07'),
  backgroundColor: singleQuote('#EBEBEB'),
  active: 'false',
  'active-mode': singleQuote('backwards'),
  duration: '30',
  bindActiveEnd: ''
};
var RichText = {
  nodes: '[]',
  space: ''
};
var Text = {
  selectable: 'false',
  space: '',
  decode: 'false'
};
var Button = Object.assign({
  size: singleQuote('default'),
  type: '',
  plain: 'false',
  disabled: '',
  loading: 'false',
  'form-type': '',
  'open-type': '',
  'hover-class': singleQuote('button-hover'),
  'hover-stop-propagation': 'false',
  'hover-start-time': '20',
  'hover-stay-time': '70',
  lang: 'en',
  'session-from': '',
  'send-message-title': '',
  'send-message-path': '',
  'send-message-img': '',
  'app-parameter': '',
  'show-message-card': 'false',
  bindGetUserInfo: '',
  bindGetAuthorize: '',
  bindContact: '',
  bindGetPhoneNumber: '',
  bindError: '',
  bindOpenSetting: '',
  bindLaunchApp: '',
  scope: '',
  name: ''
}, selectEnv({
  qq: {
    'app-packagename': '',
    'app-bundleid': '',
    'app-connect-id': ''
  }
}));
var Checkbox = {
  value: '',
  disabled: '',
  checked: 'false',
  color: singleQuote('#09BB07'),
  name: ''
};
var CheckboxGroup = {
  bindChange: '',
  name: ''
};
var Editor = {
  'read-only': 'false',
  placeholder: '',
  'show-img-size': 'false',
  'show-img-toolbar': 'false',
  'show-img-resize': 'false',
  focus: 'false',
  bindReady: '',
  bindFocus: '',
  bindBlur: '',
  bindInput: '',
  bindStatusChange: '',
  name: ''
};
var Form = {
  'report-submit': 'false',
  'report-submit-timeout': '0',
  bindSubmit: '',
  bindReset: '',
  name: ''
};
var Input = Object.assign({
  value: '',
  type: singleQuote(''),
  password: 'false',
  placeholder: '',
  'placeholder-style': '',
  'placeholder-class': singleQuote('input-placeholder'),
  disabled: '',
  maxlength: '140',
  'cursor-spacing': '0',
  'auto-focus': 'false',
  focus: 'false',
  'confirm-type': singleQuote('done'),
  'confirm-hold': 'false',
  cursor: 'i.value.length',
  'selection-start': '-1',
  'selection-end': '-1',
  'adjust-position': 'true',
  'hold-keyboard': 'false',
  bindInput: '',
  bindFocus: '',
  bindBlur: '',
  bindConfirm: '',
  bindKeyboardHeightChange: '',
  name: ''
}, selectEnv({
  alipay: {
    'random-number': 'false',
    controlled: 'false'
  },
  weapp: {
    'always-embed': 'false'
  }
}));
var Label = {
  for: '',
  name: ''
};
var Picker = {
  mode: singleQuote('selector'),
  disabled: '',
  bindCancel: '',
  range: '',
  'range-key': '',
  value: '',
  bindChange: '',
  bindColumnChange: '',
  start: '',
  end: '',
  fields: singleQuote('day'),
  'custom-item': '',
  name: ''
};
var PickerView = {
  value: '',
  'indicator-style': '',
  'indicator-class': '',
  'mask-style': '',
  'mask-class': '',
  bindChange: '',
  bindPickStart: '',
  bindPickEnd: '',
  name: ''
};
var PickerViewColumn = {
  name: ''
};
var Radio = {
  value: '',
  checked: 'false',
  disabled: '',
  color: singleQuote('#09BB07'),
  name: ''
};
var RadioGroup = {
  bindChange: '',
  name: ''
};
var Slider = {
  min: '0',
  max: '100',
  step: '1',
  disabled: '',
  value: '0',
  color: singleQuote('#e9e9e9'),
  'selected-color': singleQuote('#1aad19'),
  activeColor: singleQuote('#1aad19'),
  backgroundColor: singleQuote('#e9e9e9'),
  'block-size': '28',
  'block-color': singleQuote('#ffffff'),
  'show-value': 'false',
  bindChange: '',
  bindChanging: '',
  name: ''
};
var Switch = {
  checked: 'false',
  disabled: '',
  type: singleQuote('switch'),
  color: singleQuote('#04BE02'),
  bindChange: '',
  name: ''
};
var CoverImage = {
  src: '',
  bindLoad: 'eh',
  bindError: 'eh'
};
var Textarea = {
  value: '',
  placeholder: '',
  'placeholder-style': '',
  'placeholder-class': singleQuote('textarea-placeholder'),
  disabled: '',
  maxlength: '140',
  'auto-focus': 'false',
  focus: 'false',
  'auto-height': 'false',
  fixed: 'false',
  'cursor-spacing': '0',
  cursor: '-1',
  'show-confirm-bar': 'true',
  'selection-start': '-1',
  'selection-end': '-1',
  'adjust-position': 'true',
  'hold-keyboard': 'false',
  bindFocus: '',
  bindBlur: '',
  bindLineChange: '',
  bindInput: '',
  bindConfirm: '',
  bindKeyboardHeightChange: '',
  name: ''
};
var CoverView = Object.assign({
  'scroll-top': 'false'
}, touchEvents);
var MatchMedia = {
  'min-width': '',
  'max-width': '',
  width: '',
  'min-height': '',
  'max-height': '',
  height: '',
  orientation: ''
};
var MovableArea = {
  'scale-area': 'false'
};
var MovableView = Object.assign({
  direction: 'none',
  inertia: 'false',
  'out-of-bounds': 'false',
  x: '',
  y: '',
  damping: '20',
  friction: '2',
  disabled: '',
  scale: 'false',
  'scale-min': '0.5',
  'scale-max': '10',
  'scale-value': '1',
  animation: 'true',
  bindAnimationEnd: '',
  bindChange: '',
  bindScale: '',
  htouchmove: '',
  vtouchmove: '',
  width: singleQuote('10px'),
  height: singleQuote('10px')
}, touchEvents);
var ScrollView = Object.assign({
  'scroll-x': 'false',
  'scroll-y': 'false',
  'upper-threshold': '50',
  'lower-threshold': '50',
  'scroll-top': '',
  'scroll-left': '',
  'scroll-into-view': '',
  'scroll-with-animation': 'false',
  'enable-back-to-top': 'false',
  'enable-flex': 'false',
  'scroll-anchoring': 'false',
  'refresher-enabled': 'false',
  'refresher-threshold': '45',
  'refresher-default-style': singleQuote('black'),
  'refresher-background': singleQuote('#FFF'),
  'refresher-triggered': 'false',
  enhanced: 'false',
  bounces: 'true',
  'show-scrollbar': 'true',
  'paging-enabled': 'false',
  'fast-deceleration': 'false',
  bindRefresherPulling: '',
  bindRefresherRefresh: '',
  bindRefresherRestore: '',
  bindRefresherAbort: '',
  bindScrollToUpper: '',
  bindScrollToLower: '',
  bindScroll: '',
  animation: '',
  bindTransitionEnd: '',
  bindAnimationStart: '',
  bindAnimationIteration: '',
  bindAnimationEnd: '',
  bindDragStart: '',
  bindDragging: '',
  bindDragEnd: ''
}, touchEvents);
var Swiper = Object.assign({
  'indicator-dots': 'false',
  'indicator-color': singleQuote('rgba(0, 0, 0, .3)'),
  'indicator-active-color': singleQuote('#000000'),
  autoplay: 'false',
  current: '0',
  interval: '5000',
  duration: '500',
  circular: 'false',
  vertical: 'false',
  'previous-margin': '\'0px\'',
  'next-margin': '\'0px\'',
  'snap-to-edge': 'false',
  'display-multiple-items': '1',
  'skip-hidden-item-layout': 'false',
  'easing-function': singleQuote('default'),
  bindChange: '',
  bindTransition: '',
  bindAnimationFinish: ''
}, touchEvents);
var SwiperItem = {
  'item-id': ''
};
var FunctionalPageNavigator = {
  version: singleQuote('release'),
  name: '',
  args: '',
  bindSuccess: '',
  bindFail: '',
  bindCancel: ''
};
var Navigator = {
  target: singleQuote('self'),
  url: '',
  'open-type': singleQuote('navigate'),
  delta: '1',
  'app-id': '',
  path: '',
  'extra-data': '',
  version: singleQuote('version'),
  'hover-class': singleQuote('navigator-hover'),
  'hover-stop-propagation': 'false',
  'hover-start-time': '50',
  'hover-stay-time': '600',
  bindSuccess: '',
  bindFail: '',
  bindComplete: ''
};
var Audio = {
  id: '',
  src: '',
  loop: 'false',
  controls: 'false',
  poster: '',
  name: '',
  author: '',
  bindError: '',
  bindPlay: '',
  bindPause: '',
  bindTimeUpdate: '',
  bindEnded: ''
};
var Camera = {
  mode: singleQuote('normal'),
  'device-position': singleQuote('back'),
  flash: singleQuote('auto'),
  'frame-size': singleQuote('medium'),
  bindStop: '',
  bindError: '',
  bindInitDone: '',
  bindScanCode: ''
};
var Image = Object.assign({
  src: '',
  mode: singleQuote('scaleToFill'),
  webp: 'false',
  'lazy-load': 'false',
  'show-menu-by-longpress': 'false',
  bindError: '',
  bindLoad: ''
}, touchEvents);
var LivePlayer = {
  src: '',
  mode: singleQuote('live'),
  autoplay: 'false',
  muted: 'false',
  orientation: singleQuote('vertical'),
  'object-fit': singleQuote('contain'),
  'background-mute': 'false',
  'min-cache': '1',
  'max-cache': '3',
  'sound-mode': singleQuote('speaker'),
  'auto-pause-if-navigate': 'true',
  'auto-pause-if-open-native': 'true',
  'picture-in-picture-mode': '[]',
  animation: '',
  bindStateChange: '',
  bindFullScreenChange: '',
  bindNetStatus: '',
  bindAudioVolumeNotify: '',
  bindEnterPictureInPicture: '',
  bindLeavePictureInPicture: ''
};
var LivePusher = {
  url: '',
  mode: singleQuote('RTC'),
  autopush: 'false',
  muted: 'false',
  'enable-camera': 'true',
  'auto-focus': 'true',
  orientation: singleQuote('vertical'),
  beauty: '0',
  whiteness: '0',
  aspect: singleQuote('9:16'),
  'min-bitrate': '200',
  'max-bitrate': '1000',
  'audio-quality': singleQuote('high'),
  'waiting-image': '',
  'waiting-image-hash': '',
  zoom: 'false',
  'device-position': singleQuote('front'),
  'background-mute': 'false',
  mirror: 'false',
  'remote-mirror': 'false',
  'local-mirror': 'false',
  'audio-reverb-type': '0',
  'enable-mic': 'true',
  'enable-agc': 'false',
  'enable-ans': 'false',
  'audio-volume-type': singleQuote('voicecall'),
  'video-width': '360',
  'video-height': '640',
  animation: '',
  bindStateChange: '',
  bindNetStatus: '',
  bindBgmStart: '',
  bindBgmProgress: '',
  bindBgmComplete: ''
};
var Video = {
  src: '',
  duration: '',
  controls: 'true',
  'danmu-list': '',
  'danmu-btn': '',
  'enable-danmu': '',
  autoplay: 'false',
  loop: 'false',
  muted: 'false',
  'initial-time': '0',
  'page-gesture': 'false',
  direction: '',
  'show-progress': 'true',
  'show-fullscreen-btn': 'true',
  'show-play-btn': 'true',
  'show-center-play-btn': 'true',
  'enable-progress-gesture': 'true',
  'object-fit': singleQuote('contain'),
  poster: '',
  'show-mute-btn': 'false',
  title: '',
  'play-btn-position': singleQuote('bottom'),
  'enable-play-gesture': 'false',
  'auto-pause-if-navigate': 'true',
  'auto-pause-if-open-native': 'true',
  'vslide-gesture': 'false',
  'vslide-gesture-in-fullscreen': 'true',
  'ad-unit-id': '',
  'poster-for-crawler': '',
  'show-casting-button': 'false',
  'picture-in-picture-mode': '[]',
  // picture-in-picture-show-progress 属性先注释掉的原因如下：
  // 该属性超过了 wxml 属性的长度限制，实际无法使用且导致编译报错。可等微信官方修复后再放开。
  // 参考1：https://developers.weixin.qq.com/community/develop/doc/000a429beb87f0eac07acc0fc5b400
  // 参考2: https://developers.weixin.qq.com/community/develop/doc/0006883619c48054286a4308258c00?_at=vyxqpllafi
  // 'picture-in-picture-show-progress': 'false',
  'enable-auto-rotation': 'false',
  'show-screen-lock-button': 'false',
  animation: '',
  bindPlay: '',
  bindPause: '',
  bindEnded: '',
  bindTimeUpdate: '',
  bindFullScreenChange: '',
  bindWaiting: '',
  bindError: '',
  bindProgress: '',
  bindLoadedMetadata: '',
  bindControlsToggle: '',
  bindEnterPictureInPicture: '',
  bindLeavePictureInPicture: '',
  bindSeekComplete: ''
};
var Canvas = {
  type: '',
  'canvas-id': '',
  'disable-scroll': 'false',
  bindTouchStart: '',
  bindTouchMove: '',
  bindTouchEnd: '',
  bindTouchCancel: '',
  bindLongtap: '',
  bindError: ''
};
var Ad = {
  'unit-id': '',
  'ad-intervals': '',
  'ad-type': singleQuote('banner'),
  'ad-theme': singleQuote('white'),
  bindLoad: '',
  bindError: '',
  bindClose: ''
};
var OfficialAccount = {
  bindLoad: '',
  bindError: ''
};
var OpenData = {
  type: '',
  'open-gid': '',
  lang: singleQuote('en'),
  'default-text': '',
  'default-avatar': '',
  bindError: ''
};
var WebView = {
  src: '',
  bindMessage: '',
  bindLoad: ''
};
var NavigationBar = {
  title: '',
  loading: 'false',
  'front-color': '',
  'background-color': '',
  'color-animation-duration': '0',
  'color-animation-timing-func': singleQuote('linear')
};
var PageMeta = {
  'background-text-style': '',
  'background-color': '',
  'background-color-top': '',
  'background-color-bottom': '',
  'scroll-top': singleQuote(''),
  'scroll-duration': '300',
  'page-style': singleQuote(''),
  'root-font-size': singleQuote(''),
  bindResize: '',
  bindScroll: '',
  bindScrollDone: ''
};
var Block = {}; // For Vue，因为 slot 标签被 vue 占用了

var SlotView = {
  name: ''
}; // For React
// Slot 和 SlotView 最终都会编译成 <view slot={{ i.name }} />
// 因为 <slot name="{{ i.name }}" /> 适用性没有前者高（无法添加类和样式）
// 不给 View 直接加 slot 属性的原因是性能损耗

var Slot = {
  name: ''
};
var internalComponents = {
  View: View,
  Icon: Icon,
  Progress: Progress,
  RichText: RichText,
  Text: Text,
  Button: Button,
  Checkbox: Checkbox,
  CheckboxGroup: CheckboxGroup,
  Editor: Editor,
  Form: Form,
  Input: Input,
  Label: Label,
  Picker: Picker,
  PickerView: PickerView,
  PickerViewColumn: PickerViewColumn,
  Radio: Radio,
  RadioGroup: RadioGroup,
  Slider: Slider,
  Switch: Switch,
  CoverImage: CoverImage,
  Textarea: Textarea,
  CoverView: CoverView,
  MatchMedia: MatchMedia,
  MovableArea: MovableArea,
  MovableView: MovableView,
  ScrollView: ScrollView,
  Swiper: Swiper,
  SwiperItem: SwiperItem,
  FunctionalPageNavigator: FunctionalPageNavigator,
  Navigator: Navigator,
  Audio: Audio,
  Camera: Camera,
  Image: Image,
  LivePlayer: LivePlayer,
  LivePusher: LivePusher,
  Video: Video,
  Canvas: Canvas,
  Ad: Ad,
  OfficialAccount: OfficialAccount,
  OpenData: OpenData,
  WebView: WebView,
  NavigationBar: NavigationBar,
  PageMeta: PageMeta,
  Block: Block,
  Map: Map$1,
  Slot: Slot,
  SlotView: SlotView
};
var EMPTY_ARR = [];

var noop = function noop() {};

function toCamelCase(s) {
  var camel = '';
  var nextCap = false;

  for (var i = 0; i < s.length; i++) {
    if (s[i] !== '-') {
      camel += nextCap ? s[i].toUpperCase() : s[i];
      nextCap = false;
    } else {
      nextCap = true;
    }
  }

  return camel;
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

var reportIssue = '如有疑问，请提交 issue 至：https://github.com/nervjs/taro/issues';
/**
 * ensure takes a condition and throw a error if the condition fails,
 * like failure::ensure: https://docs.rs/failure/0.1.1/failure/macro.ensure.html
 * @param condition condition.
 * @param msg error message.
 */

function ensure(condition, msg) {
  if (!condition) {
    throw new Error(msg + '\n' + reportIssue);
  }
}

function isEventName(s) {
  return s[0] === 'o' && s[1] === 'n';
}

var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

function updateProps(dom, oldProps, newProps) {
  var i;

  for (i in oldProps) {
    if (!(i in newProps)) {
      setProperty(dom, i, null, oldProps[i]);
    }
  }

  var isFormElement = dom instanceof _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["FormElement"];

  for (i in newProps) {
    if (oldProps[i] !== newProps[i] || isFormElement && i === 'value') {
      setProperty(dom, i, newProps[i], oldProps[i]);
    }
  }
}

function eventProxy(e) {
  var el = _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["document"].getElementById(e.currentTarget.id);
  var handlers = el.__handlers[e.type];
  handlers[0](e);
}

function setEvent(dom, name, value, oldValue) {
  var isCapture = name.endsWith('Capture');
  var eventName = name.toLowerCase().slice(2);

  if (isCapture) {
    eventName = eventName.slice(0, -7);
  }

  var compName = capitalize(toCamelCase(dom.tagName.toLowerCase()));

  if (eventName === 'click' && compName in internalComponents) {
    eventName = 'tap';
  }

  if (isFunction(value)) {
    if (!oldValue) {
      dom.addEventListener(eventName, eventProxy, isCapture);
    }

    dom.__handlers[eventName][0] = value;
  } else {
    dom.removeEventListener(eventName, eventProxy);
  }
}

function setStyle(style, key, value) {
  if (key[0] === '-') {
    style.setProperty(key, value.toString());
  }

  style[key] = isNumber(value) && IS_NON_DIMENSIONAL.test(key) === false ? value + 'px' : value == null ? '' : value;
}

function setProperty(dom, name, value, oldValue) {
  var _a, _b, _c, _d;

  name = name === 'className' ? 'class' : name;
  if (name === 'key' || name === 'children' || name === 'ref') ;else if (name === 'style') {
    var style = dom.style;

    if (isString(value)) {
      style.cssText = value;
    } else {
      if (isString(oldValue)) {
        style.cssText = '';
        oldValue = null;
      }

      if (isObject(oldValue)) {
        for (var i in oldValue) {
          if (!(value && i in value)) {
            setStyle(style, i, '');
          }
        }
      }

      if (isObject(value)) {
        for (var _i in value) {
          if (!oldValue || value[_i] !== oldValue[_i]) {
            setStyle(style, _i, value[_i]);
          }
        }
      }
    }
  } else if (isEventName(name)) {
    setEvent(dom, name, value, oldValue);
  } else if (name === 'dangerouslySetInnerHTML') {
    var newHtml = (_b = (_a = value) === null || _a === void 0 ? void 0 : _a.__html) !== null && _b !== void 0 ? _b : '';
    var oldHtml = (_d = (_c = oldValue) === null || _c === void 0 ? void 0 : _c.__html) !== null && _d !== void 0 ? _d : '';

    if (newHtml || oldHtml) {
      if (oldHtml !== newHtml) {
        dom.innerHTML = newHtml;
      }
    }
  } else if (!isFunction(value)) {
    if (value == null) {
      dom.removeAttribute(name);
    } else {
      dom.setAttribute(name, value);
    }
  }
}
/* eslint-disable @typescript-eslint/indent */


var scheduleDeferredCallback = scheduler__WEBPACK_IMPORTED_MODULE_4__["unstable_scheduleCallback"],
    cancelDeferredCallback = scheduler__WEBPACK_IMPORTED_MODULE_4__["unstable_cancelCallback"],
    now = scheduler__WEBPACK_IMPORTED_MODULE_4__["unstable_now"];

function returnFalse() {
  return false;
}

var hostConfig = {
  createInstance: function createInstance(type) {
    return _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["document"].createElement(type);
  },
  createTextInstance: function createTextInstance(text) {
    return _tarojs_runtime__WEBPACK_IMPORTED_MODULE_5__["document"].createTextNode(text);
  },
  getPublicInstance: function getPublicInstance(inst) {
    return inst;
  },
  getRootHostContext: function getRootHostContext() {
    return {};
  },
  getChildHostContext: function getChildHostContext() {
    return {};
  },
  appendChild: function appendChild(parent, child) {
    parent.appendChild(child);
  },
  appendInitialChild: function appendInitialChild(parent, child) {
    parent.appendChild(child);
  },
  appendChildToContainer: function appendChildToContainer(parent, child) {
    parent.appendChild(child);
  },
  removeChild: function removeChild(parent, child) {
    parent.removeChild(child);
  },
  removeChildFromContainer: function removeChildFromContainer(parent, child) {
    parent.removeChild(child);
  },
  insertBefore: function insertBefore(parent, child, refChild) {
    parent.insertBefore(child, refChild);
  },
  insertInContainerBefore: function insertInContainerBefore(parent, child, refChild) {
    parent.insertBefore(child, refChild);
  },
  commitTextUpdate: function commitTextUpdate(textInst, _, newText) {
    textInst.nodeValue = newText;
  },
  finalizeInitialChildren: function finalizeInitialChildren(dom, _, props) {
    updateProps(dom, {}, props);
    return false;
  },
  prepareUpdate: function prepareUpdate() {
    return EMPTY_ARR;
  },
  commitUpdate: function commitUpdate(dom, _payload, _type, oldProps, newProps) {
    updateProps(dom, oldProps, newProps);
  },
  hideInstance: function hideInstance(instance) {
    var style = instance.style;
    style.setProperty('display', 'none');
  },
  unhideInstance: function unhideInstance(instance, props) {
    var styleProp = props.style;
    var display = (styleProp === null || styleProp === void 0 ? void 0 : styleProp.hasOwnProperty('display')) ? styleProp.display : null;
    display = display == null || typeof display === 'boolean' || display === '' ? '' : ('' + display).trim(); // eslint-disable-next-line dot-notation

    instance.style['display'] = display;
  },
  shouldSetTextContent: returnFalse,
  shouldDeprioritizeSubtree: returnFalse,
  prepareForCommit: noop,
  resetAfterCommit: noop,
  commitMount: noop,
  now: now,
  scheduleDeferredCallback: scheduleDeferredCallback,
  cancelDeferredCallback: cancelDeferredCallback,
  clearTimeout: clearTimeout,
  setTimeout: setTimeout,
  noTimeout: -1,
  supportsMutation: true,
  supportsPersistence: false,
  isPrimaryRenderer: true,
  supportsHydration: false
};
var TaroReconciler = react_reconciler__WEBPACK_IMPORTED_MODULE_3___default()(hostConfig);
var ContainerMap = new WeakMap();

var Root = /*#__PURE__*/function () {
  function Root(renderer, domContainer) {
    Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(this, Root);

    this.renderer = renderer;
    this.internalRoot = renderer.createContainer(domContainer, false, false);
  }

  Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(Root, [{
    key: "render",
    value: function render(children, cb) {
      this.renderer.updateContainer(children, this.internalRoot, null, cb);
      return this.renderer.getPublicRootInstance(this.internalRoot);
    }
  }, {
    key: "unmount",
    value: function unmount(cb) {
      this.renderer.updateContainer(null, this.internalRoot, null, cb);
    }
  }]);

  return Root;
}();

function render(element, domContainer, cb) {
  var oldRoot = ContainerMap.get(domContainer);

  if (oldRoot != null) {
    return oldRoot.render(element, cb);
  }

  var root = new Root(TaroReconciler, domContainer);
  ContainerMap.set(domContainer, root);
  return root.render(element, cb);
}
/* eslint-disable @typescript-eslint/no-unused-vars */


var unstable_batchedUpdates = TaroReconciler.batchedUpdates;

function unmountComponentAtNode(dom) {
  ensure(dom && [1, 8, 9, 11].includes(dom.nodeType), 'unmountComponentAtNode(...): Target container is not a DOM element.');
  var root = ContainerMap.get(dom);
  if (!root) return false;
  unstable_batchedUpdates(function () {
    root.unmount(function () {
      ContainerMap.delete(dom);
    });
  });
  return true;
}

function findDOMNode(comp) {
  if (comp == null) {
    return null;
  }

  var nodeType = comp.nodeType;

  if (nodeType === 1 || nodeType === 3) {
    return comp;
  }

  return TaroReconciler.findHostInstance(comp);
}

var portalType = typeof Symbol === 'function' && Symbol.for ? Symbol.for('react.portal') : 0xeaca;

function createPortal(children, containerInfo, key) {
  return {
    $$typeof: portalType,
    key: key == null ? null : String(key),
    children: children,
    containerInfo: containerInfo,
    implementation: null
  };
}

var index = {
  render: render,
  unstable_batchedUpdates: unstable_batchedUpdates,
  unmountComponentAtNode: unmountComponentAtNode,
  findDOMNode: findDOMNode,
  createPortal: createPortal
};
/* harmony default export */ __webpack_exports__["a"] = (index);


/***/ }),

/***/ "./node_modules/@tarojs/runtime/dist/runtime.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/@tarojs/runtime/dist/runtime.esm.js ***!
  \**********************************************************/
/*! exports provided: Current, CurrentReconciler, Events, FormElement, Style, TaroElement, TaroEvent, TaroNode, TaroRootElement, TaroText, cancelAnimationFrame, connectReactPage, connectVuePage, createComponentConfig, createDocument, createEvent, createPageConfig, createReactApp, createRecursiveComponentConfig, createVue3App, createVueApp, document, eventCenter, getComputedStyle, getCurrentInstance, hydrate, injectPageInstance, navigator, nextTick, now, options, requestAnimationFrame, stringify, useAddToFavorites, useDidHide, useDidShow, useOptionMenuClick, usePageScroll, usePullDownRefresh, usePullIntercept, useReachBottom, useReady, useResize, useRouter, useScope, useShareAppMessage, useShareTimeline, useTabItemTap, useTitleClick, window */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(document, window, requestAnimationFrame, cancelAnimationFrame) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Current", function() { return Current; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentReconciler", function() { return CurrentReconciler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormElement", function() { return FormElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return Style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroElement", function() { return TaroElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroEvent", function() { return TaroEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroNode", function() { return TaroNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroRootElement", function() { return TaroRootElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaroText", function() { return TaroText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelAnimationFrame", function() { return caf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectReactPage", function() { return connectReactPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connectVuePage", function() { return connectVuePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createComponentConfig", function() { return createComponentConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDocument", function() { return createDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEvent", function() { return createEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPageConfig", function() { return createPageConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReactApp", function() { return createReactApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRecursiveComponentConfig", function() { return createRecursiveComponentConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVue3App", function() { return createVue3App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVueApp", function() { return createVueApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return document$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eventCenter", function() { return eventCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComputedStyle", function() { return getComputedStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentInstance", function() { return getCurrentInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hydrate", function() { return hydrate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injectPageInstance", function() { return injectPageInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigator", function() { return navigator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return nextTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "now", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestAnimationFrame", function() { return raf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAddToFavorites", function() { return useAddToFavorites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDidHide", function() { return useDidHide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDidShow", function() { return useDidShow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOptionMenuClick", function() { return useOptionMenuClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePageScroll", function() { return usePageScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePullDownRefresh", function() { return usePullDownRefresh; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePullIntercept", function() { return usePullIntercept; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReachBottom", function() { return useReachBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReady", function() { return useReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useResize", function() { return useResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouter", function() { return useRouter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScope", function() { return useScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useShareAppMessage", function() { return useShareAppMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useShareTimeline", function() { return useShareTimeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTabItemTap", function() { return useTabItemTap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTitleClick", function() { return useTitleClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return window$1; });
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_set__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/set */ "./node_modules/@babel/runtime/helpers/esm/set.js");
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ "./node_modules/@babel/runtime/helpers/esm/get.js");
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js");
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");














function isString(o) {
  return typeof o === 'string';
}

function isUndefined(o) {
  return typeof o === 'undefined';
}

function isObject(o) {
  return o !== null && Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(o) === 'object';
}

function isBoolean(o) {
  return o === true || o === false;
}

function isFunction(o) {
  return typeof o === 'function';
}

function isNumber(o) {
  return typeof o === 'number';
}

function isBooleanStringLiteral(o) {
  return o === 'true' || o === 'false';
}

var isArray = Array.isArray;

function selectEnv(options) {
  var option;

  if (false) {} else if (false) {} else if (false) {} else if (true) {
    option = options.swan;
  } else {}

  return option || options.default || Object.create(null);
}

var touchEvents = {
  bindTouchStart: '',
  bindTouchMove: '',
  bindTouchEnd: '',
  bindTouchCancel: '',
  bindLongTap: ''
};

function singleQuote(s) {
  return "'".concat(s, "'");
}

var View = Object.assign({
  'hover-class': singleQuote('none'),
  'hover-stop-propagation': 'false',
  'hover-start-time': '50',
  'hover-stay-time': '400',
  animation: '',
  bindAnimationStart: '',
  bindAnimationIteration: '',
  bindAnimationEnd: '',
  bindTransitionEnd: ''
}, touchEvents);
var Icon = {
  type: '',
  size: '23',
  color: ''
};
var Map$1 = Object.assign({
  longitude: '',
  latitude: '',
  scale: '16',
  markers: '[]',
  covers: '',
  polyline: '[]',
  circles: '[]',
  controls: '',
  'include-points': '[]',
  'show-location': '',
  polygons: '',
  subkey: '',
  'layer-style': '1',
  rotate: '0',
  skew: 'skew',
  'enable-3D': 'false',
  'show-compass': 'false',
  'show-scale': 'false',
  'enable-overlooking': 'false',
  'enable-zoom': 'true',
  'enable-scroll': 'true',
  'enable-rotate': 'false',
  'enable-satellite': 'false',
  'enable-traffic': 'false',
  setting: '[]',
  bindMarkerTap: '',
  bindLabelTap: '',
  bindControlTap: '',
  bindCalloutTap: '',
  bindUpdated: '',
  bindRegionChange: '',
  bindPoiTap: ''
}, touchEvents);
var Progress = {
  percent: '',
  'show-info': 'false',
  'border-radius': '0',
  'font-size': '16',
  'stroke-width': '6',
  color: singleQuote('#09BB07'),
  activeColor: singleQuote('#09BB07'),
  backgroundColor: singleQuote('#EBEBEB'),
  active: 'false',
  'active-mode': singleQuote('backwards'),
  duration: '30',
  bindActiveEnd: ''
};
var RichText = {
  nodes: '[]',
  space: ''
};
var Text = {
  selectable: 'false',
  space: '',
  decode: 'false'
};
var Button = Object.assign({
  size: singleQuote('default'),
  type: '',
  plain: 'false',
  disabled: '',
  loading: 'false',
  'form-type': '',
  'open-type': '',
  'hover-class': singleQuote('button-hover'),
  'hover-stop-propagation': 'false',
  'hover-start-time': '20',
  'hover-stay-time': '70',
  lang: 'en',
  'session-from': '',
  'send-message-title': '',
  'send-message-path': '',
  'send-message-img': '',
  'app-parameter': '',
  'show-message-card': 'false',
  bindGetUserInfo: '',
  bindGetAuthorize: '',
  bindContact: '',
  bindGetPhoneNumber: '',
  bindError: '',
  bindOpenSetting: '',
  bindLaunchApp: '',
  scope: '',
  name: ''
}, selectEnv({
  qq: {
    'app-packagename': '',
    'app-bundleid': '',
    'app-connect-id': ''
  }
}));
var Checkbox = {
  value: '',
  disabled: '',
  checked: 'false',
  color: singleQuote('#09BB07'),
  name: ''
};
var CheckboxGroup = {
  bindChange: '',
  name: ''
};
var Editor = {
  'read-only': 'false',
  placeholder: '',
  'show-img-size': 'false',
  'show-img-toolbar': 'false',
  'show-img-resize': 'false',
  focus: 'false',
  bindReady: '',
  bindFocus: '',
  bindBlur: '',
  bindInput: '',
  bindStatusChange: '',
  name: ''
};
var Form = {
  'report-submit': 'false',
  'report-submit-timeout': '0',
  bindSubmit: '',
  bindReset: '',
  name: ''
};
var Input = Object.assign({
  value: '',
  type: singleQuote(''),
  password: 'false',
  placeholder: '',
  'placeholder-style': '',
  'placeholder-class': singleQuote('input-placeholder'),
  disabled: '',
  maxlength: '140',
  'cursor-spacing': '0',
  'auto-focus': 'false',
  focus: 'false',
  'confirm-type': singleQuote('done'),
  'confirm-hold': 'false',
  cursor: 'i.value.length',
  'selection-start': '-1',
  'selection-end': '-1',
  'adjust-position': 'true',
  'hold-keyboard': 'false',
  bindInput: '',
  bindFocus: '',
  bindBlur: '',
  bindConfirm: '',
  bindKeyboardHeightChange: '',
  name: ''
}, selectEnv({
  alipay: {
    'random-number': 'false',
    controlled: 'false'
  },
  weapp: {
    'always-embed': 'false'
  }
}));
var Label = {
  for: '',
  name: ''
};
var Picker = {
  mode: singleQuote('selector'),
  disabled: '',
  bindCancel: '',
  range: '',
  'range-key': '',
  value: '',
  bindChange: '',
  bindColumnChange: '',
  start: '',
  end: '',
  fields: singleQuote('day'),
  'custom-item': '',
  name: ''
};
var PickerView = {
  value: '',
  'indicator-style': '',
  'indicator-class': '',
  'mask-style': '',
  'mask-class': '',
  bindChange: '',
  bindPickStart: '',
  bindPickEnd: '',
  name: ''
};
var PickerViewColumn = {
  name: ''
};
var Radio = {
  value: '',
  checked: 'false',
  disabled: '',
  color: singleQuote('#09BB07'),
  name: ''
};
var RadioGroup = {
  bindChange: '',
  name: ''
};
var Slider = {
  min: '0',
  max: '100',
  step: '1',
  disabled: '',
  value: '0',
  color: singleQuote('#e9e9e9'),
  'selected-color': singleQuote('#1aad19'),
  activeColor: singleQuote('#1aad19'),
  backgroundColor: singleQuote('#e9e9e9'),
  'block-size': '28',
  'block-color': singleQuote('#ffffff'),
  'show-value': 'false',
  bindChange: '',
  bindChanging: '',
  name: ''
};
var Switch = {
  checked: 'false',
  disabled: '',
  type: singleQuote('switch'),
  color: singleQuote('#04BE02'),
  bindChange: '',
  name: ''
};
var CoverImage = {
  src: '',
  bindLoad: 'eh',
  bindError: 'eh'
};
var Textarea = {
  value: '',
  placeholder: '',
  'placeholder-style': '',
  'placeholder-class': singleQuote('textarea-placeholder'),
  disabled: '',
  maxlength: '140',
  'auto-focus': 'false',
  focus: 'false',
  'auto-height': 'false',
  fixed: 'false',
  'cursor-spacing': '0',
  cursor: '-1',
  'show-confirm-bar': 'true',
  'selection-start': '-1',
  'selection-end': '-1',
  'adjust-position': 'true',
  'hold-keyboard': 'false',
  bindFocus: '',
  bindBlur: '',
  bindLineChange: '',
  bindInput: '',
  bindConfirm: '',
  bindKeyboardHeightChange: '',
  name: ''
};
var CoverView = Object.assign({
  'scroll-top': 'false'
}, touchEvents);
var MatchMedia = {
  'min-width': '',
  'max-width': '',
  width: '',
  'min-height': '',
  'max-height': '',
  height: '',
  orientation: ''
};
var MovableArea = {
  'scale-area': 'false'
};
var MovableView = Object.assign({
  direction: 'none',
  inertia: 'false',
  'out-of-bounds': 'false',
  x: '',
  y: '',
  damping: '20',
  friction: '2',
  disabled: '',
  scale: 'false',
  'scale-min': '0.5',
  'scale-max': '10',
  'scale-value': '1',
  animation: 'true',
  bindAnimationEnd: '',
  bindChange: '',
  bindScale: '',
  htouchmove: '',
  vtouchmove: '',
  width: singleQuote('10px'),
  height: singleQuote('10px')
}, touchEvents);
var ScrollView = Object.assign({
  'scroll-x': 'false',
  'scroll-y': 'false',
  'upper-threshold': '50',
  'lower-threshold': '50',
  'scroll-top': '',
  'scroll-left': '',
  'scroll-into-view': '',
  'scroll-with-animation': 'false',
  'enable-back-to-top': 'false',
  'enable-flex': 'false',
  'scroll-anchoring': 'false',
  'refresher-enabled': 'false',
  'refresher-threshold': '45',
  'refresher-default-style': singleQuote('black'),
  'refresher-background': singleQuote('#FFF'),
  'refresher-triggered': 'false',
  enhanced: 'false',
  bounces: 'true',
  'show-scrollbar': 'true',
  'paging-enabled': 'false',
  'fast-deceleration': 'false',
  bindRefresherPulling: '',
  bindRefresherRefresh: '',
  bindRefresherRestore: '',
  bindRefresherAbort: '',
  bindScrollToUpper: '',
  bindScrollToLower: '',
  bindScroll: '',
  animation: '',
  bindTransitionEnd: '',
  bindAnimationStart: '',
  bindAnimationIteration: '',
  bindAnimationEnd: '',
  bindDragStart: '',
  bindDragging: '',
  bindDragEnd: ''
}, touchEvents);
var Swiper = Object.assign({
  'indicator-dots': 'false',
  'indicator-color': singleQuote('rgba(0, 0, 0, .3)'),
  'indicator-active-color': singleQuote('#000000'),
  autoplay: 'false',
  current: '0',
  interval: '5000',
  duration: '500',
  circular: 'false',
  vertical: 'false',
  'previous-margin': '\'0px\'',
  'next-margin': '\'0px\'',
  'snap-to-edge': 'false',
  'display-multiple-items': '1',
  'skip-hidden-item-layout': 'false',
  'easing-function': singleQuote('default'),
  bindChange: '',
  bindTransition: '',
  bindAnimationFinish: ''
}, touchEvents);
var SwiperItem = {
  'item-id': ''
};
var FunctionalPageNavigator = {
  version: singleQuote('release'),
  name: '',
  args: '',
  bindSuccess: '',
  bindFail: '',
  bindCancel: ''
};
var Navigator = {
  target: singleQuote('self'),
  url: '',
  'open-type': singleQuote('navigate'),
  delta: '1',
  'app-id': '',
  path: '',
  'extra-data': '',
  version: singleQuote('version'),
  'hover-class': singleQuote('navigator-hover'),
  'hover-stop-propagation': 'false',
  'hover-start-time': '50',
  'hover-stay-time': '600',
  bindSuccess: '',
  bindFail: '',
  bindComplete: ''
};
var Audio = {
  id: '',
  src: '',
  loop: 'false',
  controls: 'false',
  poster: '',
  name: '',
  author: '',
  bindError: '',
  bindPlay: '',
  bindPause: '',
  bindTimeUpdate: '',
  bindEnded: ''
};
var Camera = {
  mode: singleQuote('normal'),
  'device-position': singleQuote('back'),
  flash: singleQuote('auto'),
  'frame-size': singleQuote('medium'),
  bindStop: '',
  bindError: '',
  bindInitDone: '',
  bindScanCode: ''
};
var Image = Object.assign({
  src: '',
  mode: singleQuote('scaleToFill'),
  webp: 'false',
  'lazy-load': 'false',
  'show-menu-by-longpress': 'false',
  bindError: '',
  bindLoad: ''
}, touchEvents);
var LivePlayer = {
  src: '',
  mode: singleQuote('live'),
  autoplay: 'false',
  muted: 'false',
  orientation: singleQuote('vertical'),
  'object-fit': singleQuote('contain'),
  'background-mute': 'false',
  'min-cache': '1',
  'max-cache': '3',
  'sound-mode': singleQuote('speaker'),
  'auto-pause-if-navigate': 'true',
  'auto-pause-if-open-native': 'true',
  'picture-in-picture-mode': '[]',
  animation: '',
  bindStateChange: '',
  bindFullScreenChange: '',
  bindNetStatus: '',
  bindAudioVolumeNotify: '',
  bindEnterPictureInPicture: '',
  bindLeavePictureInPicture: ''
};
var LivePusher = {
  url: '',
  mode: singleQuote('RTC'),
  autopush: 'false',
  muted: 'false',
  'enable-camera': 'true',
  'auto-focus': 'true',
  orientation: singleQuote('vertical'),
  beauty: '0',
  whiteness: '0',
  aspect: singleQuote('9:16'),
  'min-bitrate': '200',
  'max-bitrate': '1000',
  'audio-quality': singleQuote('high'),
  'waiting-image': '',
  'waiting-image-hash': '',
  zoom: 'false',
  'device-position': singleQuote('front'),
  'background-mute': 'false',
  mirror: 'false',
  'remote-mirror': 'false',
  'local-mirror': 'false',
  'audio-reverb-type': '0',
  'enable-mic': 'true',
  'enable-agc': 'false',
  'enable-ans': 'false',
  'audio-volume-type': singleQuote('voicecall'),
  'video-width': '360',
  'video-height': '640',
  animation: '',
  bindStateChange: '',
  bindNetStatus: '',
  bindBgmStart: '',
  bindBgmProgress: '',
  bindBgmComplete: ''
};
var Video = {
  src: '',
  duration: '',
  controls: 'true',
  'danmu-list': '',
  'danmu-btn': '',
  'enable-danmu': '',
  autoplay: 'false',
  loop: 'false',
  muted: 'false',
  'initial-time': '0',
  'page-gesture': 'false',
  direction: '',
  'show-progress': 'true',
  'show-fullscreen-btn': 'true',
  'show-play-btn': 'true',
  'show-center-play-btn': 'true',
  'enable-progress-gesture': 'true',
  'object-fit': singleQuote('contain'),
  poster: '',
  'show-mute-btn': 'false',
  title: '',
  'play-btn-position': singleQuote('bottom'),
  'enable-play-gesture': 'false',
  'auto-pause-if-navigate': 'true',
  'auto-pause-if-open-native': 'true',
  'vslide-gesture': 'false',
  'vslide-gesture-in-fullscreen': 'true',
  'ad-unit-id': '',
  'poster-for-crawler': '',
  'show-casting-button': 'false',
  'picture-in-picture-mode': '[]',
  // picture-in-picture-show-progress 属性先注释掉的原因如下：
  // 该属性超过了 wxml 属性的长度限制，实际无法使用且导致编译报错。可等微信官方修复后再放开。
  // 参考1：https://developers.weixin.qq.com/community/develop/doc/000a429beb87f0eac07acc0fc5b400
  // 参考2: https://developers.weixin.qq.com/community/develop/doc/0006883619c48054286a4308258c00?_at=vyxqpllafi
  // 'picture-in-picture-show-progress': 'false',
  'enable-auto-rotation': 'false',
  'show-screen-lock-button': 'false',
  animation: '',
  bindPlay: '',
  bindPause: '',
  bindEnded: '',
  bindTimeUpdate: '',
  bindFullScreenChange: '',
  bindWaiting: '',
  bindError: '',
  bindProgress: '',
  bindLoadedMetadata: '',
  bindControlsToggle: '',
  bindEnterPictureInPicture: '',
  bindLeavePictureInPicture: '',
  bindSeekComplete: ''
};
var Canvas = {
  type: '',
  'canvas-id': '',
  'disable-scroll': 'false',
  bindTouchStart: '',
  bindTouchMove: '',
  bindTouchEnd: '',
  bindTouchCancel: '',
  bindLongtap: '',
  bindError: ''
};
var Ad = {
  'unit-id': '',
  'ad-intervals': '',
  'ad-type': singleQuote('banner'),
  'ad-theme': singleQuote('white'),
  bindLoad: '',
  bindError: '',
  bindClose: ''
};
var OfficialAccount = {
  bindLoad: '',
  bindError: ''
};
var OpenData = {
  type: '',
  'open-gid': '',
  lang: singleQuote('en'),
  'default-text': '',
  'default-avatar': '',
  bindError: ''
};
var WebView = {
  src: '',
  bindMessage: '',
  bindLoad: ''
};
var NavigationBar = {
  title: '',
  loading: 'false',
  'front-color': '',
  'background-color': '',
  'color-animation-duration': '0',
  'color-animation-timing-func': singleQuote('linear')
};
var PageMeta = {
  'background-text-style': '',
  'background-color': '',
  'background-color-top': '',
  'background-color-bottom': '',
  'scroll-top': singleQuote(''),
  'scroll-duration': '300',
  'page-style': singleQuote(''),
  'root-font-size': singleQuote(''),
  bindResize: '',
  bindScroll: '',
  bindScrollDone: ''
};
var Block = {}; // For Vue，因为 slot 标签被 vue 占用了

var SlotView = {
  name: ''
}; // For React
// Slot 和 SlotView 最终都会编译成 <view slot={{ i.name }} />
// 因为 <slot name="{{ i.name }}" /> 适用性没有前者高（无法添加类和样式）
// 不给 View 直接加 slot 属性的原因是性能损耗

var Slot = {
  name: ''
};
var internalComponents = {
  View: View,
  Icon: Icon,
  Progress: Progress,
  RichText: RichText,
  Text: Text,
  Button: Button,
  Checkbox: Checkbox,
  CheckboxGroup: CheckboxGroup,
  Editor: Editor,
  Form: Form,
  Input: Input,
  Label: Label,
  Picker: Picker,
  PickerView: PickerView,
  PickerViewColumn: PickerViewColumn,
  Radio: Radio,
  RadioGroup: RadioGroup,
  Slider: Slider,
  Switch: Switch,
  CoverImage: CoverImage,
  Textarea: Textarea,
  CoverView: CoverView,
  MatchMedia: MatchMedia,
  MovableArea: MovableArea,
  MovableView: MovableView,
  ScrollView: ScrollView,
  Swiper: Swiper,
  SwiperItem: SwiperItem,
  FunctionalPageNavigator: FunctionalPageNavigator,
  Navigator: Navigator,
  Audio: Audio,
  Camera: Camera,
  Image: Image,
  LivePlayer: LivePlayer,
  LivePusher: LivePusher,
  Video: Video,
  Canvas: Canvas,
  Ad: Ad,
  OfficialAccount: OfficialAccount,
  OpenData: OpenData,
  WebView: WebView,
  NavigationBar: NavigationBar,
  PageMeta: PageMeta,
  Block: Block,
  Map: Map$1,
  Slot: Slot,
  SlotView: SlotView
};
var controlledComponent = new Set(['input', 'checkbox', 'picker', 'picker-view', 'radio', 'slider', 'switch', 'textarea']);
var EMPTY_OBJ = {};

var noop = function noop() {};

function toDashed(s) {
  return s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function toCamelCase(s) {
  var camel = '';
  var nextCap = false;

  for (var i = 0; i < s.length; i++) {
    if (s[i] !== '-') {
      camel += nextCap ? s[i].toUpperCase() : s[i];
      nextCap = false;
    } else {
      nextCap = true;
    }
  }

  return camel;
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

var hasOwn = function hasOwn(val, key) {
  return hasOwnProperty.call(val, key);
};

var reportIssue = '如有疑问，请提交 issue 至：https://github.com/nervjs/taro/issues';
/**
 * ensure takes a condition and throw a error if the condition fails,
 * like failure::ensure: https://docs.rs/failure/0.1.1/failure/macro.ensure.html
 * @param condition condition.
 * @param msg error message.
 */

function ensure(condition, msg) {
  if (!condition) {
    throw new Error(msg + '\n' + reportIssue);
  }
}

function warn(condition, msg) {
  if (true) {
    if (condition) {
      console.warn(msg);
    }
  }
}

var incrementId = function incrementId() {
  var id = 0;
  return function () {
    return (id++).toString();
  };
};

function isElement(node) {
  return node.nodeType === 1
  /* ELEMENT_NODE */
  ;
}

function isText(node) {
  return node.nodeType === 3
  /* TEXT_NODE */
  ;
}

var TaroEventTarget = /*#__PURE__*/function () {
  function TaroEventTarget() {
    Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(this, TaroEventTarget);

    this.__handlers = {};
  }

  Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(TaroEventTarget, [{
    key: "addEventListener",
    value: function addEventListener(type, handler, options) {
      warn(type === 'regionchange', 'map 组件的 regionchange 事件非常特殊，请使用 begin/end 事件替代。详情：https://github.com/NervJS/taro/issues/5766');
      type = type.toLowerCase();
      var handlers = this.__handlers[type];
      var isCapture = Boolean(options);
      var isOnce = false;

      if (isObject(options)) {
        isCapture = Boolean(options.capture);
        isOnce = Boolean(options.once);
      }

      if (isOnce) {
        var wrapper = function wrapper() {
          handler.apply(this, arguments); // this 指向 Element

          this.removeEventListener(type, wrapper);
        };

        this.addEventListener(type, wrapper, Object.assign(Object.assign({}, options), {
          once: false
        }));
        return;
      }

      warn(isCapture, 'The event capture feature is unimplemented.');

      if (isArray(handlers)) {
        handlers.push(handler);
      } else {
        this.__handlers[type] = [handler];
      }
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, handler) {
      type = type.toLowerCase();

      if (handler == null) {
        return;
      }

      var handlers = this.__handlers[type];

      if (!isArray(handlers)) {
        return;
      }

      var index = handlers.indexOf(handler);
      warn(index === -1, "\u4E8B\u4EF6: '".concat(type, "' \u6CA1\u6709\u6CE8\u518C\u5728 DOM \u4E2D\uFF0C\u56E0\u6B64\u4E0D\u4F1A\u88AB\u79FB\u9664\u3002"));
      handlers.splice(index, 1);
    }
  }]);

  return TaroEventTarget;
}();

var eventSource = new Map();

var TaroEvent = /*#__PURE__*/function () {
  function TaroEvent(type, opts, event) {
    Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(this, TaroEvent);

    this._stop = false;
    this._end = false;
    this.defaultPrevented = false; // timestamp can either be hi-res ( relative to page load) or low-res (relative to UNIX epoch)
    // here use hi-res timestamp

    this.timeStamp = Date.now();
    this.type = type.toLowerCase();
    this.mpEvent = event;
    this.bubbles = Boolean(opts && opts.bubbles);
    this.cancelable = Boolean(opts && opts.cancelable);
  }

  Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(TaroEvent, [{
    key: "stopPropagation",
    value: function stopPropagation() {
      this._stop = true;
    }
  }, {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {
      this._end = this._stop = true;
    }
  }, {
    key: "preventDefault",
    value: function preventDefault() {
      this.defaultPrevented = true;
    }
  }, {
    key: "target",
    get: function get() {
      var _a, _b, _c;

      var element = document$1.getElementById((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.target.id);
      return Object.assign(Object.assign(Object.assign({}, (_b = this.mpEvent) === null || _b === void 0 ? void 0 : _b.target), (_c = this.mpEvent) === null || _c === void 0 ? void 0 : _c.detail), {
        dataset: element !== null ? element.dataset : EMPTY_OBJ
      });
    }
  }, {
    key: "currentTarget",
    get: function get() {
      var _a, _b, _c;

      var element = document$1.getElementById((_a = this.mpEvent) === null || _a === void 0 ? void 0 : _a.currentTarget.id);

      if (element === null) {
        return this.target;
      }

      return Object.assign(Object.assign(Object.assign({}, (_b = this.mpEvent) === null || _b === void 0 ? void 0 : _b.currentTarget), (_c = this.mpEvent) === null || _c === void 0 ? void 0 : _c.detail), {
        dataset: element.dataset
      });
    }
  }]);

  return TaroEvent;
}();

function createEvent(event, _) {
  if (typeof event === 'string') {
    return new TaroEvent(event, {
      bubbles: true,
      cancelable: true
    });
  }

  var domEv = new TaroEvent(event.type, {
    bubbles: true,
    cancelable: true
  }, event);

  for (var key in event) {
    if (key === 'currentTarget' || key === 'target' || key === 'type' || key === 'timeStamp') {
      continue;
    } else {
      domEv[key] = event[key];
    }
  }

  return domEv;
}

function eventHandler(event) {
  if (event.currentTarget == null) {
    event.currentTarget = event.target;
  }

  var node = document$1.getElementById(event.currentTarget.id);

  if (node != null) {
    node.dispatchEvent(createEvent(event));
  }
}
/**
 * React also has a fancy function's name for this: `hydrate()`.
 * You may have been heard `hydrate` as a SSR-related function,
 * actually, `hydrate` basicly do the `render()` thing, but ignore some properties,
 * it's a vnode traverser and modifier: that's exactly what Taro's doing in here.
 */


function hydrate(node) {
  var _data;

  if (isText(node)) {
    var _ref;

    return _ref = {}, Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(_ref, "v"
    /* Text */
    , node.nodeValue), Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(_ref, "nn"
    /* NodeName */
    , node.nodeName), _ref;
  }

  var data = (_data = {}, Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(_data, "nn"
  /* NodeName */
  , node.nodeName), Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])(_data, "uid", node.uid), _data);
  var props = node.props,
      childNodes = node.childNodes;

  for (var prop in props) {
    if (!prop.startsWith('data-') && // 在 node.dataset 的数据
    prop !== 'class' && prop !== 'style' && prop !== 'id') {
      data[toCamelCase(prop)] = props[prop];
    }
  }

  if (childNodes.length > 0) {
    data["cn"
    /* Childnodes */
    ] = childNodes.map(hydrate);
  }

  if (node.className !== '') {
    data["cl"
    /* Class */
    ] = node.className;
  }

  if (node.cssText !== '' && node.nodeName !== 'swiper-item') {
    data["st"
    /* Style */
    ] = node.cssText;
  }

  return data;
}

var CurrentReconciler = {
  getLifecyle: function getLifecyle(instance, lifecyle) {
    return instance[lifecyle];
  }
};
var options = {
  prerender: true,
  debug: false,
  // html 只影响 Element#innerHTML API
  html: {
    skipElements: new Set(['style', 'script']),
    voidElements: new Set(['!doctype', 'area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr']),
    closingElements: new Set(['html', 'head', 'body', 'p', 'dt', 'dd', 'li', 'option', 'thead', 'th', 'tbody', 'tr', 'td', 'tfoot', 'colgroup']),
    renderHTMLTag: false
  },
  reconciler: function reconciler(_reconciler) {
    Object.assign(CurrentReconciler, _reconciler);
  }
};

function initPosition() {
  return {
    index: 0,
    column: 0,
    line: 0
  };
}

function feedPosition(position, str, len) {
  var start = position.index;
  var end = position.index = start + len;

  for (var i = start; i < end; i++) {
    var char = str.charAt(i);

    if (char === '\n') {
      position.line++;
      position.column = 0;
    } else {
      position.column++;
    }
  }
}

function jumpPosition(position, str, end) {
  var len = end - position.index;
  return feedPosition(position, str, len);
}

function copyPosition(position) {
  return {
    index: position.index,
    line: position.line,
    column: position.column
  };
}

var whitespace = /\s/;

function isWhitespaceChar(char) {
  return whitespace.test(char);
}

var equalSign = /=/;

function isEqualSignChar(char) {
  return equalSign.test(char);
}

function shouldBeIgnore(tagName) {
  var name = tagName.toLowerCase();

  if (options.html.skipElements.has(name)) {
    return true;
  }

  return false;
}

var alphanumeric = /[A-Za-z0-9]/;

function findTextEnd(str, index) {
  while (true) {
    var textEnd = str.indexOf('<', index);

    if (textEnd === -1) {
      return textEnd;
    }

    var char = str.charAt(textEnd + 1);

    if (char === '/' || char === '!' || alphanumeric.test(char)) {
      return textEnd;
    }

    index = textEnd + 1;
  }
}

function isWordEnd(cursor, wordBegin, html) {
  if (!isWhitespaceChar(html.charAt(cursor))) return false;
  var len = html.length; // backwrad

  for (var i = cursor - 1; i > wordBegin; i--) {
    var char = html.charAt(i);

    if (!isWhitespaceChar(char)) {
      if (isEqualSignChar(char)) return false;
      break;
    }
  } // forward


  for (var _i = cursor + 1; _i < len; _i++) {
    var _char = html.charAt(_i);

    if (!isWhitespaceChar(_char)) {
      if (isEqualSignChar(_char)) return false;
      return true;
    }
  }
}

var Scaner = /*#__PURE__*/function () {
  function Scaner(html) {
    Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(this, Scaner);

    this.tokens = [];
    this.position = initPosition();
    this.html = html;
  }

  Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(Scaner, [{
    key: "scan",
    value: function scan() {
      var html = this.html,
          position = this.position;
      var len = html.length;

      while (position.index < len) {
        var start = position.index;
        this.scanText();

        if (position.index === start) {
          var isComment = html.startsWith('!--', start + 1);

          if (isComment) {
            this.scanComment();
          } else {
            var tagName = this.scanTag();

            if (shouldBeIgnore(tagName)) {
              this.scanSkipTag(tagName);
            }
          }
        }
      }

      return this.tokens;
    }
  }, {
    key: "scanText",
    value: function scanText() {
      var type = 'text';
      var html = this.html,
          position = this.position;
      var textEnd = findTextEnd(html, position.index);

      if (textEnd === position.index) {
        return;
      }

      if (textEnd === -1) {
        textEnd = html.length;
      }

      var start = copyPosition(position);
      var content = html.slice(position.index, textEnd);
      jumpPosition(position, html, textEnd);
      var end = copyPosition(position);
      this.tokens.push({
        type: type,
        content: content,
        position: {
          start: start,
          end: end
        }
      });
    }
  }, {
    key: "scanComment",
    value: function scanComment() {
      var type = 'comment';
      var html = this.html,
          position = this.position;
      var start = copyPosition(position);
      feedPosition(position, html, 4); // "<!--".length

      var contentEnd = html.indexOf('-->', position.index);
      var commentEnd = contentEnd + 3; // "-->".length

      if (contentEnd === -1) {
        contentEnd = commentEnd = html.length;
      }

      var content = html.slice(position.index, contentEnd);
      jumpPosition(position, html, commentEnd);
      this.tokens.push({
        type: type,
        content: content,
        position: {
          start: start,
          end: copyPosition(position)
        }
      });
    }
  }, {
    key: "scanTag",
    value: function scanTag() {
      this.scanTagStart();
      var tagName = this.scanTagName();
      this.scanAttrs();
      this.scanTagEnd();
      return tagName;
    }
  }, {
    key: "scanTagStart",
    value: function scanTagStart() {
      var type = 'tag-start';
      var html = this.html,
          position = this.position;
      var secondChar = html.charAt(position.index + 1);
      var close = secondChar === '/';
      var start = copyPosition(position);
      feedPosition(position, html, close ? 2 : 1);
      this.tokens.push({
        type: type,
        close: close,
        position: {
          start: start
        }
      });
    }
  }, {
    key: "scanTagEnd",
    value: function scanTagEnd() {
      var type = 'tag-end';
      var html = this.html,
          position = this.position;
      var firstChar = html.charAt(position.index);
      var close = firstChar === '/';
      feedPosition(position, html, close ? 2 : 1);
      var end = copyPosition(position);
      this.tokens.push({
        type: type,
        close: close,
        position: {
          end: end
        }
      });
    }
  }, {
    key: "scanTagName",
    value: function scanTagName() {
      var type = 'tag';
      var html = this.html,
          position = this.position;
      var len = html.length;
      var start = position.index;

      while (start < len) {
        var char = html.charAt(start);
        var isTagChar = !(isWhitespaceChar(char) || char === '/' || char === '>');
        if (isTagChar) break;
        start++;
      }

      var end = start + 1;

      while (end < len) {
        var _char2 = html.charAt(end);

        var _isTagChar = !(isWhitespaceChar(_char2) || _char2 === '/' || _char2 === '>');

        if (!_isTagChar) break;
        end++;
      }

      jumpPosition(position, html, end);
      var tagName = html.slice(start, end);
      this.tokens.push({
        type: type,
        content: tagName
      });
      return tagName;
    }
  }, {
    key: "scanAttrs",
    value: function scanAttrs() {
      var html = this.html,
          position = this.position,
          tokens = this.tokens;
      var cursor = position.index;
      var quote = null; // null, single-, or double-quote

      var wordBegin = cursor; // index of word start

      var words = []; // "key", "key=value", "key='value'", etc

      var len = html.length;

      while (cursor < len) {
        var char = html.charAt(cursor);

        if (quote) {
          var isQuoteEnd = char === quote;

          if (isQuoteEnd) {
            quote = null;
          }

          cursor++;
          continue;
        }

        var isTagEnd = char === '/' || char === '>';

        if (isTagEnd) {
          if (cursor !== wordBegin) {
            words.push(html.slice(wordBegin, cursor));
          }

          break;
        }

        if (isWordEnd(cursor, wordBegin, html)) {
          if (cursor !== wordBegin) {
            words.push(html.slice(wordBegin, cursor));
          }

          wordBegin = cursor + 1;
          cursor++;
          continue;
        }

        var isQuoteStart = char === '\'' || char === '"';

        if (isQuoteStart) {
          quote = char;
          cursor++;
          continue;
        }

        cursor++;
      }

      jumpPosition(position, html, cursor);
      var wLen = words.length;
      var type = 'attribute';

      for (var i = 0; i < wLen; i++) {
        var word = words[i];
        var isNotPair = word.includes('=');

        if (isNotPair) {
          var secondWord = words[i + 1];

          if (secondWord && secondWord.startsWith('=')) {
            if (secondWord.length > 1) {
              var newWord = word + secondWord;
              tokens.push({
                type: type,
                content: newWord
              });
              i += 1;
              continue;
            }

            var thirdWord = words[i + 2];
            i += 1;

            if (thirdWord) {
              var _newWord = word + '=' + thirdWord;

              tokens.push({
                type: type,
                content: _newWord
              });
              i += 1;
              continue;
            }
          }
        }

        if (word.endsWith('=')) {
          var _secondWord = words[i + 1];

          if (_secondWord && !_secondWord.includes('=')) {
            var _newWord3 = word + _secondWord;

            tokens.push({
              type: type,
              content: _newWord3
            });
            i += 1;
            continue;
          }

          var _newWord2 = word.slice(0, -1);

          tokens.push({
            type: type,
            content: _newWord2
          });
          continue;
        }

        tokens.push({
          type: type,
          content: word
        });
      }
    }
  }, {
    key: "scanSkipTag",
    value: function scanSkipTag(tagName) {
      var html = this.html,
          position = this.position,
          tokens = this.tokens;
      var safeTagName = tagName.toLowerCase();
      var len = html.length;
      var index = position.index;

      while (index < len) {
        var nextTag = html.indexOf('</', index);

        if (nextTag === -1) {
          this.scanText();
          break;
        }

        var tagStartPosition = copyPosition(position);
        jumpPosition(tagStartPosition, html, nextTag);
        var tagState = {
          html: html,
          position: tagStartPosition,
          tokens: []
        };
        var name = this.scanTag();

        if (safeTagName !== name.toLowerCase()) {
          index = tagState.position.index;
          continue;
        }

        if (nextTag !== position.index) {
          var textStart = copyPosition(position);
          jumpPosition(position, html, nextTag);
          tokens.push({
            type: 'text',
            content: html.slice(textStart.index, nextTag),
            position: {
              start: textStart,
              end: copyPosition(position)
            }
          });
        }

        tokens.push.apply(tokens, tagState.tokens);
        jumpPosition(position, html, tagState.position.index);
        break;
      }
    }
  }]);

  return Scaner;
}();

function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return !!map[val.toLowerCase()];
  } : function (val) {
    return !!map[val];
  };
}

var specialMiniElements = {
  img: 'image',
  iframe: 'web-view'
};
var internalCompsList = Object.keys(internalComponents).map(function (i) {
  return i.toLowerCase();
}).join(','); // https://developers.weixin.qq.com/miniprogram/dev/component

var isMiniElements = makeMap(internalCompsList, true); // https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements

var isInlineElements = makeMap('a,i,abbr,iframe,select,acronym,slot,small,span,bdi,kbd,strong,big,map,sub,sup,br,mark,mark,meter,template,canvas,textarea,cite,object,time,code,output,u,data,picture,tt,datalist,var,dfn,del,q,em,s,embed,samp,b', true); // https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements

var isBlockElements = makeMap('address,fieldset,li,article,figcaption,main,aside,figure,nav,blockquote,footer,ol,details,form,p,dialog,h1,h2,h3,h4,h5,h6,pre,dd,header,section,div,hgroup,table,dl,hr,ul,dt', true);
var closingTagAncestorBreakers = {
  li: ['ul', 'ol', 'menu'],
  dt: ['dl'],
  dd: ['dl'],
  tbody: ['table'],
  thead: ['table'],
  tfoot: ['table'],
  tr: ['table'],
  td: ['table']
};

function hasTerminalParent(tagName, stack) {
  var tagParents = closingTagAncestorBreakers[tagName];

  if (tagParents) {
    var currentIndex = stack.length - 1;

    while (currentIndex >= 0) {
      var parentTagName = stack[currentIndex].tagName;

      if (parentTagName === tagName) {
        break;
      }

      if (tagParents && tagParents.includes(parentTagName)) {
        return true;
      }

      currentIndex--;
    }
  }

  return false;
}

function unquote(str) {
  var car = str.charAt(0);
  var end = str.length - 1;
  var isQuoteStart = car === '"' || car === "'";

  if (isQuoteStart && car === str.charAt(end)) {
    return str.slice(1, end);
  }

  return str;
}

function getTagName(tag) {
  if (options.html.renderHTMLTag) {
    return tag;
  }

  if (specialMiniElements[tag]) {
    return specialMiniElements[tag];
  } else if (isMiniElements(tag)) {
    return tag;
  } else if (isBlockElements(tag)) {
    return 'view';
  } else if (isInlineElements(tag)) {
    return 'text';
  }

  return 'view';
}

function splitEqual(str) {
  var sep = '=';
  var idx = str.indexOf(sep);
  if (idx === -1) return [str];
  var key = str.slice(0, idx).trim();
  var value = str.slice(idx + sep.length).trim();
  return [key, value];
}

function format(children) {
  return children.filter(function (child) {
    if (child.type === 'comment') {
      return false;
    } else if (child.type === 'text') {
      return child.content !== '';
    }

    return true;
  }).map(function (child) {
    if (child.type === 'text') {
      var text = document$1.createTextNode(child.content);

      if (isFunction(options.html.transformText)) {
        return options.html.transformText(text, child);
      }

      return text;
    }

    var el = document$1.createElement(getTagName(child.tagName));

    if (!options.html.renderHTMLTag) {
      el.className = child.tagName;
    }

    for (var i = 0; i < child.attributes.length; i++) {
      var attr = child.attributes[i];

      var _splitEqual = splitEqual(attr),
          _splitEqual2 = Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_splitEqual, 2),
          key = _splitEqual2[0],
          value = _splitEqual2[1];

      if (key === 'class') {
        el.className += ' ' + unquote(value);
      } else if (key[0] === 'o' && key[1] === 'n') {
        continue;
      } else {
        el.setAttribute(key, value == null ? true : unquote(value));
      }
    }

    var ch = format(child.children);

    for (var _i2 = 0; _i2 < ch.length; _i2++) {
      el.appendChild(ch[_i2]);
    }

    if (isFunction(options.html.transformElement)) {
      return options.html.transformElement(el, child);
    }

    return el;
  });
}

function parser(html) {
  var tokens = new Scaner(html).scan();
  var root = {
    tagName: '',
    children: [],
    type: 'element',
    attributes: []
  };
  var state = {
    tokens: tokens,
    options: options,
    cursor: 0,
    stack: [root]
  };
  parse(state);
  return format(root.children);
}

function parse(state) {
  var tokens = state.tokens,
      stack = state.stack;
  var cursor = state.cursor;
  var len = tokens.length;
  var nodes = stack[stack.length - 1].children;

  while (cursor < len) {
    var token = tokens[cursor];

    if (token.type !== 'tag-start') {
      // comment or text
      nodes.push(token);
      cursor++;
      continue;
    }

    var tagToken = tokens[++cursor];
    cursor++;
    var tagName = tagToken.content.toLowerCase();

    if (token.close) {
      var index = stack.length;
      var shouldRewind = false;

      while (--index > -1) {
        if (stack[index].tagName === tagName) {
          shouldRewind = true;
          break;
        }
      }

      while (cursor < len) {
        var endToken = tokens[cursor];
        if (endToken.type !== 'tag-end') break;
        cursor++;
      }

      if (shouldRewind) {
        stack.splice(index);
        break;
      } else {
        continue;
      }
    }

    var isClosingTag = options.html.closingElements.has(tagName);
    var shouldRewindToAutoClose = isClosingTag;

    if (shouldRewindToAutoClose) {
      shouldRewindToAutoClose = !hasTerminalParent(tagName, stack);
    }

    if (shouldRewindToAutoClose) {
      var currentIndex = stack.length - 1;

      while (currentIndex > 0) {
        if (tagName === stack[currentIndex].tagName) {
          stack.splice(currentIndex);
          var previousIndex = currentIndex - 1;
          nodes = stack[previousIndex].children;
          break;
        }

        currentIndex = currentIndex - 1;
      }
    }

    var attributes = [];
    var attrToken = void 0;

    while (cursor < len) {
      attrToken = tokens[cursor];
      if (attrToken.type === 'tag-end') break;
      attributes.push(attrToken.content);
      cursor++;
    }

    cursor++;
    var children = [];
    var element = {
      type: 'element',
      tagName: tagToken.content,
      attributes: attributes,
      children: children
    };
    nodes.push(element);
    var hasChildren = !(attrToken.close || options.html.voidElements.has(tagName));

    if (hasChildren) {
      stack.push({
        tagName: tagName,
        children: children
      });
      var innerState = {
        tokens: tokens,
        cursor: cursor,
        stack: stack
      };
      parse(innerState);
      cursor = innerState.cursor;
    }
  }

  state.cursor = cursor;
}

function setInnerHTML(element, html) {
  element.textContent = '';
  var children = parser(html);

  for (var i = 0; i < children.length; i++) {
    element.appendChild(children[i]);
  }
}

var nodeId = incrementId();

var TaroNode = /*#__PURE__*/function (_TaroEventTarget) {
  Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(TaroNode, _TaroEventTarget);

  var _super = Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(TaroNode);

  function TaroNode(nodeType, nodeName) {
    var _this;

    Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(this, TaroNode);

    _this = _super.call(this);
    _this.parentNode = null;
    _this.childNodes = [];

    _this.hydrate = function (node) {
      return function () {
        return hydrate(node);
      };
    };

    _this.nodeType = nodeType;
    _this.nodeName = nodeName;
    _this.uid = "_n_".concat(nodeId());
    eventSource.set(_this.uid, Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this));
    return _this;
  }

  Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(TaroNode, [{
    key: "insertBefore",
    value: function insertBefore(newChild, refChild, isReplace) {
      var _this2 = this;

      var _a;

      newChild.remove();
      newChild.parentNode = this;
      var payload;

      if (refChild) {
        var index = this.findIndex(this.childNodes, refChild);
        this.childNodes.splice(index, 0, newChild);

        if (isReplace === true) {
          payload = {
            path: newChild._path,
            value: this.hydrate(newChild)
          };
        } else {
          payload = {
            path: "".concat(this._path, ".", "cn"
            /* Childnodes */
            ),
            value: function value() {
              return _this2.childNodes.map(hydrate);
            }
          };
        }
      } else {
        this.childNodes.push(newChild);
        payload = {
          path: newChild._path,
          value: this.hydrate(newChild)
        };
      }

      (_a = CurrentReconciler.insertBefore) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, this, newChild, refChild);
      this.enqueueUpdate(payload);
      return newChild;
    }
  }, {
    key: "appendChild",
    value: function appendChild(child) {
      var _a;

      this.insertBefore(child);
      (_a = CurrentReconciler.appendChild) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, this, child);
    }
  }, {
    key: "replaceChild",
    value: function replaceChild(newChild, oldChild) {
      var _a;

      if (oldChild.parentNode === this) {
        this.insertBefore(newChild, oldChild, true);
        oldChild.remove(true);
        return oldChild;
      }

      (_a = CurrentReconciler.removeChild) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, this, newChild, oldChild);
    }
  }, {
    key: "removeChild",
    value: function removeChild(child, isReplace) {
      var _this3 = this;

      var index = this.findIndex(this.childNodes, child);
      this.childNodes.splice(index, 1);

      if (isReplace !== true) {
        this.enqueueUpdate({
          path: "".concat(this._path, ".", "cn"
          /* Childnodes */
          ),
          value: function value() {
            return _this3.childNodes.map(hydrate);
          }
        });
      }

      child.parentNode = null;
      eventSource.delete(child.uid); // @TODO: eventSource memory overflow
      // child._empty()

      return child;
    }
  }, {
    key: "remove",
    value: function remove(isReplace) {
      if (this.parentNode) {
        this.parentNode.removeChild(this, isReplace);
      }
    }
  }, {
    key: "hasChildNodes",
    value: function hasChildNodes() {
      return this.childNodes.length > 0;
    }
  }, {
    key: "enqueueUpdate",
    value: function enqueueUpdate(payload) {
      if (this._root === null) {
        return;
      }

      this._root.enqueueUpdate(payload);
    }
    /**
     * like jQuery's $.empty()
     */

  }, {
    key: "_empty",
    value: function _empty() {
      while (this.childNodes.length > 0) {
        var child = this.childNodes[0];
        child.parentNode = null;
        eventSource.delete(child.uid);
        this.childNodes.shift();
      }
    }
    /**
     * @textContent 目前只能置空子元素
     * @TODO 等待完整 innerHTML 实现
     */

  }, {
    key: "findIndex",
    value: function findIndex(childeNodes, refChild) {
      var index = childeNodes.indexOf(refChild);
      ensure(index !== -1, 'The node to be replaced is not a child of this node.');
      return index;
    }
  }, {
    key: "cloneNode",
    value: function cloneNode() {
      var isDeep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var constructor = this.constructor;
      var newNode;

      if (this.nodeType === 1
      /* ELEMENT_NODE */
      ) {
          newNode = new constructor(this.nodeType, this.nodeName);
        } else if (this.nodeType === 3
      /* TEXT_NODE */
      ) {
          newNode = new constructor('');
        }

      for (var key in this) {
        var value = this[key];

        if (['props', 'dataset'].includes(key) && Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])(value) === 'object') {
          newNode[key] = Object.assign({}, value);
        } else if (key === '_value') {
          newNode[key] = value;
        } else if (key === 'style') {
          newNode.style._value = Object.assign({}, value._value);
          newNode.style._usedStyleProp = new Set(Array.from(value._usedStyleProp));
        }
      }

      if (isDeep) {
        newNode.childNodes = this.childNodes.map(function (node) {
          return node.cloneNode(true);
        });
      }

      return newNode;
    }
  }, {
    key: "_path",
    get: function get() {
      if (this.parentNode !== null) {
        var index =  true ? this.parentNode.childNodes.indexOf(this) : undefined;
        return "".concat(this.parentNode._path, ".", "cn"
        /* Childnodes */
        , ".").concat(index);
      }

      return '';
    }
  }, {
    key: "_root",
    get: function get() {
      if (this.parentNode !== null) {
        return this.parentNode._root;
      }

      return null;
    }
  }, {
    key: "parentElement",
    get: function get() {
      var parentNode = this.parentNode;

      if (parentNode != null && parentNode.nodeType === 1
      /* ELEMENT_NODE */
      ) {
          return parentNode;
        }

      return null;
    }
  }, {
    key: "nextSibling",
    get: function get() {
      var parentNode = this.parentNode;

      if (parentNode) {
        return parentNode.childNodes[this.findIndex(parentNode.childNodes, this) + 1] || null;
      }

      return null;
    }
  }, {
    key: "previousSibling",
    get: function get() {
      var parentNode = this.parentNode;

      if (parentNode) {
        return parentNode.childNodes[this.findIndex(parentNode.childNodes, this) - 1] || null;
      }

      return null;
    }
  }, {
    key: "firstChild",
    get: function get() {
      return this.childNodes[0] || null;
    }
  }, {
    key: "lastChild",
    get: function get() {
      var c = this.childNodes;
      return c[c.length - 1] || null;
    }
  }, {
    key: "textContent",
    set: function set(text) {
      this._empty();

      if (text === '') {
        this.enqueueUpdate({
          path: "".concat(this._path, ".", "cn"
          /* Childnodes */
          ),
          value: function value() {
            return [];
          }
        });
      } else {
        this.appendChild(document$1.createTextNode(text));
      }
    }
  }, {
    key: "innerHTML",
    set: function set(html) {
      setInnerHTML(this, html);
    },
    get: function get() {
      return '';
    }
  }]);

  return TaroNode;
}(TaroEventTarget);

var TaroText = /*#__PURE__*/function (_TaroNode) {
  Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(TaroText, _TaroNode);

  var _super2 = Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(TaroText);

  function TaroText(text) {
    var _this4;

    Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(this, TaroText);

    _this4 = _super2.call(this, 3
    /* TEXT_NODE */
    , '#text');
    _this4._value = text;
    return _this4;
  }

  Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(TaroText, [{
    key: "textContent",
    set: function set(text) {
      this._value = text;
      this.enqueueUpdate({
        path: "".concat(this._path, ".", "v"
        /* Text */
        ),
        value: text
      });
    },
    get: function get() {
      return this._value;
    }
  }, {
    key: "nodeValue",
    set: function set(text) {
      this.textContent = text;
    },
    get: function get() {
      return this._value;
    }
  }]);

  return TaroText;
}(TaroNode);
/*
 *
 * https://www.w3.org/Style/CSS/all-properties.en.html
 */


var styleProperties = ['alignContent', 'alignItems', 'alignSelf', 'alignmentAdjust', 'alignmentBaseline', 'all', 'animation', 'animationDelay', 'animationDirection', 'animationDuration', 'animationFillMode', 'animationIterationCount', 'animationName', 'animationPlayState', 'animationTimingFunction', 'appearance', 'azimuth', 'backfaceVisibility', 'background', 'backgroundAttachment', 'backgroundBlendMode', 'backgroundClip', 'backgroundColor', 'backgroundImage', 'backgroundOrigin', 'backgroundPosition', 'backgroundRepeat', 'backgroundSize', 'baselineShift', 'blockOverflow', 'blockSize', 'bookmarkLabel', 'bookmarkLevel', 'bookmarkState', 'border', 'borderBlock', 'borderBlockColor', 'borderBlockEnd', 'borderBlockEndColor', 'borderBlockEndStyle', 'borderBlockEndWidth', 'borderBlockStart', 'borderBlockStartColor', 'borderBlockStartStyle', 'borderBlockStartWidth', 'borderBlockStyle', 'borderBlockWidth', 'borderBottom', 'borderBottomColor', 'borderBottomFitLength', 'borderBottomFitWidth', 'borderBottomImage', 'borderBottomLeftFitWidth', 'borderBottomLeftImage', 'borderBottomLeftRadius', 'borderBottomRightFitLength', 'borderBottomRightFitWidth', 'borderBottomRightImage', 'borderBottomRightRadius', 'borderBottomStyle', 'borderBottomWidth', 'borderBottomlEftFitLength', 'borderBoundary', 'borderBreak', 'borderCollapse', 'borderColor', 'borderCornerFit', 'borderCornerImage', 'borderCornerImageTransform', 'borderEndEndRadius', 'borderEndStartRadius', 'borderFit', 'borderFitLength', 'borderFitWidth', 'borderImage', 'borderImageOutset', 'borderImageRepeat', 'borderImageSlice', 'borderImageSource', 'borderImageTransform', 'borderImageWidth', 'borderInline', 'borderInlineColor', 'borderInlineEnd', 'borderInlineEndColor', 'borderInlineEndStyle', 'borderInlineEndWidth', 'borderInlineStart', 'borderInlineStartColor', 'borderInlineStartStyle', 'borderInlineStartWidth', 'borderInlineStyle', 'borderInlineWidth', 'borderLeft', 'borderLeftColor', 'borderLeftFitLength', 'borderLeftFitWidth', 'borderLeftImage', 'borderLeftStyle', 'borderLeftWidth', 'borderRadius', 'borderRight', 'borderRightColor', 'borderRightFitLength', 'borderRightFitWidth', 'borderRightImage', 'borderRightStyle', 'borderRightWidth', 'borderSpacing', 'borderStartEndRadius', 'borderStartStartRadius', 'borderStyle', 'borderTop', 'borderTopColor', 'borderTopFitLength', 'borderTopFitWidth', 'borderTopImage', 'borderTopLeftFitLength', 'borderTopLeftFitWidth', 'borderTopLeftImage', 'borderTopLeftRadius', 'borderTopRightFitLength', 'borderTopRightFitWidth', 'borderTopRightImage', 'borderTopRightRadius', 'borderTopStyle', 'borderTopWidth', 'borderWidth', 'bottom', 'boxDecorationBreak', 'boxShadow', 'boxSizing', 'boxSnap', 'breakAfter', 'breakBefore', 'breakInside', 'captionSide', 'caret', 'caretColor', 'caretShape', 'chains', 'clear', 'clip', 'clipPath', 'clipRule', 'color', 'colorAdjust', 'colorInterpolationFilters', 'colorScheme', 'columnCount', 'columnFill', 'columnGap', 'columnRule', 'columnRuleColor', 'columnRuleStyle', 'columnRuleWidth', 'columnSpan', 'columnWidth', 'columns', 'contain', 'content', 'continue', 'counterIncrement', 'counterReset', 'counterSet', 'cue', 'cueAfter', 'cueBefore', 'cursor', 'direction', 'display', 'dominantBaseline', 'dropInitialAfterAdjust', 'dropInitialAfterAlign', 'dropInitialBeforeAdjust', 'dropInitialBeforeAlign', 'dropInitialSize', 'dropInitialValue', 'elevation', 'emptyCells', 'filter', 'flex', 'flexBasis', 'flexDirection', 'flexFlow', 'flexGrow', 'flexShrink', 'flexWrap', 'float', 'floodColor', 'floodOpacity', 'flow', 'flowFrom', 'flowInto', 'font', 'fontFamily', 'fontFeatureSettings', 'fontKerning', 'fontLanguageOverride', 'fontMaxSize', 'fontMinSize', 'fontOpticalSizing', 'fontPalette', 'fontSize', 'fontSizeAdjust', 'fontStretch', 'fontStyle', 'fontSynthesis', 'fontSynthesisSmallCaps', 'fontSynthesisStyle', 'fontSynthesisWeight', 'fontVariant', 'fontVariantAlternates', 'fontVariantCaps', 'fontVariantEastAsian', 'fontVariantEmoji', 'fontVariantLigatures', 'fontVariantNumeric', 'fontVariantPosition', 'fontVariationSettings', 'fontWeight', 'footnoteDisplay', 'footnotePolicy', 'forcedColorAdjust', 'gap', 'glyphOrientationVertical', 'grid', 'gridArea', 'gridAutoColumns', 'gridAutoFlow', 'gridAutoRows', 'gridColumn', 'gridColumnEnd', 'gridColumnStart', 'gridRow', 'gridRowEnd', 'gridRowStart', 'gridTemplate', 'gridTemplateAreas', 'gridTemplateColumns', 'gridTemplateRows', 'hangingPunctuation', 'height', 'hyphenateCharacter', 'hyphenateLimitChars', 'hyphenateLimitLast', 'hyphenateLimitLines', 'hyphenateLimitZone', 'hyphens', 'imageOrientation', 'imageResolution', 'initialLetters', 'initialLettersAlign', 'initialLettersWrap', 'inlineBoxAlign', 'inlineSize', 'inlineSizing', 'inset', 'insetBlock', 'insetBlockEnd', 'insetBlockStart', 'insetInline', 'insetInlineEnd', 'insetInlineStart', 'isolation', 'justifyContent', 'justifyItems', 'justifySelf', 'left', 'letterSpacing', 'lightingColor', 'lineBreak', 'lineClamp', 'lineGrid', 'lineHeight', 'linePadding', 'lineSnap', 'lineStacking', 'lineStackingRuby', 'lineStackingShift', 'lineStackingStrategy', 'listStyle', 'listStyleImage', 'listStylePosition', 'listStyleType', 'margin', 'marginBlock', 'marginBlockEnd', 'marginBlockStart', 'marginBottom', 'marginInline', 'marginInlineEnd', 'marginInlineStart', 'marginLeft', 'marginRight', 'marginTop', 'marginTrim', 'markerSide', 'mask', 'maskBorder', 'maskBorderMode', 'maskBorderOutset', 'maskBorderRepeat', 'maskBorderSlice', 'maskBorderSource', 'maskBorderWidth', 'maskClip', 'maskComposite', 'maskImage', 'maskMode', 'maskOrigin', 'maskPosition', 'maskRepeat', 'maskSize', 'maskType', 'maxBlockSize', 'maxHeight', 'maxInlineSize', 'maxLines', 'maxWidth', 'minBlockSize', 'minHeight', 'minInlineSize', 'minWidth', 'mixBlendMode', 'navDown', 'navLeft', 'navRight', 'navUp', 'objectFit', 'objectPosition', 'offset', 'offsetAfter', 'offsetAnchor', 'offsetBefore', 'offsetDistance', 'offsetEnd', 'offsetPath', 'offsetPosition', 'offsetRotate', 'offsetStart', 'opacity', 'order', 'orphans', 'outline', 'outlineColor', 'outlineOffset', 'outlineStyle', 'outlineWidth', 'overflow', 'overflowBlock', 'overflowInline', 'overflowWrap', 'overflowX', 'overflowY', 'padding', 'paddingBlock', 'paddingBlockEnd', 'paddingBlockStart', 'paddingBottom', 'paddingInline', 'paddingInlineEnd', 'paddingInlineStart', 'paddingLeft', 'paddingRight', 'paddingTop', 'page', 'pageBreakAfter', 'pageBreakBefore', 'pageBreakInside', 'pause', 'pauseAfter', 'pauseBefore', 'perspective', 'perspectiveOrigin', 'pitch', 'pitchRange', 'placeContent', 'placeItems', 'placeSelf', 'playDuring', 'pointerEvents', 'position', 'quotes', 'regionFragment', 'resize', 'richness', 'right', 'rowGap', 'rubyAlign', 'rubyMerge', 'rubyPosition', 'running', 'scrollBehavior', 'scrollMargin', 'scrollMarginBlock', 'scrollMarginBlockEnd', 'scrollMarginBlockStart', 'scrollMarginBottom', 'scrollMarginInline', 'scrollMarginInlineEnd', 'scrollMarginInlineStart', 'scrollMarginLeft', 'scrollMarginRight', 'scrollMarginTop', 'scrollPadding', 'scrollPaddingBlock', 'scrollPaddingBlockEnd', 'scrollPaddingBlockStart', 'scrollPaddingBottom', 'scrollPaddingInline', 'scrollPaddingInlineEnd', 'scrollPaddingInlineStart', 'scrollPaddingLeft', 'scrollPaddingRight', 'scrollPaddingTop', 'scrollSnapAlign', 'scrollSnapStop', 'scrollSnapType', 'shapeImageThreshold', 'shapeInside', 'shapeMargin', 'shapeOutside', 'speak', 'speakHeader', 'speakNumeral', 'speakPunctuation', 'speechRate', 'stress', 'stringSet', 'tabSize', 'tableLayout', 'textAlign', 'textAlignAll', 'textAlignLast', 'textCombineUpright', 'textDecoration', 'textDecorationColor', 'textDecorationLine', 'textDecorationStyle', 'textEmphasis', 'textEmphasisColor', 'textEmphasisPosition', 'textEmphasisStyle', 'textGroupAlign', 'textHeight', 'textIndent', 'textJustify', 'textOrientation', 'textOverflow', 'textShadow', 'textSpaceCollapse', 'textSpaceTrim', 'textSpacing', 'textTransform', 'textUnderlinePosition', 'textWrap', 'top', 'transform', 'transformBox', 'transformOrigin', 'transformStyle', 'transition', 'transitionDelay', 'transitionDuration', 'transitionProperty', 'transitionTimingFunction', 'unicodeBidi', 'userSelect', 'verticalAlign', 'visibility', 'voiceFamily', 'volume', 'whiteSpace', 'widows', 'width', 'willChange', 'wordBreak', 'wordSpacing', 'wordWrap', 'wrapAfter', 'wrapBefore', 'wrapFlow', 'wrapInside', 'wrapThrough', 'writingMode', 'zIndex'];
var PROPERTY_THRESHOLD = 2046;
var SET_DATA = '小程序 setData';
var PAGE_INIT = '页面初始化';

function setStyle(newVal, styleKey) {
  var old = this[styleKey];

  if (newVal) {
    this._usedStyleProp.add(styleKey);
  }

  warn(isString(newVal) && newVal.length > PROPERTY_THRESHOLD, "Style \u5C5E\u6027 ".concat(styleKey, " \u7684\u503C\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u6E32\u67D3\u6027\u80FD\uFF0C\u8003\u8651\u4F7F\u7528 CSS \u7C7B\u6216\u5176\u5B83\u65B9\u6848\u66FF\u4EE3\u3002"));

  if (old !== newVal) {
    this._value[styleKey] = newVal;

    this._element.enqueueUpdate({
      path: "".concat(this._element._path, ".", "st"
      /* Style */
      ),
      value: this.cssText
    });
  }
}

function initStyle(ctor) {
  var properties = {};

  var _loop = function _loop(i) {
    var styleKey = styleProperties[i];
    properties[styleKey] = {
      get: function get() {
        return this._value[styleKey] || '';
      },
      set: function set(newVal) {
        setStyle.call(this, newVal, styleKey);
      }
    };
  };

  for (var i = 0; i < styleProperties.length; i++) {
    _loop(i);
  }

  Object.defineProperties(ctor.prototype, properties);
}

var Style = /*#__PURE__*/function () {
  function Style(element) {
    Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(this, Style);

    this._element = element;
    this._usedStyleProp = new Set();
    this._value = {};
  }

  Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(Style, [{
    key: "setCssVariables",
    value: function setCssVariables(styleKey) {
      var _this5 = this;

      this.hasOwnProperty(styleKey) || Object.defineProperty(this, styleKey, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return _this5._value[styleKey] || '';
        },
        set: function set(newVal) {
          setStyle.call(_this5, newVal, styleKey);
        }
      });
    }
  }, {
    key: "setProperty",
    value: function setProperty(propertyName, value) {
      if (propertyName[0] === '-') {
        this.setCssVariables(propertyName);
      } else {
        propertyName = toCamelCase(propertyName);
      }

      if (isUndefined(value)) {
        return;
      }

      if (value === null || value === '') {
        this.removeProperty(propertyName);
      } else {
        this[propertyName] = value;
      }
    }
  }, {
    key: "removeProperty",
    value: function removeProperty(propertyName) {
      propertyName = toCamelCase(propertyName);

      if (!this._usedStyleProp.has(propertyName)) {
        return '';
      }

      var value = this[propertyName];
      this[propertyName] = '';

      this._usedStyleProp.delete(propertyName);

      return value;
    }
  }, {
    key: "getPropertyValue",
    value: function getPropertyValue(propertyName) {
      propertyName = toCamelCase(propertyName);
      var value = this[propertyName];

      if (!value) {
        return '';
      }

      return value;
    }
  }, {
    key: "cssText",
    get: function get() {
      var _this6 = this;

      var text = '';

      this._usedStyleProp.forEach(function (key) {
        var val = _this6[key];
        if (!val) return;
        text += "".concat(toDashed(key), ": ").concat(val, ";");
      });

      return text;
    },
    set: function set(str) {
      var _this7 = this;

      if (str == null) {
        str = '';
      }

      this._usedStyleProp.forEach(function (prop) {
        _this7.removeProperty(prop);
      });

      if (str === '') {
        return;
      }

      var rules = str.split(';');

      for (var i = 0; i < rules.length; i++) {
        var rule = rules[i].trim();

        if (rule === '') {
          continue;
        }

        var _rule$split = rule.split(':'),
            _rule$split2 = Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"])(_rule$split, 2),
            propName = _rule$split2[0],
            val = _rule$split2[1];

        if (isUndefined(val)) {
          continue;
        }

        this.setProperty(propName.trim(), val.trim());
      }
    }
  }]);

  return Style;
}();

initStyle(Style);

function returnTrue() {
  return true;
}

function treeToArray(root, predict) {
  var array = [];
  var filter = predict !== null && predict !== void 0 ? predict : returnTrue;
  var object = root;

  while (object) {
    if (object.nodeType === 1
    /* ELEMENT_NODE */
    && filter(object)) {
      array.push(object);
    }

    object = following(object, root);
  }

  return array;
}

function following(el, root) {
  var firstChild = el.firstChild;

  if (firstChild) {
    return firstChild;
  }

  var current = el;

  do {
    if (current === root) {
      return null;
    }

    var nextSibling = current.nextSibling;

    if (nextSibling) {
      return nextSibling;
    }

    current = current.parentElement;
  } while (current);

  return null;
}

var ClassList = /*#__PURE__*/function (_Set) {
  Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(ClassList, _Set);

  var _super3 = Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(ClassList);

  function ClassList(className, el) {
    var _thisSuper, _this8;

    Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(this, ClassList);

    _this8 = _super3.call(this);
    className.trim().split(/\s+/).forEach(Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])((_thisSuper = Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this8), Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ClassList.prototype)), "add", _thisSuper).bind(Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this8)));
    _this8.el = el;
    return _this8;
  }

  Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(ClassList, [{
    key: "add",
    value: function add(s) {
      Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ClassList.prototype), "add", this).call(this, s);

      this._update();

      return this;
    }
  }, {
    key: "remove",
    value: function remove(s) {
      Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ClassList.prototype), "delete", this).call(this, s);

      this._update();
    }
  }, {
    key: "toggle",
    value: function toggle(s) {
      if (Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ClassList.prototype), "has", this).call(this, s)) {
        Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ClassList.prototype), "delete", this).call(this, s);
      } else {
        Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ClassList.prototype), "add", this).call(this, s);
      }

      this._update();
    }
  }, {
    key: "replace",
    value: function replace(s1, s2) {
      Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ClassList.prototype), "delete", this).call(this, s1);

      Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ClassList.prototype), "add", this).call(this, s2);

      this._update();
    }
  }, {
    key: "contains",
    value: function contains(s) {
      return Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(ClassList.prototype), "has", this).call(this, s);
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.value;
    }
  }, {
    key: "_update",
    value: function _update() {
      this.el.className = this.value;
    }
  }, {
    key: "value",
    get: function get() {
      return Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(this).join(' ');
    }
  }]);

  return ClassList;
}( /*#__PURE__*/Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_wrapNativeSuper__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(Set));
/* eslint-disable no-dupe-class-members */


var TaroElement = /*#__PURE__*/function (_TaroNode2) {
  Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(TaroElement, _TaroNode2);

  var _super4 = Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(TaroElement);

  function TaroElement(nodeType, nodeName) {
    var _this9;

    Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(this, TaroElement);

    _this9 = _super4.call(this, nodeType || 1
    /* ELEMENT_NODE */
    , nodeName);
    _this9.props = {};
    _this9.dataset = EMPTY_OBJ;
    _this9.tagName = nodeName.toUpperCase();
    _this9.style = new Style(Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"])(_this9));
    warn(_this9.tagName === 'MAP' && "swan" === 'weapp', '微信小程序 map 组件的 `setting` 属性需要传递一个默认值。详情：\n https://developers.weixin.qq.com/miniprogram/dev/component/map.html');
    return _this9;
  }

  Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(TaroElement, [{
    key: "hasAttribute",
    value: function hasAttribute(qualifiedName) {
      return !isUndefined(this.props[qualifiedName]);
    }
  }, {
    key: "hasAttributes",
    value: function hasAttributes() {
      return this.attributes.length > 0;
    }
  }, {
    key: "focus",
    value: function focus() {
      this.setAttribute('focus', true);
    }
  }, {
    key: "blur",
    value: function blur() {
      this.setAttribute('focus', false);
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(qualifiedName, value) {
      var _a;

      warn(isString(value) && value.length > PROPERTY_THRESHOLD, "\u5143\u7D20 ".concat(this.nodeName, " \u7684 \u5C5E\u6027 ").concat(qualifiedName, " \u7684\u503C\u6570\u636E\u91CF\u8FC7\u5927\uFF0C\u53EF\u80FD\u4F1A\u5F71\u54CD\u6E32\u67D3\u6027\u80FD\u3002\u8003\u8651\u964D\u4F4E\u56FE\u7247\u8F6C\u4E3A base64 \u7684\u9608\u503C\u6216\u5728 CSS \u4E2D\u4F7F\u7528 base64\u3002"));

      if (qualifiedName === 'style') {
        this.style.cssText = value;
        qualifiedName = "st"
        /* Style */
        ;
      } else if (qualifiedName === 'id') {
        eventSource.delete(this.uid);
        this.props[qualifiedName] = this.uid = value;
        eventSource.set(value, this);
        qualifiedName = 'uid';
      } else {
        this.props[qualifiedName] = value;

        if (qualifiedName === 'class') {
          qualifiedName = "cl"
          /* Class */
          ;
        }

        if (qualifiedName.startsWith('data-')) {
          if (this.dataset === EMPTY_OBJ) {
            this.dataset = Object.create(null);
          }

          this.dataset[toCamelCase(qualifiedName.replace(/^data-/, ''))] = value;
        }
      }

      (_a = CurrentReconciler.setAttribute) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, this, qualifiedName, value);
      this.enqueueUpdate({
        path: "".concat(this._path, ".").concat(toCamelCase(qualifiedName)),
        value: value
      });
    }
  }, {
    key: "removeAttribute",
    value: function removeAttribute(qualifiedName) {
      var _a;

      if (qualifiedName === 'style') {
        this.style.cssText = '';
      } else {
        delete this.props[qualifiedName];
      }

      (_a = CurrentReconciler.removeAttribute) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, this, qualifiedName);
      this.enqueueUpdate({
        path: "".concat(this._path, ".").concat(toCamelCase(qualifiedName)),
        value: ''
      });
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(qualifiedName) {
      var attr = qualifiedName === 'style' ? this.style.cssText : this.props[qualifiedName];
      return attr !== null && attr !== void 0 ? attr : '';
    }
  }, {
    key: "getElementsByTagName",
    value: function getElementsByTagName(tagName) {
      var _this10 = this;

      return treeToArray(this, function (el) {
        return el.nodeName === tagName || tagName === '*' && _this10 !== el;
      });
    }
  }, {
    key: "getElementsByClassName",
    value: function getElementsByClassName(className) {
      return treeToArray(this, function (el) {
        var classList = el.classList;
        var classNames = className.trim().split(/\s+/);
        return classNames.every(function (c) {
          return classList.has(c);
        });
      });
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      var cancelable = event.cancelable;
      var listeners = this.__handlers[event.type];

      if (!isArray(listeners)) {
        return;
      }

      for (var i = listeners.length; i--;) {
        var listener = listeners[i];
        var result = void 0;

        if (listener._stop) {
          listener._stop = false;
        } else {
          result = listener.call(this, event);
        }

        if ((result === false || event._end) && cancelable) {
          event.defaultPrevented = true;
        }

        if (event._end && event._stop) {
          break;
        }
      }

      if (event._stop) {
        this._stopPropagation(event);
      } else {
        event._stop = true;
      }

      return listeners != null;
    }
  }, {
    key: "_stopPropagation",
    value: function _stopPropagation(event) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      var target = this; // eslint-disable-next-line no-cond-assign

      while (target = target.parentNode) {
        var listeners = target.__handlers[event.type];

        if (!isArray(listeners)) {
          continue;
        }

        for (var i = listeners.length; i--;) {
          var l = listeners[i];
          l._stop = true;
        }
      }
    }
  }, {
    key: "id",
    get: function get() {
      return this.getAttribute('id');
    },
    set: function set(val) {
      this.setAttribute('id', val);
    }
  }, {
    key: "classList",
    get: function get() {
      return new ClassList(this.className, this);
    }
  }, {
    key: "className",
    get: function get() {
      return this.getAttribute('class') || '';
    },
    set: function set(val) {
      this.setAttribute('class', val);
    }
  }, {
    key: "cssText",
    get: function get() {
      return this.getAttribute('style') || '';
    }
  }, {
    key: "children",
    get: function get() {
      return this.childNodes.filter(isElement);
    }
  }, {
    key: "attributes",
    get: function get() {
      var _this11 = this;

      var propKeys = Object.keys(this.props);
      var style = this.style.cssText;
      var attrs = propKeys.map(function (p) {
        return {
          name: p,
          value: _this11.props[p]
        };
      });
      return attrs.concat(style ? {
        name: 'style',
        value: style
      } : []);
    }
  }, {
    key: "textContent",
    get: function get() {
      var text = '';

      for (var i = 0; i < this.childNodes.length; i++) {
        var element = this.childNodes[i];
        text += element.textContent;
      }

      return text;
    },
    set: function set(text) {
      Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_set__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(TaroElement.prototype), "textContent", text, this, true);
    }
  }]);

  return TaroElement;
}(TaroNode);

var FormElement = /*#__PURE__*/function (_TaroElement) {
  Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(FormElement, _TaroElement);

  var _super5 = Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(FormElement);

  function FormElement() {
    Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(this, FormElement);

    return _super5.apply(this, arguments);
  }

  Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(FormElement, [{
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      if ((event.type === 'input' || event.type === 'change') && event.mpEvent) {
        var val = event.mpEvent.detail.value;

        if (isNumber(val) || isArray(val)) {
          val = JSON.stringify(val);
        }

        if (isString(val) || isBoolean(val)) {
          this.props.value = val;
        }
      }

      return Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(FormElement.prototype), "dispatchEvent", this).call(this, event);
    }
  }, {
    key: "value",
    get: function get() {
      // eslint-disable-next-line dot-notation
      var val = this.props['value'];
      return val == null ? '' : val;
    },
    set: function set(val) {
      if (isNumber(val) || isArray(val)) {
        val = JSON.stringify(val);
      }

      this.setAttribute('value', val);
    }
  }]);

  return FormElement;
}(TaroElement);

var Performance = /*#__PURE__*/function () {
  function Performance() {
    Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(this, Performance);

    this.recorder = new Map();
  }

  Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(Performance, [{
    key: "start",
    value: function start(id) {
      if (!options.debug) {
        return;
      }

      this.recorder.set(id, Date.now());
    }
  }, {
    key: "stop",
    value: function stop(id) {
      if (!options.debug) {
        return;
      }

      var now = Date.now();
      var prev = this.recorder.get(id);
      var time = now - prev; // eslint-disable-next-line no-console

      console.log("".concat(id, " \u65F6\u957F\uFF1A ").concat(time, "ms"));
    }
  }]);

  return Performance;
}();

var perf = new Performance();

var TaroRootElement = /*#__PURE__*/function (_TaroElement2) {
  Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(TaroRootElement, _TaroElement2);

  var _super6 = Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(TaroRootElement);

  function TaroRootElement() {
    var _this12;

    Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(this, TaroRootElement);

    _this12 = _super6.call(this, 1
    /* ELEMENT_NODE */
    , 'root');
    _this12.pendingUpdate = false;
    _this12.updatePayloads = [];
    _this12.pendingFlush = false;
    _this12.updateCallbacks = [];
    _this12.ctx = null;
    return _this12;
  }

  Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(TaroRootElement, [{
    key: "enqueueUpdate",
    value: function enqueueUpdate(payload) {
      this.updatePayloads.push(payload);

      if (this.pendingUpdate || this.ctx === null) {
        return;
      }

      this.performUpdate();
    }
  }, {
    key: "performUpdate",
    value: function performUpdate() {
      var _this13 = this;

      var initRender = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var prerender = arguments.length > 1 ? arguments[1] : undefined;
      this.pendingUpdate = true;
      var ctx = this.ctx;
      setTimeout(function () {
        var _a, _b;

        perf.start(SET_DATA);
        var data = Object.create(null);
        var resetPaths = new Set(initRender ? ['root.cn.[0]', 'root.cn[0]'] : []);

        while (_this13.updatePayloads.length > 0) {
          var _this13$updatePayload = _this13.updatePayloads.shift(),
              path = _this13$updatePayload.path,
              value = _this13$updatePayload.value;

          if (path.endsWith("cn"
          /* Childnodes */
          )) {
            resetPaths.add(path);
          }

          data[path] = value;
        }

        var _loop2 = function _loop2(_path) {
          resetPaths.forEach(function (p) {
            // 已经重置了数组，就不需要分别再设置了
            if (_path.includes(p) && _path !== p) {
              delete data[_path];
            }
          });
          var value = data[_path];

          if (isFunction(value)) {
            data[_path] = value();
          }
        };

        for (var _path in data) {
          _loop2(_path);
        }

        (_a = CurrentReconciler.prepareUpdateData) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, data, _this13);

        if (initRender) {
          (_b = CurrentReconciler.appendInitialPage) === null || _b === void 0 ? void 0 : _b.call(CurrentReconciler, data, _this13);
        }

        if (isFunction(prerender)) {
          prerender(data);
        } else {
          _this13.pendingUpdate = false;
          ctx.setData(data, function () {
            perf.stop(SET_DATA);

            if (!_this13.pendingFlush) {
              _this13.flushUpdateCallback();
            }

            if (initRender) {
              perf.stop(PAGE_INIT);
            }
          });
        }
      }, 0);
    }
  }, {
    key: "enqueueUpdateCallbak",
    value: function enqueueUpdateCallbak(cb, ctx) {
      this.updateCallbacks.push(function () {
        ctx ? cb.call(ctx) : cb();
      });
    }
  }, {
    key: "flushUpdateCallback",
    value: function flushUpdateCallback() {
      this.pendingFlush = false;
      var copies = this.updateCallbacks.slice(0);
      this.updateCallbacks.length = 0;

      for (var i = 0; i < copies.length; i++) {
        copies[i]();
      }
    }
  }, {
    key: "_path",
    get: function get() {
      return 'root';
    }
  }, {
    key: "_root",
    get: function get() {
      return this;
    }
  }]);

  return TaroRootElement;
}(TaroElement);

var isBrowser = typeof document !== 'undefined' && !!document.scripts;
var doc = isBrowser ? document : EMPTY_OBJ;
var win = isBrowser ? window : EMPTY_OBJ;

var TaroDocument = /*#__PURE__*/function (_TaroElement3) {
  Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(TaroDocument, _TaroElement3);

  var _super7 = Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(TaroDocument);

  function TaroDocument() {
    Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(this, TaroDocument);

    return _super7.call(this, 9
    /* DOCUMENT_NODE */
    , '#document');
  }

  Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(TaroDocument, [{
    key: "createElement",
    value: function createElement(type) {
      if (type === 'root') {
        return new TaroRootElement();
      }

      if (controlledComponent.has(type)) {
        return new FormElement(1
        /* ELEMENT_NODE */
        , type);
      }

      return new TaroElement(1
      /* ELEMENT_NODE */
      , type);
    }
  }, {
    key: "createTextNode",
    value: function createTextNode(text) {
      return new TaroText(text);
    }
  }, {
    key: "getElementById",
    value: function getElementById(id) {
      var el = eventSource.get(id);
      return isUndefined(el) ? null : el;
    }
  }, {
    key: "getElementsByTagName",
    value: function getElementsByTagName(tagName) {
      var _this14 = this;

      var elements = [];
      eventSource.forEach(function (node) {
        if (node.nodeType !== 1
        /* ELEMENT_NODE */
        ) {
            return;
          }

        if (node.nodeName === tagName || tagName === '*' && node !== _this14) {
          elements.push(node);
        }
      });
      return elements;
    }
  }, {
    key: "querySelector",
    value: function querySelector(query) {
      // 为了 Vue3 的乞丐版实现
      if (/^#/.test(query)) {
        return this.getElementById(query.slice(1));
      }

      return null;
    } // @TODO: @PERF: 在 hydrate 移除掉空的 node

  }, {
    key: "createComment",
    value: function createComment() {
      return new TaroText('');
    }
  }]);

  return TaroDocument;
}(TaroElement);

function createDocument() {
  var doc = new TaroDocument();
  doc.appendChild(doc.documentElement = doc.createElement('html'));
  doc.documentElement.appendChild(doc.head = doc.createElement('head'));
  var body = doc.createElement('body');
  doc.documentElement.appendChild(body);
  doc.body = body;
  var app = doc.createElement('app');
  app.id = 'app';
  var container = doc.createElement('container'); // 多包一层主要为了兼容 vue

  container.appendChild(app);
  doc.documentElement.lastChild.appendChild(container);
  doc.createEvent = createEvent;
  return doc;
}

var document$1 = isBrowser ? doc : createDocument();
var machine = 'Macintosh';
var arch = 'Intel Mac OS X 10_14_5';
var engine = 'AppleWebKit/534.36 (KHTML, like Gecko) NodeJS/v4.1.0 Chrome/76.0.3809.132 Safari/534.36';
var navigator = isBrowser ? win.navigator : {
  appCodeName: 'Mozilla',
  appName: 'Netscape',
  appVersion: '5.0 (' + machine + '; ' + arch + ') ' + engine,
  cookieEnabled: true,
  mimeTypes: [],
  onLine: true,
  platform: 'MacIntel',
  plugins: [],
  product: 'Taro',
  productSub: '20030107',
  userAgent: 'Mozilla/5.0 (' + machine + '; ' + arch + ') ' + engine,
  vendor: 'Joyent',
  vendorSub: ''
}; // https://github.com/myrne/performance-now

var now;

(function () {
  var loadTime;

  if (typeof performance !== 'undefined' && performance !== null && performance.now) {
    now = function now() {
      return performance.now();
    };
  } else if (Date.now) {
    now = function now() {
      return Date.now() - loadTime;
    };

    loadTime = Date.now();
  } else {
    now = function now() {
      return new Date().getTime() - loadTime;
    };

    loadTime = new Date().getTime();
  }
})();

var lastTime = 0; // https://gist.github.com/paulirish/1579671
// https://gist.github.com/jalbam/5fe05443270fa6d8136238ec72accbc0

var raf = typeof requestAnimationFrame !== 'undefined' && requestAnimationFrame !== null ? requestAnimationFrame : function (callback) {
  var _now = now();

  var nextTime = Math.max(lastTime + 16, _now); // First time will execute it immediately but barely noticeable and performance is gained.

  return setTimeout(function () {
    callback(lastTime = nextTime);
  }, nextTime - _now);
};
var caf = typeof cancelAnimationFrame !== 'undefined' && cancelAnimationFrame !== null ? cancelAnimationFrame : clearTimeout;

function getComputedStyle(element) {
  return new Style(element);
}

var window$1 = isBrowser ? win : {
  navigator: navigator,
  document: document$1
};

if (true) {
  window$1.requestAnimationFrame = raf;
  window$1.cancelAnimationFrame = caf;
  window$1.Date = Date;
  window$1.setTimeout = setTimeout;
  window$1.getComputedStyle = getComputedStyle;
}

var Current = {
  app: null,
  router: null,
  page: null
};

var getCurrentInstance = function getCurrentInstance() {
  return Current;
};

var Events = /*#__PURE__*/function () {
  function Events(opts) {
    Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(this, Events);

    if (typeof opts !== 'undefined' && opts.callbacks) {
      this.callbacks = opts.callbacks;
    } else {
      this.callbacks = {};
    }
  }

  Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(Events, [{
    key: "on",
    value: function on(eventName, callback, context) {
      var event, node, tail, list;

      if (!callback) {
        return this;
      }

      eventName = eventName.split(Events.eventSplitter);
      var calls = this.callbacks;

      while (event = eventName.shift()) {
        list = calls[event];
        node = list ? list.tail : {};
        node.next = tail = {};
        node.context = context;
        node.callback = callback;
        calls[event] = {
          tail: tail,
          next: list ? list.next : node
        };
      }

      return this;
    }
  }, {
    key: "once",
    value: function once(events, callback, context) {
      var _this15 = this;

      var wrapper = function wrapper() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        callback.apply(_this15, args);

        _this15.off(events, wrapper, context);
      };

      this.on(events, wrapper, context);
      return this;
    }
  }, {
    key: "off",
    value: function off(events, callback, context) {
      var event, calls, node, tail, cb, ctx;

      if (!(calls = this.callbacks)) {
        return this;
      }

      if (!(events || callback || context)) {
        delete this.callbacks;
        return this;
      }

      events = events ? events.split(Events.eventSplitter) : Object.keys(calls);

      while (event = events.shift()) {
        node = calls[event];
        delete calls[event];

        if (!node || !(callback || context)) {
          continue;
        }

        tail = node.tail;

        while ((node = node.next) !== tail) {
          cb = node.callback;
          ctx = node.context;

          if (callback && cb !== callback || context && ctx !== context) {
            this.on(event, cb, ctx);
          }
        }
      }

      return this;
    }
  }, {
    key: "trigger",
    value: function trigger(events) {
      var event, node, calls, tail;

      if (!(calls = this.callbacks)) {
        return this;
      }

      events = events.split(Events.eventSplitter);
      var rest = [].slice.call(arguments, 1);

      while (event = events.shift()) {
        if (node = calls[event]) {
          tail = node.tail;

          while ((node = node.next) !== tail) {
            node.callback.apply(node.context || this, rest);
          }
        }
      }

      return this;
    }
  }]);

  return Events;
}();

Events.eventSplitter = /\s+/;
var eventCenter;

if (false) {} else {
  eventCenter = new Events();
}
/* eslint-disable dot-notation */


var instances = new Map();

function injectPageInstance(inst, id) {
  var _a;

  (_a = CurrentReconciler.mergePageInstance) === null || _a === void 0 ? void 0 : _a.call(CurrentReconciler, instances.get(id), inst);
  instances.set(id, inst);
}

function getPageInstance(id) {
  return instances.get(id);
}

function addLeadingSlash(path) {
  if (path == null) {
    return '';
  }

  return path.charAt(0) === '/' ? path : '/' + path;
}

var pageId = incrementId();

function safeExecute(path, lifecycle) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  var instance = instances.get(path);

  if (instance == null) {
    return;
  }

  var func = CurrentReconciler.getLifecyle(instance, lifecycle);

  if (isArray(func)) {
    var res = func.map(function (fn) {
      return fn.apply(instance, args);
    });
    return res[0];
  }

  if (!isFunction(func)) {
    return;
  }

  return func.apply(instance, args);
}

function stringify(obj) {
  if (obj == null) {
    return '';
  }

  var path = Object.keys(obj).map(function (key) {
    return key + '=' + obj[key];
  }).join('&');
  return path === '' ? path : '?' + path;
}

function getPath(id, options) {
  var path = id;

  if (!isBrowser) {
    path = id + stringify(options);
  }

  return path;
}

function getOnReadyEventKey(path) {
  return path + '.' + 'onReady';
}

function getOnShowEventKey(path) {
  return path + '.' + 'onShow';
}

function getOnHideEventKey(path) {
  return path + '.' + 'onHide';
}

function createPageConfig(component, pageName, data, pageConfig) {
  var _a, _b;

  var id = pageName !== null && pageName !== void 0 ? pageName : "taro_page_".concat(pageId()); // 小程序 Page 构造器是一个傲娇小公主，不能把复杂的对象挂载到参数上

  var pageElement = null;
  var config = {
    onLoad: function onLoad(options, cb) {
      var _this16 = this;

      perf.start(PAGE_INIT);
      Current.page = this;
      this.config = pageConfig || {};

      if (this.options == null) {
        this.options = options;
      }

      var path = getPath(id, options);
      Current.router = {
        params: options,
        path: addLeadingSlash(this.route || this.__route__),
        onReady: getOnReadyEventKey(id),
        onShow: getOnShowEventKey(id),
        onHide: getOnHideEventKey(id)
      };
      Current.app.mount(component, path, function () {
        pageElement = document$1.getElementById(path);
        ensure(pageElement !== null, '没有找到页面实例。');
        safeExecute(path, 'onLoad', options);

        if (!isBrowser) {
          pageElement.ctx = _this16;
          pageElement.performUpdate(true, cb);
        }
      });
    },
    onReady: function onReady() {
      var path = getPath(id, this.options);
      raf(function () {
        eventCenter.trigger(getOnReadyEventKey(id));
      });
      safeExecute(path, 'onReady');
    },
    onUnload: function onUnload() {
      var path = getPath(id, this.options);
      Current.app.unmount(path, function () {
        instances.delete(path);

        if (pageElement) {
          pageElement.ctx = null;
        }
      });
    },
    onShow: function onShow() {
      Current.page = this;
      this.config = pageConfig || {};
      var path = getPath(id, this.options);
      Current.router = {
        params: this.options,
        path: addLeadingSlash(this.route || this.__route__),
        onReady: getOnReadyEventKey(id),
        onShow: getOnShowEventKey(id),
        onHide: getOnHideEventKey(id)
      };
      raf(function () {
        eventCenter.trigger(getOnShowEventKey(id));
      });
      safeExecute(path, 'onShow');
    },
    onHide: function onHide() {
      Current.page = null;
      Current.router = null;
      var path = getPath(id, this.options);
      raf(function () {
        eventCenter.trigger(getOnHideEventKey(id));
      });
      safeExecute(path, 'onHide');
    },
    onPullDownRefresh: function onPullDownRefresh() {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onPullDownRefresh');
    },
    onReachBottom: function onReachBottom() {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onReachBottom');
    },
    onPageScroll: function onPageScroll(options) {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onPageScroll', options);
    },
    onResize: function onResize(options) {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onResize', options);
    },
    onTabItemTap: function onTabItemTap(options) {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onTabItemTap', options);
    },
    onTitleClick: function onTitleClick() {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onTitleClick');
    },
    onOptionMenuClick: function onOptionMenuClick() {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onOptionMenuClick');
    },
    onPopMenuClick: function onPopMenuClick() {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onPopMenuClick');
    },
    onPullIntercept: function onPullIntercept() {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onPullIntercept');
    },
    onAddToFavorites: function onAddToFavorites() {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onAddToFavorites');
    }
  }; // onShareAppMessage 和 onShareTimeline 一样，会影响小程序右上方按钮的选项，因此不能默认注册。

  if (component.onShareAppMessage || ((_a = component.prototype) === null || _a === void 0 ? void 0 : _a.onShareAppMessage) || component.enableShareAppMessage) {
    config.onShareAppMessage = function (options) {
      var target = options.target;

      if (target != null) {
        var _id = target.id;
        var element = document$1.getElementById(_id);

        if (element != null) {
          options.target.dataset = element.dataset;
        }
      }

      var path = getPath(id, this.options);
      return safeExecute(path, 'onShareAppMessage', options);
    };
  }

  if (component.onShareTimeline || ((_b = component.prototype) === null || _b === void 0 ? void 0 : _b.onShareTimeline) || component.enableShareTimeline) {
    config.onShareTimeline = function () {
      var path = getPath(id, this.options);
      return safeExecute(path, 'onShareTimeline');
    };
  }

  config.eh = eventHandler;

  if (!isUndefined(data)) {
    config.data = data;
  }

  if (isBrowser) {
    config.path = id;
  }

  return config;
}

function createComponentConfig(component, componentName, data) {
  var _a, _b, _c;

  var id = componentName !== null && componentName !== void 0 ? componentName : "taro_component_".concat(pageId());
  var componentElement = null;
  var config = {
    attached: function attached() {
      var _this17 = this;

      perf.start(PAGE_INIT);
      var path = getPath(id, {
        id: this.getPageId()
      });
      Current.app.mount(component, path, function () {
        componentElement = document$1.getElementById(path);
        ensure(componentElement !== null, '没有找到组件实例。');
        safeExecute(path, 'onLoad');

        if (!isBrowser) {
          componentElement.ctx = _this17;
          componentElement.performUpdate(true);
        }
      });
    },
    detached: function detached() {
      var path = getPath(id, {
        id: this.getPageId()
      });
      Current.app.unmount(path, function () {
        instances.delete(path);

        if (componentElement) {
          componentElement.ctx = null;
        }
      });
    },
    pageLifetimes: {
      show: function show() {
        safeExecute(id, 'onShow');
      },
      hide: function hide() {
        safeExecute(id, 'onHide');
      }
    },
    methods: {
      eh: eventHandler
    }
  };

  if (!isUndefined(data)) {
    config.data = data;
  }

  config['options'] = (_a = component === null || component === void 0 ? void 0 : component['options']) !== null && _a !== void 0 ? _a : EMPTY_OBJ;
  config['externalClasses'] = (_b = component === null || component === void 0 ? void 0 : component['externalClasses']) !== null && _b !== void 0 ? _b : EMPTY_OBJ;
  config['behaviors'] = (_c = component === null || component === void 0 ? void 0 : component['behaviors']) !== null && _c !== void 0 ? _c : EMPTY_OBJ;
  return config;
}

function createRecursiveComponentConfig() {
  return {
    properties: {
      i: {
        type: Object,
        value: Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"])({}, "nn"
        /* NodeName */
        , 'view')
      },
      l: {
        type: String,
        value: ''
      }
    },
    observers: {
      i: function i(val) {
        warn(val["nn"
        /* NodeName */
        ] === '#text', "\u8BF7\u5728\u6B64\u5143\u7D20\u5916\u518D\u5957\u4E00\u5C42\u975E Text \u5143\u7D20\uFF1A<text>".concat(val["v"
        /* Text */
        ], "</text>\uFF0C\u8BE6\u60C5\uFF1Ahttps://github.com/NervJS/taro/issues/6054"));
      }
    },
    options: {
      addGlobalClass: true
    },
    methods: {
      eh: eventHandler
    }
  };
}

function isClassComponent(R, component) {
  var _a;

  return isFunction(component.render) || !!((_a = component.prototype) === null || _a === void 0 ? void 0 : _a.isReactComponent) || component.prototype instanceof R.Component; // compat for some others react-like library
}

function connectReactPage(R, id) {
  var h = R.createElement;
  return function (component) {
    // eslint-disable-next-line dot-notation
    var isReactComponent = isClassComponent(R, component);

    var inject = function inject(node) {
      return node && injectPageInstance(node, id);
    };

    var refs = isReactComponent ? {
      ref: inject
    } : {
      forwardedRef: inject,
      // 兼容 react-redux 7.20.1+
      reactReduxForwardedRef: inject
    };

    if (PageContext === EMPTY_OBJ) {
      PageContext = R.createContext('');
    }

    return /*#__PURE__*/function (_R$Component) {
      Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(Page, _R$Component);

      var _super8 = Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(Page);

      function Page() {
        var _this18;

        Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(this, Page);

        _this18 = _super8.apply(this, arguments);
        _this18.state = {
          hasError: false
        };
        return _this18;
      }

      Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(Page, [{
        key: "componentDidCatch",
        // React 16 uncaught error 会导致整个应用 crash，
        // 目前把错误缩小到页面
        value: function componentDidCatch(error, info) {
          console.warn(error);
          console.error(info.componentStack);
        }
      }, {
        key: "render",
        value: function render() {
          var children = this.state.hasError ? [] : h(PageContext.Provider, {
            value: id
          }, h(component, Object.assign(Object.assign({}, this.props), refs)));

          if (isBrowser) {
            return h('div', {
              id: id,
              className: 'taro_page'
            }, children);
          }

          return h('root', {
            id: id
          }, children);
        }
      }], [{
        key: "getDerivedStateFromError",
        value: function getDerivedStateFromError(error) {
          console.warn(error);
          return {
            hasError: true
          };
        }
      }]);

      return Page;
    }(R.Component);
  };
} // 初始值设置为 any 主要是为了过 TS 的校验


var R = EMPTY_OBJ;
var PageContext = EMPTY_OBJ;
var ReactDOM;

function setReconciler() {
  var hostConfig = {
    getLifecyle: function getLifecyle(instance, lifecycle) {
      if (lifecycle === 'onShow') {
        lifecycle = 'componentDidShow';
      } else if (lifecycle === 'onHide') {
        lifecycle = 'componentDidHide';
      }

      return instance[lifecycle];
    },
    mergePageInstance: function mergePageInstance(prev, next) {
      if (!prev || !next) return; // 子组件使用 lifecycle hooks 注册了生命周期后，会存在 prev，里面是注册的生命周期回调。

      Object.keys(prev).forEach(function (item) {
        if (isFunction(next[item])) {
          next[item] = [next[item]].concat(Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(prev[item]));
        } else {
          next[item] = [].concat(Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(next[item] || []), Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(prev[item]));
        }
      });
    }
  };

  if (isBrowser) {
    hostConfig.createPullDownComponent = function (el, _, R) {
      var isReactComponent = isClassComponent(R, el);
      return R.forwardRef(function (props, ref) {
        var newProps = Object.assign({}, props);

        if (isReactComponent) {
          newProps.ref = ref;
        }

        return R.createElement('taro-pull-to-refresh', null, R.createElement(el, newProps));
      });
    };

    hostConfig.findDOMNode = function (inst) {
      return ReactDOM.findDOMNode(inst);
    };
  }

  options.reconciler(hostConfig);
}

var pageKeyId = incrementId();

function createReactApp(App, react, reactdom, config) {
  R = react;
  ReactDOM = reactdom;
  ensure(!!ReactDOM, '构建 React/Nerv 项目请把 process.env.FRAMEWORK 设置为 \'react\'/\'nerv\' ');
  var ref = R.createRef();
  var isReactComponent = isClassComponent(R, App);
  setReconciler();
  var wrapper;

  var AppWrapper = /*#__PURE__*/function (_R$Component2) {
    Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"])(AppWrapper, _R$Component2);

    var _super9 = Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"])(AppWrapper);

    function AppWrapper() {
      var _this19;

      Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(this, AppWrapper);

      _this19 = _super9.apply(this, arguments); // run createElement() inside the render function to make sure that owner is right

      _this19.pages = [];
      _this19.elements = [];
      return _this19;
    }

    Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"])(AppWrapper, [{
      key: "mount",
      value: function mount(component, id, cb) {
        var key = id + pageKeyId();

        var page = function page() {
          return R.createElement(component, {
            key: key,
            tid: id
          });
        };

        this.pages.push(page);
        this.forceUpdate(cb);
      }
    }, {
      key: "unmount",
      value: function unmount(id, cb) {
        for (var i = 0; i < this.elements.length; i++) {
          var element = this.elements[i];

          if (element.props.tid === id) {
            this.elements.splice(i, 1);
            break;
          }
        }

        this.forceUpdate(cb);
      }
    }, {
      key: "render",
      value: function render() {
        while (this.pages.length > 0) {
          var page = this.pages.pop();
          this.elements.push(page());
        }

        var props = null;

        if (isReactComponent) {
          props = {
            ref: ref
          };
        }

        return R.createElement(App, props, isBrowser ? R.createElement('div', null, this.elements.slice()) : this.elements.slice());
      }
    }]);

    return AppWrapper;
  }(R.Component);

  var app = Object.create({
    render: function render(cb) {
      wrapper.forceUpdate(cb);
    },
    mount: function mount(component, id, cb) {
      var page = connectReactPage(R, id)(component);
      wrapper.mount(page, id, cb);
    },
    unmount: function unmount(id, cb) {
      wrapper.unmount(id, cb);
    }
  }, {
    config: {
      writable: true,
      enumerable: true,
      configurable: true,
      value: config
    },
    onLaunch: {
      enumerable: true,
      writable: true,
      value: function value(options) {
        // eslint-disable-next-line react/no-render-return-value
        wrapper = ReactDOM.render(R.createElement(AppWrapper), document$1.getElementById('app'));
        var app = ref.current;
        Current.router = Object.assign({
          params: options === null || options === void 0 ? void 0 : options.query
        }, options);

        if (app != null && isFunction(app.onLaunch)) {
          app.onLaunch(options);
        }
      }
    },
    onShow: {
      enumerable: true,
      writable: true,
      value: function value(options) {
        var app = ref.current;
        Current.router = Object.assign({
          params: options === null || options === void 0 ? void 0 : options.query
        }, options);

        if (app != null && isFunction(app.componentDidShow)) {
          app.componentDidShow(options);
        }
      }
    },
    onHide: {
      enumerable: true,
      writable: true,
      value: function value(options) {
        var app = ref.current;

        if (app != null && isFunction(app.componentDidHide)) {
          app.componentDidHide(options);
        }
      }
    }
  });
  Current.app = app;
  return Current.app;
}

function connectVuePage(Vue, id) {
  return function (component) {
    var injectedPage = Vue.extend({
      props: {
        tid: String
      },
      mixins: [component, {
        created: function created() {
          injectPageInstance(this, id);
        }
      }]
    });
    var options = {
      render: function render(h) {
        return h(isBrowser ? 'div' : 'root', {
          attrs: {
            id: id,
            class: isBrowser ? 'taro_page' : ''
          }
        }, [h(injectedPage, {
          props: {
            tid: id
          }
        })]);
      }
    };
    return options;
  };
}

function setReconciler$1() {
  var hostConfig = {
    getLifecyle: function getLifecyle(instance, lifecycle) {
      return instance.$options[lifecycle];
    },
    removeAttribute: function removeAttribute(dom, qualifiedName) {
      var compName = capitalize(toCamelCase(dom.tagName.toLowerCase()));

      if (compName in internalComponents && hasOwn(internalComponents[compName], qualifiedName) && isBooleanStringLiteral(internalComponents[compName][qualifiedName])) {
        // avoid attribute being removed because set false value in vue
        dom.setAttribute(qualifiedName, false);
      } else {
        delete dom.props[qualifiedName];
      }
    }
  };

  if (isBrowser) {
    hostConfig.createPullDownComponent = function (el, path, vue) {
      var injectedPage = vue.extend({
        props: {
          tid: String
        },
        mixins: [el, {
          created: function created() {
            injectPageInstance(this, path);
          }
        }]
      });
      var options = {
        name: 'PullToRefresh',
        render: function render(h) {
          return h('taro-pull-to-refresh', {
            class: ['hydrated']
          }, [h(injectedPage, this.$slots.default)]);
        }
      };
      return options;
    };

    hostConfig.findDOMNode = function (el) {
      return el.$el;
    };
  }

  options.reconciler(hostConfig);
}

var Vue;

function createVueApp(App, vue, config) {
  Vue = vue;
  ensure(!!Vue, '构建 Vue 项目请把 process.env.FRAMEWORK 设置为 \'vue\'');
  setReconciler$1();
  Vue.config.getTagNamespace = noop;
  var elements = [];
  var pages = [];
  var appInstance;
  var wrapper = new Vue({
    render: function render(h) {
      while (pages.length > 0) {
        var page = pages.pop();
        elements.push(page(h));
      }

      return h(App.$options, {
        ref: 'app'
      }, elements.slice());
    },
    methods: {
      mount: function mount(component, id, cb) {
        pages.push(function (h) {
          return h(component, {
            key: id
          });
        });
        this.updateSync(cb);
      },
      updateSync: function updateSync(cb) {
        this._update(this._render(), false);

        this.$children.forEach(function (child) {
          return child._update(child._render(), false);
        });
        cb();
      },
      unmount: function unmount(id, cb) {
        for (var i = 0; i < elements.length; i++) {
          var element = elements[i];

          if (element.key === id) {
            elements.splice(i, 1);
            break;
          }
        }

        this.updateSync(cb);
      }
    }
  });
  var app = Object.create({
    mount: function mount(component, id, cb) {
      var page = connectVuePage(Vue, id)(component);
      wrapper.mount(page, id, cb);
    },
    unmount: function unmount(id, cb) {
      wrapper.unmount(id, cb);
    }
  }, {
    config: {
      writable: true,
      enumerable: true,
      configurable: true,
      value: config
    },
    onLaunch: {
      writable: true,
      enumerable: true,
      value: function value(options) {
        wrapper.$mount(document$1.getElementById('app'));
        appInstance = wrapper.$refs.app;
        Current.router = Object.assign({
          params: options === null || options === void 0 ? void 0 : options.query
        }, options);

        if (appInstance != null && isFunction(appInstance.$options.onLaunch)) {
          appInstance.$options.onLaunch.call(appInstance, options);
        }
      }
    },
    onShow: {
      writable: true,
      enumerable: true,
      value: function value(options) {
        Current.router = Object.assign({
          params: options === null || options === void 0 ? void 0 : options.query
        }, options);

        if (appInstance != null && isFunction(appInstance.$options.onShow)) {
          appInstance.$options.onShow.call(appInstance, options);
        }
      }
    },
    onHide: {
      writable: true,
      enumerable: true,
      value: function value(options) {
        if (appInstance != null && isFunction(appInstance.$options.onHide)) {
          appInstance.$options.onHide.call(appInstance, options);
        }
      }
    }
  });
  Current.app = app;
  return Current.app;
}

function createVue3Page(h, id) {
  return function (component) {
    // vue3 组件 created 时机比小程序页面 onShow 慢，这里先插入一个实例以响应初始化时的小程序生命周期调用
    injectPageInstance({
      $options: component
    }, id);
    var inject = {
      props: {
        tid: String
      },
      created: function created() {
        injectPageInstance(this, id);
      }
    };
    component.mixins = isArray(component.mixins) ? component.mixins.push(inject) : [inject];
    return h(isBrowser ? 'div' : 'root', {
      key: id,
      id: id,
      class: isBrowser ? 'taro_page' : ''
    }, [h(component, {
      tid: id
    })]);
  };
}

function setReconciler$2() {
  var hostConfig = {
    getLifecyle: function getLifecyle(instance, lifecycle) {
      return instance.$options[lifecycle];
    },
    removeAttribute: function removeAttribute(dom, qualifiedName) {
      var compName = capitalize(toCamelCase(dom.tagName.toLowerCase()));

      if (compName in internalComponents && hasOwn(internalComponents[compName], qualifiedName) && isBooleanStringLiteral(internalComponents[compName][qualifiedName])) {
        // avoid attribute being removed because set false value in vue
        dom.setAttribute(qualifiedName, false);
      } else {
        delete dom.props[qualifiedName];
      }
    }
  };

  if (isBrowser) {
    hostConfig.createPullDownComponent = function (component, path, h) {
      var inject = {
        props: {
          tid: String
        },
        created: function created() {
          injectPageInstance(this, path);
        }
      };
      component.mixins = isArray(component.mixins) ? component.mixins.push(inject) : [inject];
      return {
        render: function render() {
          return h('taro-pull-to-refresh', {
            class: 'hydrated'
          }, [h(component, this.$slots.default)]);
        }
      };
    };

    hostConfig.findDOMNode = function (el) {
      return el.$el;
    };
  }

  options.reconciler(hostConfig);
}

function createVue3App(app, h, config) {
  var pages = [];
  var appInstance;
  ensure(!isFunction(app._component), '入口组件不支持使用函数式组件');
  setReconciler$2();

  app._component.render = function () {
    return pages.slice();
  };

  var appConfig = Object.create({
    mount: function mount(component, id, cb) {
      var page = createVue3Page(h, id)(component);
      pages.push(page);
      this.updateAppInstance(cb);
    },
    unmount: function unmount(id, cb) {
      pages = pages.filter(function (page) {
        return page.key !== id;
      });
      this.updateAppInstance(cb);
    },
    updateAppInstance: function updateAppInstance(cb) {
      appInstance.$forceUpdate();
      appInstance.$nextTick(cb);
    }
  }, {
    config: {
      writable: true,
      enumerable: true,
      configurable: true,
      value: config
    },
    onLaunch: {
      writable: true,
      enumerable: true,
      value: function value(options) {
        var _a;

        Current.router = Object.assign({
          params: options === null || options === void 0 ? void 0 : options.query
        }, options);
        appInstance = app.mount('#app');
        var onLaunch = (_a = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a === void 0 ? void 0 : _a.onLaunch;
        isFunction(onLaunch) && onLaunch.call(appInstance, options);
      }
    },
    onShow: {
      writable: true,
      enumerable: true,
      value: function value(options) {
        var _a;

        Current.router = Object.assign({
          params: options === null || options === void 0 ? void 0 : options.query
        }, options);
        var onShow = (_a = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a === void 0 ? void 0 : _a.onShow;
        isFunction(onShow) && onShow.call(appInstance, options);
      }
    },
    onHide: {
      writable: true,
      enumerable: true,
      value: function value(options) {
        var _a;

        var onHide = (_a = appInstance === null || appInstance === void 0 ? void 0 : appInstance.$options) === null || _a === void 0 ? void 0 : _a.onHide;
        isFunction(onHide) && onHide.call(appInstance, options);
      }
    }
  });
  Current.app = appConfig;
  return Current.app;
}

var taroHooks = function taroHooks(lifecycle) {
  return function (fn) {
    var id = R.useContext(PageContext); // hold fn ref and keep up to date

    var fnRef = R.useRef(fn);
    if (fnRef.current !== fn) fnRef.current = fn;
    R.useLayoutEffect(function () {
      var inst = getPageInstance(id);
      var first = false;

      if (inst == null) {
        first = true;
        inst = Object.create(null);
      }

      inst = inst; // callback is immutable but inner function is up to date

      var callback = function callback() {
        return fnRef.current.apply(fnRef, arguments);
      };

      if (isFunction(inst[lifecycle])) {
        inst[lifecycle] = [inst[lifecycle], callback];
      } else {
        inst[lifecycle] = [].concat(Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(inst[lifecycle] || []), [callback]);
      }

      if (first) {
        injectPageInstance(inst, id);
      }

      return function () {
        var inst = getPageInstance(id);
        var list = inst[lifecycle];

        if (list === callback) {
          inst[lifecycle] = undefined;
        } else if (isArray(list)) {
          inst[lifecycle] = list.filter(function (item) {
            return item !== callback;
          });
        }
      };
    }, []);
  };
};

var useDidShow = taroHooks('componentDidShow');
var useDidHide = taroHooks('componentDidHide');
var usePullDownRefresh = taroHooks('onPullDownRefresh');
var useReachBottom = taroHooks('onReachBottom');
var usePageScroll = taroHooks('onPageScroll');
var useResize = taroHooks('onResize');
var useShareAppMessage = taroHooks('onShareAppMessage');
var useTabItemTap = taroHooks('onTabItemTap');
var useTitleClick = taroHooks('onTitleClick');
var useOptionMenuClick = taroHooks('onOptionMenuClick');
var usePullIntercept = taroHooks('onPullIntercept');
var useShareTimeline = taroHooks('onShareTimeline');
var useAddToFavorites = taroHooks('onAddToFavorites');
var useReady = taroHooks('onReady');

var useRouter = function useRouter() {
  var dynamic = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  return dynamic ? Current.router : R.useMemo(function () {
    return Current.router;
  }, []);
};

var useScope = function useScope() {
  return undefined;
};

function removeLeadingSlash(path) {
  if (path == null) {
    return '';
  }

  return path.charAt(0) === '/' ? path.slice(1) : path;
}

var nextTick = function nextTick(cb, ctx) {
  var _a, _b, _c;

  var router = Current.router;

  var timerFunc = function timerFunc() {
    setTimeout(function () {
      ctx ? cb.call(ctx) : cb();
    }, 1);
  };

  if (router !== null) {
    var pageElement = null;
    var path = getPath(removeLeadingSlash(router.path), router.params);
    pageElement = document$1.getElementById(path);

    if (pageElement !== null) {
      if (isBrowser) {
        (_c = (_b = (_a = pageElement.firstChild) === null || _a === void 0 ? void 0 : _a['componentOnReady']) === null || _b === void 0 ? void 0 : _b.call(_a).then(function () {
          timerFunc();
        })) !== null && _c !== void 0 ? _c : timerFunc();
      } else {
        pageElement.enqueueUpdateCallbak(cb, ctx);
      }
    } else {
      timerFunc();
    }
  } else {
    timerFunc();
  }
};


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["document"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["requestAnimationFrame"], __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["cancelAnimationFrame"]))

/***/ }),

/***/ "./node_modules/@tarojs/taro/index.js":
/*!********************************************!*\
  !*** ./node_modules/@tarojs/taro/index.js ***!
  \********************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

var Taro = __webpack_require__(/*! @tarojs/api */ "./node_modules/@tarojs/api/dist/index.esm.js").default;

var api; // bundler 可以自动移除不需要的 require

if (false) {} else if (false) {} else if (false) {} else if (true) {
  api = __webpack_require__(/*! ./lib/swan */ "./node_modules/@tarojs/taro/lib/swan.js");
} else {} // 兼容不同工具的 import 机制，如 Jest, rollup


var initNativeAPI = api && api.default ? api.default : api; // 如果没有对应的 env type，那就啥也不干，例如 h5

if (typeof initNativeAPI === 'function') {
  initNativeAPI(Taro);
}

module.exports = Taro;
module.exports.default = module.exports;

/***/ }),

/***/ "./node_modules/@tarojs/taro/lib/swan.js":
/*!***********************************************!*\
  !*** ./node_modules/@tarojs/taro/lib/swan.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = initNativeApi;

var _api = _interopRequireDefault(__webpack_require__(/*! @tarojs/api */ "./node_modules/@tarojs/api/dist/index.esm.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var noPromiseApis = _api["default"].noPromiseApis,
    onAndSyncApis = _api["default"].onAndSyncApis,
    otherApis = _api["default"].otherApis,
    initPxTransform = _api["default"].initPxTransform,
    Link = _api["default"].Link;
var RequestQueue = {
  MAX_REQUEST: 5,
  queue: [],
  request: function request(options) {
    this.push(options); // 返回request task

    return this.run();
  },
  push: function push(options) {
    this.queue.push(options);
  },
  run: function run() {
    var _arguments = arguments,
        _this = this;

    if (!this.queue.length) {
      return;
    }

    if (this.queue.length <= this.MAX_REQUEST) {
      var options = this.queue.shift();
      var completeFn = options.complete;

      options.complete = function () {
        completeFn && completeFn.apply(options, _toConsumableArray(_arguments));

        _this.run();
      };

      return swan.request(options);
    }
  }
};

function taroInterceptor(chain) {
  return request(chain.requestParams);
}

var link = new Link(taroInterceptor);

function request(options) {
  options = options || {};

  if (typeof options === 'string') {
    options = {
      url: options
    };
  }

  var originSuccess = options.success;
  var originFail = options.fail;
  var originComplete = options.complete;
  var requestTask;
  var p = new Promise(function (resolve, reject) {
    options.success = function (res) {
      originSuccess && originSuccess(res);
      resolve(res);
    };

    options.fail = function (res) {
      originFail && originFail(res);
      reject(res);
    };

    options.complete = function (res) {
      originComplete && originComplete(res);
    };

    requestTask = RequestQueue.request(options);
  });

  p.abort = function (cb) {
    cb && cb();

    if (requestTask) {
      requestTask.abort();
    }

    return p;
  };

  return p;
}

function processApis(taro) {
  var weApis = Object.assign({}, onAndSyncApis, noPromiseApis, otherApis);
  Object.keys(weApis).forEach(function (key) {
    if (!(key in swan)) {
      taro[key] = function () {
        console.warn("\u767E\u5EA6\u5C0F\u7A0B\u5E8F\u6682\u4E0D\u652F\u6301 ".concat(key));
      };

      return;
    }

    if (!onAndSyncApis[key] && !noPromiseApis[key]) {
      taro[key] = function (options) {
        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        options = options || {};
        var task = null;
        var obj = Object.assign({}, options);

        if (typeof options === 'string') {
          if (args.length) {
            var _swan;

            return (_swan = swan)[key].apply(_swan, [options].concat(args));
          }

          return swan[key](options);
        }

        var p = new Promise(function (resolve, reject) {
          ['fail', 'success', 'complete'].forEach(function (k) {
            obj[k] = function (res) {
              options[k] && options[k](res);

              if (k === 'success') {
                if (key === 'connectSocket') {
                  resolve(Promise.resolve().then(function () {
                    return Object.assign(task, res);
                  }));
                } else {
                  resolve(res);
                }
              } else if (k === 'fail') {
                reject(res);
              }
            };
          });

          if (args.length) {
            var _swan2;

            task = (_swan2 = swan)[key].apply(_swan2, [obj].concat(args));
          } else {
            task = swan[key](obj);
          }
        });

        if (key === 'uploadFile' || key === 'downloadFile') {
          p.progress = function (cb) {
            if (task) {
              task.onProgressUpdate(cb);
            }

            return p;
          };

          p.abort = function (cb) {
            cb && cb();

            if (task) {
              task.abort();
            }

            return p;
          };
        }

        return p;
      };
    } else {
      taro[key] = function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        var argsLen = args.length;
        var newArgs = args.concat();
        var lastArg = newArgs[argsLen - 1];

        if (lastArg && lastArg.isTaroComponent && lastArg.$scope) {
          newArgs.splice(argsLen - 1, 1, lastArg.$scope);
        }

        return swan[key].apply(swan, newArgs);
      };
    }
  });
}

function pxTransform(size) {
  var _ref = this.config || {},
      _ref$designWidth = _ref.designWidth,
      designWidth = _ref$designWidth === void 0 ? 750 : _ref$designWidth,
      _ref$deviceRatio = _ref.deviceRatio,
      deviceRatio = _ref$deviceRatio === void 0 ? {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  } : _ref$deviceRatio;

  if (!(designWidth in deviceRatio)) {
    throw new Error("deviceRatio \u914D\u7F6E\u4E2D\u4E0D\u5B58\u5728 ".concat(designWidth, " \u7684\u8BBE\u7F6E\uFF01"));
  }

  return parseInt(size, 10) * deviceRatio[designWidth] + 'rpx';
}

function initNativeApi(taro) {
  processApis(taro);
  taro.request = link.request.bind(link);
  taro.addInterceptor = link.addInterceptor.bind(link);
  taro.cleanInterceptors = link.cleanInterceptors.bind(link);
  taro.getCurrentPages = getCurrentPages;
  taro.getApp = getApp;
  taro.initPxTransform = initPxTransform.bind(taro);
  taro.pxTransform = pxTransform.bind(taro);
}

/***/ }),

/***/ "./node_modules/taro-echarts/node_modules/@tarojs/taro/dist/index.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/taro-echarts/node_modules/@tarojs/taro/dist/index.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default, Component, Events, eventCenter, getEnv, ENV_TYPE, render, internal_safe_get, internal_safe_set, internal_inline_style, internal_get_original, internal_force_update, noPromiseApis, onAndSyncApis, otherApis, initPxTransform, createRef, commitAttachRef, detachAllRef, Link, interceptors, RefsArray, handleLoopRef, Current, useEffect, useLayoutEffect, useReducer, useState, useDidShow, useDidHide, usePullDownRefresh, useReachBottom, usePageScroll, useResize, useShareAppMessage, useTabItemTap, useRouter, useShareTimeline, useAddToFavorites, useScope, useRef, useCallback, useMemo, useImperativeHandle, invokeEffects, useContext, createContext, memo, getIsUsingDiff, setIsUsingDiff */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, window) {/* unused harmony export Component */
/* unused harmony export Events */
/* unused harmony export eventCenter */
/* unused harmony export getEnv */
/* unused harmony export ENV_TYPE */
/* unused harmony export render */
/* unused harmony export internal_safe_get */
/* unused harmony export internal_safe_set */
/* unused harmony export internal_inline_style */
/* unused harmony export internal_get_original */
/* unused harmony export internal_force_update */
/* unused harmony export noPromiseApis */
/* unused harmony export onAndSyncApis */
/* unused harmony export otherApis */
/* unused harmony export initPxTransform */
/* unused harmony export createRef */
/* unused harmony export commitAttachRef */
/* unused harmony export detachAllRef */
/* unused harmony export Link */
/* unused harmony export interceptors */
/* unused harmony export RefsArray */
/* unused harmony export handleLoopRef */
/* unused harmony export Current */
/* unused harmony export useEffect */
/* unused harmony export useLayoutEffect */
/* unused harmony export useReducer */
/* unused harmony export useState */
/* unused harmony export useDidShow */
/* unused harmony export useDidHide */
/* unused harmony export usePullDownRefresh */
/* unused harmony export useReachBottom */
/* unused harmony export usePageScroll */
/* unused harmony export useResize */
/* unused harmony export useShareAppMessage */
/* unused harmony export useTabItemTap */
/* unused harmony export useRouter */
/* unused harmony export useShareTimeline */
/* unused harmony export useAddToFavorites */
/* unused harmony export useScope */
/* unused harmony export useRef */
/* unused harmony export useCallback */
/* unused harmony export useMemo */
/* unused harmony export useImperativeHandle */
/* unused harmony export invokeEffects */
/* unused harmony export useContext */
/* unused harmony export createContext */
/* unused harmony export memo */
/* unused harmony export getIsUsingDiff */
/* unused harmony export setIsUsingDiff */
/* harmony import */ var _Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (Object(_Users_apple_docker_wwwroot_taro_echarts_demo_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

if (typeof Object.assign !== 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.assign = function (target) {
    // .length of function is 2
    if (target == null) {
      // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource != null) {
        // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }

    return to;
  };
}

if (typeof Object.defineProperties !== 'function') {
  Object.defineProperties = function (obj, properties) {
    function convertToDescriptor(desc) {
      function hasProperty(obj, prop) {
        return Object.prototype.hasOwnProperty.call(obj, prop);
      }

      function isCallable(v) {
        // NB: modify as necessary if other values than functions are callable.
        return typeof v === 'function';
      }

      if (_typeof(desc) !== 'object' || desc === null) {
        throw new TypeError('bad desc');
      }

      var d = {};
      if (hasProperty(desc, 'enumerable')) d.enumerable = !!desc.enumerable;

      if (hasProperty(desc, 'configurable')) {
        d.configurable = !!desc.configurable;
      }

      if (hasProperty(desc, 'value')) d.value = desc.value;
      if (hasProperty(desc, 'writable')) d.writable = !!desc.writable;

      if (hasProperty(desc, 'get')) {
        var g = desc.get;

        if (!isCallable(g) && typeof g !== 'undefined') {
          throw new TypeError('bad get');
        }

        d.get = g;
      }

      if (hasProperty(desc, 'set')) {
        var s = desc.set;

        if (!isCallable(s) && typeof s !== 'undefined') {
          throw new TypeError('bad set');
        }

        d.set = s;
      }

      if (('get' in d || 'set' in d) && ('value' in d || 'writable' in d)) {
        throw new TypeError('identity-confused descriptor');
      }

      return d;
    }

    if (_typeof(obj) !== 'object' || obj === null) throw new TypeError('bad obj');
    properties = Object(properties);
    var keys = Object.keys(properties);
    var descs = [];

    for (var i = 0; i < keys.length; i++) {
      descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);
    }

    for (var i = 0; i < descs.length; i++) {
      Object.defineProperty(obj, descs[i][0], descs[i][1]);
    }

    return obj;
  };
}

var Component = function Component(props) {
  _classCallCheck(this, Component);

  this.state = {};
  this.props = props || {};
};
/* eslint-disable */

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 */

/** Used as the `TypeError` message for "Functions" methods. */


var FUNC_ERROR_TEXT = 'Expected a function';
/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';
/** Used as references for various `Number` constants. */

var INFINITY = 1 / 0;
/** `Object#toString` result references. */

var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';
/** Used to match property names within property paths. */

var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/,
    reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to match backslashes in property paths. */

var reEscapeChar = /\\(\\)?/g;
/** Used to detect host constructors (Safari). */

var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Detect free variable `global` from Node.js. */

var freeGlobal = (typeof global === "undefined" ? "undefined" : _typeof(global)) === 'object' && global && global.Object === Object && global;
/** Detect free variable `self`. */

var freeSelf = (typeof self === "undefined" ? "undefined" : _typeof(self)) === 'object' && self && self.Object === Object && self;
/** Used as a reference to the global object. */

var root = freeGlobal || freeSelf || Function('return this')();
/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */

var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function getValue(object, key) {
  return object == null ? undefined : object[key];
}
/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */


function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;

  if (value != null && typeof value.toString !== 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }

  return result;
}
/** Used for built-in method references. */


var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;
/** Used to detect overreaching core-js shims. */

var coreJsData = root['__core-js_shared__'];
/** Used to detect methods masquerading as native. */

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();
/** Used to resolve the decompiled source of functions. */


var funcToString = funcProto.toString;
/** Used to check objects for own properties. */

var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */

var objectToString = objectProto.toString;
/** Used to detect if a method is native. */

var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
/** Built-in value references. */

var _Symbol = root.Symbol,
    splice = arrayProto.splice;
/* Built-in method references that are verified to be native. */

var Map$1 = getNative(root, 'Map'),
    nativeCreate = getNative(Object, 'create');
/** Used to convert symbols to primitives and strings. */

var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */


function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function hashGet(key) {
  var data = this.__data__;

  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }

  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */


function hashSet(key, value) {
  var data = this.__data__;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
} // Add methods to `Hash`.


Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */


function listCacheClear() {
  this.__data__ = [];
}
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }

  var lastIndex = data.length - 1;

  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }

  return true;
}
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);
  return index < 0 ? undefined : data[index][1];
}
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */


function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }

  return this;
} // Add methods to `ListCache`.


ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */

function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;
  this.clear();

  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */


function mapCacheClear() {
  this.__data__ = {
    hash: new Hash(),
    map: new (Map$1 || ListCache)(),
    string: new Hash()
  };
}
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */


function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */


function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */


function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */


function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
} // Add methods to `MapCache`.


MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */

function assocIndexOf(array, key) {
  var length = array.length;

  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }

  return -1;
}
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */


function baseGet(object, path) {
  path = isKey(path, object) ? [path] : castPath(path);
  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }

  return index && index == length ? object : undefined;
}
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */


function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }

  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */


function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value === 'string') {
    return value;
  }

  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Array} Returns the cast property path array.
 */


function castPath(value) {
  return isArray(value) ? value : stringToPath(value);
}
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */


function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key === 'string' ? 'string' : 'hash'] : data.map;
}
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */


function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */


function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }

  var type = _typeof(value);

  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }

  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */


function isKeyable(value) {
  var type = _typeof(value);

  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */


function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */


var stringToPath = memoize(function (string) {
  string = toString(string);
  var result = [];

  if (reLeadingDot.test(string)) {
    result.push('');
  }

  string.replace(rePropName, function (match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */

function toKey(value) {
  if (typeof value === 'string' || isSymbol(value)) {
    return value;
  }

  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */


function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}

    try {
      return func + '';
    } catch (e) {}
  }

  return '';
}
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */


function memoize(func, resolver) {
  if (typeof func !== 'function' || resolver && typeof resolver !== 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }

  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }

    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };

  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
} // Assign cache to `_.memoize`.


memoize.Cache = MapCache;
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */

function eq(value, other) {
  return value === other || value !== value && other !== other;
}
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */


var isArray = Array.isArray;
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */

function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */


function isObject(value) {
  var type = _typeof(value);

  return !!value && (type == 'object' || type == 'function');
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */


function isObjectLike(value) {
  return !!value && _typeof(value) === 'object';
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */


function isSymbol(value) {
  return _typeof(value) === 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */


function toString(value) {
  return value == null ? '' : baseToString(value);
}
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */


function isIndex(value, length) {
  var type = _typeof(value);

  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */


function baseAssignValue(object, key, value) {
  if (key == '__proto__') {
    Object.defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}
/** Used to check objects for own properties. */


var hasOwnProperty = Object.prototype.hasOwnProperty;
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */

function assignValue(object, key, value) {
  var objValue = object[key];

  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}
/**
 * The base implementation of `set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */


function baseSet(object, path, value, customizer) {
  if (!isObject(object)) {
    return object;
  }

  path = castPath(path, object);
  var length = path.length;
  var lastIndex = length - 1;
  var index = -1;
  var nested = object;

  while (nested != null && ++index < length) {
    var key = toKey(path[index]);
    var newValue = value;

    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : undefined;

      if (newValue === undefined) {
        newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
      }
    }

    assignValue(nested, key, newValue);
    nested = nested[key];
  }

  return object;
}
/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */


function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}
/**
 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
 * it's created. Arrays are created for missing index properties while objects
 * are created for all other missing properties. Use `setWith` to customize
 * `path` creation.
 *
 * **Note:** This method mutates `object`.
 *
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns `object`.
 * @see has, hasIn, get, unset
 * @example
 *
 * const object = { 'a': [{ 'b': { 'c': 3 } }] }
 *
 * set(object, 'a[0].b.c', 4)
 * console.log(object.a[0].b.c)
 * // => 4
 *
 * set(object, ['x', '0', 'y', 'z'], 5)
 * console.log(object.x[0].y.z)
 * // => 5
 */


function set$1(object, path, value) {
  return object == null ? object : baseSet(object, path, value);
}

var upperCasePattern = /([A-Z])/g;

function dashify(str) {
  return str.replace(upperCasePattern, dashLower);
}

function dashLower(c) {
  return '-' + c.toLowerCase();
}

function isObject$1(val) {
  return val != null && _typeof(val) === 'object' && Array.isArray(val) === false;
}

function inlineStyle(obj) {
  if (obj == null) {
    return '';
  }

  if (typeof obj === 'string') {
    return obj;
  }

  if (obj === null || obj === undefined) {
    return '';
  }

  if (!isObject$1(obj)) {
    throw new TypeError('style 只能是一个对象或字符串。');
  }

  return Object.keys(obj).map(function (key) {
    return dashify(key).concat(':').concat(obj[key]);
  }).join(';');
}

var ENV_TYPE = {
  WEAPP: 'WEAPP',
  WEB: 'WEB',
  RN: 'RN',
  SWAN: 'SWAN',
  ALIPAY: 'ALIPAY',
  QUICKAPP: 'QUICKAPP',
  TT: 'TT',
  QQ: 'QQ',
  JD: 'JD'
};
var _env = null; // 一个taro项目肯定运行同样的环境

function getEnv() {
  if (_env) return _env;

  if (typeof jd !== 'undefined' && jd.getSystemInfo) {
    _env = ENV_TYPE.JD;
    return ENV_TYPE.JD;
  }

  if (typeof qq !== 'undefined' && qq.getSystemInfo) {
    _env = ENV_TYPE.QQ;
    return ENV_TYPE.QQ;
  }

  if (typeof tt !== 'undefined' && tt.getSystemInfo) {
    _env = ENV_TYPE.TT;
    return ENV_TYPE.TT;
  }

  if (typeof wx !== 'undefined' && wx.getSystemInfo) {
    _env = ENV_TYPE.WEAPP;
    return ENV_TYPE.WEAPP;
  }

  if (typeof qa !== 'undefined' && qa.getSystemInfo) {
    _env = ENV_TYPE.QUICKAPP;
    return ENV_TYPE.QUICKAPP;
  }

  if (typeof swan !== 'undefined' && swan.getSystemInfo) {
    _env = ENV_TYPE.SWAN;
    return ENV_TYPE.SWAN;
  }

  if (typeof my !== 'undefined' && my.getSystemInfo) {
    _env = ENV_TYPE.ALIPAY;
    return ENV_TYPE.ALIPAY;
  }

  if (typeof global !== 'undefined' && global.__fbGenNativeModule) {
    _env = ENV_TYPE.RN;
    return ENV_TYPE.RN;
  }

  if (typeof window !== 'undefined') {
    _env = ENV_TYPE.WEB;
    return ENV_TYPE.WEB;
  }

  return 'Unknown environment';
}

function isObject$2(arg) {
  return arg === Object(arg) && typeof arg !== 'function';
}

var env = null;

function getOriginal(item) {
  if (env === null) {
    env = getEnv();
  }

  if (isObject$2(item)) {
    return item[env === ENV_TYPE.SWAN ? 'privateOriginal' : '$original'] || item;
  }

  return item;
}

var Events = /*#__PURE__*/function () {
  function Events(opts) {
    _classCallCheck(this, Events);

    if (typeof opts !== 'undefined' && opts.callbacks) {
      this.callbacks = opts.callbacks;
    } else {
      this.callbacks = {};
    }
  }

  _createClass(Events, [{
    key: "on",
    value: function on(events, callback, context) {
      var calls, event, node, tail, list;

      if (!callback) {
        return this;
      }

      events = events.split(Events.eventSplitter);
      calls = this.callbacks;

      while (event = events.shift()) {
        list = calls[event];
        node = list ? list.tail : {};
        node.next = tail = {};
        node.context = context;
        node.callback = callback;
        calls[event] = {
          tail: tail,
          next: list ? list.next : node
        };
      }

      return this;
    }
  }, {
    key: "once",
    value: function once(events, callback, context) {
      var _this = this;

      var wrapper = function wrapper() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        callback.apply(_this, args);

        _this.off(events, wrapper, context);
      };

      this.on(events, wrapper, context);
      return this;
    }
  }, {
    key: "off",
    value: function off(events, callback, context) {
      var event, calls, node, tail, cb, ctx;

      if (!(calls = this.callbacks)) {
        return this;
      }

      if (!(events || callback || context)) {
        delete this.callbacks;
        return this;
      }

      events = events ? events.split(Events.eventSplitter) : Object.keys(calls);

      while (event = events.shift()) {
        node = calls[event];
        delete calls[event];

        if (!node || !(callback || context)) {
          continue;
        }

        tail = node.tail;

        while ((node = node.next) !== tail) {
          cb = node.callback;
          ctx = node.context;

          if (callback && cb !== callback || context && ctx !== context) {
            this.on(event, cb, ctx);
          }
        }
      }

      return this;
    }
  }, {
    key: "trigger",
    value: function trigger(events) {
      var event, node, calls, tail, rest;

      if (!(calls = this.callbacks)) {
        return this;
      }

      events = events.split(Events.eventSplitter);
      rest = [].slice.call(arguments, 1);

      while (event = events.shift()) {
        if (node = calls[event]) {
          tail = node.tail;

          while ((node = node.next) !== tail) {
            node.callback.apply(node.context || this, rest);
          }
        }
      }

      return this;
    }
  }]);

  return Events;
}();

Events.eventSplitter = /\s+/;

function render() {}

function createRef() {
  return {
    current: null
  };
}
/**
 * 赋值 ref
 * @param {Object} ref ref 对象/ref 函数/ref 字符串
 * @param {Object} target dom/component
 * @param {Object} component 组件实例
 * @param {Object} refs 字符串 ref 搜集器
 */


function commitAttachRef(ref, target, component, refs) {
  var isInit = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isInit && !target) return;

  if ('refName' in ref && ref['refName']) {
    refs[ref.refName] = target;
  } else if ('fn' in ref && typeof ref['fn'] === 'function') {
    ref['fn'].call(component, target);
  } else if (ref['fn'] && _typeof(ref['fn']) === 'object' && 'current' in ref['fn']) {
    ref['fn'].current = target;
  }
}

function detachAllRef(component) {
  if (component['$$refs'] && component['$$refs'].length > 0) {
    component['$$refs'].forEach(function (ref) {
      if (typeof ref['fn'] === 'function') {
        ref['fn'].call(component, null);
      } else if (ref['fn'] && _typeof(ref['fn']) === 'object' && 'current' in ref['fn']) {
        ref['fn'].current = null;
      }

      if ('target' in ref) delete ref['target'];
    });
    component.refs = {};
  }
}

var RefsArray = /*#__PURE__*/function (_Array) {
  _inherits(RefsArray, _Array);

  var _super = _createSuper(RefsArray);
  /**
   * @param {Array} initList
   */


  function RefsArray() {
    var _this;

    var initList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, RefsArray);

    _this = _super.call.apply(_super, [this].concat(_toConsumableArray(initList)));
    _this.inited = false;
    return _this;
  }

  _createClass(RefsArray, [{
    key: "pushRefs",
    value: function pushRefs($$refs) {
      var _this2 = this;

      if (this.inited) return;
      $$refs.forEach(function (ref) {
        return _this2.pushRef(ref);
      });
      this.inited = true;
    }
  }, {
    key: "pushRef",
    value: function pushRef(ref) {
      var isExist = this.find(function (item) {
        return item.id === ref.id;
      });
      !isExist && this.push(ref);
    }
  }]);

  return RefsArray;
}( /*#__PURE__*/_wrapNativeSuper(Array));

function handleLoopRef(getElementById) {
  return function (component, id, type, handler) {
    if (!component) return null;
    var dom = getElementById(component, id, type);

    var handlerType = _typeof(handler);

    if (handlerType !== 'function' && handlerType !== 'object') {
      return console.warn("\u5FAA\u73AF Ref \u53EA\u652F\u6301\u51FD\u6570\u6216 createRef()\uFF0C\u5F53\u524D\u7C7B\u578B\u4E3A\uFF1A".concat(handlerType));
    }

    if (handlerType === 'object') {
      handler.current = dom;
    } else if (handlerType === 'function') {
      handler.call(component.$component, dom);
    }
  };
}

var Chain = /*#__PURE__*/function () {
  function Chain(requestParams) {
    var interceptors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

    _classCallCheck(this, Chain);

    this.index = index;
    this.requestParams = requestParams;
    this.interceptors = interceptors;
  }

  _createClass(Chain, [{
    key: "proceed",
    value: function proceed(requestParams) {
      this.requestParams = requestParams;

      if (this.index >= this.interceptors.length) {
        throw new Error('chain 参数错误, 请勿直接修改 request.chain');
      }

      var nextInterceptor = this._getNextInterceptor();

      var nextChain = this._getNextChain();

      var p = nextInterceptor(nextChain);
      var res = p["catch"](function (err) {
        return Promise.reject(err);
      });
      if (typeof p.abort === 'function') res.abort = p.abort;
      return res;
    }
  }, {
    key: "_getNextInterceptor",
    value: function _getNextInterceptor() {
      return this.interceptors[this.index];
    }
  }, {
    key: "_getNextChain",
    value: function _getNextChain() {
      return new Chain(this.requestParams, this.interceptors, this.index + 1);
    }
  }]);

  return Chain;
}();

var Link = /*#__PURE__*/function () {
  function Link(interceptor) {
    _classCallCheck(this, Link);

    this.taroInterceptor = interceptor;
    this.chain = new Chain();
  }

  _createClass(Link, [{
    key: "request",
    value: function request(requestParams) {
      var _this = this;

      this.chain.interceptors = this.chain.interceptors.filter(function (interceptor) {
        return interceptor !== _this.taroInterceptor;
      });
      this.chain.interceptors.push(this.taroInterceptor);
      return this.chain.proceed(_objectSpread2({}, requestParams));
    }
  }, {
    key: "addInterceptor",
    value: function addInterceptor(interceptor) {
      this.chain.interceptors.push(interceptor);
    }
  }, {
    key: "cleanInterceptors",
    value: function cleanInterceptors() {
      this.chain = new Chain();
    }
  }]);

  return Link;
}();

function timeoutInterceptor(chain) {
  var requestParams = chain.requestParams;
  var p;
  var res = new Promise(function (resolve, reject) {
    var timeout = setTimeout(function () {
      timeout = null;
      reject(new Error('网络链接超时,请稍后再试！'));
    }, requestParams && requestParams.timeout || 60000);
    p = chain.proceed(requestParams);
    p.then(function (res) {
      if (!timeout) return;
      clearTimeout(timeout);
      resolve(res);
    })["catch"](function (err) {
      timeout && clearTimeout(timeout);
      reject(err);
    });
  });
  if (typeof p.abort === 'function') res.abort = p.abort;
  return res;
}

function logInterceptor(chain) {
  var requestParams = chain.requestParams;
  var method = requestParams.method,
      data = requestParams.data,
      url = requestParams.url;
  console.log("http ".concat(method || 'GET', " --> ").concat(url, " data: "), data);
  var p = chain.proceed(requestParams);
  var res = p.then(function (res) {
    console.log("http <-- ".concat(url, " result:"), res);
    return res;
  });
  if (typeof p.abort === 'function') res.abort = p.abort;
  return res;
}

var interceptors = /*#__PURE__*/Object.freeze({
  timeoutInterceptor: timeoutInterceptor,
  logInterceptor: logInterceptor
});
var onAndSyncApis = {
  onSocketOpen: true,
  onSocketError: true,
  onSocketMessage: true,
  onSocketClose: true,
  onBackgroundAudioPlay: true,
  onBackgroundAudioPause: true,
  onBackgroundAudioStop: true,
  onNetworkStatusChange: true,
  onAccelerometerChange: true,
  onCompassChange: true,
  onBluetoothAdapterStateChange: true,
  onBluetoothDeviceFound: true,
  onBLEConnectionStateChange: true,
  onBLECharacteristicValueChange: true,
  onBeaconUpdate: true,
  onBeaconServiceChange: true,
  onUserCaptureScreen: true,
  onHCEMessage: true,
  onGetWifiList: true,
  onWifiConnected: true,
  offWifiConnected: true,
  offGetWifiList: true,
  onDeviceMotionChange: true,
  setStorageSync: true,
  getStorageSync: true,
  getStorageInfoSync: true,
  removeStorageSync: true,
  clearStorageSync: true,
  getSystemInfoSync: true,
  getExtConfigSync: true,
  getLogManager: true,
  onMemoryWarning: true,
  reportMonitor: true,
  reportAnalytics: true,
  navigateToSmartGameProgram: true,
  // 文件
  getFileSystemManager: true,
  getLaunchOptionsSync: true,
  onPageNotFound: true,
  onError: true,
  onAppShow: true,
  onAppHide: true,
  offPageNotFound: true,
  offError: true,
  offAppShow: true,
  offAppHide: true,
  onAudioInterruptionEnd: true,
  onAudioInterruptionBegin: true,
  onLocationChange: true,
  offLocationChange: true
};
var noPromiseApis = {
  // 媒体
  stopRecord: true,
  getRecorderManager: true,
  pauseVoice: true,
  stopVoice: true,
  pauseBackgroundAudio: true,
  stopBackgroundAudio: true,
  getBackgroundAudioManager: true,
  createAudioContext: true,
  createInnerAudioContext: true,
  createVideoContext: true,
  createCameraContext: true,
  createLivePlayerContext: true,
  createLivePusherContext: true,
  // 位置
  createMapContext: true,
  // 设备
  canIUse: true,
  startAccelerometer: true,
  stopAccelerometer: true,
  startCompass: true,
  stopCompass: true,
  // 界面
  hideToast: true,
  hideLoading: true,
  showNavigationBarLoading: true,
  hideNavigationBarLoading: true,
  createAnimation: true,
  createSelectorQuery: true,
  createOffscreenCanvas: true,
  createCanvasContext: true,
  // createContext: true,
  drawCanvas: true,
  hideKeyboard: true,
  stopPullDownRefresh: true,
  createIntersectionObserver: true,
  nextTick: true,
  // 菜单
  getMenuButtonBoundingClientRect: true,
  onWindowResize: true,
  offWindowResize: true,
  // 拓展接口
  arrayBufferToBase64: true,
  base64ToArrayBuffer: true,
  getAccountInfoSync: true,
  getUpdateManager: true,
  createWorker: true,
  // 广告
  createRewardedVideoAd: true,
  createInterstitialAd: true,
  // 调试
  getRealtimeLogManager: true
};
var otherApis = {
  // 网络
  uploadFile: true,
  downloadFile: true,
  connectSocket: true,
  sendSocketMessage: true,
  closeSocket: true,
  // 媒体
  chooseImage: true,
  chooseMessageFile: true,
  previewImage: true,
  getImageInfo: true,
  compressImage: true,
  saveImageToPhotosAlbum: true,
  startRecord: true,
  playVoice: true,
  setInnerAudioOption: true,
  getAvailableAudioSources: true,
  getBackgroundAudioPlayerState: true,
  playBackgroundAudio: true,
  seekBackgroundAudio: true,
  chooseVideo: true,
  saveVideoToPhotosAlbum: true,
  loadFontFace: true,
  // 文件
  saveFile: true,
  getFileInfo: true,
  getSavedFileList: true,
  getSavedFileInfo: true,
  removeSavedFile: true,
  openDocument: true,
  // 数据缓存
  setStorage: true,
  getStorage: true,
  getStorageInfo: true,
  removeStorage: true,
  clearStorage: true,
  // 导航
  navigateBack: true,
  navigateTo: true,
  redirectTo: true,
  switchTab: true,
  reLaunch: true,
  // 位置
  startLocationUpdate: true,
  startLocationUpdateBackground: true,
  stopLocationUpdate: true,
  getLocation: true,
  chooseLocation: true,
  openLocation: true,
  // 设备
  getSystemInfo: true,
  getNetworkType: true,
  makePhoneCall: true,
  scanCode: true,
  setClipboardData: true,
  getClipboardData: true,
  openBluetoothAdapter: true,
  closeBluetoothAdapter: true,
  getBluetoothAdapterState: true,
  startBluetoothDevicesDiscovery: true,
  stopBluetoothDevicesDiscovery: true,
  getBluetoothDevices: true,
  getConnectedBluetoothDevices: true,
  createBLEConnection: true,
  closeBLEConnection: true,
  getBLEDeviceServices: true,
  getBLEDeviceCharacteristics: true,
  readBLECharacteristicValue: true,
  writeBLECharacteristicValue: true,
  notifyBLECharacteristicValueChange: true,
  startBeaconDiscovery: true,
  stopBeaconDiscovery: true,
  getBeacons: true,
  setScreenBrightness: true,
  getScreenBrightness: true,
  setKeepScreenOn: true,
  vibrateLong: true,
  vibrateShort: true,
  addPhoneContact: true,
  getHCEState: true,
  startHCE: true,
  stopHCE: true,
  sendHCEMessage: true,
  startWifi: true,
  stopWifi: true,
  connectWifi: true,
  getWifiList: true,
  setWifiList: true,
  getConnectedWifi: true,
  startDeviceMotionListening: true,
  stopDeviceMotionListening: true,
  // 界面
  pageScrollTo: true,
  showToast: true,
  showLoading: true,
  showModal: true,
  showActionSheet: true,
  setNavigationBarTitle: true,
  setNavigationBarColor: true,
  setTabBarBadge: true,
  removeTabBarBadge: true,
  showTabBarRedDot: true,
  hideTabBarRedDot: true,
  setTabBarStyle: true,
  setTabBarItem: true,
  showTabBar: true,
  hideTabBar: true,
  setTopBarText: true,
  startPullDownRefresh: true,
  canvasToTempFilePath: true,
  canvasGetImageData: true,
  canvasPutImageData: true,
  setBackgroundColor: true,
  setBackgroundTextStyle: true,
  getSelectedTextRange: true,
  hideHomeButton: true,
  // 第三方平台
  getExtConfig: true,
  // 开放接口
  login: true,
  checkSession: true,
  authorize: true,
  getUserInfo: true,
  checkIsSupportFacialRecognition: true,
  startFacialRecognitionVerify: true,
  startFacialRecognitionVerifyAndUploadVideo: true,
  faceVerifyForPay: true,
  requestPayment: true,
  showShareMenu: true,
  hideShareMenu: true,
  updateShareMenu: true,
  getShareInfo: true,
  chooseAddress: true,
  addCard: true,
  openCard: true,
  openSetting: true,
  getSetting: true,
  getWeRunData: true,
  navigateToMiniProgram: true,
  navigateBackMiniProgram: true,
  chooseInvoice: true,
  chooseInvoiceTitle: true,
  checkIsSupportSoterAuthentication: true,
  startSoterAuthentication: true,
  checkIsSoterEnrolledInDevice: true,
  // 订阅消息
  requestSubscribeMessage: true,
  setEnableDebug: true,
  // 支付宝小程序API
  getOpenUserInfo: true,
  // 百度小程序专有 API
  // 百度小程序 AI 相关
  ocrIdCard: true,
  ocrBankCard: true,
  ocrDrivingLicense: true,
  ocrVehicleLicense: true,
  textReview: true,
  textToAudio: true,
  imageAudit: true,
  advancedGeneralIdentify: true,
  objectDetectIdentify: true,
  carClassify: true,
  dishClassify: true,
  logoClassify: true,
  animalClassify: true,
  plantClassify: true,
  setPageInfo: true,
  // 用户信息
  getSwanId: true,
  // 百度收银台支付
  requestPolymerPayment: true,
  // 打开小程序
  navigateToSmartProgram: true,
  navigateBackSmartProgram: true,
  preloadSubPackage: true
};

function initPxTransform(config) {
  var _config$designWidth = config.designWidth,
      designWidth = _config$designWidth === void 0 ? 700 : _config$designWidth,
      _config$deviceRatio = config.deviceRatio,
      deviceRatio = _config$deviceRatio === void 0 ? {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  } : _config$deviceRatio;
  this.config = this.config || {};
  this.config.designWidth = designWidth;
  this.config.deviceRatio = deviceRatio;
} // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is


function objectIs(x, y) {
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return x !== 0 || 1 / x === 1 / y;
  } // eslint-disable-next-line no-self-compare


  return x !== x && y !== y;
}

function isFunction$1(arg) {
  return typeof arg === 'function';
}

var defer = typeof Promise === 'function' ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;

function isUndefined(o) {
  return o === undefined;
}

function isArray$1(arg) {
  return Array.isArray(arg);
}

function isNullOrUndef(o) {
  return isUndefined(o) || o === null;
}

var isUsingDiff = true;

function getIsUsingDiff() {
  return isUsingDiff;
}

function setIsUsingDiff(flag) {
  isUsingDiff = Boolean(flag);
}

var Current;

if (false) {} else {
  Current = {
    current: null,
    index: 0
  };
}

function forceUpdateCallback() {//
}

function getHooks(index) {
  if (Current.current === null) {
    throw new Error("invalid hooks call: hooks can only be called in a stateless component.");
  }

  var hooks = Current.current.hooks;

  if (index >= hooks.length) {
    hooks.push({});
  }

  return hooks[index];
}

function useState(initialState) {
  if (isFunction$1(initialState)) {
    initialState = initialState();
  }

  var hook = getHooks(Current.index++);

  if (!hook.state) {
    hook.component = Current.current;
    hook.state = [initialState, function (action) {
      var nextState = isFunction$1(action) ? action(hook.state[0]) : action;
      if (hook.state[0] === nextState) return;
      hook.state[0] = nextState;
      hook.component._disable = false;
      hook.component.setState({}, forceUpdateCallback);
    }];
  }

  return hook.state;
}

function usePageLifecycle(callback, lifecycle) {
  var hook = getHooks(Current.index++);

  if (!hook.marked) {
    hook.marked = true;
    hook.component = Current.current;
    hook.callback = callback;
    var component = hook.component;
    var originalLifecycle = component[lifecycle];

    hook.component[lifecycle] = function () {
      var callback = hook.callback;
      originalLifecycle && originalLifecycle.call.apply(originalLifecycle, [component].concat(Array.prototype.slice.call(arguments)));
      return callback && callback.call.apply(callback, [component].concat(Array.prototype.slice.call(arguments)));
    };
  } else {
    hook.callback = callback;
  }
}

function useDidShow(callback) {
  usePageLifecycle(callback, 'componentDidShow');
}

function useDidHide(callback) {
  usePageLifecycle(callback, 'componentDidHide');
}

function usePullDownRefresh(callback) {
  usePageLifecycle(callback, 'onPullDownRefresh');
}

function useReachBottom(callback) {
  usePageLifecycle(callback, 'onReachBottom');
}

function usePageScroll(callback) {
  usePageLifecycle(callback, 'onPageScroll');
}

function useResize(callback) {
  usePageLifecycle(callback, 'onResize');
}

function useShareAppMessage(callback) {
  usePageLifecycle(callback, 'onShareAppMessage');
}

function useTabItemTap(callback) {
  usePageLifecycle(callback, 'onTabItemTap');
}

function useShareTimeline(callback) {
  usePageLifecycle(callback, 'onShareTimeline');
}

function useAddToFavorites(callback) {
  usePageLifecycle(callback, 'onAddToFavorites');
}

function useRouter() {
  var hook = getHooks(Current.index++);

  if (!hook.router) {
    hook.component = Current.current;
    hook.router = hook.component.$router;
  }

  return hook.router;
}

function useScope() {
  var hook = getHooks(Current.index++);

  if (!hook.scope) {
    hook.component = Current.current;
    hook.scope = hook.component.$scope;
  }

  return hook.scope;
}

function useReducer(reducer, initialState, initializer) {
  if (isFunction$1(initialState)) {
    initialState = initialState();
  }

  var hook = getHooks(Current.index++);

  if (!hook.state) {
    hook.component = Current.current;
    hook.state = [isUndefined(initializer) ? initialState : initializer(initialState), function (action) {
      hook.state[0] = reducer(hook.state[0], action);
      hook.component._disable = false;
      hook.component.setState({}, forceUpdateCallback);
    }];
  }

  return hook.state;
}

function areDepsChanged(prevDeps, deps) {
  if (isNullOrUndef(prevDeps) || isNullOrUndef(deps)) {
    return true;
  }

  return deps.some(function (d, i) {
    return !objectIs(d, prevDeps[i]);
  });
}

function invokeEffects(component, delay) {
  var effects = delay ? component.effects : component.layoutEffects;
  effects.forEach(function (hook) {
    if (isFunction$1(hook.cleanup)) {
      hook.cleanup();
    }

    var result = hook.effect();

    if (isFunction$1(result)) {
      hook.cleanup = result;
    }
  });

  if (delay) {
    component.effects = [];
  } else {
    component.layoutEffects = [];
  }
}

var scheduleEffectComponents = [];

function invokeScheduleEffects(component) {
  if (!component._afterScheduleEffect) {
    component._afterScheduleEffect = true;
    scheduleEffectComponents.push(component);

    if (scheduleEffectComponents.length === 1) {
      defer(function () {
        setTimeout(function () {
          scheduleEffectComponents.forEach(function (c) {
            c._afterScheduleEffect = false;
            invokeEffects(c, true);
          });
          scheduleEffectComponents = [];
        }, 0);
      });
    }
  }
}

function useEffectImpl(effect, deps, delay) {
  var hook = getHooks(Current.index++);

  if (Current.current._disableEffect || !Current.current.__isReady) {
    return;
  }

  if (areDepsChanged(hook.deps, deps)) {
    hook.effect = effect;
    hook.deps = deps;

    if (delay) {
      Current.current.effects = Current.current.effects.concat(hook);
      invokeScheduleEffects(Current.current);
    } else {
      Current.current.layoutEffects = Current.current.layoutEffects.concat(hook);
    }
  }
}

function useEffect(effect, deps) {
  useEffectImpl(effect, deps, true);
}

function useLayoutEffect(effect, deps) {
  useEffectImpl(effect, deps);
}

function useRef(initialValue) {
  var hook = getHooks(Current.index++);

  if (!hook.ref) {
    hook.ref = {
      current: initialValue
    };
  }

  return hook.ref;
}

function useMemo(factory, deps) {
  var hook = getHooks(Current.index++);

  if (areDepsChanged(hook.deps, deps)) {
    hook.deps = deps;
    hook.callback = factory;
    hook.value = factory();
  }

  return hook.value;
}

function useCallback(callback, deps) {
  return useMemo(function () {
    return callback;
  }, deps);
}

function useImperativeHandle(ref, init, deps) {
  useLayoutEffect(function () {
    if (isFunction$1(ref)) {
      ref(init());
      return function () {
        return ref(null);
      };
    } else if (!isUndefined(ref)) {
      ref.current = init();
      return function () {
        delete ref.current;
      };
    }
  }, isArray$1(deps) ? deps.concat([ref]) : undefined);
}

function useContext(_ref) {
  var context = _ref.context;
  var emitter = context.emitter;

  if (emitter === null) {
    return context._defaultValue;
  }

  var hook = getHooks(Current.index++);

  if (isUndefined(hook.context)) {
    hook.context = true;
    hook.component = Current.current;
    emitter.on(function (_) {
      if (hook.component) {
        hook.component._disable = false;
        hook.component.setState({});
      }
    });
  }

  return emitter.value;
}

var Emitter = /*#__PURE__*/function () {
  function Emitter() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Emitter);

    this.value = value;
    this.handlers = [];
  }

  _createClass(Emitter, [{
    key: "on",
    value: function on(handler) {
      this.handlers.push(handler);
    }
  }, {
    key: "off",
    value: function off(handler) {
      this.handlers = this.handlers.filter(function (h) {
        return h !== handler;
      });
    }
  }, {
    key: "set",
    value: function set(value) {
      var _this = this;

      if (objectIs(value, this.value)) {
        return;
      }

      this.value = value;
      this.handlers.forEach(function (h) {
        return h(_this.value);
      });
    }
  }]);

  return Emitter;
}();

var contextUid = 0;

function createContext(defaultValue) {
  var contextId = '__context_' + contextUid++ + '__';
  var context = {
    emitter: null,
    _id: contextId,
    _defaultValue: defaultValue
  };

  function Provider(newValue) {
    var emitter = context.emitter;

    if (!emitter) {
      context.emitter = new Emitter(defaultValue);
    } else {
      emitter.set(newValue);
    }
  }

  return {
    Provider: Provider,
    context: context
  };
}
/* eslint-disable */


var objectIs$1 = Object.is || function (x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  }

  return x !== x && y !== y;
};

function shallowEqual(obj1, obj2) {
  if (_typeof(obj1) !== 'object' && _typeof(obj2) !== 'object') {
    return obj1 === obj2;
  }

  if (obj1 === null && obj2 === null) {
    return true;
  }

  if (obj1 === null || obj2 === null) {
    return false;
  }

  if (objectIs$1(obj1, obj2)) {
    return true;
  }

  var obj1Keys = obj1 ? Object.keys(obj1) : [];
  var obj2Keys = obj2 ? Object.keys(obj2) : [];

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (var i = 0; i < obj1Keys.length; i++) {
    var obj1KeyItem = obj1Keys[i];

    if (!obj2.hasOwnProperty(obj1KeyItem) || !objectIs$1(obj1[obj1KeyItem], obj2[obj1KeyItem])) {
      return false;
    }
  }

  return true;
}

function memo(component, propsAreEqual) {
  component.prototype.shouldComponentUpdate = function (nextProps) {
    return isFunction$1(propsAreEqual) ? !propsAreEqual(this.props, nextProps) : !shallowEqual(this.props, nextProps);
  };

  return component;
}
/* eslint-disable camelcase */


var eventCenter;

if (false) {} else {
  eventCenter = new Events();
}

var index = {
  Component: Component,
  Events: Events,
  eventCenter: eventCenter,
  getEnv: getEnv,
  ENV_TYPE: ENV_TYPE,
  render: render,
  internal_safe_get: get,
  internal_safe_set: set$1,
  internal_inline_style: inlineStyle,
  internal_get_original: getOriginal,
  internal_force_update: forceUpdateCallback,
  noPromiseApis: noPromiseApis,
  onAndSyncApis: onAndSyncApis,
  otherApis: otherApis,
  initPxTransform: initPxTransform,
  createRef: createRef,
  commitAttachRef: commitAttachRef,
  detachAllRef: detachAllRef,
  Link: Link,
  interceptors: interceptors,
  RefsArray: RefsArray,
  handleLoopRef: handleLoopRef,
  Current: Current,
  useEffect: useEffect,
  useLayoutEffect: useLayoutEffect,
  useReducer: useReducer,
  useState: useState,
  useDidShow: useDidShow,
  useDidHide: useDidHide,
  usePullDownRefresh: usePullDownRefresh,
  useReachBottom: useReachBottom,
  usePageScroll: usePageScroll,
  useResize: useResize,
  useShareAppMessage: useShareAppMessage,
  useTabItemTap: useTabItemTap,
  useRouter: useRouter,
  useScope: useScope,
  useRef: useRef,
  useCallback: useCallback,
  useMemo: useMemo,
  useImperativeHandle: useImperativeHandle,
  invokeEffects: invokeEffects,
  useContext: useContext,
  createContext: createContext,
  memo: memo,
  getIsUsingDiff: getIsUsingDiff,
  setIsUsingDiff: setIsUsingDiff
};
/* harmony default export */ __webpack_exports__["a"] = (index);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! @tarojs/runtime */ "./node_modules/@tarojs/runtime/dist/runtime.esm.js")["window"]))

/***/ })

}]);
//# sourceMappingURL=taro.js.map