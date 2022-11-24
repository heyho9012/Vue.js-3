import { defineStore } from 'pinia';
import { ref } from 'vue';

const usePostStore = defineStore('post', {
  state: () => ({
    posts: ref([]),
  }),
  getters: {
    getPost() {
      return this.posts;
    },
  },
  actions: {
    setPosts(payload) {
      this.posts = payload;
    },
  },
});

export { usePostStore };
