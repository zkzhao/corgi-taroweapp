import Taro from '@tarojs/taro'
import { create } from 'dva-core'
import models from '@/models'

declare var global: any
const opt = {
  models,
  initialState: {}
}
const app = create(opt)

// 适配支付宝小程序
if (Taro.getEnv() === Taro.ENV_TYPE.ALIPAY) {
  global = {}
}

if (!global.registered) opt.models.forEach(model => app.model(model))
global.registered = true
app.start()

const store = app._store
export default store
