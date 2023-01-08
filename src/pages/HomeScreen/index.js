import React, { useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import style from "./style"



import PostCard from "../../components/FirstScreen/PostCard";
import useCards from "../../hooks/useCards";

import Header from "../../components/FirstScreen/Header";
import Banner from "../../components/FirstScreen/Banner";
import CategoriesList from "../../components/FirstScreen/CategoriesList";


export default function HomeScreen(){
    const [cardList] = useCards()

    useEffect(()=>{
        console.log(cardList)
    },[])

    function TopPage(){
        return (
            <>
                <Header/>
                <Banner/>
                <CategoriesList/>
            </>
        )
    }

    return(
        <View style={{height: "100%"}}>
            <View>
                <FlatList
                    data={cardList}
                    keyExtractor={card => card.image}
                    renderItem={(card)=>{
                        return(
                            <PostCard image={card.item.image} category={card.item.category}/>
                        )
                    }}
                    ListHeaderComponent={TopPage}
                />
            </View>
            <TouchableOpacity style={style.addBtn}>
                <Text style={{color:"white", fontSize: 48}}>+</Text>
            </TouchableOpacity>
        </View>
    )
}