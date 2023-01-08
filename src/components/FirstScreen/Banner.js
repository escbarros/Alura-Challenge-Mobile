import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import BannerImg from "../../assets/images/Banner.png"

import { Dimensions } from "react-native";

const width = Dimensions.get("screen").width

export default function Banner(){
    return(
        <View style={style.banner}>
            <Image source={BannerImg} style={style.bannerImg}/>
            <TouchableOpacity style={style.bannerButton}>
                <Text style={style.bannerButtonText}>Assista Agora</Text>
            </TouchableOpacity>
        </View>
    )
}
const style = StyleSheet.create({
    banner:{
        width:"100%",
        height:138,
        // flexDirection: "column",
        // justifyContent:"flex-end",
        // alignItems: "center",

    },
    bannerImg:{
        height:"100%",
        width: "100%",
    },
    bannerButton:{
        position: "absolute",
        top: 80,
        left: width / 3,
        backgroundColor: "#2478DF",
        width: 128,
        borderRadius: 8,
        height: 42,
        flexDirection: "column",
        justifyContent:"center",
        alignItems: "center",
    },
    bannerButtonText:{
        color: "white"
    },
})