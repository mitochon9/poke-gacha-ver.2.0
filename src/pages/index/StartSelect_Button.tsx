import { useRecoilValue, useSetRecoilState } from "recoil";
import { isAnimationState } from "src/component/state/isAnimationAtom";
import { isDeletionCompletedState } from "src/component/state/isDeletionCompletedAtom";
import { isDeletionConfirmationState } from "src/component/state/isDeletionConfirmationAtom";
import { isPokedexState } from "src/component/state/isPokedexAtom";
import { isResultDisplayState } from "src/component/state/isResultDisplayAtom";

export const StartSelect_Button = () => {
  const isAnimation = useRecoilValue(isAnimationState);
  const isResultDisplay = useRecoilValue(isResultDisplayState);
  const isDeletionConfirmation = useRecoilValue(isDeletionConfirmationState);
  const isDeletionCompleted = useRecoilValue(isDeletionCompletedState);
  const setIsPokedex = useSetRecoilState(isPokedexState);

  const setIsDeleteOpen = useSetRecoilState(isDeletionConfirmationState);

  return (
    <div>
      <div className="flex gap-x-6 justify-center mt-16">
        {/* Select ボタン ポケモン図鑑画面に遷移 */}
        <button
          type="button"
          disabled={isAnimation || isResultDisplay || isDeletionConfirmation || isDeletionCompleted}
          onClick={() => setIsPokedex(true)}
          className="w-14 h-5 bg-gray-800 rounded-full shadow-sm active:shadow-none shadow-black cursor-pointer"
        ></button>

        {/* Start ボタン 削除確認画面に遷移 */}
        <button
          type="button"
          disabled={isAnimation || isResultDisplay || isDeletionCompleted}
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
