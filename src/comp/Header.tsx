import React, {Component} from 'react';
import {Text, View, StyleSheet,TouchableOpacity} from 'react-native';
import {colors} from '../utils/colors';
import {scale} from 'react-native-size-matters';
import ICMenu from '../icons/ICMenu';
export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.textStyle}> My Lists </Text>
        </View>
        <View style={styles.iconConainer}>
          <TouchableOpacity style={styles.iconConainerSub}>
            <ICMenu
              height={scale(30)}
              width={scale(30)}
              fill={'rgba(255,255,255,0.35)'}
            />
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.iconConainerSub}>
            <ICMenu
              height={scale(30)}
              width={scale(30)}
              fill={'rgba(255,255,255,0.35)'}
            />
          </TouchableOpacity> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryLight,
    flexDirection: 'row',
    flex: 1,
    paddingVertical: scale(10),
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: scale(50),
    //  alignContent:'center'
  },
  iconConainer: { 
    textAlign: 'right',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    //paddingHorizontal:40,
    alignItems: 'center',
  },
  iconConainerSub:{
      paddingHorizontal:5
  },
  textStyle: {
    color: colors.white,
    fontSize: scale(20),
    // lineHeight:scale(13)
  },
});
