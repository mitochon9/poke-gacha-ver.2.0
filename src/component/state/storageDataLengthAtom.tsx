import { atom } from "recoil";

export const storageDataLengthState = atom<number>({
  key: "storageDataLengthState",
  default: 0,
});
