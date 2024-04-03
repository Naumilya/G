<script setup lang="ts">
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
    <div class="form__content">
      <div class="form__item">
        <BaseInput placeholder="Lahori - Karache" label="From" />
        <BaseButton style-type="border-none" size="large">
          <Icon icon="ion:swap-horizontal" />
        </BaseButton>
        <BaseInput placeholder="Lahori - Karache" label="To" />
      </div>
      <div class="form__item">
        <BaseInput class="wh" placeholder="07 Nov 22 - 13 Nov 22" label="Depart- Return" />
        <BaseInput placeholder="1 Passenger, Economy" label="Passenger - Class" />
      </div>
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

.form__content {
  display: flex;
  align-items: center;
  gap: 24px;

  .form__item {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .wh {
    width: 350px;
  }
}
</style>
