import React from "react";
import { FlatList, View } from "react-native";
import useCategories from "../../../hooks/useCategories";
import CategoryButton from "../../shared/CategoryButton";

export default function CategoriesList(){
    const [list] = useCategories()
    return (
        <FlatList
            style={{margin: 10}}
            horizontal
            data={list}
            keyExtractor={(index) => index.color}
            ItemSeparatorComponent={() => <View style={{width: 30}} />}
            renderItem={(category)=>{
                return(
                    <CategoryButton categoria={category.item.name} color={category.item.color}/>
                )
            }}
        />
    )
}