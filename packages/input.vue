<template>
  <div class="z-input">
    <input :type=" showPassword ? (passwordVisible ? 'text' : 'password') : type"
    :name="name" :placeholder="placeholder" :disabled="disabled" :class="{
      'is-disabled':disabled
    }"
    :value="value"
    @input="inputHandle($event)"
    :clearable="clearable"
    :show-password="showPassword"
    >
    <span v-if="attachIcon" class="z-input-icon">
      <!-- 两个图标均需要和v-model一起使用 -->
      <i class="z-icon-close" v-if="clearable && value" @click="clearInput"></i>
      <i class="z-icon-hide" v-if="showPassword" @click="passwordShow"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ZInput',
  data () {
    return {
      passwordVisible: false
    }
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    attachIcon () {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    inputHandle ($event) {
      this.$emit('input', $event.target.value)
    },
    clearInput () {
      this.$emit('input', '')
    },
    passwordShow () {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

<style lang="less">
.z-input {
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  font-size: 14px;
  input {
    -webkit-appearance: none;
    width: 100%;
    box-sizing: border-box;
    padding: 0px 10px;
    border: 1px solid #ccc;
    outline: none;
    border-radius: 3px;
    font-size: inherit;
    line-height: 2;
    background-color: #fff;
    transition: border-color 0.2s;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #eee;
      border-color: #ccc;
      color: #ccc;
      cursor: not-allowed;
    }
  }
  .z-input-icon {
    position: absolute;
    right: 10px;
    top: 0;
    font-size: inherit;
    line-height: 2;
    cursor: pointer;
  }
}
</style>
