import React from "react";
import { View, Text } from 'react-native'
import { styles } from "./styles";

import Pokebola from '../../assets/Pokeball.svg'
import { theme } from "../../global/theme";

export default function Home() {
    return (
        <View style={styles.container}>
            <Pokebola height={23} width={23} fill={theme.colors.darkGray}/> 
        </View>

        // header
    )
}