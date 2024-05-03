<script setup lang="ts">
import BaseSlider from '@/components/slider/BaseSlider.vue'
</script>

<template>
  <main class="form">
    <div class="form__inner container">
      <transition name="slide-fade" mode="out-in">
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </transition>
      <BaseSlider />
    </div>
  </main>
</template>

<style scoped>
.form {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form__inner {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 104px;
}
</style>
