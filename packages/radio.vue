<template>
  <label class="z-radio" :class="{'z-radio_active': model === label}">
    <span class="z-radio-input">
      <span class="z-radio-inner"></span>
      <input type="radio" :name="name" :value="label" v-model="model">
    </span>
    <span class="z-radio-text">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'ZRadio',
  computed: {
    model: {
      get () {
        return this.isGroup ? this.radioGroup.value : this.value
      },
      set (value) {
        this.isGroup ? this.radioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isGroup () {
      return !!this.radioGroup
    }
  },
  props: {
    label: {
      type: [String, Boolean, Number],
      default: ''
    },
    value: {
      type: [String, Boolean, Number],
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  inject: {
    radioGroup: {
      default: ''
    }
  }
}
</script>

<style lang="less">
.z-radio {
  position: relative;
  margin: 0;
  padding: 0;
  cursor: pointer;
  .z-radio-input {
    vertical-align: center;
    .z-radio-inner {
      display: inline-block;
      font-size: 0;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      border: 1px solid #ccc;
      margin-right: 5px;
      vertical-align: center;
      line-height: 14px;
    }
    input {
      position: obsolute;
      opcity: 0;
      width: 0px;
      height: 0px;
      margin: 0;
      padding: 0;
    }
  }
  .z-radio-text {
    vertical-align: center;
    font-size: 14px;
  }
}
.z-radio_active {
  .z-radio-input {
    .z-radio-inner {
      width: 5px;
      height: 5px;
      border: 3px solid #66b1ff;
    }
  }
  .z-radio-text {
    color: #66b1ff;
  }
}
</style>
