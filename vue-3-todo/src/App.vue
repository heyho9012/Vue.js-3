<template>
  <TodoHeader />
  <TodoInput />
  <TodoList />
  <TodoFooter />
</template>

<script setup>
import TodoFooter from './components/TodoFooter.vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoInput from './components/TodoInput.vue';
import TodoList from './components/TodoList.vue';
</script>

<style lang="scss" scoped>
body {
  margin: 0;
  text-align: center;
  background-color: #f6f6f6;
  > div {
    padding: 16px;
  }
  input {
    border-style: groove;
    width: 200px;
  }
  button {
    border-style: groove;
  }
}
</style>
