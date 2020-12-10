import React, { Component } from 'react'
import Taro from "@tarojs/taro"
import {View, Text, Button} from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <View className='weapp-button'>
          <Button type='primary' onClick={()=>{
            Taro.navigateTo({
              url:'/pages/weapp/index'
            })
          }}>微信小程序图表示例</Button>
        </View>
      <View className='swan-button'>
        <Button type='primary' onClick={()=>{
          Taro.navigateTo({
            url:'/pages/swan/index'
          })
        }}>百度智能小程序图表示例</Button>
      </View>
      </View>
    )
  }
}
