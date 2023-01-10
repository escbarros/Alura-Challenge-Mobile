import React, { useEffect } from "react";
import { Image, TouchableOpacity, View } from "react-native";

import CategoryButton from "../CategoryButton";
import PlaceholderImg from "../../../assets/images/PreviewPlaceholder.png"

import style from "./style";

export default function PostCard({image=PlaceholderImg, category, videoId=''}){

    var link = {uri : `https://img.youtube.com/vi/N07yNs3DRAU/0.jpg`}
    var thumb = videoId.length == 11 ? link : image

    useEffect(()=>{
        console.log(thumb)
    }, [videoId])

    return (
        <View style={style.cardContainer}>
            <CategoryButton categoria={category.name} color={category.color}/>
            <TouchableOpacity style={style.cardPreview}>
                <Image style={style.cardImage} source={thumb}/>
            </TouchableOpacity>
        </View>
    )
}
