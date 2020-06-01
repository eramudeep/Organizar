import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {colors} from '../utils/colors';
import ICCloseModal from '../icons/ICCloseModal';
import {scale} from 'react-native-size-matters';
import Container from './Container';
import InputField from './InputField';
import FileUpload from './FileUpload';
import Submit from './Submit';
interface Props{
  isVisible?:boolean
  onClose?:()=> void
}
export default class CreateNewTask extends Component<Props> {
  render() {
    const { isVisible,onClose} = this.props
    return (
      <Modal
        animationIn={"slideInUp"}
        //animationInTiming={1000}
        onSwipeComplete={onClose}
        swipeDirection="down"
        style={{margin: 0, borderRadius: scale(10)}}
        isVisible={isVisible}>
        <Container>
          <View style={[{height: scale(20)}]}>
            <ICCloseModal fill={colors.textSecondry} />
          </View>
          <View
            style={[
              styles.closeContainer,
              {alignItems: 'flex-start', justifyContent: 'flex-start'},
            ]}>
            <Text style={{fontSize: scale(21), color: colors.white}}>
              Create New Task
            </Text>
          </View>
          <View style={{ margin:scale(10), flex:1}}> 
            <InputField/>
            <InputField numberOfLines={4}/> 
          </View> 
        <FileUpload/> 
        <Submit/>
        </Container>
      </Modal>
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
  attachFileCon:{  height:scale(40), flex:1, justifyContent:'center', alignItems:'center', borderStyle:'dotted', borderRadius: 1, borderColor:colors.textSecondry, borderWidth: scale(1)}
});
