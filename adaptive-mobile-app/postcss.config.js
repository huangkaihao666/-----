// postcss.config.js
import postcssViewport from 'postcss-px-to-viewport-8-plugin';
import postcssViewportUnits from 'postcss-viewport-units';
import cssnano from 'cssnano';

export default {
  plugins: [
    postcssViewport({
      viewportWidth: 375, // 设计稿宽度
      unitPrecision: 3, // 精度，保留3位小数
      viewportUnit: 'vw', // 指定需要转换成的视窗单位
      selectorBlackList: ['.ignore-convert', 'van-'], // 不转换的类名
      minPixelValue: 1, // 小于或等于1px不转换为视窗单位
      mediaQuery: false, // 是否在媒体查询中转换px
      exclude: [/node_modules\/vant/], // 排除vant组件库
      landscape: false, // 是否处理横屏情况
      landscapeUnit: 'vw', // 横屏时使用的单位
      landscapeWidth: 568 // 横屏时使用的视口宽度
    }),
    postcssViewportUnits({
      filterRule: rule => rule.selector.indexOf('::after') === -1 && 
                         rule.selector.indexOf('::before') === -1 && 
                         rule.selector.indexOf(':after') === -1 && 
                         rule.selector.indexOf(':before') === -1
    }),
    cssnano({
      preset: [
        'default', 
        {
          discardComments: { removeAll: true },
          normalizeWhitespace: false,
          zindex: false
        }
      ]
    })
  ]
};