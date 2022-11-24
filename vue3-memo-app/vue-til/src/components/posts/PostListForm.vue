<template>
  <ul>
    <li v-for="post in posts" :key="post._id">
      <div class="post-title">{{ post.title }}</div>
      <div class="post-contents">{{ post.contents }}</div>
      <div class="post-time">
        {{ post.createdAt }}
        <i class="icon" @click="routerEditPage(post._id)">✍🏻</i>
        <i class="icon" @click="deleteItem(post._id)">🗑️</i>

        <!-- <i class="icon ion-md-trash" @click="deleteItem(post._id)"></i> -->
      </div>
    </li>
  </ul>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { usePostStore } from '../../stores/posts/post';
import { deletePost } from '@/api/posts';

const router = useRouter();
const emit = defineEmits(['refresh']);

const { getPost: posts } = storeToRefs(usePostStore());

const routerEditPage = id => {
  router.push(`/post/${id}`);
};

const deleteItem = async id => {
  try {
    const response = await deletePost(id);
    console.log(response);
    emit('refresh');
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="scss" scoped></style>
