import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, Text } from "react-native";
import { styles } from "./styles";

import Pokeball from "../../assets/Pokebola";
import { TouchableOpacity } from "react-native-gesture-handler";

type Props = {
    function?: any;
    ordered: boolean;
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
                        name={props.ordered ? 'order-numeric-ascending' : 'order-alphabetical-ascending'} 
                        size={32} 
                        color="#2c2c2c" 
                        onPress={props.function}
                    />
                </TouchableOpacity>
            </View>
        </>
    );
}