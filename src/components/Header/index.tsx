import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MotiView } from 'moti';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";

import Pokeball from "../../assets/Pokebola";
import { TouchableOpacity } from "react-native-gesture-handler";

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
                
                <TouchableOpacity>
                    <MaterialCommunityIcons 
                        name="order-alphabetical-ascending" 
                        size={32} 
                        color="#2c2c2c" 
                        onPress={props.function}
                    />
                </TouchableOpacity>
            </View>
        </>
    );
}