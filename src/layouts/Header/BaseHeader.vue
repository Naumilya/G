<script setup lang="ts">
import Navigation from '@/blocks/Navigation/BaseNavigation.vue'
</script>

<template>
  <header class="header">
    <div class="container">
      <Navigation />
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  left: 0;
  background-color: var(--neutrals);
  padding: 21px 0;
}
</style>
