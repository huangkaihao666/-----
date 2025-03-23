import { createApp } from 'vue'
import App from './App.vue'

// 导入viewport单位兼容性处理
import 'viewport-units-buggyfill'
import 'viewport-units-buggyfill/viewport-units-buggyfill.hacks'

// 只在需要的浏览器中初始化补丁
if (navigator.userAgent.indexOf('Android') > 0 || 
    /iPad|iPhone|iPod/.test(navigator.userAgent)) {
  window.viewportUnitsBuggyfill.init({
    hacks: window.viewportUnitsBuggyfillHacks,
    refreshDebounceWait: 50
  });
}

createApp(App).mount('#app')
