<template>
  <ListItem :items="items">
    <template #link="item">
      <a :href="item.url" target="blank">{{ item.title }}</a>
    </template>
    <template #user="item">
      <small
        >{{ item.time_ago }} by {{ item.user }}
        <a :href="item.url" target="blank">{{ item.domain }}</a>
      </small>
    </template>
  </ListItem>
</template>

<script setup>
import ListItem from '../components/ListItem.vue';
import { useFetch } from '../composables/useFetch';

const items = useFetch();
</script>
