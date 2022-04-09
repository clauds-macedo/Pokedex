import React from 'react';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'
import { useFonts } from 'expo-font';
import { Routes } from './src/routes';
import { StatusBar } from 'react-native';

export default function App() {
  
  const[fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });
  
  // segurar a splash screen

  return (
    <>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      <Routes />
    </>
  );
}

