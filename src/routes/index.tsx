import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'

import SplashScreen from  '../screens/Splash'
import Home from "../screens/Home";

const Stack = createStackNavigator();

export function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="Home"
            >
                <Stack.Screen 
                    name="Splash"
                    component={SplashScreen}
                />
                <Stack.Screen 
                    name="Home"
                    component={Home}
                /> 
            </Stack.Navigator>
        </NavigationContainer>
    )
}