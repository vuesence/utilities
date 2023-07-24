<script setup lang="ts">
import { ref } from "vue";
import DrawerMenu from "@/components/DrawerMenu.vue";

// import TheFooter from "@/components/TheFooter.vue";
const drawerStatus = ref(false);
// function toggleDrawer() {
//   drawerStatus =
// }
</script>

<template>
  <!-- <TheHeader /> -->
  <DrawerMenu :open="drawerStatus" />
  <p @click="drawerStatus = !drawerStatus">
    OPEN MENU
  </p>

  <div class="content">
    <!-- <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view> -->
  </div>
  <!-- <TheFooter /> -->
</template>

<style lang="scss">
p {
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 900;
  word-spacing: 140%;
  letter-spacing: 4px;
}
</style>
