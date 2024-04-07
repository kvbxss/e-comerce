<template>
  <div class="p-2 rounded-md grow w-full flex gap-4 border border-white/10">
    <div class="flex-[1.5]">
      <img :src="product.image" class="flex aspect-video rounded-md" alt="" />
    </div>

    <div class="flex flex-[1] flex-col gap-2 shrink-0">
      <h2>{{ product.title }}</h2>

      <p>{{ product.price }} $</p>

      <!-- TODO: handle add / remove from cart logic (store?) -->
      <UButton
        color="primary"
        class="flex rounded-md w-fit ml-auto items-center gap-2 mt-auto"
      >
        <Icon name="heroicons:plus-small-20-solid" class="size-4" />
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from "./CartItem.vue";

defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true,
  },
});
</script>
