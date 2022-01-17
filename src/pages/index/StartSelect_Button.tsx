import { useRecoilValue } from "recoil";
import { isAnimationState } from "src/component/state/isAnimationAtom";

type Props = {
  closeModal: VoidFunction;
  handleLotteryNumber: (min: number, max: number) => () => void;
};

export const StartSelect_Button = ({ handleLotteryNumber }: Props) => {
  const isAnimation = useRecoilValue(isAnimationState);

  return (
    <div>
      <div className="flex gap-x-6 justify-center mt-16">
        <div className="w-12 h-4 bg-gray-600 rounded-full shadow-sm active:shadow-none shadow-black cursor-pointer"></div>
        <button
          type="button"
          disabled={isAnimation}
          onClick={() => handleLotteryNumber(1, 151)}
          className="w-12 h-4 bg-gray-600 rounded-full shadow-sm active:shadow-none shadow-black cursor-pointer"
        ></button>
      </div>
      <div className="flex gap-x-8 justify-center mt-1 text-xs text-gray-300">
        <div>SELECT</div>
        <div>START</div>
      </div>
    </div>
  );
};
