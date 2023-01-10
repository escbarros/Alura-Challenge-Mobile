import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import BannerImg from "../../../assets/images/Banner.png"

import style from "./style";

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