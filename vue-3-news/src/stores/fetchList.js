import { defineStore } from 'pinia';
import { fetchItem, fetchList, fetchUserInfo } from '../api';

const useFetchListStore = defineStore('fetchList', {
  state: () => ({
    list: [],
    user: {},
    item: {},
  }),
  getters: {
    getList() {
      return this.list;
    },
    getUser() {
      return this.user;
    },
    getItem() {
      return this.item;
    },
  },
  actions: {
    async setList(payload) {
      const response = await fetchList(payload);
      this.list = response.data;

      return response;
    },
    async setUser(payload) {
      const response = await fetchUserInfo(payload);
      this.user = response.data;

      return response;
    },
    async setItem(payload) {
      const response = await fetchItem(payload);
      this.item = response.data;

      return response;
    },
  },
});
export { useFetchListStore };
