import React, {Component} from 'react';
import {Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colors} from '../utils/colors';
import Badge from './Badge';
import RadioButton from './RadioButton'
export default class TaskCard extends Component {

    randomInteger=(min:number, max:number) =>{
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  render() {
    return (
      
        <TouchableOpacity style={styles.cardContainer} >
          <View style={[styles.row]}>
            <View style={styles.headerContainer}>
             <RadioButton/>
              <Text style={styles.textStyle}> Google Project</Text>
            </View>
            <Badge   colorCode={ this.randomInteger(0,2) }  />
          </View>
          <View style={[styles.row,{paddingVertical: scale(7)}]}>
                <Text style={{color:colors.textSecondry}} >Website Update</Text>
          </View>
         
        </TouchableOpacity>
       
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardContainer: {
    padding: scale(10),
    marginRight: scale(12),
    marginLeft: scale(12),
    backgroundColor: colors.primaryLight,
    borderRadius: scale(5), 
    marginBottom:scale(10)
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: scale(15),
    color: colors.white,
  },
});
