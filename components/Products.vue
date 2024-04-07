<template>
  <h1 class="place-self-center text-3xl font-black">Our best deals:</h1>
  <ProductCard v-for="product in items" :key="product.id" :product="product" />
</template>

<script setup lang="ts">
import { ITEMS } from "~/constants/data";

const items = ITEMS;
</script>
