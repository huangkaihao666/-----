// src/utils/compatibilityChecker.js
export const checkViewportSupport = () => {
    // 检测浏览器是否支持vw单位
    const checkVW = () => {
      const bodyStyle = document.body.style;
      bodyStyle.width = '50vw';
      const isSupported = bodyStyle.width === '50vw';
      bodyStyle.width = '';
      return isSupported;
    };
    
    // 检测设备信息
    const getDeviceInfo = () => {
      const ua = navigator.userAgent;
      return {
        isIOS: /iPad|iPhone|iPod/.test(ua),
        isAndroid: ua.indexOf('Android') > 0,
        isSafari: /Safari/.test(ua) && !/Chrome/.test(ua),
        osVersion: (ua.match(/(Android|iOS|iPhone OS) ([0-9._]+)/) || [])[2] || ''
      };
    };
    
    const deviceInfo = getDeviceInfo();
    const vwSupported = checkVW();
    
    // 记录设备兼容性信息，可用于上报分析
    console.log('设备兼容性信息:', {
      ...deviceInfo,
      vwSupported,
      screenWidth: window.innerWidth,
      pixelRatio: window.devicePixelRatio || 1
    });
    
    // 返回是否需要降级处理
    return {
      needsPolyfill: !vwSupported || 
                    (deviceInfo.isIOS && parseFloat(deviceInfo.osVersion) < 9) ||
                    (deviceInfo.isAndroid && parseFloat(deviceInfo.osVersion) < 5),
      deviceInfo
    };
  };