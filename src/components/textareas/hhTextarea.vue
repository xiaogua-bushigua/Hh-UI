<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  cols: {
    type: Number,
    default: 20
  },
  rows: {
    type: Number,
    default: 5
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
  maxLen: {
    type: Number,
    default: null
  },
  resize: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['handleInputEmit', 'handleBlurEmit', 'handleFocusEmit'])
const handleInputEmit = () => {
  emit('handleInputEmit', event?.target)
}
const handleBlurEmit = () => {
  emit('handleBlurEmit', event?.target)
}
const handleFocusEmit = () => {
  emit('handleFocusEmit', event?.target)
}

const disabledClass = computed(() => {
  if (props.disabled) return 'Disabled'
  else return ''
})
const resizeClass = computed(() => {
  if (!props.resize) return 'Resize'
  else return ''
})
</script>

<template>
  <div class="textWrap">
    <textarea :cols="cols" :rows="rows" :value="props.text" @input="handleInputEmit"
      @focus="handleFocusEmit" @blur="handleBlurEmit" :disabled="props.disabled" :class="[disabledClass, resizeClass]"
      :readonly="props.readonly" :placeholder="props.placeholder" :maxlength="props.maxLen ? props.maxLen : 140"></textarea>
    <div class="tip" v-show="props.maxLen">{{props.text.length+'/'+props.maxLen}}</div>
  </div>
</template>

<style scoped lang="scss">
.textWrap {
  display: inline-block;
  position: relative;
}

textarea {
  box-sizing: border-box;
  outline: none;
  padding: 8px;
  border-radius: var(--textarea-border-radius);
  font-size: var(--textarea-font-size);
  font-family: auto;
  color: var(--textarea-font-color);
  border: 1px solid var(--textarea-border-color);

  &:focus {
    border: 1px solid var(--textarea-border-focus-color);
  }

  &::placeholder {
    color: var(--textarea-font-placeholder-color);
  }
}

.tip {
  position: absolute;
  bottom: 12px;
  right: 12px;
  font-size: var(--textarea-tip-font-size);
  color: var(--textarea-tip-font-color);
}

.Disabled {
  user-select: none;

  &:hover {
    cursor: no-drop;
  }
}
.Resize {
  resize: none;
}
</style>