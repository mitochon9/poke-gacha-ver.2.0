import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { useJapanesePokeApi, usePokeApi } from "src/component/hooks/usePokeApi";
import { pokemonIdState } from "src/component/state/pokemonIdAtom";
import type { PokemonData } from "src/type/pokemonData";

export const ResultDisplay = () => {
  // localStorage のデータを取得
  const storageData = localStorage.getItem("storageData");
  // JSON 形式に変換
  const parsedStorageData = storageData ? JSON.parse(storageData) : [];

  const pokemonId = useRecoilValue(pokemonIdState);
  const [pokemonData, setPokemonData] = useState(
    parsedStorageData ? parsedStorageData : []
  );

  const { data, error, isLoading }: any = usePokeApi(pokemonId);
  const {
    data: japaneseData,
    error: japaneseDataError,
    isLoading: isJapaneseDataLoading,
  }: any = useJapanesePokeApi(pokemonId);

  const pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  const setFields = useCallback(() => {
    if (data && japaneseData && pokemonId) {
      // pokemonData に抽選で選ばれたデータを配列に追加する処理
      setPokemonData((pokemonData: PokemonData) => {
        return [
          ...pokemonData,
          {
            id: data?.id,
            name: japaneseData?.names[0]?.name,
            genus: japaneseData?.genera[0]?.genus,
            height: data?.height,
            weight: data?.weight,
            flavorText: japaneseData?.flavor_text_entries[38]?.flavor_text,
            img: pokeImg,
          },
        ];
      });
    }
  }, [data, japaneseData, setPokemonData, pokemonId, pokeImg]);

  // setFields() を実行
  useEffect(() => {
    setFields();
  }, [setFields]);

  // localStorage にセット
  useEffect(() => {
    if (data && japaneseData && pokemonId) {
      localStorage.setItem("storageData", JSON.stringify(pokemonData));
    }
  }, [pokemonData, data, japaneseData, pokemonId]);

  // モンスターボールのアニメーションが終わってもデータ取得ができていない場合にモンスターボールの画像を表示する
  if (isLoading || isJapaneseDataLoading) {
    return (
      <div className="flex justify-center items-center w-auto h-60">
        <Image
          src="/monsterBall.png"
          alt="モンスターボール"
          width={60}
          height={60}
          className="rotate-[-30deg]"
        />
      </div>
    );
  }

  if (error || japaneseDataError) {
    return <div className="w-auto h-60">データの取得に失敗しました</div>;
  }

  return (
    <div className="grid grid-cols-7 items-end pb-4 w-auto h-60">
      <div className="col-span-3 text-center">
        <div>
          {pokemonId ? (
            <Image src={pokeImg} alt="ポケモン" width={160} height={160} />
          ) : null}
        </div>
        <div className="-mt-4 text-xs md:text-base">
          No.
          {pokemonId ? pokemonId : null}
        </div>
      </div>
      <div className="col-span-4 text-xs leading-loose text-left md:text-base">
        <div>{japaneseData?.names[0]?.name}</div>
        <div className="md:mt-2">{japaneseData?.genera[0]?.genus}</div>
        <div className="md:mt-2">たかさ {(data?.height / 10).toFixed(1)}m</div>
        <div className="md:mt-2">おもさ {(data?.weight / 10).toFixed(1)}kg</div>
      </div>
      <div className="relative col-span-7 mt-2 w-full border-2 border-gray-600">
        <div className="flex absolute top-[-7px] col-span-7 justify-around w-full">
          {["", "", "", "", "", "", "", "", ""].map((item, index) => {
            return (
              <div
                key={index}
                className={`z-10 w-[14px] h-[14px]  ${
                  index === 4 ? "" : "bg-amber-50 border border-gray-700"
                } `}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-span-7 px-2 mt-2 text-xs text-left">
        {japaneseData?.flavor_text_entries[38]?.flavor_text}
      </div>
    </div>
  );
};
