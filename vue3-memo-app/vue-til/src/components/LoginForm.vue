<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id:</label>
          <input id="username" type="text" v-model="username" />
          <p class="validation-text">
            <span class="warning" v-if="!isUsernameValid && username">
              Please enter an email address
            </span>
          </p>
        </div>
        <div>
          <label for="password">pw:</label>
          <input id="password" type="password" v-model="password" />
        </div>
        <button
          type="submit"
          class="btn"
          :disabled="!isUsernameValid || !password"
          :class="!isUsernameValid || !password"
        >
          login
        </button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, unref } from 'vue';
import { useValidateEmail } from '@/composables/validation';
import { useUserStore } from '@/stores/auth/user';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const logMessage = ref('');

const isUsernameValid = computed(() => useValidateEmail(username.value));
const { fetchLogin } = useUserStore();
const router = useRouter();

const submitForm = async () => {
  try {
    const userData = {
      username: unref(username.value),
      password: unref(password.value),
    };
    await fetchLogin(userData);
    router.push('/main');
  } catch (error) {
    console.log(error.response.data);
    logMessage.value = error.response.data;
  }
};
</script>

<style lang="scss" scoped></style>
