import React from 'react';

import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Routes } from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    'Poppins_400Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins_700Bold': require('./src/assets/fonts/Poppins-Bold.ttf')
  });

  return (
    <>
      <StatusBar
        barStyle='dark-content'
        backgroundColor='transparent' // pegar a cor do contexto
        translucent
        animated
      />
      {fontsLoaded ? <Routes /> : null}
    </>
  );
}

