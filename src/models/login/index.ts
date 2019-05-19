const namespace = 'login'
export { namespace }
export default {
  namespace,
  state: {
    testGetPhoneResult: '',
    testLoginState: 'testState1',
    mobile: '', // 登录手机号码
    code: '', // 手机号验证码
    isSending: false, // 获取手机验证码的loading
    countDownSecond: 60, // 倒计时秒数
    isShowCountDown: false, // 是否结束倒计时
    redirectUrl: '', // 登录成功后，需要重定向的路径
    second: 5
  },

  effects: {
    *countDown(_, { put, select }) {
      let { countDownSecond, isShowCountDown } = yield select(state => {
        return state[namespace]
      })
      while (countDownSecond > 0 && isShowCountDown) {
        yield (countDownSecond -= 1)
        isShowCountDown = yield select(state => {
          return state[namespace].isShowCountDown
        })
        yield put({
          type: 'setState',
          payload: {
            countDownSecond
          }
        })
      }
      yield put({
        type: 'setState',
        payload: {
          countDownSecond: 60,
          isShowCountDown: false
        }
      })
    }
  },

  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload }
    }
  }
}
