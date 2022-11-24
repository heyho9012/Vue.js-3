<template>
  <p>
    <slot name="username"></slot>
    <slot name="time"></slot>
    <slot name="karma"></slot>
  </p>
</template>

<script setup></script>

<style lang="scss">
section {
  padding: 0 1rem;
  box-sizing: border-box;
}
h2 {
  margin-bottom: 0;
}
p {
  margin: 5px 0 40px 0;
  font-size: 20px;
  margin-left: 20px;
  span {
    margin-left: 8px;
    color: #aaa;
    font-size: 12px;
  }
}
</style>
