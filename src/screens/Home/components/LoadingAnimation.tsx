import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles";

import LottieView from 'lottie-react-native';
import loading from    '../../../assets/lotties/loadingScreen.json'

export default function LoadingAnimation() {
    return (
        <View style={styles.containerAnimation}>
            <LottieView
            style={styles.animation}
            source={loading}
            autoPlay
            loop
            />
      </View>
    )
}