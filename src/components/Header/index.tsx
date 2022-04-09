import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";

import Pokeball from "../../assets/Pokebola";

type Props = {
    function?: any;
} 

export default function Header(props:Props) {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                <Pokeball />
                <Text style={styles.textLogo}>Pokédex</Text>
                </View>
                
                <Ionicons 
                    name="filter" 
                    size={32} 
                    color="black" 
                    onPress={props.function}
                />
            </View>
            <TextInput style={styles.search} placeholder="Procurar" />
        </>
    );
}