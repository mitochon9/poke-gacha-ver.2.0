import { atom } from "recoil";

export const isPokedexState = atom<boolean>({
  key: "isPokedexState",
  default: false,
});
