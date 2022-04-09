import React from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";
import LottieView from 'lottie-react-native'
import Header from "../../components/Header";

import Load from '../../assets/lotties/loading.json'

export default function Loading() {
    return (
        <View style={styles.container}> 
            <Header />
            <LottieView 
                style={styles.animation}
                source={Load}
                autoPlay
                loop
            />
        </View>
    );
}