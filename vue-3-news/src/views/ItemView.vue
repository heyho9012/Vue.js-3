<template>
  <main>
    <section>
      <h2>{{ item.title }}</h2>
      <UserProfile>
        <template #username
          ><router-link :to="`/user/${item.user}`">{{
            item.user
          }}</router-link></template
        >
        <template #time
          ><span>Posted {{ item.time_ago }}</span></template
        >
      </UserProfile>
    </section>
    <section>
      <div v-html="item.content"></div>
    </section>
  </main>
</template>

<script setup>
import { useItem } from '../composables/useFetch';
import UserProfile from '../components/UserProfile.vue';

const item = useItem();
</script>

<style lang="scss" scoped>
section {
  padding: 0 1rem;
  box-sizing: border-box;
}
h2 {
  margin-bottom: 0;
}
h2 + p {
  margin: 5px 0 40px 0;
  font-size: 14px;
  span {
    margin-left: 8px;
    color: #aaa;
    font-size: 12px;
  }
}
</style>
