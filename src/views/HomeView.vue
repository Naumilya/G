<script setup lang="ts">
import FlightForm from '@/blocks/Form/FlightForm.vue'
import StayForm from '@/blocks/Form/StayForm.vue'
import BaseTab from '@/components/tab/BaseTab.vue'
import { type Tab } from '@/models/tab.interface'
import { ref } from 'vue'

const selectedTab = ref<string>('Flights')

const tabs: Tab[] = [
  { title: 'Flights', icon: 'ion:airplane' },
  { title: 'Stays', icon: 'ion:bed' }
]

const changeTab = (tabName: string) => {
  selectedTab.value = tabName
}
</script>

<template>
  <main class="container">
    <section class="form">
      <BaseTab :tabs="tabs" :selectedTab="selectedTab" @changeTab="changeTab">
        <FlightForm v-if="selectedTab === 'Flights'" />
        <StayForm v-if="selectedTab === 'Stays'" />
      </BaseTab>
    </section>
  </main>
</template>

<style scoped>
.form {
  background-color: var(--neutrals);
  padding: 16px 16px 32px 32px;
  margin-top: -90px;
  border-radius: 16px;
  box-shadow: 0px 4px 16px rgba(141, 211, 187, 0.15);
}
</style>
