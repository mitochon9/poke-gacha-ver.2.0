import { useRecoilValue } from "recoil";
import { isAnimationState } from "src/component/state/isAnimationAtom";
import { isDeletionCompletedState } from "src/component/state/isDeletionCompletedAtom";
import { isDeletionConfirmationState } from "src/component/state/isDeletionConfirmationAtom";
import { isPokedexState } from "src/component/state/isPokedexAtom";
import { isResultDisplayState } from "src/component/state/isResultDisplayAtom";
import { DeletionCompleted } from "src/pages/index/display/DeletionCompleted";
import { DeletionConfirmation } from "src/pages/index/display/DeletionConfirmation";
import { MonsterBallAnimation } from "src/pages/index/display/MonsterBallAnimation";
import { Pokedex } from "src/pages/index/display/Pokedex";
import { ResultDisplay } from "src/pages/index/display/ResultDisplay";
import { TopDisplay } from "src/pages/index/display/TopDisplay";

export const Display = () => {
  const isResultDisplay = useRecoilValue(isResultDisplayState);
  const isAnimation = useRecoilValue(isAnimationState);
  const isPokedex = useRecoilValue(isPokedexState);
  const isDeletionConfirmation = useRecoilValue(isDeletionConfirmationState);
  const isDeletionCompleted = useRecoilValue(isDeletionCompletedState);

  return (
    <div className="relative mx-2 mt-4 font-dot text-center bg-amber-50 rounded-2xl border-x-[56px] border-t-[36px] border-b-[56px] border-gray-700 md:mx-8 md:mt-8">
      {isAnimation ? (
        <MonsterBallAnimation />
      ) : isPokedex ? (
        <Pokedex />
      ) : isResultDisplay ? (
        <ResultDisplay />
      ) : isDeletionConfirmation ? (
        <DeletionConfirmation />
      ) : isDeletionCompleted ? (
        <DeletionCompleted />
      ) : (
        <TopDisplay />
      )}
    </div>
  );
};
