import Image from "next/image";
import { useCookies } from "react-cookie";
import type { PokemonData } from "src/type/pokemonData";

export const ShowPictureBook = () => {
  const [cookies] = useCookies();
  const pokemonData: PokemonData = cookies.pokemonData;

  return (
    <div className="overflow-auto w-auto h-60 md:h-80">
      <h1>つかまえたポケモン</h1>
      <div className="flex justify-center">
        <div className="space-y-2">
          {pokemonData.map((data, index) => (
            <div key={index} className="grid items-end w-72 border-2 border-gray-500">
              <div className="col-span-3">
                <Image src={data.img} alt={data.name} width={120} height={120} />
                <div>No.{data.id}</div>
              </div>
              <div className="col-span-4 leading-loose text-left">
                <div>{data.name}</div>
                <div>{data.genus}</div>
                <div>{(data.height / 10).toFixed(1)} m</div>
                <div>{(data.weight / 10).toFixed(1)} kg</div>
              </div>
              <div className="col-span-7 border-t-2 border-gray-500">{data.flavorText}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
