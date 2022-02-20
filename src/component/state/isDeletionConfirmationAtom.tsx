import { atom } from "recoil";

export const isDeletionConfirmationState = atom<boolean>({
  key: "isDeletionConfirmationState",
  default: false,
});
