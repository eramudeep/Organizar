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
import ICAddMore from '../icons/ICAddMore';

const SCREEN_SIZE = Dimensions.get('window');
interface Props{
  onPress?:(listId?:any)=>void
  isAddNew?:boolean | false
  hideLabel?:boolean | false
}
export default class ListCard extends Component<Props> {
  render() {
    const {onPress,isAddNew,hideLabel}= this.props
    return (
      <TouchableOpacity  onPress={onPress} style={styles.container}>
       {!isAddNew ?  <ICAll height={scale(55)} width={scale(55)} /> : < ICAddMore height={scale(55)} width={scale(55)}/> }
       
       {!hideLabel && <Text style={[styles.titleText]}> {isAddNew ? "Add List" : "All Tasks"} </Text>}
        {!isAddNew &&  <Text style={[styles.titleText,{ marginTop:scale(0),fontSize:scale(12),color:'rgba(255,255,255,0.5)'}]}>9 Items </Text>}
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
