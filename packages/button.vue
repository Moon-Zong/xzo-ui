<template>
  <button class="z-button" :class="[`z-button--${type}`,{
    'is-round':round,
    'is-plain':plain,
    'is-circle':circle,
    'is-disabled':disabled
  }]"
  :disabled="disabled"
  @click="btnHandle($event)"
  >
    <i :class="icon" v-if="icon"></i>
    <!-- 当插槽中没有值的时候不显示 -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: 'ZButton',
  // 添加prop校验，类似于mongoose中的数据校验
  props: {
    type: {
      type: String,
      default: 'normal'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    btnHandle (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="less" scoped>
.z-button {
  display: inline-block;
  line-height: 1;
  padding: 14px 20px;
  box-sizing: content-box;
  // 单行不换行
  white-space: nowrap;
  cursor: pointer;
  text-align: center;
  // 去除默认样式
  -webkit-appearance: none;
  // 去除轮廓线
  outline: none;
  // 删除外边距
  margin: 0;
  font-weight: 500;
  // 设置文字不可被选中
  user-select: none;
  // 默认边框以及背景色
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;
  color: #666;
  &--normal {
    &.is-disabled {
      color: #ccc;
      cursor: not-allowed;
    }
  }
  &--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &:hover,
    &:focus {
      background: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }
    &.is-plain {
      color: #409eff;
      background: #ecf5ff;
      border-color: #b3d8ff;
      &:hover,
      &:focus {
        background: #409eff;
        border-color: #409eff;
        color: #fff;
      }
    }
    &.is-disabled {
      background: #b3d8ff;
      border-color: #b3d8ff;
      color: #fff;
      cursor: not-allowed;
    }
  }
  &--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &:hover,
    &:focus {
      background: #85ce61;
      border-color: #85ce61;
      color: #fff;
    }
    &.is-plain {
      color: #67c23a;
      background: #f0f9eb;
      border-color: #c2e7b0;
      &:hover,
      &:focus {
        background: #67c23a;
        border-color: #67c23a;
        color: #fff;
      }
    }
    &.is-disabled {
      background: #c2e7b0;
      border-color: #c2e7b0;
      color: #fff;
      cursor: not-allowed;
    }
  }
  &--info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
    &:hover,
    &:focus {
      background: #a6a9ad;
      border-color: #a6a9ad;
      color: #fff;
    }
    &.is-plain {
      color: #909399;
      background: #f4f4f5;
      border-color: #d3d4d6;
      &:hover,
      &:focus {
        background: #909399;
        border-color: #909399;
        color: #fff;
      }
    }
    &.is-disabled {
      background: #d3d4d6;
      border-color: #d3d4d6;
      color: #fff;
      cursor: not-allowed;
    }
  }
  &--warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &:hover,
    &:focus {
      background: #ebb563;
      border-color: #ebb563;
      color: #fff;
    }
    &.is-plain {
      color: #e6a23c;
      background: #fdf6ec;
      border-color: #f5dab1;
      &:hover,
      &:focus {
        background: #e6a23c;
        border-color: #e6a23c;
        color: #fff;
      }
    }
    &.is-disabled {
      background: #f5dab1;
      border-color: #f5dab1;
      color: #fff;
      cursor: not-allowed;
    }
  }
  &--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:hover,
    &:focus {
      background: #f78989;
      border-color: #f78989;
      color: #fff;
    }
    &.is-plain {
      color: #f56c6c;
      background: #fef0f0;
      border-color: #fbc4c4;
      &:hover,
      &:focus {
        background: #f56c6c;
        border-color: #f56c6c;
        color: #fff;
      }
    }
    &.is-disabled {
      background: #fbc4c4;
      border-color: #fbc4c4;
      color: #fff;
      cursor: not-allowed;
    }
  }
  &.is-round {
    border-radius: 20px;
    padding: 12px 23px;
  }
  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }
}

// 紧跟着具有class的i标签后的span标签
.z-button [class*='z-icon-'] + span {
  margin-left: 5px;
}
</style>
