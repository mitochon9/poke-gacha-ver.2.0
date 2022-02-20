import type { VFC } from "react";
import { useCallback } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { gameBoyColorNumState } from "src/component/state/gameBoyColorNumAtom";
import { isAnimationState } from "src/component/state/isAnimationAtom";
import { isDeletionCompletedState } from "src/component/state/isDeletionCompletedAtom";
import { isDeletionConfirmationState } from "src/component/state/isDeletionConfirmationAtom";
import { isPokedexState } from "src/component/state/isPokedexAtom";
import { isResultDisplayState } from "src/component/state/isResultDisplayAtom";
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
  const setIsResultDisplay = useSetRecoilState(isResultDisplayState);
  const setIsAnimation = useSetRecoilState(isAnimationState);
  const setIsPokedexBook = useSetRecoilState(isPokedexState);

  const [isDeletionConfirmation, setIsDeletionConfirmation] = useRecoilState(isDeletionConfirmationState);
  const [isDeletionCompleted, setIsDeletionCompleted] = useRecoilState(isDeletionCompletedState);

  const gameBoyColorNum = useRecoilValue(gameBoyColorNumState);

  const setPokemonId = useSetRecoilState<number>(pokemonIdState);

  const handlePressB = useCallback(() => {
    setIsResultDisplay(false);
    setIsPokedexBook(false);
    setIsDeletionConfirmation(false);
  }, [setIsDeletionConfirmation, setIsPokedexBook, setIsResultDisplay]);

  const handlePressA = useCallback(() => {
    if (isDeletionConfirmation) {
      // localStorage のデータ削除
      localStorage.clear();
      setIsDeletionConfirmation(false);
      setIsDeletionCompleted(true);
      return;
    }

    if (isDeletionCompleted) {
      // トップ画面へ遷移
      setIsDeletionCompleted(false);
      return;
    }

    // モンスターボールのアニメーション画面へ遷移
    setIsAnimation(true);
    // 1 〜 151 の番号でランダムに抽選
    const lotteryNumber = Math.floor(Math.random() * (151 - 1) + 1);
    setPokemonId(lotteryNumber);

    // 2秒後にガチャ結果画面を表示
    const timer = setTimeout(() => {
      setIsAnimation(false);
      setIsResultDisplay(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, [
    setPokemonId,
    setIsAnimation,
    setIsResultDisplay,
    isDeletionCompleted,
    isDeletionConfirmation,
    setIsDeletionCompleted,
    setIsDeletionConfirmation,
  ]);

  return (
    <div
      className={`relative pt-1 pb-2 mx-auto max-w-md min-h-[704px] rounded-xl rounded-b-3xl shadow ${
        gameBoyColorNum === 0
          ? "bg-[#C83031]"
          : gameBoyColorNum === 1
          ? "bg-[#FED20D]"
          : gameBoyColorNum === 2
          ? "bg-[#543DB8]"
          : "bg-[#1C9ACD]"
      }`}
    >
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
        <AB_button handlePressB={handlePressB} handlePressA={handlePressA} />
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
