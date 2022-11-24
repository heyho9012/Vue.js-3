import { storeToRefs } from 'pinia';
import { useFetchListStore } from '@/stores/fetchList';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { useSpinnerStore } from '@/stores/spinner';

const { showSpinner, hideSpinner } = useSpinnerStore();
const {
  getList: items,
  getUser: user,
  getItem: item,
} = storeToRefs(useFetchListStore());
const { setList, setUser, setItem } = useFetchListStore();

const useFetch = () => {
  const { path } = useRoute();
  console.log(path);
  onMounted(async () => {
    showSpinner();
    await setList(path);
    hideSpinner();
  });
  return items;
};
const useUserInfo = () => {
  const route = useRoute();
  const id = route.params.id;
  onMounted(async () => {
    showSpinner();
    await setUser(id);
    hideSpinner();
  });
  return user;
};
const useItem = () => {
  const route = useRoute();
  const id = route.params.id;
  onMounted(async () => {
    showSpinner();
    await setItem(id);
    hideSpinner();
  });
  return item;
};

export { useFetch, useUserInfo, useItem };
