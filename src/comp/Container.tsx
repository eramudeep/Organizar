import React, { Component } from 'react'
import { Text, View ,StatusBar,SafeAreaView,ScrollView} from 'react-native'
import { colors } from '../utils/colors'
import Header from './Header'
 
export default class Container extends Component {
    render() {
        return (
            <>
            <StatusBar backgroundColor={ colors .primaryLight}  barStyle="light-content" />
            
            <SafeAreaView style={{backgroundColor:colors.primaryDark, flex:1 }}>
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
