import sampleImage from "public/img/hitokage.png";

import type { PokedexScreenProps } from "./PokedexScreen.type";

const defaultProps: PokedexScreenProps = {
  pokemonList: [
    {
      image: {
        src: sampleImage,
        alt: "sample image",
      },
      id: 4,
      name: "ヒトカゲ",
      genus: "とかげポケモン",
      height: 6,
      weight: 85,
      commentary:
        "ヒトカゲの しっぽの ほのおは いのちの ともしび。 げんきな ときは ほのおも ちからづよく もえあがる。",
    },
    {
      image: {
        src: sampleImage,
        alt: "sample image",
      },
      id: 4,
      name: "ヒトカゲ",
      genus: "とかげポケモン",
      height: 6,
      weight: 85,
      commentary:
        "ヒトカゲの しっぽの ほのおは いのちの ともしび。 げんきな ときは ほのおも ちからづよく もえあがる。",
    },
    {
      image: {
        src: sampleImage,
        alt: "sample image",
      },
      id: 4,
      name: "ヒトカゲ",
      genus: "とかげポケモン",
      height: 6,
      weight: 85,
      commentary:
        "ヒトカゲの しっぽの ほのおは いのちの ともしび。 げんきな ときは ほのおも ちからづよく もえあがる。",
    },
  ],
  pokedexRef: null,
};

export const propObj: { [key: string]: PokedexScreenProps } = {
  default: defaultProps,
};
