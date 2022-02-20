import { atom } from "recoil";

export const isDeletionCompletedState = atom<boolean>({
  key: "isDeletionCompletedState",
  default: false,
});
