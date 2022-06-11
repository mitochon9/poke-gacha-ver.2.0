import { DeleteScreen } from "src/component/molecule/DeleteScreen";
import { GameBoyLogo } from "src/component/molecule/GameBoyLogo";
import { LotteryScreen } from "src/component/molecule/LotteryScreen";
import { PokedexScreen } from "src/component/molecule/PokedexScreen";
import { PowerSupply } from "src/component/molecule/PowerSupply";
import { ResultScreen } from "src/component/molecule/ResultScreen";
import { TopScreen } from "src/component/molecule/TopScreen";

import type { DisplayProps } from "./Display.type";

export const baseId = "project-display";

export const Display: React.FC<DisplayProps> = ({
  isConfirm,
  pokemon,
  pokemonList,
  screenType,
}) => {
  const Screen = () => {
    switch (screenType) {
      case "top":
        return (
          <div data-testid={`${baseId}-top`}>
            <TopScreen />;
          </div>
        );
      case "lottery":
        return (
          <div data-testid={`${baseId}-lottery`}>
            <LotteryScreen />;
          </div>
        );
      case "result":
        return (
          <div data-testid={`${baseId}-result`}>
            <ResultScreen pokemon={pokemon} />;
          </div>
        );
      case "pokedex":
        return (
          <div data-testid={`${baseId}-pokedex`}>
            <PokedexScreen pokemonList={pokemonList} />;
          </div>
        );
      case "delete":
        return (
          <div data-testid={`${baseId}-delete`}>
            <DeleteScreen isConfirm={isConfirm} />;
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex relative justify-center items-center w-[375px] h-[375px] rounded-2xl border-x-[56px] border-t-[32px] border-b-[56px] border-gray-700">
      <Screen />

      <div
        data-testid={`${baseId}-power-supply`}
        className="absolute top-16 left-[-46px]"
      >
        <PowerSupply />
      </div>

      <div
        data-testid={`${baseId}-game-boy-logo`}
        className="flex absolute -bottom-12 left-1/2 justify-center w-full -translate-x-1/2"
      >
        <GameBoyLogo />
      </div>
    </div>
  );
};
