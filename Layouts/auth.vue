<script setup>
import LoginIcon from "~~/assets/images/LoginIcon.vue";
</script>

<template>
  <div class="auth-container">
    <div class="box bg-white d-flex">
      <div class="w-60 d-flex justify-content-center align-items-center">
        <div>
          <LoginIcon />
        </div>
      </div>
      <div class="w-40 bg-neutral-2">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.auth-container {
  margin: 10vh auto;
  .box {
    border-radius: 23px;
    border: 1px solid transparent;
    overflow: hidden;
    max-width: 1280px;
    margin: auto;
    min-height: 80vh;
  }
}
</style>