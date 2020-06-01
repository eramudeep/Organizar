import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import ICPlus from '../icons/ICPlus';
import {colors} from '../utils/colors';
interface Props{
onPress?:()=>void
}
export default class DayCard extends Component<Props> {
  render() {
   const {onPress} = this.props
    return (
      <View style={styles.dayContainer}>
        <Text style={styles.textStyle}> Today </Text>
        <TouchableOpacity onPress={onPress} >
          <ICPlus
            height={scale(25)}
            width={scale(25)}
            fill={colors.secondryDefault}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dayContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: scale(12),
  },
  textStyle: {
    fontSize: scale(16),
    color: colors.secondryDefault,
  },
});
