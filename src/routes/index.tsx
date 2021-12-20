import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native'

import splashScreen from  '../screens/splashScreen'
import Home from "../screens/Home";


const { Navigator, Screen } = createStackNavigator();

export function Routes() {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Screen 
                    name="Home"
                    component={Home}
                /> 
                <Screen 
                    name="Splash"
                    component={splashScreen}
                />
            </Navigator>
        </NavigationContainer>
    )
}