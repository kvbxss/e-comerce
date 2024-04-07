<script setup lang="ts">
const { data: page } = await useAsyncData("index", () =>
  queryContent("/").findOne()
);

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
});
definePageMeta({
  layout: "content",
});

const items = [
  "https://picsum.photos/1920/1080?random=1",
  "https://picsum.photos/1920/1080?random=2",
  "https://picsum.photos/1920/1080?random=3",
  "https://picsum.photos/1920/1080?random=4",
  "https://picsum.photos/1920/1080?random=5",
  "https://picsum.photos/1920/1080?random=6",
];
</script>

<template>
  <div class="grid xl:grid-cols-2 items-center">
    <div>
      <ULandingHero
        :description="page.hero.subtitle"
        :title="page.hero.title"
        :links="[
          {
            label: 'Get Started',
            icon: 'i-heroicons-arrow-right-20-solid',
            size: 'lg',
            color: 'primary',
          },
        ]"
      />
    </div>
    <UCarousel
      v-slot="{ item }"
      :items="items"
      :ui="{ item: 'basis-full' }"
      class="rounded-lg overflow-hidden max-h-[calc(100vh-12rem)]"
    >
      <img :src="item" class="w-full" draggable="false" />
    </UCarousel>
  </div>
</template>
