import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../screens/Dashboard';
import TaskList from '../screens/TaskList'
const StackNav = createStackNavigator();

export default class Stack extends Component {
  render() {
    return (
      <NavigationContainer >
        <StackNav.Navigator  headerMode={"none"}  >
          <StackNav.Screen name="Home" component={Dashboard} />
          <StackNav.Screen name="TaskList" component={TaskList} />
          
        </StackNav.Navigator>
      </NavigationContainer>
    );
  }
}
