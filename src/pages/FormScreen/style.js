import { StyleSheet } from "react-native";

export default style = StyleSheet.create({
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
        width: "100%",
        height: 200
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