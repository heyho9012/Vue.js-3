<template>
  <header>
    <div>
      <router-link :to="logoLink" class="logo">
        TIL
        <span v-if="isLogin">by {{ username }}</span>
      </router-link>
    </div>
    <div class="navigations">
      <template v-if="!isLogin">
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Signup</router-link>
      </template>
      <template v-else>
        <a href="javascript:;" @click="logoutUser" class="logout-button"
          >Logout</a
        >
      </template>
    </div>
  </header>
</template>

<script setup>
import { useUserStore } from '@/stores/auth/user';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const { getUser: username, isLogin } = storeToRefs(useUserStore());

const logoLink = computed(() => (isLogin ? '/main' : '/login'));

// LOGOUT
const { clearLog } = useUserStore();
const logoutUser = () => {
  clearLog();
  router.push('/login');
};
</script>

<style lang="scss" scoped></style>
