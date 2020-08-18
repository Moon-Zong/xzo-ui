<template>
  <div class="z-form-item">
    <div class="z-form-item-label" v-if="label" :style="{'width':Form.labelWidth}">{{label}}</div>
    <div class="z-form-item-input">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ZFormItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  inject: ['Form']
}
</script>

<style lang="less">
.z-form-item {
  margin: 0;
  padding: 0;
  .z-form-item-label {
    float: left;
    padding-right: 20px;
    width: 60px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #333;
    text-align: right;
    overflow: hidden;
  }
  .z-form-item-input {
    float: left;
    line-height: 40px;
  }
  &:after {
    content: '';
    display: block;
    height: 0;
    clear: both;
  }
}
</style>
