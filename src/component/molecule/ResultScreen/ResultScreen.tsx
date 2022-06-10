import Image from "next/image";

import type { ResultScreenProps } from "./ResultScreen.type";

export const baseId = "molecule-result-screen";

export const ResultScreen: React.FC<ResultScreenProps> = ({ pokemonData }) => (
  <>
    <div className="grid grid-cols-7 py-4 w-64 h-64 font-dot">
      <div className="flex col-span-3 justify-center items-center text-center">
        <div>
          <div>
            <Image {...pokemonData.image} alt={pokemonData.image.alt} />
          </div>
          <p data-testid={`${baseId}-id`} className="text-xs">
            No.
            {pokemonData.id}
          </p>
        </div>
      </div>

      <div className="flex col-span-4 justify-center items-center text-xs leading-loose text-left">
        <div>
          <p data-testid={`${baseId}-name`}>{pokemonData.name}</p>
          <p data-testid={`${baseId}-type`}>{pokemonData.type}</p>
          <p data-testid={`${baseId}-height`}>
            たかさ {(pokemonData.height / 10).toFixed(1)}m
          </p>
          <p data-testid={`${baseId}-weight`}>
            おもさ {(pokemonData.weight / 10).toFixed(1)}kg
          </p>
        </div>
      </div>

      <div className="flex relative col-span-7 mt-2 h-0 border-2 border-gray-600">
        <div className="flex absolute top-[-7px] justify-around w-full">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <div
              key={item}
              className={`z-10 w-[14px] h-[14px]  ${
                item === 5 ? "" : "bg-amber-50 border border-gray-700"
              } `}
            />
          ))}
        </div>
      </div>

      <p
        data-testid={`${baseId}-commentary`}
        className="col-span-7 px-2 text-xs leading-loose text-left"
      >
        {pokemonData.commentary}
      </p>
    </div>
  </>
);
