import React from 'react';

import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Routes } from './src/routes';
import SplashScreen from './src/screens/Splash';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Poppins_400Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins_700Bold': require('./src/assets/fonts/Poppins-Bold.ttf')
  });

  return (
    <>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <Routes /> : null}
    </>
  );
}

