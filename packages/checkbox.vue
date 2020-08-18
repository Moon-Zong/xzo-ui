<template>
  <label class="z-checkbox" :class="{'z-checkbox_checked':isChecked}">
    <span class="z-checkbox-input">
      <span class="z-checkbox-inner"><span class="z-checkbox-checkdot"></span></span>
      <input type="checkbox" class="z-checkbox-input_box" :name="name" v-model="model" :value="label">
    </span>
    <span class="z-checkbox-text">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'ZCheckbox',
  props: {
    name: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    }
  },
  inject: {
    CheckboxGroup: {
      default: ''
    }
  },
  computed: {
    isGroup () {
      return !!this.CheckboxGroup
    },
    isChecked () {
      return this.isGroup ? this.model.includes(this.label) : this.model
    },
    model: {
      get () {
        return this.isGroup ? this.CheckboxGroup.value : this.value
      },
      set (value) {
        this.isGroup ? this.CheckboxGroup.$emit('input', value) : this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="less">
.z-checkbox {
  display: inline-block;
  margin: 0;
  padding: 0;
  position: relative;
  font-size: 14px;
  cursor: pointer;
  user-select: none;
  .z-checkbox-input {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin-right: 3px;
    .z-checkbox-inner {
      position: relative;
      display: inline-block;
      border: 1px solid #ccc;
      width: 12px;
      height: 12px;
      border-radius: 3px;
      vertical-align: middle;
      .z-checkbox-checkdot {
        position: absolute;
        display: inline-block;
        line-height: 12px;
        margin: 0 auto;
        width: 10px;
        height: 10px;
        top: 50%;
        left: 50%;
        margin-left: -5px;
        margin-top: -5px;
        border-radius: 2px;
        background-color: #409eff;
        visibility: hidden;
      }
    }
    .z-checkbox-input_box {
      position: absolute;
      width: 0;
      height: 0;
      opacity: 0;
      white-space: nowrap;
      vertical-align: middle;
    }
  }
  .z-checkbox-text {
    vertical-align: middle;
    font-size: 14px;
  }
}

.z-checkbox_checked {
  .z-checkbox-input {
    .z-checkbox-inner {
      border: 1px solid #409eff;
      .z-checkbox-checkdot {
        visibility: visible;
      }
    }
  }
  .z-checkbox-text {
    color: #409eff;
  }
}
</style>
