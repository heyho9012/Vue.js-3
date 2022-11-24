<template>
  <footer>
    <button type="button" @click="clearAllTodo">clear all</button>
  </footer>
</template>

<script setup>
import { useTodoItemStore } from '../stores/todo';

const { setClearAll } = useTodoItemStore();
const clearAllTodo = () => {
  setClearAll();
};
</script>

<style lang="scss" scoped></style>
