import { useRecoilValue } from "recoil";
import { isAnimationState } from "src/component/state/isAnimationAtom";
import { isPokedexState } from "src/component/state/isPokedexAtom";

type Props = {
  handlePressB: VoidFunction;
  handlePressA: VoidFunction;
};

export const AB_button = ({ handlePressA, handlePressB }: Props) => {
  const isAnimation = useRecoilValue(isAnimationState);
  const isPokedex = useRecoilValue(isPokedexState);
  return (
    <div className="flex col-span-2 gap-x-4">
      <button
        type="button"
        onClick={handlePressB}
        className="flex justify-center items-center mt-4 w-16 h-16 text-2xl text-gray-700 bg-gray-800 rounded-full shadow-sm active:shadow-none shadow-black"
      >
        B
      </button>
      <button
        type="button"
        disabled={isAnimation || isPokedex}
        onClick={handlePressA}
        className="flex justify-center items-center w-16 h-16 text-2xl text-gray-700 bg-gray-800 rounded-full shadow-sm active:shadow-none shadow-black"
      >
        A
      </button>
    </div>
  );
};
