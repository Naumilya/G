<script setup lang="ts">
import BaseLogo from '@/components/logo/BaseLogo.vue'
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
            placeholder="Your email address"
          />
          <button class="form__button">Subscribe</button>
        </div>
      </div>
      <Icon :height="305" icon="emojione-v1:open-mailbox-with-lowered-flag" class="form__item" />
    </form>
    <div class="footer__nav">
      <div class="footer__nav-content container">
        <div class="logo">
          <BaseLogo light-planet />
          <div class="socials">
            <ul>
              <li>
                <a href=""><Icon icon="akar-icons:facebook-fill" :height="20" /></a>
              </li>
              <li>
                <a href=""><Icon icon="akar-icons:twitter-fill" :height="20" /></a>
              </li>
              <li>
                <a href=""><Icon icon="akar-icons:youtube-fill" :height="20" /></a>
              </li>
              <li>
                <a href=""><Icon icon="ant-design:instagram-filled" :height="20" /></a>
              </li>
            </ul>
          </div>
        </div>
        <div class="list">
          <h5>Our Destinations</h5>
          <ul>
            <li><a href="">Canada</a></li>
            <li><a href="">Alaska</a></li>
            <li><a href="">France</a></li>
            <li><a href="">Iceland</a></li>
          </ul>
        </div>
        <div class="list">
          <h5>Our Activities</h5>
          <ul>
            <li>
              <a href="">Northern Lights</a>
            </li>
            <li>
              <a href="">Cruising & sailing</a>
            </li>
            <li><a href="">Multi-activities</a></li>
            <li><a href="">Kayaing</a></li>
          </ul>
        </div>
        <div class="list">
          <h5>Travel Blogs</h5>
          <ul>
            <li>
              <a href="">Bali Travel Guide</a>
            </li>
            <li>
              <a href="">Sri Lanks Travel Guide</a>
            </li>
            <li><a href="">Peru Travel Guide</a></li>
            <li><a href="">Bali Travel Guide</a></li>
          </ul>
        </div>
        <div class="list">
          <h5>About Us</h5>
          <ul>
            <li>
              <a href="">Our Story</a>
            </li>
            <li>
              <a href="">Work with us</a>
            </li>
          </ul>
        </div>
        <div class="list">
          <h5>Contact Us</h5>
          <ul>
            <li>
              <a href="">Our Story</a>
            </li>
            <li>
              <a href="">Work with us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
}

.footer__nav-content {
  display: grid;
  grid-template-columns: 2fr repeat(5, 1fr);
  column-gap: 24px;

  h5 {
    font-family: 'Trade Gothic Extended';
    font-size: 16px;
    margin-bottom: 16px;
  }
  .list ul {
    display: flex;
    flex-direction: column;
    row-gap: 12px;
    list-style: none;
    a {
      text-decoration: none;
      color: var(--blackish-green);
    }
  }
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
  padding-bottom: 64px;
  background-color: var(--mint-green);
  z-index: 0;
  padding-top: 218px;
}

.form__title {
  max-width: 364px;
  font-size: 44px;
  font-family: 'Trade Gothic Extended';
}

.form__subtitle {
  margin: 24px 0 8px 0;
  font-family: 'Trade Gothic Extended';
  font-size: 20px;
}

.form__input {
  margin-top: 16px;
  display: flex;
  gap: 16px;
}

.form__input-email {
  padding: 18px 16px;
  width: 100%;

  border-radius: 4px;
}

.form__button {
  padding: 19.5px 16px;
  background-color: var(--blackish-green);
  color: var(--neutrals);
  border-radius: 4px;
  cursor: pointer;
}

.form__input-email,
.form__button {
  border: none;
  outline: none;
}

.socials ul {
  display: flex;
  gap: 12px;

  list-style: none;

  a {
    color: var(--blackish-green);
  }
}
</style>
