import { atom } from "recoil";

export const isAnimationState = atom<boolean>({
  key: "isAnimationState",
  default: false,
});
