<script setup lang="ts">
interface Props {
  placeholder: string
  label?: string
  supportText?: string
}

const { placeholder, label } = defineProps<Props>()
</script>

<template>
  <label for="input" v-if="label">{{ label }}</label>
  <input id="input" :placeholder="placeholder" />
  <label for="input" v-if="supportText"> {{ supportText }}</label>
</template>

<style scoped></style>
