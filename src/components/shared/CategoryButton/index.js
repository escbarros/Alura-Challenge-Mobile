import React from "react";
import { StyleSheet, TouchableOpacity,Text, TouchableWithoutFeedback } from "react-native";

export default function CategoryButton({categoria='', color}){

    return(
        <TouchableOpacity style={[style.button, {backgroundColor: color, display: categoria == '' ? 'none' : 'initial'}]}>
            <Text style={style.text}>{categoria}</Text>
        </TouchableOpacity>
    )
}
const style = StyleSheet.create({
    button:{
        width: 116,
        height: 32,
        borderRadius: 12,
        // marginHorizontal: 23
    },
    text:{
        top: "25%",
        color: "white",
        textAlign: "center"
    }
})