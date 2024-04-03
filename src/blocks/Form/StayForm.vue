<script setup lang="ts">
import { Icon } from '@iconify/vue'

import BaseInput from '@/components/input/BaseInput.vue'
</script>

<template>
  <form>
    <BaseInput label="Enter Destination" placeholder="Istanbul, Turkey">
      <template v-slot:left-icon>
        <Icon icon="ion:bed" />
      </template>
    </BaseInput>
  </form>
</template>

<style scoped></style>
