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
</script>

<template>
  <div>
    <Hero />

    <div
      class="grid xl:grid-cols-3 lg:grid-cols-2 gap-4 border p-2 rounded-md border-white/5"
    >
      <Products />
    </div>
  </div>

  <!--TODO: TESTIMONIALS -->

  <!-- TODO: FAQ -->
</template>
