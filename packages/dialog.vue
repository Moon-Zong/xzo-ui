<template>
  <transition name="dialog-fade">
    <!-- 遮罩 -->
    <div class="z-dialog_wrapper" v-show="visible" @click.self="closeDia()">
      <!-- 对话框 -->
      <div class="z-dialog" :style="{width,top}">
        <div class="z-dialog_header">
          <slot name="title">
            <span class="z-dialog_title">{{title}}</span>
          </slot>
          <button class="z-dialog_closebtn" @click="closeDia()">
            <i class="z-icon-close"></i>
          </button>
        </div>
        <div class="z-dialog_body">
          <slot></slot>
        </div>
        <div class="z-dialog_footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ZDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '30%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeDia () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="less">
.z-dialog_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.5);
}
.z-dialog {
  position: relative;
  top: 15vh;
  margin: 0 auto;
  background: #fff;
  border-radius: 2px;
  box-sizing: border-box;
  width: 30%;
  .z-dialog_header {
    padding: 10px 20px;
    .z-dialog_title {
      font-size: 16px;
      line-height: 1.5;
      color: #666;
    }
    .z-dialog_closebtn {
      position: absolute;
      right: 20px;
      left: auto;
      top: 14px;
      padding: 0;
      background: transparent;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 16px;
    }
  }
  .z-dialog_body {
    padding: 20px;
    font-size: 14px;
    word-break: break-all;
  }
  .z-dialog_footer {
    padding: 10px 20px;
    text-align: right;
    .z-button {
      margin-left: 20px;
    }
  }
}
@keyframes dialog-fade_in {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
.dialog-fade-enter-active {
  animation: dialog-fade_in 0.3s;
}
.dialog-fade-leave-active {
  animation: dialog-fade_in 0.3s reverse;
}
</style>
