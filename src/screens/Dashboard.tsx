import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ListCard from '../comp/ListCard';
import Container from '../comp/Container';
import Header from '../comp/Header';
import IconsList from '../IconsList/IconsList';
import AddList from './task-list/AddList';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      showAddToList:false,
      selectedIcon:false
    };
  }

  render() {
    //@ts-ignore
    const {isModalOpen,showAddToList,selectedIcon} = this.state;
    return (
      <>
        <Header />
        <Container>
          <View style={[styles.container, {flexWrap: 'wrap', padding: 20}]}>
            {[1, 23, 6, 7, 8, 9].map(index => {
              return (
                <ListCard
                  onPress={() => {
                    this.props.navigation.navigate('TaskList');
                  }}
                  key={index}
                />
              );
            })}
            <ListCard
              isAddNew
              onPress={() => {
                this.setState({
                  showAddToList: !showAddToList,
                });
              }}
            />
          </View>
          <AddList
            onClose={() => {
              this.setState({
                showAddToList: !showAddToList,
              });
            }}
            toggleIconList={()=>{
              console.log("from dashboard");
              this.setState({
                isModalOpen: !isModalOpen,
              });
              
            }}
            selectedIcon={selectedIcon}
            isVisible={showAddToList}
          />

         <IconsList isVisible={isModalOpen} onClose={(selectedIcon?:string)=>{ 
            this.setState({
              isModalOpen: !isModalOpen,
              selectedIcon:selectedIcon
            });
         }} /> 
        </Container>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});
