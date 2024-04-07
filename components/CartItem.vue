<template>
  <UCard
    class="p-4 flex whitespace-nowrap gap-5 items-center shrink-0 last:border-none"
  >
    <img
      class="size-16 aspect-square rounded-md mr-2"
      :src="product.image"
      alt=""
    />

    <span>
      {{ product.title }}
    </span>

    <span>{{ product.price }} $</span>

    <span>Q: {{ product.quantity }}</span>

    <div class="ml-auto rounded-lg p-2 flex flex-col gap-2 items-center">
      <UButton>
        <Icon name="heroicons:plus-small-20-solid" />
      </UButton>

      <UButton>
        <Icon name="heroicons:minus-small-20-solid" />
      </UButton>
    </div>
  </UCard>
  <UDivider />
</template>

<script setup lang="ts">
export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true,
  },
});
</script>
