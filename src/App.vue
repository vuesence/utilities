<script setup lang="ts">
// import MainLayout from "./layouts/MainLayout.vue";

// import { onMounted } from "vue";
import { useScreenWidthTracker } from "@/composables/useScreenWidthTracker";

useScreenWidthTracker({
  mobile: 480,
  tablet: 767,
  notebook: 1199,
  desktop: 10000,
});

// onMounted(() => {});
</script>

<template>
  <!-- <MainLayout /> -->
  <p>hello</p>
</template>

<style lang="scss">
.picture {
  display: block;
  max-width: 100%;
  margin: 30px auto 0;
}
</style>
