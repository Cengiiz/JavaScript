import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "./screens/Settings";
import Chats from './screens/chats';
import {Ionicons} from '@expo/vector-icons'
import { colors } from "./config/constants";
import SignUp from "./screens/SignUp";
import Chat from "./screens/Chat";

import { firebase } from '@react-native-firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCGmUeifwU1XNXySNwcPTrkoYjcT6rxDNA",
  authDomain: "chatsapp-7766f.firebaseapp.com",
  projectId: "chatsapp-7766f",
  storageBucket: "chatsapp-7766f.appspot.com",
  messagingSenderId: "852766031239",
  appId: "1:852766031239:web:d72ee7276e619628152722",
  measurementId: "G-BJZGS9JV7F"
};
firebase.initializeApp(firebaseConfig);








const ChatsStack=createStackNavigator()

const ChatScreen= ()=>{
  return(
    <ChatsStack.Navigator  
      screenOptions={{
      headerShown: true
      }}>
      <ChatsStack.Screen name="Chats" component={Chats}/>
      <ChatsStack.Screen name="Chat" component={Chat}/>
    </ChatsStack.Navigator>
  )
}
const SettingsStack=createStackNavigator()

const SettingsScreen = () => {
  return(
    <SettingsStack.Navigator
      screenOptions={{
      headerShown: false
      }}>
      <SettingsStack.Screen name="Settings" component={Settings}/>
    </SettingsStack.Navigator>
  )
}



const Tabs =createBottomTabNavigator()

const TabsScreen = () =>(
    <Tabs.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Chats') {
          iconName = focused
            ? 'chatbubbles'
            : 'chatbubbles-outline';
        } else if (route.name === 'Settings') {
          iconName = focused ? 'settings' : 'settings-outline';
        }
        
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: colors.primary,
      //tabBarInactiveTintColor: 'gray',
      headerShown: false})}>
      <Tabs.Screen name="Chats" component={ChatScreen} />
      <Tabs.Screen name="Settings" component={SettingsScreen} />
    </Tabs.Navigator>
)





const MainStack = createStackNavigator()

const App = () => {
  return (
    <NavigationContainer >
      <MainStack.Navigator mode="modal"
      screenOptions={{
      headerShown: false
      }}
      >
        <MainStack.Screen name=" " component={TabsScreen}/>
        <MainStack.Screen name="SignUp" component={SignUp}/>
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

export default App;