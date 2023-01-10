import React, { useEffect } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import style from "./style"



import PostCard from "../../components/shared/PostCard";
import useCards from "../../hooks/useCards";

import Header from "../../components/FirstScreen/Header";
import Banner from "../../components/FirstScreen/Banner";
import CategoriesList from "../../components/FirstScreen/CategoriesList";


export default function HomeScreen({navigation}){
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
        <View style={{height: "100%", backgroundColor: "#222222"}}>
            <View>
                <FlatList
                
                    data={cardList}
                    keyExtractor={card => card.image}
                    renderItem={(card)=>{
                        return(
                            <View style={{paddingHorizontal: 23}}>
                                <PostCard image={card.item.image} category={card.item.category}/>
                            </View>
                        )
                    }}
                    ListHeaderComponent={TopPage}
                />
            </View>
            <TouchableOpacity style={style.addBtn} onPress={()=>navigation.navigate("form")}>
                <Text style={{color:"white", fontSize: 48}}>+</Text>
            </TouchableOpacity>
        </View>
    )
}