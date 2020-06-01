import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'
import { scale } from 'react-native-size-matters'
import { colors } from '../utils/colors'

export default class Badge extends Component {
    render() {
        return (
            <View style={styles.badge}>
                <Text style={styles.textStyle} > 10:00 AM</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    badge:{
        padding:scale( 5),
        backgroundColor:colors.badges[0] ,
        paddingHorizontal:scale( 10),
        borderRadius:scale( 13),
       // height: scale(30)

    },
    textStyle:{
        color: colors.white
    }
})