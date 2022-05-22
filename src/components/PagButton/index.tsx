import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import { styles } from "./styles";


type Props = {
  onPress?: () => void
  page?: number | string
  current?: number
}

export default function PagButton({ onPress, page, current }: Props) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
    >
      <View style={current === page ? [styles.card, styles.current] : styles.card}>
        <Text style={styles.text}>
          {page == 'RIGHT' || page == 'LEFT' ? '...' : page}
        </Text>
      </View>
    </TouchableOpacity>
  );
}