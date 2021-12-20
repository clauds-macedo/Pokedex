import React from 'react';
import { StatusBar } from 'react-native'
import {Poppins_400Regular, Poppins_700Bold} from '@expo-google-fonts/poppins'
import { useFonts } from 'expo-font';
import { Routes } from './src/routes';


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

