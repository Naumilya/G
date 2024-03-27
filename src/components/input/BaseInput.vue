<script setup lang="ts">
interface Props {
  placeholder: string
  label?: string
  supportText?: string
}

const { placeholder, label } = defineProps<Props>()
</script>

<template>
  <div class="input-container">
    <label for="input" class="label" v-if="label">{{ label }}</label>
    <input id="input" class="input" :placeholder="placeholder" />
    <label for="input" class="support" v-if="supportText"> {{ supportText }}</label>
  </div>
</template>

<style scoped>
.input {
  border-radius: 4px;
  padding: 18px 16px;
  border: 1px solid var(--gray-stroke);
  font-size: 16px;
}

.input-container {
  display: flex;
  flex-direction: column;
}

.label {
  font-size: 14px;
  margin-left: 12px;
  padding: 0 4px;
  margin-bottom: -10px;
  z-index: 1;
  background-color: var(--neutrals);
  max-width: max-content;
}

.support {
  padding-top: 4px;
  margin-left: 16px;
  font-size: 14px;
}
</style>
