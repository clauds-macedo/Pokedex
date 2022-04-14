import React, { useContext } from 'react';

import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { Routes } from './src/routes';

import { ContextProvider } from './src/context';


export default function App() {

  const [fontsLoaded] = useFonts({
    'Poppins_400Regular': require('./src/assets/fonts/Poppins-Regular.ttf'),
    'Poppins_700Bold': require('./src/assets/fonts/Poppins-Bold.ttf')
  });

  return (
    <ContextProvider>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent' // pegar a cor do contexto
        translucent
        animated
      />
      {fontsLoaded ? <Routes /> : null}
    </ContextProvider>
  );
}

