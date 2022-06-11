import monsterBallImage from "public/img/monsterBall.png";

import type { LotteryScreenProps } from "./LotteryScreen.type";

const defaultProps: LotteryScreenProps = {
  monsterBall: monsterBallImage,
};

export const propObj: { [key: string]: LotteryScreenProps } = {
  default: defaultProps,
};
