import { useRecoilValue, useSetRecoilState } from "recoil";
import { isAnimationState } from "src/component/state/isAnimationAtom";
import { isDeleteOpenState } from "src/component/state/isDeleteOpenAtom";
import { isShowPictureBookState } from "src/component/state/isShowPictureBookAtom";

export const StartSelect_Button = () => {
  const isAnimation = useRecoilValue(isAnimationState);
  const setIsShowPictureBook = useSetRecoilState(isShowPictureBookState);

  const setIsDeleteOpen = useSetRecoilState(isDeleteOpenState);

  return (
    <div>
      <div className="flex gap-x-6 justify-center mt-16">
        <button
          type="button"
          disabled={isAnimation}
          onClick={() => setIsShowPictureBook(true)}
          className="w-14 h-5 bg-gray-800 rounded-full shadow-sm active:shadow-none shadow-black cursor-pointer"
        ></button>
        <button
          type="button"
          disabled={isAnimation}
          onClick={() => setIsDeleteOpen(true)}
          className="w-14 h-5 bg-gray-800 rounded-full shadow-sm active:shadow-none shadow-black cursor-pointer"
        ></button>
      </div>
      <div className="flex gap-x-8 justify-center mt-1 text-xs text-gray-500">
        <div>SELECT</div>
        <div>START</div>
      </div>
    </div>
  );
};
