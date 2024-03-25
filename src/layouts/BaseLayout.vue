<script setup lang="ts">
import BaseHeader from '@/layouts/Header/BaseHeader.vue'
</script>

<template>
  <div class="transition">
    <BaseHeader />
    <main>
      <transition name="slide-fade" mode="out-in">
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </transition>
    </main>
  </div>
</template>

<style scoped></style>
