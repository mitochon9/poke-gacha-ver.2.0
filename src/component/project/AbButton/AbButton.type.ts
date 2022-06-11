import type { UseScreen } from "src/hook/useScreen";

export interface AbButtonProps {
  setScreenType: (screenType: UseScreen["screenType"]) => void;
}
