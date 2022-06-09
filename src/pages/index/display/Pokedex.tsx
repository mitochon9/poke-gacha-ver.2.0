import Image from "next/image";
import type { LegacyRef } from "react";
import { useEffect, useRef } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { scrollYState } from "src/component/state/scrollYAtom";
import { storageDataLengthState } from "src/component/state/storageDataLengthAtom";
import type { PokemonData } from "src/type/pokemonData";

export const Pokedex = () => {
  const storageData = localStorage.getItem("storageData");

  const parsedStorageData: PokemonData = storageData
    ? JSON.parse(storageData)
    : [];

  const setStorageDataLength = useSetRecoilState(storageDataLengthState);

  useEffect(() => {
    setStorageDataLength(parsedStorageData.length);
  });

  const ref: LegacyRef<HTMLDivElement> | undefined = useRef(null);

  const scrollY = useRecoilValue(scrollYState);

  useEffect(() => {
    ref.current?.scrollTo({ top: scrollY, behavior: "smooth" });
  }, [scrollY]);

  return (
    <div ref={ref} className="overflow-auto w-auto h-60">
      <h1 className="text-xs">つかまえたポケモン</h1>
      <div className="px-2 space-y-2 w-auto h-52">
        {parsedStorageData?.length === 0 ? (
          <div></div>
        ) : (
          parsedStorageData?.map((data, index) => {
            return (
              <div
                key={index}
                className="grid items-end h-52 text-xs rounded border-2 border-gray-500"
              >
                <div className="col-span-3">
                  <Image
                    src={data.img}
                    alt={data.name}
                    width={80}
                    height={80}
                  />
                  <div>No.{data.id}</div>
                </div>
                <div className="col-span-4 leading-loose text-left">
                  <div>{data.name}</div>
                  <div>{data.genus}</div>
                  <div>{(data.height / 10).toFixed(1)} m</div>
                  <div>{(data.weight / 10).toFixed(1)} kg</div>
                </div>
                <div className="col-span-7 p-2 h-24 text-left border-t-2 border-gray-500">
                  {data.flavorText}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
