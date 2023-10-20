import React from "react";
import { View, Text } from "react-native";
import LottieView from 'lottie-react-native';
import squirtle from '../../../assets/lotties/splash-screen.json'
import { styles } from "../styles";

export default function LoadingAnimation() {
    return (
        <View style={styles.containerAnimation}>
            <LottieView
            style={styles.animation}
            source={squirtle}
            autoPlay
            loop
            />
            <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    )
}