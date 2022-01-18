import { atom } from "recoil";

export const isDeleteNotifyState = atom<boolean>({
  key: "isDeleteNotifyState",
  default: false,
});
