<template>
  <section>
    <TransitionGroup name="list" tag="ul">
      <li v-for="(todoItem, index) in todoItems" :key="index">
        <label for="`checkbox${index}`"></label>
        <input
          type="checkbox"
          name="check_box"
          :id="`checkbox${index}`"
          :checked="todoItem.completed"
          @click="setToggleOneItem({ todoItem, index })"
        />
        <span :class="{ completed: todoItem.completed }">{{
          todoItem.content
        }}</span>
        <button type="button" @click="setRemoveOneItem({ todoItem, index })">
          x
        </button>
      </li>
    </TransitionGroup>
  </section>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useTodoItemStore } from '../stores/todo';

const { getTodoItem: todoItems } = storeToRefs(useTodoItemStore());
const { setToggleOneItem, setRemoveOneItem } = useTodoItemStore();
</script>

<style lang="scss" scoped>
div {
  margin: 20px 0;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  display: flex;
  margin: 0 0 8px 0;
  align-content: center;
  label {
    display: none;
    width: 0px;
    height: 0px;
  }
  input {
    margin-right: 10px;
    width: 16px;
    height: 16px;
  }
  button {
    margin-left: auto;
  }
}
.completed {
  color: #929292;
  text-decoration: line-through;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
