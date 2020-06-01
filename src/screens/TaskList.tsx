import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native'; 
import DayCard from '../comp/DayCard';
import TaskCard from '../comp/TaskCard'
import { scale } from 'react-native-size-matters';
import { colors } from '../utils/colors';
import Container from '../comp/Container';
import Header from '../comp/Header';
import CreateNewTask from '../comp/CreateNewTask';
export default class TaskList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false
    }
  }

  toggleModal= ()=>{
     //@ts-ignore
     const{ isVisible} = this.state
     this.setState({
      isVisible: !isVisible
     })
  }
  render() {
    //@ts-ignore
    const{ isVisible} = this.state
    return ( 
      <>
       <Header/>
      <Container>
      <CreateNewTask onClose={this.toggleModal} isVisible={isVisible}/>
      <DayCard onPress={this.toggleModal} />
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

