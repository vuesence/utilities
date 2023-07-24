<script setup lang="ts">
const props = defineProps({
  open: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <aside class="drawer-menu" :class="{ open: props.open }">
    <nav class="menu">
      <h2>Awesome CSS Menu</h2>
      <a role="menuitem" tabindex="-1" href="#">Menu Item 01</a>
      <a role="menuitem" tabindex="-1" href="#">Menu Item 02</a>
      <a role="menuitem" tabindex="-1" href="#">Menu Item 03</a>
      <a role="menuitem" tabindex="-1" href="#">Menu Item 13</a>
      <a role="menuitem" tabindex="-1" href="#">Menu Item 14</a>
      <a role="menuitem" tabindex="-1" href="#">Menu Item 15</a>
    </nav>
    <label for="menu-opener" class="menu-overlay"></label>
  </aside>
</template>

<style lang="scss" scoped>
.drawer-menu {
  position: fixed;
  z-index: 99;
  width: 90vw;
  height: 100vh;
  // left: 0;
  top: 0;
  bottom: 0;
  transform: translateX(-100%);
  transition: transform 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
  // display: grid;
  grid-template-areas: 'MENU OVERLAY';
  grid-template-columns: 15fr 5fr;

  .menu {
    display: block;
    flex-flow: column wrap;
    transform: translateX(-30%);
    opacity: 0;
    color: #fff;
    transition: all 500ms cubic-bezier(0.4, 0.0, 0.2, 1);
    transition-delay: 0;
    contain: content;
    grid-area: 'MENU';
    background-color: rebeccapurple;
    box-sizing: border-box;
    padding: 24px;
    overflow: auto;
    -webkit-overflow-scrolling: touch;

  }

}

.open .menu {
  transform: none;
  opacity: 1;
  transition-delay: 200ms
}

.menu-overlay {
  display: block;
  grid-area: 'OVERLAY';

  :not(.open) & {
    pointer-events: none
  }
}

@media (min-width: 30em) {
  .drawer-menu {
    grid-template-columns: auto 1fr;
  }

  .menu {
    min-width: 400px;
  }
}
</style>
