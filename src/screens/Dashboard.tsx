import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ListCard from '../comp/ListCard';
import Container from '../comp/Container';
import Header from '../comp/Header';
import CreateNewTask from '../comp/CreateNewTask';

export default class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Header />
      
        <View style={[styles.container, {padding: 20}]}>
          {[1, 23].map(index => {
            return (
              <ListCard
                onPress={() => {
                  this.props.navigation.navigate('TaskList');
                }}
                key={index}
              />
            );
          })}
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});
