import React, { Component } from 'react'
import { Text, View,TextInput } from 'react-native'
import { scale } from 'react-native-size-matters'
import { colors } from '../utils/colors'
interface Props{
    numberOfLines?:number 
    placeholder?:string
}
export default class InputField extends Component<Props> {
    render() {
        const {numberOfLines,placeholder} = this.props
        return (
            <View style={{marginBottom:scale(10)}} >
                <TextInput
                placeholder={placeholder ? placeholder : "Task name"}
                numberOfLines={numberOfLines}
                placeholderTextColor={colors.textSecondry}
                style={{fontSize: scale(15),padding: scale(10), backgroundColor:colors.primaryLight, borderRadius: scale(4)}}
                />
            </View>
        )
    }
}
