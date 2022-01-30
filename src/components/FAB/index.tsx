import React, { Component, useEffect, useRef, useState } from "react";
import {
  TouchableWithoutFeedback,
  View,
  Image,
  Text,
  StyleProp,
  ViewStyle,
  Animated,
} from "react-native";
import { styles } from "./styles";
import OpenedPokeball from "../../assets/fabIcons/openedPokeball";
import ClosedPokeball from "../../assets/fabIcons/closedPokeball";

interface StyleProps {
  style: Object;
}

export default function FAB(props: StyleProps) {
  const [isPokeballOpened, setIsPokeballOpened] = useState(false);
  const toggleAnimation = useRef(new Animated.Value(0)).current;

  const handleChangePokeballState = () => {
    const toValue = isPokeballOpened ? 1 : 0;
    Animated.timing(toggleAnimation, {
      toValue,
      duration: 600,
      useNativeDriver: false,
    }).start();
    setIsPokeballOpened(!isPokeballOpened);
  };

  useEffect(() => {
    handleChangePokeballState()
  },[])
  
  return (
    <View style={[styles.Container, props.style]}>
      <TouchableWithoutFeedback>
        <Animated.View
          style={[
            styles.OpenedFAB,
            {
              transform: [
                {
                  translateY: toggleAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -60],
                  }),
                },
              ],
            },
          ]}
        >
          <OpenedPokeball />
        </Animated.View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={() => handleChangePokeballState()}>
        <Animated.View
          style={[
            styles.Button,
            {
              transform: [
                {
                  rotate: toggleAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "720deg"],
                  }),
                },
              ],
            },
          ]}
        >
          {!isPokeballOpened ? <OpenedPokeball/> : <ClosedPokeball/>}
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
}
