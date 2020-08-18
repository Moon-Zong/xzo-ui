// 设置插件
import ZButton from './button.vue'
import ZDialog from './dialog.vue'
import ZInput from './input.vue'
import ZSwitch from './switch.vue'
import ZRadio from './radio.vue'
import ZRadioGroup from './radio-group.vue'
import ZCheckbox from './checkbox.vue'
import ZCheckboxGroup from './checkbox-group.vue'
import ZForm from './form.vue'
import ZFormItem from './form-item.vue'
import './fonts/font.css'

const components = [
  ZButton,
  ZDialog,
  ZInput,
  ZSwitch,
  ZRadio,
  ZRadioGroup,
  ZCheckbox,
  ZCheckboxGroup,
  ZForm,
  ZFormItem
]

const install = function (Vue) {
  components.forEach(item => {
    Vue.component(item.name, item)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
