<script setup lang="ts">
import BaseFooter from '@/layouts/Footer/BaseFooter.vue'
import BaseHeader from '@/layouts/Header/BaseHeader.vue'
</script>

<template>
  <div class="transition wrapper">
    <BaseHeader />
    <main>
      <transition name="slide-fade" mode="out-in">
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </transition>
    </main>
    <BaseFooter class="footer" />
  </div>
</template>

<style scoped></style>
