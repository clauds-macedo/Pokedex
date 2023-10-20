import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import { styles } from "./styles";

import Pokeball from "../../../../assets/Pokebola";
import { theme } from "../../../../global/theme";

type Props = {
  onPress?: any;
  ordered?: boolean;
};

export default function Header({ onPress, ordered }: Props) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Pokeball width={32} height={32} fill={theme.colors.darkGray} />
          <Text style={styles.textLogo}>Pokédex</Text>
        </View>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name={
              ordered
                ? "order-numeric-ascending"
                : "order-alphabetical-ascending"
            }
            size={32}
            color="#2c2c2c"
            onPress={onPress}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}
