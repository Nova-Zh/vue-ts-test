// import * as lodash from 'lodash'
import vue from 'vue'
// 全局变量设置
declare global {
  // const _: typeof lodash
  const Vue: typeof vue
}

declare module 'vue/types/vue' {
  interface Vue {
    $Message: any
    $Notice: any
  }
}
