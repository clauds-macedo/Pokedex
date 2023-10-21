import React from "react";
import LottieView from "lottie-react-native";
import loading from "../../../assets/lotties/ListLoading.json";
import { styles } from "../styles";
import { View } from "react-native";
import { theme } from "../../../global/theme";

export default function ListLoading() {
  return (
    <View style={styles.listLoadingAnimationContainer}>
      <LottieView
        style={styles.listLoadingAnimation}
        source={loading}
        autoPlay
        loop
      />
    </View>
  );
}
