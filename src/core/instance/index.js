import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}
initMixin(Vue)  // 里面定义了_init方法
// 将_data代理到$data上，将_props代理到$props上
// 定义了$set和$delete
// 定义了$watch
stateMixin(Vue)
// 里面定义了$on,$once,$off,$emit
eventsMixin(Vue)
// 里面定义了_update，$forceUpdate，$destroy
lifecycleMixin(Vue)
// 里面定义了$nextTick，_render
renderMixin(Vue)

export default Vue
