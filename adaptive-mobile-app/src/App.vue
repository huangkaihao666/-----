<!-- App.vue -->
<template>
  <div class="app-container">
    <h1 class="page-title">移动端自适应示例</h1>
    
    <section class="test-section">
      <h2>基础元素测试</h2>
      <div class="button-group">
        <button class="btn btn-primary">主要按钮</button>
        <button class="btn btn-secondary">次要按钮</button>
        <button class="btn btn-small">小按钮</button>
      </div>
      
      <div class="form-group">
        <label for="username">用户名：</label>
        <input type="text" id="username" placeholder="请输入用户名" />
      </div>
      
      <div class="form-group">
        <label for="message">留言：</label>
        <textarea id="message" rows="3" placeholder="请输入留言内容"></textarea>
      </div>
    </section>
    
    <section class="test-section">
      <h2>单位转换测试</h2>
      <SizeTestComponent />
    </section>
    
    <section class="test-section">
      <h2>响应式布局测试</h2>
      <ResponsiveLayoutTest />
    </section>
    
    <section class="test-section">
      <h2>卡片组件测试</h2>
      <ProductCard :product="sampleProduct" />
    </section>
    
    <section class="test-section">
      <h2>图标测试</h2>
      <div class="icon-group">
        <div class="icon-item">
          <div class="icon icon-heart"></div>
          <span>收藏</span>
        </div>
        <div class="icon-item">
          <div class="icon icon-share"></div>
          <span>分享</span>
        </div>
        <div class="icon-item">
          <div class="icon icon-cart"></div>
          <span>购物车</span>
        </div>
      </div>
    </section>
    
    <section class="test-section">
      <h2>列表和网格测试</h2>
      <ul class="feature-list">
        <li>自适应特性一：字体大小随屏幕变化</li>
        <li>自适应特性二：元素间距自动调整</li>
        <li>自适应特性三：按钮大小比例保持</li>
      </ul>
      
      <div class="grid-container">
        <div class="grid-item">网格1</div>
        <div class="grid-item">网格2</div>
        <div class="grid-item">网格3</div>
        <div class="grid-item">网格4</div>
      </div>
    </section>
    
    <footer class="page-footer">
      <p>移动端适配测试页面 &copy; 2025</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ProductCard from '@/components/ProductCard.vue';
import SizeTestComponent from '@/components/SizeTestComponent.vue';
import ResponsiveLayoutTest from '@/components/ResponsiveLayoutTest.vue';

// 样例产品数据
const sampleProduct = ref({
  id: 1,
  name: "2023新款智能手表Pro",
  price: 1299,
  originalPrice: 1599,
  discount: 20,
  ratingCount: 245
});
</script>

<style scoped>
.app-container {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.page-title {
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.test-section {
  margin-bottom: 30px;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  font-size: 18px;
  margin-bottom: 15px;
  color: #444;
  border-bottom: 1px solid #eee;
  padding-bottom: 8px;
}

.button-group {
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.btn {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
}

.btn-primary {
  background-color: #3498db;
  color: white;
}

.btn-secondary {
  background-color: #95a5a6;
  color: white;
}

.btn-small {
  padding: 6px 10px;
  font-size: 12px;
  background-color: #2ecc71;
  color: white;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
}

input, textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
}

.icon-group {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon {
  width: 40px;
  height: 40px;
  background-color: #f1c40f;
  border-radius: 50%;
  margin-bottom: 5px;
}

.feature-list {
  padding-left: 20px;
  margin-bottom: 15px;
}

.feature-list li {
  margin-bottom: 8px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

.grid-item {
  background-color: #e74c3c;
  color: white;
  text-align: center;
  padding: 20px;
  border-radius: 4px;
}

.page-footer {
  text-align: center;
  margin-top: 40px;
  padding-top: 10px;
  font-size: 12px;
  color: #777;
  border-top: 1px solid #eee;
}
</style>