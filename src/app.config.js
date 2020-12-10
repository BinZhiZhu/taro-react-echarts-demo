export default {
  pages: [
    'pages/index/index',
    'pages/swan/index',
    'pages/weapp/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  //百度小程序echart声明
  dynamicLib: {
    "echartsLib": {
      "provider": "echarts_4_4_0"
    }
  }
}
