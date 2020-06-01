import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../utils/colors';
import {scale} from 'react-native-size-matters';

export default class FileUpload extends Component {
  render() {
    return (
        <>
        <Text style={{marginLeft: scale(10), fontSize: scale(15), color: colors.white}}>Attachment file</Text>  
      <TouchableOpacity style={styles.closeContainer}>
          
        <View style={styles.attachFileCon}>
          <Text style={{color: colors.textSecondry, fontSize: scale(15)}}>Tap to add files</Text>
        </View>
      </TouchableOpacity>
      </>
    );
  }
}
const styles = StyleSheet.create({
  closeContainer: {
    //    backgroundColor:'red',
    padding: scale(10),
    flexDirection: 'row',
    //height: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  attachFileCon: {
    height: scale(40),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dotted',
    borderRadius: 1,
    borderColor: colors.textSecondry,
    borderWidth: scale(1),
  },
});
