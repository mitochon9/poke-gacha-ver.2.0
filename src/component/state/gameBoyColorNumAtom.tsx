import { atom } from "recoil";

export const gameBoyColorNumState = atom<number>({
  key: "gameBoyColorNumState",
  default: 0,
});
