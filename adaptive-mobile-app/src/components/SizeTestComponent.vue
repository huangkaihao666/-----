<!-- SizeTestComponent.vue -->
<template>
  <div class="size-test-container">
    <h3 class="test-title">尺寸转换测试</h3>
    
    <div class="test-section">
      <h4>宽度测试</h4>
      <div class="width-test">
        <div class="test-box width-50">宽度50px</div>
        <div class="test-box width-100">宽度100px</div>
        <div class="test-box width-150">宽度150px</div>
        <div class="test-box width-200">宽度200px</div>
      </div>
    </div>
    
    <div class="test-section">
      <h4>内边距测试</h4>
      <div class="padding-test">
        <div class="test-box padding-10">内边距10px</div>
        <div class="test-box padding-20">内边距20px</div>
        <div class="test-box padding-30">内边距30px</div>
      </div>
    </div>
    
    <div class="test-section">
      <h4>字体大小测试</h4>
      <div class="font-size-test">
        <p class="font-12">字体12px</p>
        <p class="font-16">字体16px</p>
        <p class="font-20">字体20px</p>
        <p class="font-24">字体24px</p>
        <p class="font-32">字体32px</p>
      </div>
    </div>
    
    <div class="test-section">
      <h4>圆角与边框测试</h4>
      <div class="border-radius-test">
        <div class="radius-box radius-5">圆角5px</div>
        <div class="radius-box radius-10">圆角10px</div>
        <div class="radius-box radius-20">圆角20px</div>
      </div>
    </div>
    
    <div class="test-section">
      <h4>边距测试</h4>
      <div class="margin-test">
        <div class="margin-box margin-10">外边距10px</div>
        <div class="margin-box margin-20">外边距20px</div>
        <div class="margin-box margin-30">外边距30px</div>
      </div>
    </div>
    
    <div class="test-section">
      <h4>定位测试</h4>
      <div class="position-test">
        <div class="position-container">
          <div class="position-item top-10-left-10">上10px 左10px</div>
          <div class="position-item top-20-right-20">上20px 右20px</div>
          <div class="position-item bottom-10-left-10">下10px 左10px</div>
          <div class="position-item bottom-20-right-20">下20px 右20px</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 无需特殊逻辑
</script>

<style scoped>
.size-test-container {
  background-color: #f5f7fa;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.test-title {
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
  color: #2c3e50;
}

.test-section {
  margin-bottom: 30px;
  background-color: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

h4 {
  font-size: 16px;
  margin-bottom: 15px;
  color: #34495e;
  border-bottom: 1px solid #eee;
  padding-bottom: 5px;
}

/* 宽度测试 */
.width-test {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.test-box {
  background-color: #3498db;
  color: white;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
}

.width-50 { width: 50px; }
.width-100 { width: 100px; }
.width-150 { width: 150px; }
.width-200 { width: 200px; }

/* 内边距测试 */
.padding-test {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.padding-10 { padding: 10px; background-color: #2ecc71; }
.padding-20 { padding: 20px; background-color: #27ae60; }
.padding-30 { padding: 30px; background-color: #16a085; }

/* 字体大小测试 */
.font-size-test {
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 5px;
}

.font-12 { font-size: 12px; }
.font-16 { font-size: 16px; }
.font-20 { font-size: 20px; }
.font-24 { font-size: 24px; }
.font-32 { font-size: 32px; }

/* 圆角与边框测试 */
.border-radius-test {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.radius-box {
  background-color: #9b59b6;
  color: white;
  padding: 15px;
  width: 150px;
  text-align: center;
}

.radius-5 { border-radius: 5px; }
.radius-10 { border-radius: 10px; }
.radius-20 { border-radius: 20px; }

/* 边距测试 */
.margin-test {
  background-color: #f8f9fa;
  padding: 5px;
}

.margin-box {
  background-color: #e74c3c;
  color: white;
  padding: 10px;
  text-align: center;
  width: 120px;
}

.margin-10 { margin: 10px; }
.margin-20 { margin: 20px; }
.margin-30 { margin: 30px; }

/* 定位测试 */
.position-test {
  margin-top: 20px;
}

.position-container {
  position: relative;
  height: 200px;
  background-color: #ecf0f1;
  border: 1px solid #bdc3c7;
  border-radius: 5px;
}

.position-item {
  position: absolute;
  background-color: #f39c12;
  color: white;
  padding: 5px;
  font-size: 12px;
  border-radius: 3px;
}

.top-10-left-10 { top: 10px; left: 10px; }
.top-20-right-20 { top: 20px; right: 20px; }
.bottom-10-left-10 { bottom: 10px; left: 10px; }
.bottom-20-right-20 { bottom: 20px; right: 20px; }
</style> 