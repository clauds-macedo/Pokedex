import { create } from "zustand";
import IPokeData from "../services/IPokeData";

interface PokeInfoState {
  pokeInfo: IPokeData | {};
  setPokeInfo: (e: IPokeData) => void
}

export const usePokeInfoStore = create<PokeInfoState>((set) => ({
  pokeInfo: {},
  setPokeInfo: (pokeInfo: IPokeData) => set(() => ({pokeInfo: pokeInfo})),
}));
