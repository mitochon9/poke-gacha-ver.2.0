import { atom } from "recoil";

export const isResultDisplayState = atom<boolean>({
  key: "isResultDisplayState",
  default: false,
});
