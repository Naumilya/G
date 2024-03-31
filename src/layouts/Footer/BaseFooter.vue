<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <footer class="footer">
    <form action="post" class="form container">
      <div class="form__item">
        <div class="form__content">
          <h3 class="form__title">Subscribe Newsletter</h3>
          <h4 class="form__subtitle">The Travel</h4>
          <p class="form__text">
            Get inspired! Receive travel discounts, tips and behind the scenes stories.
          </p>
        </div>
        <div class="form__input">
          <input
            type="email"
            name="email"
            class="form__input-email"
            placeholder="Enter your email"
          />
          <button class="form__button">Subscribe</button>
        </div>
      </div>
      <Icon :height="305" icon="emojione-v1:open-mailbox-with-lowered-flag" class="form__item" />
    </form>
    <div class="footer__nav">
      <div class="container">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure assumenda maxime alias natus
        reprehenderit non, eaque, qui neque corporis corrupti eius soluta excepturi vero laudantium
        tempora necessitatibus id unde laboriosam!
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
}

.form {
  position: relative;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #cdeae1;
  border-radius: 20px;
  margin-bottom: -151px;
  z-index: 1;
}

.footer__nav {
  background-color: var(--mint-green);
  z-index: 0;
  padding-top: 218px;
}
</style>
