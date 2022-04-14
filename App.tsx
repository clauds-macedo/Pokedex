import React from 'react';

import Background from './src/components/Background';

import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Routes } from './src/routes';
import { theme } from './src/global/theme';


export default function App() {

  const [fontsLoaded] = useFonts({
    'Poppins_400Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins_700Bold': require('./src/assets/fonts/Poppins-Bold.ttf')
  });

  return (
    <Background>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <Routes /> : null}
    </Background>
  );
}

