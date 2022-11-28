<script setup lang="ts">

const props = defineProps({
  title: {
    type: String,
    default: '提示框'
  },
  display: {
    type: String,
    default: 'none'
  }
})

const emit = defineEmits(['handleYesEmit', 'handleNoEmit', 'handleBackEmit'])
const handleYesEmit = () => {
  emit('handleYesEmit')
}
const handleNoEmit = () => {
  emit('handleNoEmit')
}
const handleBackEmit = () => {
  emit('handleNoEmit')
}
</script>

<template>
  <div class="modalBack" @click.self="handleBackEmit" :style="{display: props.display}">
    <div class="modalWrap">
      <div class="modalTitle">{{ props.title }}</div>
      <div class="modalContent">
        <slot></slot>
      </div>
      <div class="modalBtns">
        <hh-button size="small" type="success" @click.stop="handleYesEmit">确认</hh-button>
        <hh-button size="small" type="default" @click.stop="handleNoEmit">取消</hh-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modalBack {
  width: 100vw;
  height: 100vh;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: var(--modal-mask-color);

  .modalWrap {
    background-color: var(--modal-back-color);
    width: var(--modal-default-width);
    min-height: var(--modal-default-height);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: var(--modal-border-raidus);

    .modalTitle {
      height: var(--modal-title-height);
      line-height: var(--modal-title-height);
      margin: var(--modal-title-margin);
      padding: var(--modal-title-padding);
      border-bottom: 1px solid var(--modal-title-border-bottom-color);
      user-select: none;
    }

    .modalContent {
      min-height: var(--modal-content-height);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: var(--modal-content-margin);
    }

    .modalBtns {
      float: right;
      margin-bottom: var(--modal-btn-margin-bottom);
    }
  }
}
</style>