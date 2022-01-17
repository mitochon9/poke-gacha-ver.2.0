import type { VFC } from "react";
import { useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useSetRecoilState } from "recoil";
import { isAnimationState } from "src/component/state/isAnimationAtom";
import { isOpenResultState } from "src/component/state/isOpenAtom";
import { AB_button } from "src/pages/index/AB_button";
import { CrossKey } from "src/pages/index/CrossKey";
import { Display } from "src/pages/index/Display";
import { DisplayLogo } from "src/pages/index/DisplayLogo";
import { NintendoLogo } from "src/pages/index/NintendoLogo";
import { PowerSupply } from "src/pages/index/PowerSupply";
import { Speaker } from "src/pages/index/Speaker";
import { StartSelect_Button } from "src/pages/index/StartSelect_Button";

export const Index: VFC = () => {
  const setIsOpenResult = useSetRecoilState(isOpenResultState);
  const setIsAnimation = useSetRecoilState(isAnimationState);

  const [cookies, setCookie] = useCookies(["pokemonId"]);

  const [pokemonId, setPokemonId] = useState<number[]>(cookies.pokemonId);

  const closeModal = () => {
    setIsOpenResult(false);
  };

  const handleLotteryNumber = useCallback(
    (min: number, max: number) => {
      setIsAnimation(true);
      const lotteryNumber = Math.floor(Math.random() * (max - min) + min);
      const timer = setTimeout(() => {
        setIsAnimation(false);
        setIsOpenResult(true);
        setPokemonId([...pokemonId, lotteryNumber]);
      }, 2000);
      return () => clearTimeout(timer);
    },
    [pokemonId, setIsAnimation, setIsOpenResult, setPokemonId]
  );

  useEffect(() => {
    setCookie("pokemonId", pokemonId);
  }, [pokemonId, setCookie]);

  return (
    <div className="relative">
      {/* 画面部分 */}
      <Display pokemonId={pokemonId} />
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
        <AB_button closeModal={closeModal} handleLotteryNumber={handleLotteryNumber} />
      </div>

      {/* start select button */}
      <div className="relative">
        <StartSelect_Button closeModal={closeModal} handleLotteryNumber={handleLotteryNumber} />

        {/* speaker */}
        <Speaker />
      </div>
    </div>
  );
};
