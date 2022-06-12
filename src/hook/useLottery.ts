import axios from "axios";
import { useScreen } from "src/hook/useScreen";
import type { Pokemon } from "src/model/pokemon";
import useSWR from "swr";

interface UseLottery {
  lottery: () => void;
  pokemon: Pokemon;
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export const useLottery = (): UseLottery => {
  const { setScreenType } = useScreen();

  const { data: data1 } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/4`,
    fetcher
  );
  const { data: data2 } = useSWR(
    `https://pokeapi.co/api/v2/pokemon-species/4`,
    fetcher
  );
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png`;

  const pokemon: Pokemon = {
    image: {
      src: image,
      alt: "pokemon",
    },
    id: data1?.id,
    name: data2?.names[0]?.name,
    genus: data2?.genera[0]?.genus,
    height: data1?.height,
    weight: data1?.weight,
    commentary: data2?.flavor_text_entries[30]?.flavor_text,
  };

  const lottery = () => {
    setScreenType("lottery");
    const timer = setTimeout(() => {
      setScreenType("result");
    }, 2000);
    return () => clearTimeout(timer);
  };

  return { lottery, pokemon };
};
