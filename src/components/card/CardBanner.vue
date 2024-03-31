<script setup lang="ts">
interface Props {
  backgroundImage: string
}

const { backgroundImage } = defineProps<Props>()
</script>

<template>
  <div
    class="card"
    :style="{
      backgroundBlendMode: 'multiply',
      background: `url(${backgroundImage}), linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(18, 18, 18, 0.7) 80%,
        rgba(0, 0, 0, 1) 100%
      )`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }"
  >
    <h2 class="title">
      <slot name="title" />
    </h2>
    <p class="paragraph"><slot name="paragraph" /></p>
    <slot />
  </div>
</template>

<style scoped>
.card {
  color: var(--neutrals);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 372px 0 24px 0;
  border-radius: 20px;
}

.title {
  font-family: 'Trade Gothic Extended';
  font-size: 40px;
  color: var(--white);
}

.paragraph {
  padding: 8px 0 16px 0;
  color: var(--white);
  max-width: 389px;
}
</style>
