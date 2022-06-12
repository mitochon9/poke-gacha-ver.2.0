import { useScreen } from "src/hook/useScreen";

interface UseLottery {
  lottery: () => void;
}

export const useLottery = (): UseLottery => {
  const { setScreenType } = useScreen();

  const lottery = () => {
    setScreenType("lottery");
    const timer = setTimeout(() => {
      setScreenType("result");
    }, 2000);
    return () => clearTimeout(timer);
  };

  return { lottery };
};
