<script setup lang="ts">
import BaseLogo from '@/components/logo/BaseLogo.vue'
import { Icon } from '@iconify/vue'

interface Props {
  isWhite?: boolean
}

const { isWhite } = defineProps<Props>()
</script>

<template>
  <nav class="navigation" :class="isWhite ? 'white' : ''">
    <div class="navigation__menu navigation__menu--left">
      <router-link to="/flights" class="navigation__menu-link">
        <Icon icon="ion:airplane" height="24px" />
        Find Flights</router-link
      >
      <router-link to="/hotels" class="navigation__menu-link">
        <Icon icon="ion:bed" height="24px" />
        Find Stays</router-link
      >
    </div>
    <div class="logo-container">
      <BaseLogo :is-white="isWhite" class="logo" />
    </div>
    <div class="navigation__menu navigation__menu--right">
      <router-link to="/">Login</router-link>
      <router-link to="/" class="navigation__menu-button">Sign Up</router-link>
    </div>
  </nav>
</template>

<style scoped>
a {
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
}

.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navigation * {
  color: var(--blackish-green);
}

.navigation__menu {
  display: flex;
  align-items: center;
  gap: 32px;
}

.logo-container {
  margin-left: -50px;
}

.navigation__menu-link {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
}

.navigation__menu-button {
  outline: none;
  padding: 15.5px 24px;
  background-color: var(--blackish-green);
  color: var(--neutrals);
  border-radius: 8px;
}

.navigation__menu-button:hover {
  border-radius: 0px;
}

.navigation__menu-button:focus {
  outline: 1px solid var(--blackish-green);
  outline-offset: 1px;
}

.white * {
  color: var(--neutrals);
}

.white .navigation__menu-button {
  color: var(--blackish-green);
  background-color: var(--neutrals);
}
.white .navigation__menu-button:focus {
  outline: 1px solid var(--neutrals);
}
</style>
