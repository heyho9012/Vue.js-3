<template>
  <div class="bg_modal">
    <div class="wh_modal">
      <button type="button" @click="this.$emit('closeModal', false)">X</button>
      <slot name="contents">기본 콘텐츠</slot>
    </div>
  </div>
</template>

<script setup>
defineEmits(['closeModal']);
</script>
<style lang="scss">
.bg_modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 17, 17, 0.3);
}
.wh_modal {
  padding: 12px;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 30%;
  border-radius: 10px;
  background-color: white;
  button {
    position: absolute;
    top: 12px;
    right: 12px;
  }
}
</style>
