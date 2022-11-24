<template>
  <header class="header">
    vue3-news
    <ul>
      <li><router-link to="/news">news</router-link>|</li>
      <li><router-link to="/ask">ask</router-link>|</li>
      <li><router-link to="/jobs">jobs</router-link></li>
    </ul>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
.header {
  display: flex;
  padding: 8px 8px 8px 25px;
  background-color: #42b883;
  color: white;
  align-items: center;
  ul {
    display: flex;
  }
  a {
    margin: 0 5px;
    &:visited {
      color: white;
    }
    &:active {
      color: #35495e;
    }
  }
}
.fixed {
  position: fixed;
  width: 100%;
  z-index: 999;
}
.logo {
  width: 30px;
  margin-right: 18px;
}
</style>
