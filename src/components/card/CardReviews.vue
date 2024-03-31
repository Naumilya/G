<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="review-card">
    <div class="review-content">
      <h3 class="title">“A real sense of community, nurtured”</h3>
      <p class="comment-text">
        Really appreciate the help and support from the staff during these tough times. Shoutout to
        Katie for helping me always, even when I was out of the country. And always available when
        needed.
      </p>
      <span class="view-more-button">View more</span>
    </div>
    <div class="user-info">
      <div class="rating">
        <Icon :height="24" icon="ion:star" v-for="star in 5" :key="star" />
      </div>

      <div class="user-details">
        <p>Olga</p>
        <p>Weave Studios – Kai Tak</p>
      </div>

      <div class="google-review">
        <Icon icon="flat-color-icons:google" />
        <span>Google</span>
      </div>
    </div>

    <img src="@/assets/images/comments/comment-1.jpg" alt="comment" />
  </div>
</template>

<style scoped>
.review-card {
  /* flex-grow: 0; */
  min-width: 425px;

  padding: 24px;
  background-color: var(--neutrals);
  border-radius: 20px;
  max-width: 425px;
  box-shadow: 26px 24px rgba(141, 211, 187, 0.4);

  h3 {
    font-family: 'Trade Gothic Extended';
  }

  img {
    width: 100%;
  }
}

.comment-text {
  margin: 16px 0 12px 0;
}

.user-info {
  margin: 16px 0 40px 0;
}

.rating {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #ffc107;
}
.user-details {
  margin-top: 20px;

  p {
    &:first-child {
      font-family: 'Trade Gothic Extended';

      font-weight: 700;
      margin-bottom: 4px;
    }
  }
}

.google-review {
  display: flex;
  align-items: center;

  margin-top: 12px;
  gap: 8px;

  span {
    font-family: 'Trade Gothic Extended';
    color: var(--blackish-green);
    opacity: 40%;
  }
}

.view-more-button {
  display: flex;
  align-items: center;
  justify-content: end;
  cursor: pointer;
  font-weight: 700;

  font-family: 'Trade Gothic Extended';
}
</style>
