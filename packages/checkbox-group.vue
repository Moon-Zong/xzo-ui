<template>
  <div class="z-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ZCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide () {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style lang="less">
</style>
