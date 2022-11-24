import { defineStore } from 'pinia';

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      Object.keys(localStorage).forEach(el => {
        arr.push(JSON.parse(localStorage.getItem(el)));
      });
    }
    return arr;
  },
};

export const useTodoItemStore = defineStore('todo', {
  state: () => ({
    todoItems: storage.fetch(),
  }),
  getters: {
    getTodoItem() {
      return this.todoItems;
    },
  },
  actions: {
    setAddOneItem(payload) {
      const obj = {
        completed: false,
        content: payload,
      };
      localStorage.setItem(obj.content, JSON.stringify(obj));
      this.todoItems.push(obj);
    },
    setToggleOneItem({ todoItem, index }) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.removeItem(todoItem.content);
      localStorage.setItem(todoItem.content, JSON.stringify(todoItem));
    },
    setRemoveOneItem({ todoItem, index }) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
    setClearAll() {
      localStorage.clear();
      this.todoItems = [];
    },
  },
});
