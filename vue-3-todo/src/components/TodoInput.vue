<template>
  <div>
    <input type="text" v-model.trim="newTodoItem" />
    <button type="button" @click="addTodo">+</button>
  </div>
  <Teleport to="#app">
    <TodoModal v-if="show" @close-modal="show = false">
      <template #contents>
        <h5>할일을 써주세요!</h5>
      </template>
    </TodoModal>
  </Teleport>
</template>

<script setup>
import { ref } from 'vue';
import { useTodoItemStore } from '../stores/todo';
import TodoModal from './modal/TodoModal.vue';

const newTodoItem = ref('');
const show = ref(false);
const addTodo = () => {
  if (newTodoItem.value != '') {
    const { setAddOneItem } = useTodoItemStore();
    setAddOneItem(newTodoItem.value);
    newTodoItem.value = '';
  } else {
    show.value = true;
  }
};
</script>

<style lang="scss" scoped></style>
