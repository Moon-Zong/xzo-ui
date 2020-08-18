<template>
  <div class="z-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ZRadioGroup',
  props: {
    value: null
  },
  provide () {
    return {
      radioGroup: this
    }
  }
}
</script>

<style lang="less">
</style>
