<template>
  <div class="contents">
    <h2 class="page-header">Create Post</h2>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">title</label>
          <input type="text" id="title" v-model="title" />
        </div>
        <div>
          <label for="contents">contents</label>
          <textarea name="contents" id="contents" rows="5" v-model="contents" />
          <p class="validation-text warning" v-if="!isContentsValid">
            Content length must be less than 250
          </p>
        </div>
        <button class="btn" type="submit">Create</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, unref } from 'vue';
import { createPost } from '@/api/posts';
import { useRouter } from 'vue-router';

const router = useRouter();

const title = ref('');
const contents = ref('');
const logMessage = ref('');

const isContentsValid = computed(() => contents.value.length <= 250);

const submitForm = async () => {
  const postData = {
    title: unref(title),
    contents: unref(contents),
  };
  try {
    const response = await createPost(postData);
    console.log(response);
    router.push('/main');
  } catch (error) {
    console.log(error);
    logMessage.value = error.response.data.message;
  }
};
</script>

<style lang="scss" scoped></style>
