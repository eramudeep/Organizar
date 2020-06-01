import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import MaterialIcons from './MaterialIcons.json';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import {scale} from 'react-native-size-matters';
import Container from '../comp/Container';
import { colors } from '../utils/colors';

const SCREEN = Dimensions.get('window');
interface Props {
  isVisible?: boolean;
  onClose?: (selectedIcon?:string) => void;
}
export default class IconsList extends Component<Props> {
  constructor(props: any) {
    super(props);

    this.state = {
      iconsList: [],
    };
  }

  componentDidMount() {
    //@ts-ignore
    const {iconsList} = this.state;
    let tmpArray = [];
    for (var key in MaterialIcons) {
      tmpArray.push(key);
    }
    this.setState({iconsList: tmpArray});
  }

  render() {
    const {isVisible, onClose} = this.props;
    //@ts-ignore
    const {iconsList} = this.state;
    return (
      <Modal
        animationIn={'slideInUp'}
        onSwipeComplete={()=>{onClose(undefined)}}
        swipeDirection="down"
        style={{
          margin: 0,
          marginTop: scale(SCREEN.height / 3),
          borderRadius: scale(10),
          zIndex:1
        }}
        isVisible={isVisible}>
        <Container continerStyle={{borderTopLeftRadius:scale(15), borderTopRightRadius:scale(15)}}>
          <ScrollView>
            <View style={[styles.container, {flexWrap: 'wrap', padding: scale(25)}]}>
              {iconsList.map((val: any, index: any) => {
                return (
                    <TouchableOpacity onPress={()=>{
                        onClose(val)
                        console.log("val selected icon >>",val);
                        
                    }} key={index} style={{padding:scale( 20)}}>
                        <Icon  name={val} size={scale(30)} color={colors.textSecondry} />
                    </TouchableOpacity>
                )
              })}
            </View>
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
