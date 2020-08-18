<template>
  <div class="z-switch" :class="{'z-switch_checked':value}" @click="clickHandle()">
    <input type="checkbox" class="z-switch-input" :name="name" ref="input">
    <span class="z-switch-core" ref="core">
      <span class="z-switch-circle"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ZSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    activeColor: {
      type: String,
      default: '#409eff'
    },
    inactiveColor: {
      type: String,
      default: '#cccccc'
    }
  },
  methods: {
    clickHandle () {
      this.$emit('input', !this.value)
      this.$nextTick().then(this.colorChange)
    },
    colorChange () {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.backgroundColor = color
      }
      // 顺便更改一下checked
      this.$refs.input.checked = this.value
    }
  },
  mounted () {
    // 初始化开关颜色
    this.colorChange()
    // 初始化input的checked属性
    this.$refs.input.checked = this.value
  }
}
</script>

<style lang="less">
.z-switch {
  display: inline-block;
  position: relative;
  width: 40px;
  height: 20px;
  .z-switch-input {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    margin: 0;
    opacity: 0;
  }
  span.z-switch-core {
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: #ccc;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s;
    span.z-switch-circle {
      position: absolute;
      top: 0;
      left: 0;
      right: auto;
      display: inline-block;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      border: 1px solid #aaa;
      background-color: #fff;
      transition: all 0.3s;
      transform: translateX(0px);
    }
  }
}
.z-switch_checked {
  span.z-switch-core {
    background-color: #409eff;
    span.z-switch-circle {
      transform: translateX(20px);
    }
  }
}
</style>
