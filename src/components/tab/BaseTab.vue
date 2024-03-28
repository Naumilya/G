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
  <div class="tab">
    <div class="tab-nav">
      <span
        v-for="tab in tabs"
        :key="tab.title"
        :class="['tab-nav__item', { selected: tab.title === selectedTab }]"
        @click="clickOnTab(tab.title)"
      >
        <Icon :icon="tab.icon" :height="24" />
        {{ tab.title }}</span
      >
    </div>
    <div class="tab-content">
      <transition name="slide-fade" mode="out-in">
        <slot />
      </transition>
    </div>
  </div>
</template>

<style scoped>
.tab-nav {
  display: flex;
  gap: 32px;
  transition: all 0.3s;
}

.tab-nav span {
  position: relative;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding-bottom: 22px;
  overflow: hidden;
}

.tab-nav span:before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  height: 3px;
  width: 0%;
  background: var(--mint-green);
  transition: width 0.2s ease;
}

.tab-nav span:hover:before,
.tab-nav span:focus:before,
.tab-nav span.selected::before {
  width: 100%;
}

.tab-content {
  margin-top: 48px;
}
</style>
