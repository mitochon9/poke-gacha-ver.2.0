import { useRecoilValue, useSetRecoilState } from "recoil";
import { isAnimationState } from "src/component/state/isAnimationAtom";
import { isShowPictureBookState } from "src/component/state/isShowPictureBookAtom";

type Props = {
  backButton: VoidFunction;
  handleLotteryNumber: (min: number, max: number) => (() => void) | undefined;
};

export const StartSelect_Button = ({ handleLotteryNumber }: Props) => {
  const isAnimation = useRecoilValue(isAnimationState);
  const setIsShowPictureBook = useSetRecoilState(isShowPictureBookState);

  return (
    <div>
      <div className="flex gap-x-6 justify-center mt-16">
        <button
          type="button"
          onClick={() => setIsShowPictureBook(true)}
          className="w-12 h-5 bg-gray-800 rounded-full shadow-sm active:shadow-none shadow-black cursor-pointer"
        ></button>
        <button
          type="button"
          disabled={isAnimation}
          onClick={() => handleLotteryNumber(1, 151)}
          className="w-12 h-5 bg-gray-800 rounded-full shadow-sm active:shadow-none shadow-black cursor-pointer"
        ></button>
      </div>
      <div className="flex gap-x-8 justify-center mt-1 text-xs text-gray-500">
        <div>SELECT</div>
        <div>START</div>
      </div>
    </div>
  );
};
