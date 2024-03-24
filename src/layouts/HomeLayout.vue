<script setup lang="ts">
import HomeHeader from '@/layouts/Header/HomeHeader.vue'
</script>

<template>
  <div class="home">
    <HomeHeader />
    <main>
      <transition name="slide-fade" mode="out-in">
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </transition>
    </main>
  </div>
</template>

<style scoped>
.home {
  transition: all 0.5s;
}
</style>
