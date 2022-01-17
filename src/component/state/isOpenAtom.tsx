import { atom } from "recoil";

export const isOpenResultState = atom<boolean>({
  key: "isOpenResultState",
  default: false,
});
