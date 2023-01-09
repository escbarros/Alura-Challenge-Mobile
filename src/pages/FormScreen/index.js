import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import PlaceholderImg from "../../assets/images/PreviewPlaceholder.png"
// https://img.youtube.com/vi/%3Cinsert-youtube-video-id-here%3E/0.jpg
export default function Form(){

    const [url, setUrl] = useState('');
    const [category, setCategory] = useState('');

    function changeCategory(){
        console.log("")
    }

    function changeLink(){
        return `https://img.youtube.com/vi/${url}/0.jpg`
    }

    return(
        <View style={style.container}>
            <Text style={style.title}>Cadastre um video</Text>
            <View style={style.form}>
                <View style={style.formField}>
                    <Text style={style.formFieldName}>URL: </Text>
                    <TextInput style={style.formFieldInput} placeholder={"Ex: N3h5A0oAzsk"} onChange={setUrl}/>
                </View>
                <View style={style.formField}>
                    <Text style={style.formFieldName}>Categoria: </Text>
                    <TextInput 
                    style={style.formFieldInput} 
                    placeholder={"Mobile, Front-end..."}
                    onChange={changeCategory}/>
                </View>
                <View style={style.preview}>
                    <Text style={style.previewTitle}>Preview</Text>
                    <View style={style.previewImageContainer}>
                        <Image source={{uri:'https://engineering.fb.com/wp-content/uploads/2016/04/yearinreview.jpg'}} style={style.previewImage}/>
                    </View>
                </View>
            <TouchableOpacity style={style.registerButton}>
                <Text style={style.registerText}>Cadastrar</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        height:"100%",
        backgroundColor: "#222222"
    },
    title:{
        top: 64,
        left: 16,
        color: "white",
        fontSize: 32,
        fontWeight: "700",
    },
    form:{
        marginTop: 100,
        padding: 16
    },
    formField:{
        marginBottom: 35
    },
    formFieldName:{
        color: "white",
        fontSize: 14,
        fontWeight: "700",
        marginBottom: 8,
    },
    formFieldInput:{
        backgroundColor: "#275FA3",
        borderRadius: 8,
        height: 48,
        padding: 8,
        color:"white",
    },
    preview:{
        marginTop: 32
    },
    previewTitle:{
        color:"white",
        fontSize: 28,
        fontWeight: "700"
    },
    previewImageContainer:{
        borderRadius: 12,
        overflow: "hidden",
        marginVertical: 13
    },
    previewImage:{
        width: "100%"
    },
    registerButton:{
        marginTop: 32,
        backgroundColor: "#2478DF",
        borderRadius:8,
        height: 48
    },
    registerText:{
        top: "25%",
        color:"white",
        textAlign:"center",
        fontSize: 18
    }
})