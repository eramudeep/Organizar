import React, {Component} from 'react';
import {Text, View, ScrollView, Dimensions, StyleSheet} from 'react-native';
import Container from '../../comp/Container';
import {scale} from 'react-native-size-matters';
import Modal from 'react-native-modal';
import InputField from '../../comp/InputField';
import {colors} from '../../utils/colors';
import Submit from '../../comp/Submit';
import IConPlaceHolder from '../../comp/IConPlaceHolder';
const SCREEN = Dimensions.get('window');
interface Props {
  isVisible?: boolean;
  onClose?: () => void;
  toggleIconList?:()=>void
  selectedIcon?:string | false
}
export default class AddList extends Component<Props> {
  
    
  render() { 
    const {isVisible, onClose,toggleIconList,selectedIcon} = this.props;
    return (
      <Modal
        animationIn={'slideInUp'}
        onSwipeComplete={onClose}
        swipeDirection="down"
        style={{
          margin: 0,
          marginTop: scale(SCREEN.height / 3),
          borderRadius: scale(10),
          zIndex: 1,
        }}
        isVisible={isVisible}>
        <Container
          continerStyle={{
            borderTopLeftRadius: scale(15),
            borderTopRightRadius: scale(15),
          }}>
          <ScrollView style={{padding: scale(20)}}>
            <Text
              style={{
                paddingBottom: scale(10),
                fontSize: scale(22),
                color: colors.white,
                letterSpacing: scale(0.9),
              }}>
              Add List
            </Text>
            <InputField placeholder={'List Name'} />
            <View style={{flex: 1, alignItems: 'center'}}>
              <IConPlaceHolder onPress={toggleIconList} selectedIcon={selectedIcon} />
            </View>
            <Submit containerStyle={{margin: scale(0)}} />
          </ScrollView>
        </Container>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});
