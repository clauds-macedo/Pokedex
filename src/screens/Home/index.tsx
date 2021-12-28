import React from "react";
import { View, Text, TextInput } from 'react-native'
import { styles } from "./styles";

import Pokebola from '../../assets/Pokeball.svg'
import Pokeball from "../../assets/Pokebola";
import { theme } from "../../global/theme";
import { Ionicons } from '@expo/vector-icons'

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.header}>
                    <Pokeball/>
                    <Text style={styles.textLogo}>Pokédex</Text>
                </View>
                <Ionicons name="filter" size={32} color="black" />
            </View>
            <TextInput
            style={styles.search}
            placeholder="Procurar"
            />
        </View>

        // header
    )
}