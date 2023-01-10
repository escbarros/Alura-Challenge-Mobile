import React, { useState } from "react";
import {Text, TouchableOpacity, View } from "react-native";
import style from "./style";

import FormInput from "../../components/FormScreen/FormInput";
import PostCard from "../../components/shared/PostCard";

export default function Form(){

    const [videoId, setVideoId] = useState('');
    const [category, setCategory] = useState({});

    function categoryHandler(e){
        if(e == "Mobile") setCategory({name: e,color: "#D82D2D"})
        else if (e == "Programação") setCategory({name: e,color: "#19940F"})
        else if (e == "Front-End") setCategory({name: e,color: "#5781EF"})
    }

    return(
        <View style={style.container}>
            <Text style={style.title}>Cadastre um video</Text>

            <View style={style.form}>

                <FormInput label="URL: " placeholder={"Ex: N3h5A0oAzsk"} value={videoId} onChange={e => setVideoId(e)}/>
                
                <FormInput label="Categoria: "placeholder={"Mobile, Front-end..."} value={category.name} onChange={e => categoryHandler(e)}/>

                <View style={style.preview}>
                    <Text style={style.previewTitle}>Preview</Text>
                    <View>
                        <PostCard category={category} videoId={videoId}/>
                    </View>
                </View>
                
            <TouchableOpacity style={style.registerButton}>
                <Text style={style.registerText}>Cadastrar</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
