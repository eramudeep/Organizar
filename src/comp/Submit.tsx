import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import { scale } from 'react-native-size-matters'
import { colors } from '../utils/colors'

export default class Submit extends Component {
    render() {
        return (
            <TouchableOpacity style={{margin: scale(10), backgroundColor: colors.secondryDefault , height: scale(50), justifyContent:'center', alignItems:'center'}}>
                <Text style={{color:colors.white, letterSpacing:scale(0.56), fontSize: scale(16) }} > Create Task </Text>
            </TouchableOpacity>
        )
    }
}
