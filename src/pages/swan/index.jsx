import React, { Component } from 'react'
import {View} from '@tarojs/components'
import './index.scss'
import SwanChart from "../../components/swan-chart";

export default class Index extends Component {

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
