import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../utils/colors'
import { scale } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/MaterialIcons';
interface Props{
    icon?:string
    label?:string
}
export default class TaskUtils extends Component<Props> {
    constructor(props) {
        super(props)
    
        this.state = {
             isSelected:true
        }
    }
    
    render() {
       const {icon,label} = this.props 
       //@ts-ignore
       const { isSelected} = this.state
        return (
            <TouchableOpacity onPress={()=>{
                this.setState({isSelected: !isSelected})
            }} style={{backgroundColor:colors.primaryLight,padding:scale(20),width:scale(105),  alignItems:'center', borderRadius:scale(5) }}>
            <Icon
              name={icon ? icon : 'date-range'}
              size={scale(50)}
              color={isSelected ?colors.secondryDefault :colors.textSecondry}
            />
            <Text style={{padding:scale(5), color: isSelected ? colors.secondryDefault :colors.textSecondry, fontSize:scale(16)}} >{label}</Text>
          </TouchableOpacity>
        )
    }
}
