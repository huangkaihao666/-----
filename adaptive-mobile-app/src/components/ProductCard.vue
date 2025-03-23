<!-- ProductCard.vue -->
<template>
  <div class="product-card">
    <div class="product-info">
      <div class="product-header">
        <h3 class="product-name">{{ product.name }}</h3>
        <div v-if="product.discount" class="discount-badge">-{{ product.discount }}%</div>
      </div>
      <div class="product-price">
        <span class="current-price">¥{{ product.price }}</span>
        <span v-if="product.originalPrice" class="original-price">¥{{ product.originalPrice }}</span>
      </div>
      <div class="product-rating">
        <div class="stars">
          <span v-for="i in 5" :key="i" class="star">★</span>
        </div>
        <span class="rating-count">{{ product.ratingCount }}条评价</span>
      </div>
      <div class="product-description">
        <p>这是一款高性能智能手表，支持多种运动模式和健康监测功能。</p>
      </div>
      <div class="action-buttons">
        <button class="add-cart-btn">加入购物车</button>
        <button class="buy-now-btn">立即购买</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.product-card {
  width: 300px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  background-color: #fff;
  margin: 0 auto;
  transition: transform 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-info {
  padding: 15px;
}

.product-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
}

.product-name {
  font-size: 16px;
  font-weight: 500;
  color: #333;
  flex: 1;
}

.discount-badge {
  background-color: #ff5252;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
}

.product-price {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.current-price {
  font-size: 18px;
  font-weight: bold;
  color: #ff5252;
  margin-right: 8px;
}

.original-price {
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
}

.product-rating {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.stars {
  display: flex;
  margin-right: 8px;
}

.star {
  color: #fdcc0d;
  font-size: 14px;
}

.rating-count {
  font-size: 12px;
  color: #666;
}

.product-description {
  margin-bottom: 15px;
  font-size: 14px;
  color: #666;
  line-height: 1.4;
}

.action-buttons {
  display: flex;
  gap: 10px;
}

.add-cart-btn, .buy-now-btn {
  flex: 1;
  padding: 8px 0;
  border: none;
  border-radius: 4px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.add-cart-btn {
  background-color: #fff;
  color: #ff5252;
  border: 1px solid #ff5252;
}

.buy-now-btn {
  background-color: #ff5252;
  color: white;
}

.add-cart-btn:hover, .buy-now-btn:hover {
  opacity: 0.9;
  transform: scale(1.02);
}

@media screen and (max-width: 320px) {
  .product-card {
    width: 100%;
  }
  
  .action-buttons {
    flex-direction: column;
  }
}
</style>