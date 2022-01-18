import { useRecoilValue } from "recoil";
import { isAnimationState } from "src/component/state/isAnimationAtom";

type Props = {
  backButton: VoidFunction;
  handleLotteryNumber: (min: number, max: number) => (() => void) | undefined;
};

export const AB_button = ({ backButton, handleLotteryNumber }: Props) => {
  const isAnimation = useRecoilValue(isAnimationState);
  return (
    <div className="flex col-span-2 gap-x-4">
      <button
        type="button"
        onClick={backButton}
        className="flex justify-center items-center mt-4 w-16 h-16 text-2xl text-gray-700 bg-gray-800 rounded-full shadow-sm active:shadow-none shadow-black"
      >
        B
      </button>
      <button
        type="button"
        disabled={isAnimation}
        onClick={() => handleLotteryNumber(1, 151)}
        className="flex justify-center items-center w-16 h-16 text-2xl text-gray-700 bg-gray-800 rounded-full shadow-sm active:shadow-none shadow-black"
      >
        A
      </button>
    </div>
  );
};
