import React from "react";
import { View,StyleSheet, } from "react-native";
import ContactRow from "../components/ContactRow";
import { colors } from "../config/constants";
import Separator from "../components/Separator";
import Cell from "../components/Cell";
const Settings= ()=>{
    return(
        <View>
            <ContactRow
            name="Cengizhan Kocal"
            subtitle="aasgsa@gmail.com"
            style={styles.contactRow}
            />
            <Separator/>
            <Cell
                title='Logout'
                icon='log-out-outline'
                tintColor={colors.red}
                onPress={()=>{
                    alert("Hi")
                 }}
            />
             <Cell
                title='Help'
                icon='help-circle-outline'
                tintColor={colors.green}
                onPress={()=>{
                    alert("Hi")
                 }}
                 style={{marginTop:20}}
            />
             <Cell
                title='Tell a Friend'
                icon='heart-outline'
                tintColor={colors.pink}
                onPress={()=>{
                    alert("Hi")
                 }}
            />
        </View>
    )
}


const styles=StyleSheet.create({
    contactRow:{
        backgroundColor:'white',
        marginTop:16,
        borderTopWidth:StyleSheet.hairlineWidth,
        borderColor:colors.border,
        
    },
})



export default Settings;