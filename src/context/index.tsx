import React, { createContext, useState } from "react";

type PropsPokeContext = {
  pokeInfo: object,
  setPokeInfo: (pokeInfo: object) => void,
  bgColor: string,
  setBgColor: (bgColor: string) => void,
}


export const context = createContext<PropsPokeContext>({
  pokeInfo: {},
  setPokeInfo: (pokeInfo: object) => pokeInfo,
  bgColor: '',
  setBgColor: (bgColor: string) => bgColor,

})

export const ContextProvider: React.FC = ({ children }) => {
  const [pokeInfo, setPokeInfo] = useState({})
  const [bgColor, setBgColor] = useState('')

  return (
    <context.Provider value={{
      pokeInfo,
      setPokeInfo,
      bgColor,
      setBgColor
    }}>
      {children}
    </context.Provider>
  )
}