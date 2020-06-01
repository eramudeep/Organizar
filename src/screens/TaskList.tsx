import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native'; 
import DayCard from '../comp/DayCard';
import TaskCard from '../comp/TaskCard'
import { scale } from 'react-native-size-matters';
import { colors } from '../utils/colors';
import Container from '../comp/Container';
import Header from '../comp/Header';
export default class TaskList extends Component {
  render() {
    return ( 
      <>
       <Header/>
      <Container>
       
      <DayCard/>
        {[1,2,3,4].map((index,key)=>{
            return  <TaskCard key={key}/>
        })} 
        <DayCard/>
        {[1,2,3,4].map((index,key)=>{
            return  <TaskCard key={key}/>
        })} 
        </Container>
      </>
       
    );
  }
}

