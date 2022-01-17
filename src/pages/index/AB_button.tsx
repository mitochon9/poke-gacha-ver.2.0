import { useRecoilValue } from "recoil";
import { isAnimationState } from "src/component/state/isAnimationAtom";

type Props = {
  closeModal: VoidFunction;
  handleLotteryNumber: (min: number, max: number) => () => void;
};

export const AB_button = ({ closeModal, handleLotteryNumber }: Props) => {
  const isAnimation = useRecoilValue(isAnimationState);
  return (
    <div className="flex col-span-2 gap-x-4">
      <button
        type="button"
        onClick={closeModal}
        className="flex justify-center items-center mt-4 w-14 h-14 text-2xl text-gray-600 bg-gray-700 rounded-full shadow-sm active:shadow-none shadow-black"
      >
        B
      </button>
      <button
        type="button"
        disabled={isAnimation}
        onClick={() => handleLotteryNumber(1, 151)}
        className="flex justify-center items-center w-14 h-14 text-2xl text-gray-600 bg-gray-700 rounded-full shadow-sm active:shadow-none shadow-black"
      >
        A
      </button>
    </div>
  );
};
