<script setup lang="ts">
import BaseFooter from '@/layouts/Footer/BaseFooter.vue'
import HomeHeader from '@/layouts/Header/HomeHeader.vue'
</script>

<template>
  <div class="transition">
    <HomeHeader />
    <main class="main">
      <transition name="slide-fade" mode="out-in">
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </transition>
    </main>
    <BaseFooter />
  </div>
</template>

<style scoped>
.main {
  /* overflow: hidden; */
}
</style>
