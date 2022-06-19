import { atom, useRecoilState, useRecoilValue } from "recoil";

export interface UseSetBodyColor {
  switchColor: () => void;
  reverseSwitchColor: () => void;
}

export interface UseBodyColor extends UseSetBodyColor {
  bodyColor: "red" | "yellow" | "purple" | "blue";
}

const bodyColorState = atom<UseBodyColor["bodyColor"]>({
  key: "bodyColorState",
  default: "red",
});

export const useBodyColor = (): UseBodyColor => {
  const bodyColor = useRecoilValue(bodyColorState);
  const setBodyColor = useSetBodyColor();

  return { bodyColor, ...setBodyColor };
};

const useSetBodyColor = (): UseSetBodyColor => {
  const [bodyColor, setBodyColor] = useRecoilState(bodyColorState);

  const switchColor = () => {
    switch (bodyColor) {
      case "red":
        setBodyColor("yellow");
        break;

      case "yellow":
        setBodyColor("purple");
        break;

      case "purple":
        setBodyColor("blue");
        break;

      case "blue":
        setBodyColor("red");
        break;

      default:
        break;
    }
  };

  const reverseSwitchColor = () => {
    switch (bodyColor) {
      case "blue":
        setBodyColor("purple");
        break;

      case "purple":
        setBodyColor("yellow");
        break;

      case "yellow":
        setBodyColor("red");
        break;

      case "red":
        setBodyColor("blue");
        break;

      default:
        break;
    }
  };

  return { switchColor, reverseSwitchColor };
};
