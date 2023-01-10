import { Dimensions, StyleSheet } from "react-native";
const width = Dimensions.get("screen").width

export default StyleSheet.create({
    banner:{
        width:"100%",
        height:138,

    },
    bannerImg:{
        height:"100%",
        width: "100%",
    },
    bannerButton:{
        position: "absolute",
        top: 80,
        left: width / 3,
        backgroundColor: "#2478DF",
        width: 128,
        borderRadius: 8,
        height: 42,
        flexDirection: "column",
        justifyContent:"center",
        alignItems: "center",
    },
    bannerButtonText:{
        color: "white"
    },
})