import React,{useEffect} from "react";
import { SafeAreaView, View,StyleSheet,TouchableOpacity,Alert } from "react-native";
import ContactRow from "../components/ContactRow";
import Separator from "../components/Separator";
import {Ionicons} from '@expo/vector-icons';
import { colors } from "../config/constants";
//import { firebase } from "firebase/app";
import prompt from 'react-native-prompt-android';
import { firebase } from "@react-native-firebase/auth";

const chats=[
    {
        users:["me@yaskas.com","a@aksga.com"],
        messages:[],
    },
    {
        users:["me@yaskas.com","a@aksga.com"],
        messages:[],
    },
    {
        users:["me@yaskas.com","a@aksga.com"],
        messages:[],
    },
    {
        users:["me@yaskas.com","a@aksga.com"],
        messages:[],
    },
    {
        users:["me@yaskas.com","a@aksga.com"],
        messages:[],
    },

];




const Chats=({navigation})=>{
    useEffect(()=>{
        firebase.auth().onAuthStateChanged((user)=>{
           const isLoggedIn=false;
            if(!isLoggedIn){
               navigation.navigate("SignUp");
            }
        });
    },[]);

const handleFABPress= () =>{
  
    
    
}


    return( 
        <SafeAreaView style={styles.container}>
            {chats.map((chat,index)=>(
                <React.Fragment key={index}>
                     <ContactRow
                        name={chat.users.filter(x=>x!==firebase.auth().currentUser.email)}
                        //name="Cengizhan Kocal"
                        subtitle="React Native Course"
                        onPress={()=>{
                        navigation.navigate('Chat');
                        }}/>
                        <Separator/>
                </React.Fragment>
            ))}
           <TouchableOpacity style={styles.fab}onPress={handleFABPress}>
                <View style={styles.fabContainer}>
                <Ionicons name="add" size={30} color="white" />
                </View>
           </TouchableOpacity>
           
            
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    fab:{
        position:'absolute',
        bottom:16,
        right:16,
    },
    fabContainer:{
        width:56,
        height:56,
        backgroundColor:colors.pink,
        borderRadius:28,
        justifyContent:"center",
        alignItems:'center',

    },
})

export default Chats;

