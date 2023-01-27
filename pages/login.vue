<script setup>
definePageMeta({
  layout: "auth",
});

</script>

<template>
        <router-link :to="{name: 'sign-up'}"> sign-up </router-link>
        <router-link to="/"> Home </router-link>

    <h1>Login</h1>
</template>

<style lang="scss" >

h1 {
    color: $primary;
}
</style>