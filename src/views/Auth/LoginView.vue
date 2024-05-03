<script setup lang="ts">
import BaseInput from '@/components/input/BaseInput.vue'
import BaseLogo from '@/components/logo/BaseLogo.vue'
</script>

<template>
  <section class="login">
    <div class="login__text">
      <BaseLogo />
      <h2 class="login__title">Login</h2>
      <P class="login__subtitle">Login to access your Globe account</P>
    </div>
    <form class="login__form">
      <BaseInput label="Email" placeholder="john.doe@gmail.com" class="" />
      <BaseInput label="Password" placeholder="************" class="" />
    </form>
  </section>
</template>

<style scoped>
.login {
  width: 100%;
}
</style>
