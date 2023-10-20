import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { context } from "../../context";
import { styles } from "./styles";
import IPokeData from "../../services/IPokeData";
import { theme } from "../../global/theme";

interface PokeBoxProps extends IPokeData {
    onPress?: () => void
    theme?: ThemeType
}

interface ThemeType {
    types: Record<string, string>
}

export default function PokeBox({ sprites, name, id, types, onPress, theme }: PokeBoxProps) {

    const bgColor = theme.types[types[0].type.name]
    
    const {front_default} = sprites.other["official-artwork"]

    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={onPress}
            >
                <View style={[styles.card, { borderColor: bgColor }]}>

                    <Text style={[styles.idText, { color: bgColor }]}>
                        #{id < 10 ? '00' + id : id < 100 ? '0' + id : id}
                    </Text>

                    <Image
                        source={{uri: front_default}}
                        style={styles.img}
                    />
                    <View style={[styles.rectangle, { backgroundColor: bgColor }]}>
                        <Text style={styles.text}>{name}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        </View>
    )
}