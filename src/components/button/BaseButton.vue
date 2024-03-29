<script setup lang="ts">
interface Props {
  disabled?: boolean
  size: 'small' | 'medium' | 'large'
  icon?: boolean
  styleType?: 'outline' | 'border-none'
}

const { disabled } = defineProps<Props>()
</script>

<template>
  <button class="button" :class="[size, icon ? 'icon' : '', styleType]" :disabled="disabled">
    <slot name="left-icon" />
    <slot />
    <slot name="right-icon" />
  </button>
</template>

<style scoped>
.button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  cursor: pointer;
  transition: all 0.3s;
  background-color: var(--mint-green);

  outline: none;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
}

.button:hover {
  border-radius: 0px;
}

.button:focus {
  outline: 1px solid var(--mint-green);
  outline-offset: 1px;
}

.button:active {
  background-color: #82cbb2;
  outline: none;
}

.button:disabled {
  cursor: not-allowed;
  background-color: var(--neutrals-2);
  color: var(--neutrals-5);
}

.large {
  padding: 15.5px 16px;
}

.medium {
  padding: 11.5px 16px;
}

.small {
  padding: 7.5px 16px;
}

.icon {
}

.icon.small {
  padding: 8px;
  font-size: 16px;
}

.icon.medium {
  padding: 12px;
  font-size: 16px;
}

.icon.large {
  padding: 12px;
  font-size: 24px;
}

.outline {
  background-color: transparent;
  border: 1px solid var(--mint-green);
}

.outline:hover {
  border-color: var(--mint-green-2);
  border-radius: 4px;
}

.outline:focus {
  border-color: var(--mint-green-2);
  border-radius: 4px;
  outline: 1px solid var(--mint-green);
  outline-offset: 0px;
}

.outline:active {
  border-color: var(--mint-green-3);
  background-color: transparent;
}

.outline:disabled {
  border-color: var(--neutrals-2);
  background-color: transparent;
  color: var(--neutrals-5);
}

.border-none {
  border: none;
  outline: none;
  background-color: transparent;
}

.border-none:hover {
  color: var(--mint-green-2);
}

.border-none:focus {
  border: none;
  outline: none;
}

.border-none:active {
  border: none;
  outline: none;
  color: var(--mint-green-3);
}

.border-none:disabled {
  border: none;
  outline: none;
  color: var(--neutrals-2);
}
</style>
