import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AddScreen from "../pages/FormScreen";
import HomeScreen from "../pages/HomeScreen"

const Stack = createStackNavigator()
export default function StackNavigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='home' screenOptions={{headerShown: false}}>
                <Stack.Screen name="home" component={HomeScreen}></Stack.Screen>
                <Stack.Screen name="form" component={AddScreen}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}