import sampleImage from "public/img/hitokage.png";
import { useRef } from "react";
import { useLottery } from "src/hook/useLottery";
import { useScreen } from "src/hook/useScreen";

import { Display as DisplayPresenter } from "./Display";
import type { DisplayProps } from "./Display.type";

const Display: React.FC = () => {
  const { screenType } = useScreen();
  const { pokemon } = useLottery();

  const pokedexRef = useRef(null);

  const defaultProps: DisplayProps = {
    screenType,
    pokemon: pokemon,
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
    pokedexRef,
  };
  return <DisplayPresenter {...defaultProps} />;
};

export { Display };
