import registerVant from '@/plugins/vant'
import registerFilters from '@/plugins/filters'

const plugins = {
  install(Vue) {
    registerVant(Vue)
    registerFilters(Vue)
  }
}

export default plugins
