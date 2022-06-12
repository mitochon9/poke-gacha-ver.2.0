import Image from "next/image";
import monsterBallImage from "public/img/monsterBall.png";

import type { LotteryScreenProps } from "./LotteryScreen.type";

export const baseId = "molecule-lottery-screen";

export const LotteryScreen: React.FC<LotteryScreenProps> = () => (
  <>
    <div
      data-testid={baseId}
      className="flex justify-center items-center w-[247px] h-[263px]"
    >
      <Image
        src={monsterBallImage}
        alt="モンスターボール"
        className="rotate-[-30deg] ball-animation"
      />
    </div>
  </>
);
