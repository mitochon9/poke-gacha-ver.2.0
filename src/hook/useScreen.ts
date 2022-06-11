import { atom, useRecoilValue, useSetRecoilState } from "recoil";

export interface UseSetScreen {
  setScreenType: (screenType: UseScreen["screenType"]) => void;
}

export interface UseScreen extends UseSetScreen {
  screenType: "top" | "lottery" | "result" | "pokedex" | "delete";
}

const screenState = atom<UseScreen["screenType"]>({
  key: "screenState",
  default: "top",
});

export const useScreen = (): UseScreen => {
  const screenType = useRecoilValue(screenState);
  const setScreen = useSetScreen();

  return { screenType, ...setScreen };
};

const useSetScreen = (): UseSetScreen => {
  const setScreen = useSetRecoilState(screenState);

  const setScreenType = (screenType: UseScreen["screenType"]) => {
    setScreen(screenType);
  };

  return { setScreenType };
};
