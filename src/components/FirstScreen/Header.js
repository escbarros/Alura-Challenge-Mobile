import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Header(){
    return(
        <View style={style.headder}>
                <Text style={style.name}>MOBFLIX</Text>
        </View>
    )
}
const style = StyleSheet.create({
    headder:{
        height: 90,
        width: "100%",
        backgroundColor:"#1A1A1A",
        flexDirection: "column",
        justifyContent:"flex-end",
        alignItems: "center",
    },
    name:{
        color: "#2478DF",
        fontSize: 32,
        lineHeight: 38,
        fontFamily: "BebasNeue",
        fontWeight: '400',
    },
})