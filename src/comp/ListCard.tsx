import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {colors} from '../utils/colors';
import {scale} from 'react-native-size-matters';
import ICAll from '../icons/ICAll';

const SCREEN_SIZE = Dimensions.get('window');
export default class ListCard extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <ICAll height={scale(55)} width={scale(55)} />
        <Text style={[styles.titleText]}> All Tasks </Text>
        <Text style={[styles.titleText,{ marginTop:scale(0),fontSize:scale(12),color:'rgba(255,255,255,0.5)'}]}>9 Items </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    margin: scale(10),
    width: scale(SCREEN_SIZE.width / 3),
    height: scale(180),
    backgroundColor: colors.primaryLight,
    flex: 1,
    //justifyContent:'center',
    alignItems: 'center',
    paddingVertical:scale( 30),
    borderRadius:scale(4)
  },
  titleText:{
      marginTop:scale(25),
      color:colors.secondryDefault ,
      fontSize:scale(16),
      letterSpacing: scale(0.09)
  }
});
