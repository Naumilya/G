<script setup lang="ts">
import FlightForm from '@/blocks/Form/FlightForm.vue'
import StayForm from '@/blocks/Form/StayForm.vue'
import BaseButton from '@/components/button/BaseButton.vue'
import CardBanner from '@/components/card/CardBanner.vue'
import CardReviews from '@/components/card/CardReviews.vue'
import CardTrip from '@/components/card/CardTrip.vue'
import BaseTab from '@/components/tab/BaseTab.vue'
import Trips from '@/constants/trip'
import { type Tab } from '@/models/tab.interface'
import { Icon } from '@iconify/vue'
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
  <section class="form container">
    <BaseTab :tabs="tabs" :selectedTab="selectedTab" @changeTab="changeTab">
      <FlightForm v-if="selectedTab === 'Flights'" />
      <StayForm v-if="selectedTab === 'Stays'" />
    </BaseTab>
  </section>
  <section class="plan section container">
    <div class="section-header">
      <div class="section-header__item">
        <h2 class="section__title">Plan your perfect trip</h2>
        <p class="section__paragraph">
          Search Flights & Places Hire to our most popular destinations
        </p>
      </div>
      <div class="section-header__item">
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
  <section class="banner container">
    <CardBanner background-image="/src/assets/images/flight-banner.jpg">
      <template v-slot:title>Flights</template>
      <template v-slot:paragraph>
        Search Flights & Places Hire to our most popular destinations
      </template>
      <BaseButton size="large" type="submit">
        <template v-slot:left-icon>
          <Icon icon="ion:paper-plane" />
        </template>
        Show Flights
      </BaseButton>
    </CardBanner>
    <CardBanner background-image="/src/assets/images/hotel-banner.jpg">
      <template v-slot:title>Hotels</template>
      <template v-slot:paragraph>
        Search hotels & Places Hire to our most popular destinations
      </template>
      <BaseButton size="large" type="submit">
        <template v-slot:left-icon>
          <Icon icon="ion:bed" />
        </template>
        Show Hotels
      </BaseButton>
    </CardBanner>
  </section>
  <section class="reviews section container">
    <div class="section-header">
      <div class="section-header__item">
        <h2 class="section__title">Reviews</h2>
        <p class="section__paragraph">What people says about Golobe facilities</p>
      </div>
      <div class="section-header__item">
        <BaseButton size="medium" style-type="outline">See All</BaseButton>
      </div>
    </div>
    <div class="reviews__content">
      <CardReviews v-for="item in 5" :key="item" />
    </div>
  </section>
</template>

<style scoped>
.form {
  background-color: var(--neutrals);
  padding: 16px 16px 32px 32px;
  margin-top: -90px;
  border-radius: 16px;
  box-shadow: 0px 4px 16px rgba(141, 211, 187, 0.15);
}

.section {
  margin-top: 70px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
}

.section__header-item {
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

.banner {
  margin-top: 60px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.reviews {
  padding-bottom: 60px;
}

.reviews__content {
  padding-bottom: 24px;
  overflow: hidden;
  display: flex;
  gap: 50px;
  margin: 0 auto;
  width: calc(100vw - (100vw - 1212px) / 2);
}
</style>
