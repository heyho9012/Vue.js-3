<template>
  <div class="contents">
    <div class="form-wrapper form-wrapper-sm">
      <form @submit.prevent="submitForm" class="form">
        <div>
          <label for="username">id: </label>
          <input id="username" type="text" v-model="username" />
        </div>
        <div>
          <label for="password">pw: </label>
          <input id="password" type="password" v-model="password" />
        </div>
        <div>
          <label for="nickname">nickname: </label>
          <input id="nickname" type="text" v-model="nickname" />
        </div>
        <button type="submit" class="btn">회원 가입</button>
      </form>
      <p class="log">{{ logMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, unref } from 'vue';
import { registerUser } from '@/api/auth';

const password = ref('');
const nickname = ref('');
const username = ref('');

const logMessage = ref('');

const submitForm = async () => {
  const userData = {
    username: unref(username),
    password: unref(password),
    nickname: unref(nickname),
  };
  const { data } = await registerUser(userData);

  logMessage.value = `${data.username} 님이 가입되었습니다`;
  initForm();
};

const initForm = () => {
  username.value = '';
  password.value = '';
  nickname.value = '';
};
</script>
