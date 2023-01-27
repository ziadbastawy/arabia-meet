<script setup>
definePageMeta({
  layout: "auth",
});

</script>

<template>
        <router-link :to="{name: 'login'}"> Login </router-link>
        <router-link to="/"> Home </router-link>

    <h1>Sign-Up</h1>
</template>