import { ResultScreen } from "src/component/molecule/ResultScreen";

import type { PokedexScreenProps } from "./PokedexScreen.type";

export const baseId = "molecule-pokedex-screen";

export const PokedexScreen: React.FC<PokedexScreenProps> = ({
  pokemonList,
}) => (
  <>
    <div
      data-testid={baseId}
      className="overflow-auto py-2 w-[263px] h-[287px] font-dot"
    >
      <h2 className="text-xs text-center">つかまえたポケモン</h2>
      <div className="space-y-2">
        {pokemonList.map((pokemon, index) => (
          <div key={index} className="border-y-2 border-gray-600">
            <ResultScreen pokemon={pokemon} />
          </div>
        ))}
      </div>
    </div>
  </>
);
