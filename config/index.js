const path = require('path');

const buildType = process.env.TARO_ENV || 'default';

const config = {
  projectName: 'taro-echarts-demo',
  date: '2020-12-10',
  designWidth: 750,
  outputRoot: `dist_${buildType}`,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  plugins: [],
  defineConstants: {
  },
  copy: {
    patterns: [
      { from: 'src/components/swan-chart/index.js', to: `dist_${buildType}/components/swan-chart/index.js`},
      { from: 'src/components/swan-chart/index.json', to: `dist_${buildType}/components/swan-chart/index.json`},
      { from: 'src/components/swan-chart/index.swan', to: `dist_${buildType}/components/swan-chart/index.swan`},
      { from: 'src/components/swan-chart/index.css', to: `dist_${buildType}/components/swan-chart/index.css`},
      {
        from: 'node_modules/taro-echarts/components/ec-canvas/',
        to: `dist_${buildType}/npm/taro-echarts/components/ec-canvas`,
        ignore: ['ec-canvas.js', 'wx-canvas.js','echarts.js']
      },
      {
        from: 'src/libs/echarts.js',
        to: `dist_${buildType}/npm/taro-echarts/components/ec-canvas/echarts.js`,
      }
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    compile: {
      // exclude: [
      //   function (modulePath) {
      //     return modulePath.indexOf('vod-wx-sdk-v2') >= 0
      //   }
      // ]
      exclude: [
        path.resolve(__dirname, '..', 'node_modules/taro-echarts/components/ec-canvas/echarts.js'),
        path.resolve(__dirname, '..', 'src/libs'),
      ],
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
