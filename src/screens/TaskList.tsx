import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native'; 
import DayCard from '../comp/DayCard';
import TaskCard from '../comp/TaskCard'
import { scale } from 'react-native-size-matters';
import { colors } from '../utils/colors';
export default class TaskList extends Component {
  render() {
    return (
      <View style={{}} > 
      <DayCard/>
        {[1,2,3,4].map((index,key)=>{
            return  <TaskCard key={key}/>
        })} 
        
      </View>
    );
  }
}

