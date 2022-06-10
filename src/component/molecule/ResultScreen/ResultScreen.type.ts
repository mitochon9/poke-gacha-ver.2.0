import type { ImageProps } from "next/image";

export interface ResultScreenProps {
  pokemonData: {
    image: ImageProps;
    id: number;
    name: string;
    type: string;
    height: number;
    weight: number;
    commentary: string;
  };
}
