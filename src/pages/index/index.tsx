import type { VFC } from "react";
import { useCallback } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isAnimationState } from "src/component/state/isAnimationAtom";
import { isDeleteNotifyState } from "src/component/state/isDeleteNotifyAtom";
import { isDeleteOpenState } from "src/component/state/isDeleteOpenAtom";
import { isOpenResultState } from "src/component/state/isOpenResultAtom";
import { isShowPictureBookState } from "src/component/state/isShowPictureBookAtom";
import { pokemonIdState } from "src/component/state/pokemonIdAtom";
import { AB_button } from "src/pages/index/AB_button";
import { CrossKey } from "src/pages/index/CrossKey";
import { Display } from "src/pages/index/display";
import { DisplayLogo } from "src/pages/index/DisplayLogo";
import { NintendoLogo } from "src/pages/index/NintendoLogo";
import { PowerSupply } from "src/pages/index/PowerSupply";
import { Speaker } from "src/pages/index/Speaker";
import { StartSelect_Button } from "src/pages/index/StartSelect_Button";

export const Index: VFC = () => {
  const setIsOpenResult = useSetRecoilState(isOpenResultState);
  const setIsAnimation = useSetRecoilState(isAnimationState);
  const [isPictureBook, setIsPictureBook] = useRecoilState(isShowPictureBookState);

  const [isDeleteOpen, setIsDeleteOpen] = useRecoilState(isDeleteOpenState);
  const [isDeleteNotify, setIsDeleteNotify] = useRecoilState(isDeleteNotifyState);

  const setPokemonId = useSetRecoilState<number>(pokemonIdState);

  const backButton = () => {
    setIsOpenResult(false);
    setIsPictureBook(false);
    setIsDeleteOpen(false);
  };
  const handleLotteryNumber = useCallback(
    (min: number, max: number) => {
      try {
        if (isPictureBook) {
          return;
        }

        if (isDeleteOpen) {
          localStorage.clear();
          setIsDeleteOpen(false);
          setIsDeleteNotify(true);
          return;
        }

        if (isDeleteNotify) {
          setIsDeleteNotify(false);
          return;
        }

        setIsAnimation(true);

        const lotteryNumber = Math.floor(Math.random() * (max - min) + min);

        setPokemonId(lotteryNumber);

        const timer = setTimeout(() => {
          setIsAnimation(false);
          setIsOpenResult(true);
        }, 2000);
        return () => clearTimeout(timer);
      } catch {
      } finally {
      }
    },
    [
      setPokemonId,
      setIsAnimation,
      setIsOpenResult,
      isPictureBook,
      isDeleteNotify,
      isDeleteOpen,
      setIsDeleteNotify,
      setIsDeleteOpen,
    ]
  );

  return (
    <div className="relative">
      {/* 画面部分 */}
      <Display />

      {/* 電源部分 */}
      <PowerSupply />

      {/* 画面下のロゴ */}
      <DisplayLogo />

      {/* Nintendo logo */}
      <NintendoLogo />
      <div className="flex justify-between items-center mx-8 mt-8">
        {/* cross key */}
        <CrossKey />

        <div className="col-span-2"></div>

        {/* A B button */}
        <AB_button backButton={backButton} handleLotteryNumber={handleLotteryNumber} />
      </div>

      {/* start select button */}
      <div className="relative">
        <StartSelect_Button />

        {/* speaker */}
        <Speaker />
      </div>
    </div>
  );
};
