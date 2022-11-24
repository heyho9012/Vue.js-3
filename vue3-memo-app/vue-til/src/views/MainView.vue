<template>
  <div class="main list-container contents">
    <h2 class="page-header">Today I Learned</h2>
    <LoadingSpinner v-if="loading" />
    <PostListForm v-else @refresh="fetchData" />
    <router-link to="/add" class="create-button">➕</router-link>
  </div>
</template>

<script setup>
import { usePostStore } from '../stores/posts/post';
import { fetchPost } from '@/api/posts';
import PostListForm from '../components/posts/PostListForm.vue';
import LoadingSpinner from '../components/common/LoadingSpinner.vue';
import { ref, unref } from 'vue';

const loading = ref(false);
const { setPosts } = usePostStore();

const fetchData = async () => {
  loading.value = true;
  const response = await fetchPost();
  loading.value = false;
  setPosts(response.data.posts);
};

fetchData();
</script>

<style lang="scss" scoped></style>
