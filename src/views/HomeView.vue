<script setup lang="ts">
import FlightForm from '@/blocks/Form/FlightForm.vue'
import StayForm from '@/blocks/Form/StayForm.vue'
import BaseButton from '@/components/button/BaseButton.vue'
import CardTrip from '@/components/card/CardTrip.vue'
import BaseTab from '@/components/tab/BaseTab.vue'
import Trips from '@/constants/trip'
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
    <section class="plan">
      <div class="plan__header">
        <div class="plan__header-item">
          <h2 class="plan__title">Plan your perfect trip</h2>
          <p class="plan__subtitle">
            Search Flights & Places Hire to our most popular destinations
          </p>
        </div>
        <div class="plan__header-item">
          <BaseButton size="medium" style-type="outline">See more places</BaseButton>
        </div>
      </div>
      <div class="plan__content">
        <CardTrip
          v-for="trip in Trips"
          :id="trip.id"
          :key="trip.id"
          :trip-name="trip.tripName"
          :path-icon-image="trip.pathIconImage"
        />
      </div>
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

.plan {
  margin-top: 69px;
}

.plan__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.plan__header-item {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.plan__content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 32px;
}
</style>
