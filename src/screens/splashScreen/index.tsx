import React from "react";
import { styles } from "./styles";
import { View, Text } from 'react-native'
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'

import squirtle from '../../assets/lotties/splash-screen.json'

export default function SplashScreen() {

    const navigation = useNavigation();

    setTimeout(() => {
        navigation.navigate('Home' as never) 
    }, 5000);

    return (
        <View style={styles.container}>
            <LottieView 
                style={styles.animation}
                source={squirtle} 
                autoPlay 
                loop
            />
        </View>
    )
}