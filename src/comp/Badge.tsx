import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'
import { scale } from 'react-native-size-matters'
import { colors } from '../utils/colors'
interface Props{
    colorCode?:number | 0
}
export default class Badge extends Component {
    render() {
        //@ts-ignore
        const { colorCode} = this.props;
        return (
            <View style={[styles.badge,{backgroundColor:colors.badges[colorCode]}]}>
                <Text style={styles.textStyle} > 10:00 AM</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    badge:{
        padding:scale( 4),
       // backgroundColor:colors.badges[Math.floor(Math.random() * 2) + 1] ,
        paddingHorizontal:scale( 10),
        borderRadius:scale( 13),
       // height: scale(30)

    },
    textStyle:{
        color: colors.white
    }
})