<script setup lang="ts">
import { type Tab } from '@/models/tab.interface'
import { Icon } from '@iconify/vue'

interface Props {
  tabs: Tab[]
  selectedTab: string
}

const { tabs } = defineProps<Props>()
const emit = defineEmits(['changeTab'])

const clickOnTab = (tabName: string) => {
  emit('changeTab', tabName)
}
</script>

<template>
  <div class="tab-nav">
    <span
      v-for="tab in tabs"
      :key="tab.title"
      :class="['tab-nav__item', { selected: tab.title === selectedTab }]"
      @click="clickOnTab(tab.title)"
    >
      <Icon :icon="tab.icon" />
      {{ tab.title }}</span
    >
  </div>
  <div>
    <slot />
  </div>
</template>

<style scoped>
.selected {
  border-bottom: 3px solid var(--mint-green);
}
</style>
