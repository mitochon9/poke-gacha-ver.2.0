import Image from "next/image";

import type { ResultScreenProps } from "./ResultScreen.type";

export const baseId = "molecule-result-screen";

export const ResultScreen: React.FC<ResultScreenProps> = ({ pokemon }) => (
  <>
    <div className="grid grid-cols-7 py-4 w-[263px] h-[287px] font-dot">
      <div className="flex col-span-3 justify-center items-center text-center">
        <div>
          <div>
            <Image {...pokemon.image} alt={pokemon.image.alt} />
          </div>
          <p data-testid={`${baseId}-id`} className="text-xs">
            No.
            {pokemon.id}
          </p>
        </div>
      </div>

      <div className="flex col-span-4 justify-center items-center text-xs leading-loose text-left">
        <div>
          <p data-testid={`${baseId}-name`}>{pokemon.name}</p>
          <p data-testid={`${baseId}-type`}>{pokemon.type}</p>
          <p data-testid={`${baseId}-height`}>
            たかさ {(pokemon.height / 10).toFixed(1)}m
          </p>
          <p data-testid={`${baseId}-weight`}>
            おもさ {(pokemon.weight / 10).toFixed(1)}kg
          </p>
        </div>
      </div>

      <div className="flex col-span-7 justify-around items-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <div
            key={item}
            className={`z-10 w-[14px] h-[14px]  ${
              item === 5 ? "" : "bg-amber-50 border border-gray-700"
            } `}
          />
        ))}
      </div>
      <div className="col-span-7 mt-[-18px] h-0 border-2 border-gray-700" />

      <p
        data-testid={`${baseId}-commentary`}
        className="col-span-7 px-2 text-xs leading-loose text-left"
      >
        {pokemon.commentary}
      </p>
    </div>
  </>
);
