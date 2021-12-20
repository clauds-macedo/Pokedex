import React from "react";
import { styles } from "./styles";
import { View, Text } from 'react-native'
import LottieView from 'lottie-react-native'

import squirtle from '../../assets/lotties/splash-screen.json'

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <LottieView 
                style={styles.animation}
                source={squirtle} 
                autoPlay 
                loop
            />
            <View style={styles.titleView}>
                <Text style={styles.title}>
                    Oi
                </Text>
            </View>
        </View>
    )
}