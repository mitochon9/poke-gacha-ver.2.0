import type { UseScreen } from "src/hook/useScreen";

export interface StartSelectButtonProps {
  setScreenType: (screenType: UseScreen["screenType"]) => void;
}
