<template>
  <UserProfile>
    <template #username>{{ user.id }}</template>
    <template #time
      ><span>Joined {{ user.created }}.</span></template
    >
    <template #karma
      ><span>{{ user.karma }} karma</span></template
    >
  </UserProfile>
</template>

<script setup>
import UserProfile from '../components/UserProfile.vue';
import { useUserInfo } from '@/composables/useFetch';

const user = useUserInfo();
</script>

<style lang="scss" scoped></style>
