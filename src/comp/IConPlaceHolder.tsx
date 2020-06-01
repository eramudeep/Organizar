import React, {Component} from 'react';
import {Text, Dimensions, TouchableOpacity, StyleSheet} from 'react-native';
import ICAddMore from '../icons/ICAddMore';
import {scale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import {colors} from '../utils/colors';
const SCREEN_SIZE = Dimensions.get('window');

interface Props {
  onPress?: (listId?: any) => void;
  selectedIcon?: string | false;
}
export default class IConPlaceHolder extends Component<Props> {
  render() {
    const {onPress, selectedIcon} = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        {!selectedIcon ? (
          <ICAddMore height={scale(55)} width={scale(55)} />
        ) : (
          <Icon name={selectedIcon} size={scale(55)} color={colors.secondryDefault} />
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: scale(10),
    width: scale(SCREEN_SIZE.width / 3),
    height: scale(120),
    backgroundColor: colors.primaryLight,

    //justifyContent:'center',
    alignItems: 'center',
    paddingVertical: scale(30),
    borderRadius: scale(4),
  },
});
