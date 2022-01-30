import Image from "next/image";
import { useRecoilValue } from "recoil";
import { isAnimationState } from "src/component/state/isAnimationAtom";
import { isOpenResultState } from "src/component/state/isOpenResultAtom";
import { isShowPictureBookState } from "src/component/state/isShowPictureBookAtom";
import { ShowPictureBook } from "src/pages/index/display/ShowPictureBook";
import { TopDisplay } from "src/pages/index/display/TopDisplay";
import { ShowPokemon } from "src/pages/index/ShowPokemon";

export const Display = () => {
  const isOpenResult = useRecoilValue(isOpenResultState);
  const isAnimation = useRecoilValue(isAnimationState);
  const isShowPictureBook = useRecoilValue(isShowPictureBookState);

  return (
    <div className="relative mx-2 mt-4 font-dot text-center bg-amber-50 rounded-2xl border-x-[56px] border-t-[36px] border-b-[56px] border-gray-700 md:mx-8 md:mt-8">
      {isAnimation ? (
        <div className="flex justify-center items-center w-auto h-60 md:h-80">
          <Image src="/monsterBall.png" alt="モンスターボール" width={60} height={60} className="ball-animation" />
        </div>
      ) : isShowPictureBook ? (
        <ShowPictureBook />
      ) : !isOpenResult ? (
        <TopDisplay />
      ) : (
        <ShowPokemon />
      )}
    </div>
  );
};
