<script setup lang="ts">
</script>

<template>
  <RouterView/>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}

/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-border-radius);
  background: var(--scrollbar-back-color);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

.codesWrap {
  margin-top: 20px;
  font-size: var(--codes-font-size);
}

.hljs {
  background-color: var(--codes-back-color) !important;
  line-height: var(--codes-line-height);
  overflow-x: auto;
}
</style>
