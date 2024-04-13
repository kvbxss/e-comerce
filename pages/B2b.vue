<template>
  <div class="container">
    <h1>B2B Products</h1>
    <ProductsComponent />
    <ul>
      <li v-for="product in products" :key="product.id">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProductsComponent from "~/components/Products.vue";

const products = ref([
  { id: 1, name: 'Produkt 1', description: 'Opis produktu 1' },
  { id: 2, name: 'Produkt 2', description: 'Opis produktu 2' },
  { id: 3, name: 'Produkt 3', description: 'Opis produktu 3' },
]);
</script>

<style scoped>
.container {
  text-align: center;
  max-width: 800px;
  margin: auto;
}

h1 {
  color: #a6a6a6;
  font-size: 36px;
  margin-bottom: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 20px 0;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
}

h2 {
  font-size: 24px;
  color: #222;
}

p {
  color: #666;
  font-size: 14px;
}
</style>
