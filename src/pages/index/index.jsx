import Taro from "@tarojs/taro"
import {View, Button} from '@tarojs/components'
import './index.scss'

export default class Index extends Taro.Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        {process.env.TARO_ENV === 'weapp' && (
          <View className='weapp-button'>
            <Button type='primary' onClick={()=>{
              Taro.navigateTo({
                url:'/pages/weapp/index'
              })
            }}>微信小程序图表示例</Button>
          </View>
        )}
        {process.env.TARO_ENV === 'swan' && (
          <View className='swan-button'>
            <Button type='primary' onClick={()=>{
              Taro.navigateTo({
                url:'/pages/swan/index'
              })
            }}>百度智能小程序图表示例</Button>
          </View>
        )}
      </View>
    )
  }
}
