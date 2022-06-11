import sampleImage from "public/img/hitokage.png";

import { Display as DisplayPresenter } from "./Display";
import type { DisplayProps } from "./Display.type";

const Display: React.FC = () => {
  const defaultProps: DisplayProps = {
    screenType: "top",
    pokemon: {
      image: {
        src: sampleImage,
        alt: "sample image",
      },
      id: 4,
      name: "ヒトカゲ",
      type: "とかげポケモン",
      height: 6,
      weight: 85,
      commentary:
        "ヒトカゲの しっぽの ほのおは いのちの ともしび。 げんきな ときは ほのおも ちからづよく もえあがる。",
    },
    pokemonList: [
      {
        image: {
          src: sampleImage,
          alt: "sample image",
        },
        id: 4,
        name: "ヒトカゲ",
        type: "とかげポケモン",
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
        type: "とかげポケモン",
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
        type: "とかげポケモン",
        height: 6,
        weight: 85,
        commentary:
          "ヒトカゲの しっぽの ほのおは いのちの ともしび。 げんきな ときは ほのおも ちからづよく もえあがる。",
      },
    ],
    isConfirm: false,
  };
  return <DisplayPresenter {...defaultProps} />;
};

export { Display };