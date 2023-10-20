import React from "react";
import { styles } from "../styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";
import { theme } from "../../../global/theme";

type SeachBoxProps = {
  onChangeText: (e: string) => {};
};

export default function SearchBox({ onChangeText }: SeachBoxProps) {
  return (
    <View style={styles.searchBox}>
      <MaterialCommunityIcons name="magnify" size={24} color={theme.colors.gray500}  style={styles.magnify}/>
      <TextInput
        style={styles.search}
        placeholder="Procurar"
        onChangeText={onChangeText}
      />
    </View>
  );
}
