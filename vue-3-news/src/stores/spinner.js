import { defineStore } from 'pinia';

const useSpinnerStore = defineStore('spinner', {
  state: () => ({
    isShowSpinner: false,
  }),
  getters: {
    getShowSpinner() {
      return this.isShowSpinner;
    },
  },
  actions: {
    showSpinner() {
      this.isShowSpinner = true;
    },
    hideSpinner() {
      this.isShowSpinner = false;
    },
  },
});

export { useSpinnerStore };
