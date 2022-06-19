import type { ImageProps } from "next/image";

export interface Pokemon {
  image: ImageProps;
  id: number;
  name: string;
  genus: string;
  height: number;
  weight: number;
  commentary: string;
}
