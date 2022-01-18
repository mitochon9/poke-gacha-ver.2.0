import { atom } from "recoil";

export const scrollYState = atom<number>({
  key: "scrollYState",
  default: 0,
});
