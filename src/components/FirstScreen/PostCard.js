import React from "react";
import { Image, StyleSheet, View } from "react-native";
import CategoryButton from "./CategoryButton";


export default function PostCard({image, category}){
    return (
        <View style={style.cardContainer}>
            <CategoryButton categoria={category.name} color={category.color}/>
            <View style={style.cardPreview}>
                <Image style={style.cardImage} source={image}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    cardContainer:{
        marginVertical: 20
    },
    cardPreview: {
        paddingHorizontal: 23,
        marginTop: 14,
        width: "100%",
    },
    cardImage: {
        width: "100%",
        borderRadius: 12,
        overflow: "hidden"
    }
})