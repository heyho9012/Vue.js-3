<template>
  <div>
    <ListItem :items="items">
      <template #link="item">
        <a :href="item.url" target="blank">{{ item.title }}</a>
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
  </div>
</template>

<script setup>
import ListItem from '../components/ListItem.vue';
import { useFetch } from '../composables/useFetch';

const items = useFetch();
</script>
