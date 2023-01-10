import React from "react";
import { View, Text } from "react-native";

import style from "./style";

export default function Header(){
    return(
        <View style={style.headder}>
                <Text style={style.name}>MOBFLIX</Text>
        </View>
    )
}