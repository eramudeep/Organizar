import AsyncStorage from '@react-native-community/async-storage';

interface List {
  id: number;
  title: string;
  icon: string;
  itemCount: number;
}

export const addList = async (list:List) => {
  try {
     /// await removeList();
     list.id= new Date().getTime();
     list.itemCount= 0;
     let oldItems = await getLists(); 
     if(oldItems !=null)  {  oldItems.push(list)}
     else{ 
        oldItems =[list]
     } 
      console.log("oldItems",oldItems,"list",list); 
     const jsonValue = JSON.stringify(oldItems );
    await AsyncStorage.setItem('@list', jsonValue);  
  } catch (e) {
    // saving error
  }
};

export const getLists = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@list');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
export const removeList = async () => {
    try {
      await AsyncStorage.removeItem('@list')
    } catch(e) {
      // remove error
    }
  
    console.log('Done.')
  }