import Image from "next/image";
import type { PokemonData } from "src/type/pokemonData";

export const ShowPictureBook = () => {
  const storageData = localStorage.getItem("storageData");

  const parsedStorageData: PokemonData = storageData ? JSON.parse(storageData) : [];

  return (
    <div className="overflow-auto w-auto h-60 md:h-80">
      <h1 className="text-xs">つかまえたポケモン</h1>
      <div className="px-2 space-y-2 w-auto h-52">
        {parsedStorageData?.length === 0 ? (
          <div></div>
        ) : (
          parsedStorageData?.map((data, index) => (
            <div key={index} className="grid items-end text-xs rounded border-2 border-gray-500">
              <div className="col-span-3">
                <Image src={data.img} alt={data.name} width={80} height={80} />
                <div>No.{data.id}</div>
              </div>
              <div className="col-span-4 leading-loose text-left">
                <div>{data.name}</div>
                <div>{data.genus}</div>
                <div>{(data.height / 10).toFixed(1)} m</div>
                <div>{(data.weight / 10).toFixed(1)} kg</div>
              </div>
              <div className="col-span-7 p-2 h-24 text-left border-t-2 border-gray-500">{data.flavorText}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
