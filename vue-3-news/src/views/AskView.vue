<template>
  <ListItem :items="items">
    <template #link="item">
      <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
    </template>
    <template #user="item">
      <small
        >{{ item.time_ago }} by
        <router-link else :to="`/user/${item.user}`">{{
          item.user
        }}</router-link>
      </small>
    </template>
  </ListItem>
</template>

<script setup>
import ListItem from '../components/ListItem.vue';
import { useFetch } from '../composables/useFetch';

const items = useFetch();
</script>
