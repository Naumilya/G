<script setup lang="ts">
import BaseButton from '@/components/button/BaseButton.vue'
import BaseInput from '@/components/input/BaseInput.vue'
import { Icon } from '@iconify/vue'
</script>

<template>
  <form>
    <div class="form__header">
      <h1 class="form__title">Where are you flying?</h1>
    </div>
    <div class="form__content">
      <BaseInput class="wh" label="Enter Destination" placeholder="Istanbul, Turkey">
        <!-- <template v-slot:left-icon>
          <Icon icon="ion:bed" />
        </template> -->
      </BaseInput>
      <BaseInput label="Check In" placeholder="Fri 12/2">
        <!-- <template v-slot:left-icon>
          <Icon icon="ion:bed" />
        </template> -->
      </BaseInput>
      <BaseInput label="Check Out" placeholder="Sun 12/2">
        <!-- <template v-slot:left-icon>
          <Icon icon="ion:bed" />
        </template> -->
      </BaseInput>
      <BaseInput class="wh" label="Rooms & Guests" placeholder="1 room, 2 guests">
        <!-- <template v-slot:left-icon>
          <Icon icon="ion:bed" />
        </template> -->
      </BaseInput>
    </div>
    <div class="form__buttons">
      <BaseButton size="large" style-type="border-none">
        <template v-slot:left-icon>
          <Icon icon="ion:add" />
        </template>
        Add promo code
      </BaseButton>

      <BaseButton size="large" type="submit" @click.prevent="">
        <template v-slot:left-icon>
          <Icon icon="ion:paper-plane" />
        </template>
        Show Flights
      </BaseButton>
    </div>
  </form>
</template>

<style scoped>
.form__header {
  margin-bottom: 32px;
}

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
