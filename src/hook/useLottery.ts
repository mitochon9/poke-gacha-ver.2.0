import { atom, useRecoilValue, useSetRecoilState } from "recoil";

interface UseSetLottery {
  lotteryNumber: () => void;
}

interface UseLottery extends UseSetLottery {
  winningNumber: number;
}

const winningNumberState = atom<number>({
  key: "winningNumber",
  default: Math.floor(Math.random() * (151 - 1)) + 1,
});

export const useLottery = (): UseLottery => {
  const winningNumber = useRecoilValue(winningNumberState);
  const setLottery = useSetLottery();

  return { winningNumber, ...setLottery };
};

const useSetLottery = (): UseSetLottery => {
  const setWinningNumber = useSetRecoilState(winningNumberState);

  const lotteryNumber = () =>
    setWinningNumber(Math.floor(Math.random() * (151 - 1)) + 1);

  return { lotteryNumber };
};
