/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { 
  LearnMoreLinks,
  Colors, 
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Container from './src/comp/Container';
import Header from './src/comp/Header'
import Dashboard from './src/screens/Dashboard';
import TaskList from './src/screens/TaskList';
import Stack from './src/stack/Stack';

const App= ()  => {
  return (  
      <Stack/>    
  );
};
 export default App;
