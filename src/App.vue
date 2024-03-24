<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRouter } from 'vue-router'

const route = useRouter()

const layout = computed(() => {
  return route.currentRoute.value.meta.layout || 'default'
})
</script>

<template>
  <transition name="slide-fade" mode="out-in">
    <component :is="layout">
      <router-view />
    </component>
  </transition>
</template>

<style scoped></style>
