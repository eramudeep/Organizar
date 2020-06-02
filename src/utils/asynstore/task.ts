import AsyncStorage from '@react-native-community/async-storage';
interface Task {
    id: number;
    listId: number;
    title: string;
    description: string;
    date:string
    time:string
    priority:string
    notificationAllowed:string
    files?: string []; 
  }