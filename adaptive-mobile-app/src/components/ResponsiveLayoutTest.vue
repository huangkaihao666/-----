<!-- ResponsiveLayoutTest.vue -->
<template>
  <div class="responsive-layout-test">
    <h3 class="test-title">响应式布局测试</h3>
    
    <div class="test-section">
      <h4>Flex布局测试</h4>
      <div class="flex-container">
        <div class="flex-item">项目1</div>
        <div class="flex-item">项目2</div>
        <div class="flex-item">项目3</div>
        <div class="flex-item">项目4</div>
        <div class="flex-item">项目5</div>
      </div>
    </div>
    
    <div class="test-section">
      <h4>Grid布局测试</h4>
      <div class="grid-test-container">
        <div class="grid-test-item">1</div>
        <div class="grid-test-item">2</div>
        <div class="grid-test-item">3</div>
        <div class="grid-test-item">4</div>
        <div class="grid-test-item">5</div>
        <div class="grid-test-item">6</div>
      </div>
    </div>
    
    <div class="test-section">
      <h4>媒体查询测试</h4>
      <p class="media-query-text">当前视口宽度下的样式</p>
      <div class="media-query-box"></div>
    </div>
    
    <div class="test-section">
      <h4>响应式间距测试</h4>
      <div class="responsive-spacing">
        <div class="space-item">A</div>
        <div class="space-item">B</div>
        <div class="space-item">C</div>
      </div>
    </div>
    
    <div class="test-section">
      <h4>响应式字体测试</h4>
      <p class="responsive-text">这段文字会根据屏幕宽度变化大小</p>
    </div>
  </div>
</template>

<script setup>
// 无需特殊逻辑
</script>

<style scoped>
.responsive-layout-test {
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

/* Flex布局测试 */
.flex-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

.flex-item {
  background-color: #3498db;
  color: white;
  padding: 15px;
  border-radius: 5px;
  flex: 1;
  min-width: 80px;
  text-align: center;
}

/* Grid布局测试 */
.grid-test-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-bottom: 20px;
}

.grid-test-item {
  background-color: #9b59b6;
  color: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  font-size: 18px;
}

/* 媒体查询测试 */
.media-query-text {
  text-align: center;
  margin-bottom: 10px;
}

.media-query-box {
  height: 50px;
  background-color: #2ecc71;
  margin: 0 auto;
  width: 80%;
  border-radius: 5px;
}

/* 响应式间距测试 */
.responsive-spacing {
  display: flex;
  justify-content: space-between;
}

.space-item {
  background-color: #e74c3c;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

/* 响应式字体测试 */
.responsive-text {
  text-align: center;
  font-size: 18px;
  color: #e67e22;
  font-weight: bold;
}

/* 媒体查询 */
@media screen and (max-width: 600px) {
  .flex-container {
    flex-direction: column;
  }
  
  .grid-test-container {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .media-query-box {
    background-color: #e74c3c;
    width: 90%;
  }
  
  .responsive-spacing {
    gap: 20px;
  }
  
  .responsive-text {
    font-size: 16px;
  }
}

@media screen and (max-width: 400px) {
  .grid-test-container {
    grid-template-columns: 1fr;
  }
  
  .media-query-box {
    background-color: #f39c12;
    width: 95%;
  }
  
  .responsive-spacing {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  
  .responsive-text {
    font-size: 14px;
  }
}
</style> 