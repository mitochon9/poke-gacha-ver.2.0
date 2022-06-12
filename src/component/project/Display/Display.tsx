import { DeleteIsCompleteScreen } from "src/component/molecule/DeleteIsCompleteScreen";
import { DeleteIsConfirmScreen } from "src/component/molecule/DeleteIsConfirmScreen";
import { GameBoyLogo } from "src/component/molecule/GameBoyLogo";
import { LotteryScreen } from "src/component/molecule/LotteryScreen";
import { PokedexScreen } from "src/component/molecule/PokedexScreen";
import { PowerSupply } from "src/component/molecule/PowerSupply";
import { ResultScreen } from "src/component/molecule/ResultScreen";
import { TopScreen } from "src/component/molecule/TopScreen";

import type { DisplayProps } from "./Display.type";

export const baseId = "project-display";

export const Display: React.FC<DisplayProps> = ({
  pokedexRef,
  pokemon,
  pokemonList,
  screenType,
}) => {
  const Screen = () => {
    switch (screenType) {
      case "top":
        return (
          <div data-testid={`${baseId}-top`}>
            <TopScreen />
          </div>
        );
      case "lottery":
        return (
          <div data-testid={`${baseId}-lottery`}>
            <LotteryScreen />
          </div>
        );
      case "result":
        return (
          <div data-testid={`${baseId}-result`}>
            <ResultScreen pokemon={pokemon} />
          </div>
        );
      case "pokedex":
        return (
          <div data-testid={`${baseId}-pokedex`}>
            <PokedexScreen pokemonList={pokemonList} pokedexRef={pokedexRef} />
          </div>
        );
      case "deleteIsConfirm":
        return (
          <div data-testid={`${baseId}-delete-is-confirm`}>
            <DeleteIsConfirmScreen />
          </div>
        );
      case "deleteIsComplete":
        return (
          <div data-testid={`${baseId}-delete-is-complete`}>
            <DeleteIsCompleteScreen />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex relative justify-center items-center w-[343px] h-[359px] bg-amber-50 rounded-t-2xl rounded-b-[55px] border-x-[48px] border-t-[32px] border-b-[64px] border-gray-700">
      <Screen />

      <div
        data-testid={`${baseId}-power-supply`}
        className="absolute top-16 left-[-42px]"
      >
        <PowerSupply />
      </div>

      <div
        data-testid={`${baseId}-game-boy-logo`}
        className="flex absolute bottom-[-52px] left-1/2 justify-center w-full -translate-x-1/2"
      >
        <GameBoyLogo />
      </div>
    </div>
  );
};
