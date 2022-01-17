import Image from "next/image";
import { useRecoilValue } from "recoil";
import { isAnimationState } from "src/component/state/isAnimationAtom";
import { isOpenResultState } from "src/component/state/isOpenAtom";
import { ShowPokemon } from "src/pages/index/ShowPokemon";

type Props = {
  pokemonId: number[];
};

export const Display = ({ pokemonId }: Props) => {
  const isOpenResult = useRecoilValue(isOpenResultState);
  const isAnimation = useRecoilValue(isAnimationState);

  return (
    <div className="relative mx-2 mt-4 font-dot text-center bg-amber-50 rounded-2xl border-x-[56px] border-t-[36px] border-b-[56px] border-gray-700 md:mx-8 md:mt-8">
      {isAnimation ? (
        <div className="flex justify-center items-center w-auto h-60 md:h-80">
          <Image src="/monsterBall.png" alt="モンスターボール" width={60} height={60} className="ball-animation" />
        </div>
      ) : !isOpenResult ? (
        <div className="relative pt-2 w-auto h-60 md:h-80">
          <h1 className="text-2xl font-extrabold text-center scale-y-125">ポケットモンスター</h1>
          <h2 className="mt-1 text-sm font-bold tracking-widest text-center">POCKET MONSTERS</h2>
          <h3 className="mt-1 text-xs font-bold text-center">Red Version</h3>
          <p className="text-xs flash">Push start or A button</p>
          <div className="flex justify-center items-end md:mt-8">
            <div className="-mr-5">
              <Image src="/red.png" alt="メインビジュアル" width={120} height={120} />
            </div>
            <div className="-mb-2 -ml-5">
              <Image src="/hitokage.png" alt="メインビジュアル" width={100} height={100} />
            </div>
          </div>
          <small className="absolute bottom-0 left-1/2 w-full text-[8px] text-center -translate-x-1/2">
            ©1995 GAME FREAK Inc.
          </small>
        </div>
      ) : (
        <div>
          <ShowPokemon pokemonId={pokemonId} />
        </div>
      )}
    </div>
  );
};
