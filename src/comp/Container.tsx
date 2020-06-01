import React, { Component } from 'react'
import { Text, View ,StatusBar,SafeAreaView,ScrollView, ViewStyle} from 'react-native'
import { colors } from '../utils/colors'
import Header from './Header'
 interface Props{
     continerStyle?:ViewStyle
 }
export default class Container extends Component<Props> {
    render() {
        const { continerStyle}= this.props
        return (
            <>
            <StatusBar backgroundColor={ colors .primaryLight}  barStyle="light-content" />
            
            <SafeAreaView style={[{backgroundColor:colors.primaryDark, flex:1 },continerStyle]}>
                <ScrollView>
                {
                    //@ts-ignore
                this.props.children
                }
                </ScrollView>
            </SafeAreaView>
            </>
        )
    }
}
