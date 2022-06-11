import Image from "next/image";

import type { LotteryScreenProps } from "./LotteryScreen.type";

export const baseId = "molecule-lottery-screen";

export const LotteryScreen: React.FC<LotteryScreenProps> = ({
  monsterBall,
}) => (
  <>
    <div data-testid={baseId}>
      <Image
        {...monsterBall}
        alt="モンスターボール"
        className="rotate-[-30deg] ball-animation"
      />
    </div>
  </>
);
