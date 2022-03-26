import React,{useState} from 'react';
import {Text,SafeAreaView,StyleSheet, View,StatusBar,TextInput,TouchableOpacity} from 'react-native';
import { colors } from '../config/constants';
import Button from '../components/Button';
import { firebase } from 'firebase/app';
import auth from '@react-native-firebase/auth';

const SignUp= () =>{
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
 
    const[isLoading,setIsLoading]=useState(false);
    const[error,setError]=useState("");

    const createAccount= async () =>{
        setIsLoading(true)
        try{
            const response=await auth().createUserWithEmailAndPassword(email,password);

        await response.user.updateProfile({displayName:name});
        setIsLoading(false)
        }catch(e){
            alert(e.message);
            setIsLoading(false)
        }

    };

    return(
        <View style={styles.container}>
            <SafeAreaView style={styles.Safearea}>
                <View style={styles.contentContainer}> 
                    <Text style={styles.tittle}>Create new account</Text>
                    <TextInput 
                    value={name} 
                    onChangeText={(text)=>setName(text)} 
                    style={styles.input} 
                    placeholder='Enter your name' />
                    <TextInput 
                    value={email} 
                    onChangeText={(text)=>setEmail(text)} 
                    style={styles.input} 
                    placeholder='Enter your email ' />
                    <TextInput 
                    value={password} 
                    onChangeText={(text)=>setPassword(text)} 
                    style={styles.input} 
                    placeholder='Enter your password' />
                
                    <View style={styles.buttonsContainer}>
                        <Button title="Sign In" varient="secondary"/>
                        <Button loading={isLoading} onPress={()=>createAccount()} title="Sign Up" varient="primary"/>
                    </View>
                </View>
                

            </SafeAreaView>
        </View> 
    )
} 

const styles=StyleSheet.create({
    container:{
        backgroundColor:colors.primary,
        flex: 1,
        
    },
    Safearea:{
        marginTop:StatusBar.currentHeight,
    },
    contentContainer:{
        padding:40,
    },
    tittle:{
        fontSize:36,
        color:"white",
        fontWeight:'800',
        marginBottom:16,
    },
    input:{
        backgroundColor:'white',
        fontSize:15,
        marginTop:16,
        paddingHorizontal:16,
        paddingVertical:14,
        borderRadius:6,
    },
    buttonsContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:32,
    },


})



export default SignUp;