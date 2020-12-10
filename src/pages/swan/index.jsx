import Taro from "@tarojs/taro"
import {View} from '@tarojs/components'
import './index.scss'
import SwanChart from "../../components/swan-chart";

export default class Index extends Taro.Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='swan-index'>
        {process.env.TARO_ENV ==='swan' && (
          <SwanChart />
        )}
      </View>
    )
  }
}
