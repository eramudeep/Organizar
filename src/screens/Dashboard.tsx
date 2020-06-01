import React, { Component } from 'react'
import { Text, View , StyleSheet} from 'react-native'
import ListCard from '../comp/ListCard'
export default class Dashboard extends Component {
    render() {
        return (
            <View style={[ styles.container,{padding:20}]}>
             
             {[1,23].map(index=>{
                 return  <ListCard key={index}/>;
             })  }
            </View>
        )
    }
}

const styles =StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row'
    }
})