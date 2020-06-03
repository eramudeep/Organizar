import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ListCard from '../comp/ListCard';
import Container from '../comp/Container';
import Header from '../comp/Header';
import IconsList from '../IconsList/IconsList';
import AddList from './task-list/AddList';
import {addList, getLists} from '../utils/asynstore/list';
/* import PushNotification from 'react-native-push-notification'; */

export default class Dashboard extends Component {
  constructor(props:any) {
    super(props);

    this.state = {
      isModalOpen: false,
      showAddToList: false,
      selectedIcon: false,
      listTitle: '',
      availableLists: [],
    };
  }
  loadLists = async () => {
    //@ts-ignore
    const {availableLists} = this.state;
    this.setState({
      availableLists: await getLists(),
    });
  };
  async componentDidMount() {
    await this.loadLists();
  }
  render() {
    //@ts-ignore
    const {
      isModalOpen,
      showAddToList,
      selectedIcon,
      listTitle,
      availableLists,
    } = this.state;
    return (
      <>
        <Header />
        <Container>
          <View style={[styles.container, {flexWrap: 'wrap', padding: 20}]}>
            {availableLists.map((item: any, index: any) => {
              return (
                <ListCard
                  onPress={() => {
                    this.props.navigation.navigate('TaskList',{taskListId:item});
                  }}
                  listDetails={item}
                  key={index}
                />
              );
            })}
            <ListCard
              isAddNew
              onPress={() => { 
                /*  PushNotification.localNotification({ 
                  title: "My Notification Title", // (optional)
                  message: "My Notification Message"  
               })   */ 
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
            toggleIconList={() => {
              console.log('from dashboard');
              this.setState({
                isModalOpen: !isModalOpen,
              });
            }}
            selectedIcon={selectedIcon}
            isVisible={showAddToList}
            onChangeText={listTitle => {
              this.setState({
                listTitle: listTitle,
              });
            }}
            onDone={async () => {
              this.setState({
                showAddToList: !showAddToList,
              });
              //@ts-ignore
              await addList({title: listTitle, icon: selectedIcon});
              setTimeout(async () => {
                await this.loadLists();
              }, 500);
            }}
          />

          <IconsList
            isVisible={isModalOpen}
            onClose={(selectedIcon?: string) => {
              this.setState({
                isModalOpen: !isModalOpen,
                selectedIcon: selectedIcon,
              });
            }}
          />
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
