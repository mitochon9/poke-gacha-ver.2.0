import Image from "next/image";
import { usePokeApi01, usePokeApi02 } from "src/component/hooks/usePokeApi";

type Props = {
  pokemonId: number | undefined;
};

export const ShowPokemon = ({ pokemonId }: Props) => {
  const { data: data01, error: error01, isLoading: isLoading01 }: any = usePokeApi01(pokemonId);
  const { data: data02, error: error02, isLoading: isLoading02 }: any = usePokeApi02(pokemonId);

  const pokeImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  if (isLoading01 || isLoading02) {
    return (
      <div className="flex justify-center items-center w-60 h-60">
        <Image src="/monsterBall.png" alt="モンスターボール" width={60} height={60} />
      </div>
    );
  }

  if (error01 || error02) {
    return <div className="w-60 h-60">{error01.message}</div>;
  }

  return (
    <div className="grid items-end pb-4 w-auto h-60">
      <div className="col-span-3 text-center">
        <div>{pokemonId ? <Image src={pokeImg} alt="ポケモン" width={160} height={160} /> : null}</div>
        <div className="-mt-4 text-xs">No.{data01?.id}</div>
      </div>
      <div className="col-span-4 text-xs leading-loose text-left">
        <div>{data02?.names[0]?.name}</div>
        <div>{data02?.genera[0]?.genus}</div>
        <div>たかさ {(data01?.height / 10).toFixed(1)}m</div>
        <div>おもさ {(data01?.weight / 10).toFixed(1)}kg</div>
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
      <div className="col-span-7 px-2 mt-2 text-xs text-left">{data02?.flavor_text_entries[38].flavor_text}</div>
    </div>
  );
};
