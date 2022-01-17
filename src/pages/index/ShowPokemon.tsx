import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useRecoilValue } from "recoil";
import { usePokeApi01, usePokeApi02 } from "src/component/hooks/usePokeApi";
import { pokemonIdState } from "src/component/state/pokemonIdAtom";
import type { PokemonData } from "src/type/pokemonData";

export const ShowPokemon = () => {
  const [cookies, setCookies] = useCookies(["pokemonData"]);
  const pokemonId = useRecoilValue(pokemonIdState);

  const [pokemonData, setPokemonData] = useState(cookies.pokemonData ? cookies.pokemonData : []);

  const { data: data01, error: error01, isLoading: isLoading01 }: any = usePokeApi01(pokemonId);
  const { data: data02, error: error02, isLoading: isLoading02 }: any = usePokeApi02(pokemonId);

  const pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  const isLoading = isLoading01 || isLoading02;
  const isError = error01 || error02;

  const setFields = useCallback(() => {
    if (data01 && data02 && pokemonId) {
      setPokemonData((pokemonData: PokemonData) => [
        ...pokemonData,
        {
          id: data01?.id,
          name: data02?.names[0]?.name,
          genus: data02?.genera[0]?.genus,
          height: data01?.height,
          weight: data01?.weight,
          flavorText: data02?.flavor_text_entries[38]?.flavor_text,
          img: `https:raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
        },
      ]);
    }
  }, [data01, data02, setPokemonData, pokemonId]);

  useEffect(() => {
    setFields();
  }, [setFields]);

  useEffect(() => {
    if (data01 && data02 && pokemonId) {
      setCookies("pokemonData", pokemonData);
    }
  }, [pokemonData, setCookies, data01, data02, pokemonId]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-auto h-60 md:h-80">
        <Image src="/monsterBall.png" alt="モンスターボール" width={60} height={60} className="rotate-[-30deg]" />
      </div>
    );
  }

  if (isError) {
    return <div className="w-auto h-60 md:h-80">データの取得に失敗しました</div>;
  }

  return (
    <div className="grid items-end pb-4 w-auto h-60 md:h-80">
      <div className="col-span-3 text-center">
        <div>{pokemonId ? <Image src={pokeImg} alt="ポケモン" width={160} height={160} /> : null}</div>
        <div className="-mt-4 text-xs md:text-base">
          No.
          {pokemonId ? pokemonId : null}
        </div>
      </div>
      <div className="col-span-4 text-xs leading-loose text-left md:text-base">
        <div>{data02?.names[0]?.name}</div>
        <div className="md:mt-2">{data02?.genera[0]?.genus}</div>
        <div className="md:mt-2">たかさ {(data01?.height / 10).toFixed(1)}m</div>
        <div className="md:mt-2">おもさ {(data01?.weight / 10).toFixed(1)}kg</div>
      </div>
      <div className="relative col-span-7 mt-2 w-full border-2 border-gray-700">
        <div className="flex absolute -top-2 col-span-7 justify-around w-full">
          {["", "", "", "", "", "", "", "", ""].map((item, index) => (
            <div key={index} className={`z-10 w-4 h-4  ${index === 4 ? "" : "bg-white border border-gray-700"} `}>
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-7 px-2 mt-2 text-xs text-left md:text-base">
        {data02?.flavor_text_entries[38]?.flavor_text}
      </div>
    </div>
  );
};
