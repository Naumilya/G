<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRouter } from 'vue-router'

const route = useRouter()

const layout = computed(() => {
  return route.currentRoute.value.meta.layout || 'error'
})
</script>

<template>
  <component :is="layout">
    <RouterView />
  </component>
</template>

<style scoped></style>
