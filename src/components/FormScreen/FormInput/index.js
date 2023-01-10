import React from "react";
import {Text, TextInput, View } from "react-native";

import style from "./style";

export default function FormInput({label, placeholder, value, onChange}){
    return(
        <View style={style.formField}>
            <Text style={style.formFieldName}>{label}</Text>
            <TextInput type="text" style={style.formFieldInput} placeholder={placeholder} value={value} onChangeText={onChange}/>
        </View>
    )
}