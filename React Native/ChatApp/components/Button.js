import React from "react";
import {TouchableOpacity,Text,StyleSheet} from 'react-native';

const Button = ({title,varient,onPress}) =>{
    return(
        <TouchableOpacity 
            style={[styles.buttonContainer,
            {backgroundColor:varient==='primary'?'green':'transparent',
            paddingHorizontal:varient==='primary'?16:0,}]}
            onPress={onPress}
            
            >
            <Text style={[styles.buttoLabel,{color:varient==='primary'?'white':'black'}]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    buttonContainer:{
        paddingVertical:12,
        borderRadius:6,
    },
    buttoLabel:{
        fontSize:18,
    },
})



export default Button;