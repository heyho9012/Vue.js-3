<template>
  <ul class="list">
    <li v-for="(item, index) in items" :key="index">
      <span>{{ item.points || 0 }}</span>
      <slot name="link" v-bind="item"></slot>
      <slot name="user" v-bind="item"></slot>
    </li>
  </ul>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss">
.list {
  margin-top: 0;
  padding: 0;
  li {
    display: flex;
    border-bottom: 1px solid #aaa;
    > a {
      line-height: 40px;
      height: 40px;
      font-size: 18px;
    }
  }
  span {
    margin-right: 8px;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-weight: bold;
  }
  small {
    margin: 0 8px 0 auto;
    font-size: 14px;
    text-align: right;
    line-height: 40px;
    color: #aaa;
    a {
      font-size: 14px;
      color: #666;
    }
  }
}
</style>
