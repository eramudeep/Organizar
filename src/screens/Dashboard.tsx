import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ListCard from '../comp/ListCard';
import Container from '../comp/Container';
import Header from '../comp/Header';
import IconsList from '../IconsList/IconsList';
import AddList from './task-list/AddList';
import {addList, getLists} from '../utils/asynstore/list';
export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      showAddToList: false,
      selectedIcon: false,
      listTitle: '',
      availableLists: [],
    };
  }
  async componentDidMount() {
    //@ts-ignore
    const {availableLists} = this.state;
    this.setState({
      availableLists: await getLists(),
    });
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
                    this.props.navigation.navigate('TaskList');
                  }}
                  listDetails={item}
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
              console.log({listTitle, selectedIcon});
              this.setState({
                showAddToList: !showAddToList,
              });
              //@ts-ignore
              await addList({title: listTitle, icon: selectedIcon});
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
