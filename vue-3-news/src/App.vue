<template>
  <TheHeading />
  <RouterView v-slot="{ Component, route }">
    <Transition name="fade">
      <component :is="Component" :key="route.path" />
    </Transition>
  </RouterView>
  <AppSpinner :loading="isShowSpinner" />
</template>

<script setup>
import { useSpinner } from '@/composables/useSpinner';
import TheHeading from './components/TheHeading.vue';
import AppSpinner from './components/AppSpinner.vue';

const isShowSpinner = useSpinner();
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: all 0.7s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}
a {
  color: #34495e;
  text-decoration: none;
  &:hover {
    color: #42b883;
    text-decoration: underline;
  }
  &.router-link-active {
    text-decoration: underline;
  }
}
</style>
