<script setup lang="ts">
import BaseDropDownInput from '@/components/input/BaseDropDownInput.vue'
import BaseInput from '@/components/input/BaseInput.vue'
import { Icon } from '@iconify/vue'

import BaseButton from '@/components/button/BaseButton.vue'
import router from '@/router'

const goTo = (link: string) => {
  router.push(link)
}
</script>

<template>
  <form>
    <div>
      <BaseInput placeholder="Lahori - Karache" label="label" support-text="faq" />
      <BaseDropDownInput />
    </div>
    <div class="form__buttons">
      <BaseButton size="large" style-type="border-none">
        <template v-slot:left-icon>
          <Icon icon="ion:add" />
        </template>
        Add promo code
      </BaseButton>

      <BaseButton size="large" type="submit" @click.prevent="goTo('/flights')">
        <template v-slot:left-icon>
          <Icon icon="ion:paper-plane" />
        </template>
        Show Flights
      </BaseButton>
    </div>
  </form>
</template>

<style scoped>
.form__buttons {
  display: flex;
  gap: 24px;
  justify-content: end;
  padding: 32px 0;
}
</style>
