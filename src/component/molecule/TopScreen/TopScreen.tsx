import Image from "next/image";
import hitokageImage from "public/img/hitokage.png";
import redImage from "public/img/red.png";

import type { TopScreenProps } from "./TopScreen.type";

export const baseId = "molecule-top-screen";

export const TopScreen: React.FC<TopScreenProps> = () => (
  <>
    <div
      data-testid={baseId}
      className="flex justify-center items-center w-[247px] h-[263px] font-dot text-center"
    >
      <div className="space-y-1">
        <h1
          data-testid={`${baseId}-title`}
          className="text-2xl font-bold scale-y-125"
        >
          ポケットモンスター
        </h1>
        <p className="text-sm font-bold tracking-widest">POCKET MONSTERS</p>
        <p className="text-xs font-bold">Red Version</p>
        <p className="text-xs flash">Press A button</p>

        <p className="text-[8px]">セレクトボタンでモンスター図鑑へ</p>

        <div className="flex justify-center items-end mt-2">
          <div className="-mr-4">
            <Image src={redImage} alt="Red image" width={100} height={100} />
          </div>
          <div className="-mb-2 -ml-4">
            <Image
              src={hitokageImage}
              alt="メインビジュアル"
              width={80}
              height={80}
            />
          </div>
        </div>

        <div className="flex justify-between items-end">
          <div className="w-14" />
          <p className="text-[8px]">©1995 GAME FREAK Inc.</p>

          <div className="flex flex-col w-14 text-[8px]">
            <span>Press START</span>
            <button disabled className="rounded border border-gray-700">
              データ削除
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
);
