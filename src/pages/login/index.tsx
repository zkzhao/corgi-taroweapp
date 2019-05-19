import Taro, { Component, Config } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Text } from '@tarojs/components'
import './index.scss'

interface IProps {
  dispatch?: any
  countDownSecond: number
}
class Login extends Component<IProps> {
  config: Config = {
    navigationBarTitleText: '登陆'
  }

  componentWillMount() {}

  componentDidMount() {
    this.props.dispatch({
      type: 'login/countDown'
    })
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { countDownSecond } = this.props
    return (
      <View>
        <Text onClick={() => console.log(123)}>{countDownSecond}</Text>
      </View>
    )
  }
}
const mapPropsToState = models => ({
  ...models['login']
})
export default connect(mapPropsToState)(Login)
