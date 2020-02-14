import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.scss'

class MapCom extends Component {
    config: Config = {
        navigationBarTitleText: '添加面试'
    }

    state = {
        location: {
            longitude: 0,
            latitude: 0
        }
    }

    componentDidShow() {
        Taro.getLocation({
            type: 'wgs84',
            success: (res) => {
                this.setState({
                    location: res
                })
            }
        })
    }

    componentDidHide() { }

    render() {

        return (
            <View className='wrap'>
                <View className="tit1">面试信息</View>

                <View className="bao">
                    <View className="a1">公司名称</View>
                    <View className="a2"><input type="text" placeholder="请输入公司名称" /></View>
                   </View>
                    <View className="bao">
                        <View className="a1">公司电话</View>
                        <View className="a2"><input type="text" placeholder="请输入面试联系人电话" /></View>
                    </View>
                    <View className="bao">
                        <View className="a1">面试时间</View>
                         
                    </View> 
                     <View className="bao">
                        <View className="a1">面试地址</View>
                        <View className="a2"><input type="text" placeholder="请输入面试地址" /></View>
                    </View>
                    <View className="tit1">备注信息</View>
                    <br/>
                  
                    <textarea placeholder="备注信息(可选,100个以内)"></textarea>
                    <br/>
                    <br/>   
                    <Button className="btn">确认</Button>
            </View>
        )
    }
}


export default MapCom as ComponentClass;
