import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";
import errorAnimation from '../../../../assets/lotties/errorScreen.json'
import LottieView from 'lottie-react-native';
import Button from "../../../../components/Button";

export default function Error() {
    return (
        <View style={styles.container}>
            <LottieView 
                source={errorAnimation}
                autoPlay
                loop
                style={styles.animation}
            />
            <Text style={styles.text}>Opss...{'\n'}algo deu errado</Text>
            <Button>Tentar Novamente</Button>
        </View>
    )
}