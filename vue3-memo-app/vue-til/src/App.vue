<template>
  <AppHeader />
  <div class="app-contents">
    <RouterView />
  </div>
</template>

<script setup>
import AppHeader from './components/common/AppHeader.vue';
</script>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
