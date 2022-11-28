<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  type: {
    type: String,
    default: 'default'
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'middle'
  },
  prefixIcon: {
    type: String,
    default: ''
  },
  suffixIcon: {
    type: String,
    default: ''
  },
  loading: {
    type: Boolean,
    default: undefined
  }
});

const btnType = computed(() => {
  return `btn-${props.type}`;
});
const isPlain = computed(() => {
  return props.plain ? 'btn-plain' : '';
});
const isRound = computed(() => {
  return props.round ? 'btn-round' : '';
});
const isDisabled = computed(() => {
  return props.disabled || props.loading ? 'btn-disabled' : '';
});
const size = computed(() => {
  switch (props.size) {
    case 'small':
      return 'btn-small';
    case 'large':
      return 'btn-large';
    default:
      return 'btn-middle';
  }
});

const prefix = computed(() => {
  return props.prefixIcon ? 'iconfont icon-' + props.prefixIcon : '';
});
const suffix = computed(() => {
  return props.suffixIcon ? 'iconfont icon-' + props.suffixIcon : '';
});

const getIconStype = (type: string) => {
  let style: any = {};
  if (type === 'prefix') style = { ['margin-right']: '6px' };
  else style = { ['margin-left']: '6px' };

  if (props.loading !== undefined && props.loading === false && type === 'prefix')
    style['display'] = 'none';
  else style['display'] = 'block';
  return style;
};
const getIconClass = (type: string, isLoading: boolean) => {
  let resClass = '';
  if (type === 'prefix') resClass = prefix.value;
  else if (type === 'suffix') resClass = suffix.value;
  if (props.loading && isLoading) resClass += ' isLoading';
  return resClass;
};
</script>

<template>
  <button @click="$emit('btnClick')" class="btn" :disabled="props.disabled"
    :class="[btnType, isPlain, isRound, isDisabled, size]">
    <i :class="getIconClass('prefix', true)" :style="getIconStype('prefix')"></i>
    <slot></slot>
    <i :class="getIconClass('suffix', false)" :style="getIconStype('suffix')"></i>
  </button>
</template>

<style scoped lang="scss">
.btn {
  display: inline-flex;
  align-items: center;
  border: none;
  background-color: var(--btn-back-color-default);
  border-radius: var(--btn-border-radius-default);
  color: var(--btn-font-color-default);
  cursor: pointer;
  color: var(--btn-font-color-white);

  &-default {
    color: var(--btn-font-color-default);
    border: 1px solid var(--btn-border-color-default);

    &:not(.btn-disabled):hover {
      background-color: var(--btn-back-color-default-lighter);
      color: var(--btn-back-color-default-lighter1);
      border: 1px solid var(--btn-back-color-default-lighter1);
    }

    &.btn-plain {
      &:not(.btn-disabled):hover {
        background-color: var(--btn-back-color-default);
        color: var(--btn-back-color-primary);
        border: 1px solid var(--btn-back-color-primary);
      }
    }
  }

  &-primary {
    background-color: var(--btn-back-color-primary);

    &:not(.btn-disabled):hover {
      background-color: var(--btn-back-color-primary-lighter);
    }

    &.btn-plain {
      background-color: var(--btn-back-color-primary-lighter1);
      border: 1px solid var(--btn-back-color-primary-lighter);
      color: var(--btn-back-color-primary-lighter);

      &:not(.btn-disabled):hover {
        background-color: var(--btn-back-color-primary);
        color: var(--btn-font-color-white);
        border: 1px solid var(--btn-back-color-primary);
      }
    }
  }

  &-success {
    background-color: var(--btn-back-color-success);

    &:not(.btn-disabled):hover {
      background-color: var(--btn-back-color-success-lighter);
    }

    &.btn-plain {
      background-color: var(--btn-back-color-success-lighter1);
      border: 1px solid var(--btn-back-color-success-lighter);
      color: var(--btn-back-color-success-lighter);

      &:not(.btn-disabled):hover {
        background-color: var(--btn-back-color-success);
        color: var(--btn-font-color-white);
        border: 1px solid var(--btn-back-color-success);
      }
    }
  }

  &-info {
    background-color: var(--btn-back-color-info);

    &:not(.btn-disabled):hover {
      background-color: var(--btn-back-color-info-lighter);
    }

    &.btn-plain {
      background-color: var(--btn-back-color-info-lighter1);
      border: 1px solid var(--btn-back-color-info-lighter);
      color: var(--btn-back-color-info-lighter);

      &:not(.btn-disabled):hover {
        background-color: var(--btn-back-color-info);
        color: var(--btn-font-color-white);
        border: 1px solid var(--btn-back-color-info);
      }
    }
  }

  &-warning {
    background-color: var(--btn-back-color-warning);

    &:not(.btn-disabled):hover {
      background-color: var(--btn-back-color-warning-lighter);
    }

    &.btn-plain {
      background-color: var(--btn-back-color-warning-lighter1);
      border: 1px solid var(--btn-back-color-warning-lighter);
      color: var(--btn-back-color-warning-lighter);

      &:not(.btn-disabled):hover {
        background-color: var(--btn-back-color-warning);
        color: var(--btn-font-color-white);
        border: 1px solid var(--btn-back-color-warning);
      }
    }
  }

  &-danger {
    background-color: var(--btn-back-color-danger);

    &:not(.btn-disabled):hover {
      background-color: var(--btn-back-color-danger-lighter);
    }

    &.btn-plain {
      background-color: var(--btn-back-color-danger-lighter1);
      border: 1px solid var(--btn-back-color-danger-lighter);
      color: var(--btn-back-color-danger-lighter);

      &:not(.btn-disabled):hover {
        background-color: var(--btn-back-color-danger);
        color: var(--btn-font-color-white);
        border: 1px solid var(--btn-back-color-danger);
      }
    }
  }
}

.btn-round {
  border-radius: var(--btn-border-radius);
}

.btn-disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-small {
  padding: var(--btn-small-padding);
  font-size: var(--btn-font-size-small);
}

.btn-middle {
  padding: var(--btn-middle-padding);
  font-size: var(--btn-font-size-default);
}

.btn-large {
  padding: var(--btn-big-padding);
  font-size: var(--btn-font-size-large);
}

.isLoading {
  animation: loading 1s infinite linear;
}

@keyframes loading {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(1turn);
  }
}
</style>
