import { atom } from "recoil";

export const isShowPictureBookState = atom<boolean>({
  key: "isShowPictureBookState",
  default: false,
});
