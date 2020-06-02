import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../screens/Dashboard';
import TaskList from '../screens/TaskList'
import { colors } from '../utils/colors';
import ICPlus from '../icons/ICPlus';
import ICCalander from '../icons/ICCalander';
import { scale } from 'react-native-size-matters';
import ICSettings from '../icons/ICSettings'
import ICTask from '../icons/ICTask';  
//const StackNav = createStackNavigator();
const StackNav = createBottomTabNavigator();
const tabStyle={
  activeTintColor:colors.secondryDefault,
  style:{backgroundColor:colors.primaryDark  },
  labelStyle:{color: colors.white}, 
}
export default class Stack extends Component {
   
  render() {
    return (
      <NavigationContainer >
        <StackNav.Navigator initialRouteName={"Tasks"} tabBarOptions={tabStyle}  >
          <StackNav.Screen  options={{ tabBarIcon: ({ color, size })=><ICTask width={scale(22)} height={scale(25)} fill={color}  /> }} name="Tasks" component={Dashboard} />
          <StackNav.Screen  options={{ tabBarLabel:"Calander",tabBarIcon: ({ color, size })=><ICCalander width={scale(20)} height={scale(20)} fill={color}  /> }} name="TaskList" component={TaskList} />
         {/*  <StackNav.Screen  options={{ tabBarIcon: ({ color, size })=><ICSettings width={scale(20)} height={scale(20)} fill={color}  /> }}  name="Settings" component={TaskList} /> */}
        </StackNav.Navigator>
      </NavigationContainer>
    );
  }
}
