import { ResultScreen } from "src/component/molecule/ResultScreen";

import type { PokedexScreenProps } from "./PokedexScreen.type";

export const baseId = "molecule-pokedex-screen";

export const PokedexScreen: React.FC<PokedexScreenProps> = ({
  pokemonList,
}) => (
  <>
    <div data-testid={baseId} className="overflow-auto w-64 h-64 font-dot">
      <h1 className="text-xs text-center">つかまえたポケモン</h1>
      <div className="space-y-2">
        {pokemonList.map((pokemon, index) => (
          <div key={index} className="border-2 border-gray-600">
            <ResultScreen pokemon={pokemon} />
          </div>
        ))}
      </div>
    </div>
  </>
);
