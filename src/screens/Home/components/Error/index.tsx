import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export default function Error() {
    return (
        <View style={styles.container}>
            <Text>Opa, algo deu errado</Text>
        </View>
    )
}