<script setup>
import Login from "@/assets/images/login.vue";
</script>

<template>
  <div class="container">
    <div class="box bg-white d-flex">
      <div class="w-60 d-flex justify-content-between align-items-center">
        <Login />
      </div>
      <div class="w-40 bg-neutral-2 h-full">
        Form
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin: 10vh auto;
  .box {
    max-width: 1280px;
    // background-color: rgb(186, 220, 255);
    min-height: 80vh;
  }
}
</style>