import React, { Component } from 'react'
import { Text, View,TouchableOpacity ,ViewStyle} from 'react-native'
import { scale } from 'react-native-size-matters'
import { colors } from '../utils/colors'
interface Props{
    containerStyle?:ViewStyle
    onDone?:()=>void
}
export default class Submit extends Component<Props> {
    render() {
        const {containerStyle,onDone}= this.props
        return (
            <TouchableOpacity onPress={onDone} style={[{margin: scale(10), backgroundColor: colors.secondryDefault , height: scale(50), justifyContent:'center', alignItems:'center', borderRadius: scale(3)},containerStyle]}>
                <Text style={{color:colors.white, letterSpacing:scale(0.56), fontSize: scale(16) }} > Create Task </Text>
            </TouchableOpacity>
        )
    }
}
