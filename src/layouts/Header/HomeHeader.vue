<script setup lang="ts">
import Navigation from '@/blocks/Navigation/BaseNavigation.vue'
</script>

<template>
  <header class="header">
    <div class="container-fluid">
      <Navigation is-white />
    </div>
    <div class="header__titles container">
      <h2>Helping Others</h2>
      <h1>Live & Travel</h1>
      <p>Special offers to suit your plan</p>
    </div>
  </header>
</template>

<style scoped>
.header {
  background: url('@/assets/images/background-home.jpg') no-repeat center center;
  height: 600px;
  margin-top: 30px;
}

.container-fluid {
  max-width: 1336px;
  margin: 0 auto;
  padding: 24px 10px;
}

.header__titles {
  text-align: center;
  color: var(--neutrals);
  margin-top: 54px;
}

.header__titles h1 {
  font-family: 'Trade Gothic Extended';
  font-size: 80px;
}

.header__titles h2 {
  font-family: 'Trade Gothic Extended';
  font-size: 45px;
  padding: 4px 0 16px 0;
}

.header__titles p {
  font-size: 20px;
  font-weight: 600;
}
</style>
