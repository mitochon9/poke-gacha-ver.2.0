import { atom } from "recoil";

export const isDeleteOpenState = atom<boolean>({
  key: "isDeleteOpenState",
  default: false,
});
