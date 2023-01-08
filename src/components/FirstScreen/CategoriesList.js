import React from "react";
import { FlatList } from "react-native";
import useCategories from "../../hooks/useCategories";
import CategoryButton from "./CategoryButton";

export default function CategoriesList(){
    const [list] = useCategories()
    return (
        <FlatList
            style={{margin: 10}}
            horizontal
            data={list}
            keyExtractor={(index) => index.color}
            renderItem={(category)=>{
                return(
                    <CategoryButton categoria={category.item.name} color={category.item.color}/>
                )
            }}
        />
    )
}