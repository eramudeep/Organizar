import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Modal from 'react-native-modal';
import {colors} from '../utils/colors';
import ICCloseModal from '../icons/ICCloseModal';
import {scale} from 'react-native-size-matters';
import Container from './Container';
import InputField from './InputField';
import FileUpload from './FileUpload';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Submit from './Submit';
import TaskUtils from './TaskUtils';
const SCREEN = Dimensions.get('window');
interface Props {
  isVisible?: boolean;
  onClose?: () => void;
  getTitle?: (change: string) => void;
  getDesciption?: (change: string) => void;
  onCreateTask?: () => void;
}
export default class CreateNewTask extends Component<Props> {
  render() {
    const {
      isVisible,
      onClose,
      onCreateTask,
      getDesciption,
      getTitle,
    } = this.props;
    return (
      <Modal
        animationIn={'slideInUp'}
        onSwipeComplete={onClose}
        swipeDirection="down"
        style={{
          margin: 0,
          marginTop: scale(SCREEN.height / 5-20),
          borderRadius: scale(10),
        }}
        isVisible={isVisible}>
        <Container
          continerStyle={{
            borderTopLeftRadius: scale(15),
            borderTopRightRadius: scale(15),
          }}>
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

          <View style={{margin: scale(10), flex: 1}}>
            <InputField onChangeText={getTitle} />
            <InputField
              placeholder={'Description'}
              onChangeText={getDesciption}
              numberOfLines={4}
              multiline
            />
          </View>
          <View
            style={{
              margin: scale(10),
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TaskUtils label={"Priority"} icon={"brightness-7"} />
            <TaskUtils label={"When"} icon={"alarm-on"}/>
            <TaskUtils label={"Alarm"} icon={"date-range"}/>             
          </View>

          <FileUpload />

          <Submit onDone={onCreateTask} />
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
