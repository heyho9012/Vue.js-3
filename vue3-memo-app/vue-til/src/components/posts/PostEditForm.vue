<template>
  <div class="contents">
    <h2 class="page-header">Edit Post</h2>
    <div class="form-wrapper">
      <form class="form" @submit.prevent="submitForm">
        <div>
          <label for="title">title</label>
          <input type="text" id="title" v-model="title" />
        </div>
        <div>
          <label for="contents">contents</label>
          <ckeditor id="editor" :editor="editor" v-model="contents"></ckeditor>
          <!-- <textarea name="contents" id="contents" rows="5" v-model="contents" /> -->
          <p class="validation-text warning" v-if="!isContentsValid">
            Content length must be less 250
          </p>
        </div>
        <button class="btn" type="submit">Edit</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, unref } from 'vue';
import { editPost, fetchPost } from '@/api/posts';
import { useRoute, useRouter } from 'vue-router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const router = useRouter();
const route = useRoute();

const editor = ClassicEditor;

const { data } = await fetchPost(route.params.id);

const title = ref(data.title);
const contents = ref(data.contents);
const logMessage = ref('');
const isContentsValid = computed(() => contents.value.length <= 250);

const submitForm = async () => {
  try {
    const postData = {
      title: unref(title),
      contents: unref(contents),
    };
    const response = await editPost(route.params.id, postData);
    console.log(response);
    router.push('/main');
  } catch (error) {
    console.log(error);
    // logMessage.value = error.response.data.message;
  }
};
</script>

<style lang="scss" scoped></style>
