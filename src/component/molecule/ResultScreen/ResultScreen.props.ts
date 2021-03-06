import sampleImage from "public/img/hitokage.png";

import type { ResultScreenProps } from "./ResultScreen.type";

const defaultProps: ResultScreenProps = {
  pokemon: {
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
};

export const propObj: { [key: string]: ResultScreenProps } = {
  default: defaultProps,
};
