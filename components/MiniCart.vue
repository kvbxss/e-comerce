<template>
  <UButton
    color="white"
    label="Cart"
    trailing-icon="i-heroicons-shopping-cart-20-solid"
    @click="isOpen = true"
  />

  <USlideover v-model="isOpen">
    <div class="p-4 flex-1">
      <CartItem v-for="item in items" :key="item.title" :product="item" />
    </div>
  </USlideover>
</template>

<script setup lang="ts">
import { ITEMS } from "~/constants/data";

const isOpen = ref(false);
const items = ITEMS.slice(0, 3);
</script>
