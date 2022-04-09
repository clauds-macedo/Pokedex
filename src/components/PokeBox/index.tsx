import React from "react";
import { View, Text, TouchableOpacity, Image} from 'react-native'
import { styles } from "./styles";


type Props = {
    img: string;
    bgColor: string;
    name: string;
    id: number
}

export default function PokeBox( { img, bgColor, name, id } : Props) {
    return(
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.7}
            >
                <View style={[styles.card, {borderColor: bgColor}]}>
                    
                    <Text style={[styles.idText, {color: bgColor}]}>
                        #{id < 10 ? '00' + id : id < 100 ? '0' + id : id}
                    </Text>
                    
                    <Image 
                        source={{uri: img}}
                        style={styles.img}
                    />
                    <View style={[styles.rectangle, {backgroundColor: bgColor}]}>
                        <Text style={styles.text}>{name}</Text>
                    </View>

                </View>
            </TouchableOpacity>
        </View>
    )
}