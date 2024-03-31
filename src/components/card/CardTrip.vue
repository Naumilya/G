<script setup lang="ts">
import type Trip from '@/models/trip.interface'
import { onMounted, ref } from 'vue'

const { id, pathIconImage, tripName } = defineProps<Trip>()

const observerElement = ref<HTMLElement | null>(null)
const observer = new IntersectionObserver(handleIntersect, {
  threshold: 0.5
})

onMounted(() => {
  if (observerElement.value) {
    observer.observe(observerElement.value)
  }
})

function handleIntersect(entries: IntersectionObserverEntry[]) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    }
  })
}
</script>

<template>
  <TransitionGroup name="list" tag="ul">
    <div ref="observerElement" class="card">
      <img :src="pathIconImage" alt="card-image" class="card__img" />
      <div class="card-content">
        <p class="card-content__name">{{ tripName }}</p>
        <ul class="card-content__list">
          <li>
            <router-link :to="`/flights/${id}`">Flights</router-link>
          </li>
          <li>
            <router-link :to="`/flights/${id}`">Hotels</router-link>
          </li>
          <li>
            <router-link :to="`/flights/${id}`">Resorts</router-link>
          </li>
        </ul>
      </div>
    </div>
  </TransitionGroup>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.card {
  background-color: var(--neutrals);
  box-shadow: var(--shadow-card);
  border-radius: 16px;
  padding: 16px;
  display: flex;
  gap: 16px;
  opacity: 0;
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
  transform: translateY(50px);
}
.card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.card:hover .card__img {
  scale: 1.1;
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 8px;
}

.card-content__list {
  font-family: 'Montserrat';
  font-size: 14px;
  font-weight: 500;
  list-style: '•';
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  li {
    padding-left: 8px;
  }

  a {
    color: var(--blackish-green);
    text-decoration: none;
  }
}

.card-content__list li:first-child {
  list-style-type: none;
  padding-left: 0;
}

.card-content__name {
  font-size: 16px;
  font-weight: 600;
  color: var(--blackish-green);
}
</style>
