import React, { Component } from 'react'
import { Text, View } from 'react-native'
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { colors } from '../utils/colors';
import { scale } from 'react-native-size-matters';
var radio_props = [
    {label: 'param1', value: 0 }, 
  ];
export default class Radio extends Component {
    render() {
        return (
           
            <RadioForm
            formHorizontal={true}
            animation={true}
          >
            {/* To create radio buttons, loop through your array of options */}
            {
              radio_props.map((obj, i) => (
                <RadioButton labelHorizontal={true} key={i} >
                  {/*  You can set RadioButtonLabel before RadioButtonInput */}
                  <RadioButtonInput
                    obj={obj}
                    index={i}
                    isSelected={false}
                    onPress={()=>{}}
                    borderWidth={1}
                    buttonInnerColor={colors.textSecondry}
                    buttonOuterColor={colors.textSecondry/* this.state.value3Index === i ? '#2196f3' : '#000' */ }
                    buttonSize={20}
                    buttonOuterSize={20}
                    buttonStyle={{}} 
                    buttonWrapStyle={{color:colors.textSecondry, marginTop:scale( 5)}}
                  />
                   
                </RadioButton>
              ))
            }  
          </RadioForm>

        )
    }
}
