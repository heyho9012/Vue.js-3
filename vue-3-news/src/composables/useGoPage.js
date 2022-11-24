import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const useGopage = (name, id) => {
  const router = useRouter();
  onMounted(async () => {
    if (id != null) {
      router.push({ name, params: { id } });
    } else {
      router.push({ name });
    }
  });
};

export { useGopage };
