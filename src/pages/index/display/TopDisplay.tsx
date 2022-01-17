/* eslint-disable react/jsx-handler-names */
import Image from "next/image";

export const TopDisplay = () => (
  <div className="relative pt-2 w-auto h-60 md:h-80">
    <h1 className="text-2xl font-extrabold text-center scale-y-125">ポケットモンスター</h1>
    <h2 className="mt-1 text-sm font-bold tracking-widest text-center">POCKET MONSTERS</h2>
    <h3 className="mt-1 text-xs font-bold text-center">Red Version</h3>
    <p className="text-xs flash">Press start or A button</p>
    <p className="text-[8px]">セレクトボタンでモンスター図鑑へ</p>
    <div className="flex justify-center items-end md:mt-8">
      <div className="-mr-4">
        <Image src="/red.png" alt="メインビジュアル" width={100} height={100} />
      </div>
      <div className="-mb-2 -ml-4">
        <Image src="/hitokage.png" alt="メインビジュアル" width={80} height={80} />
      </div>
    </div>
    <small className="absolute bottom-0 left-1/2 w-full text-[8px] text-center -translate-x-1/2">
      ©1995 GAME FREAK Inc.
    </small>
    <button
      onClick={() => localStorage.clear()}
      className="absolute right-0 bottom-0 px-1 text-[8px] rounded border border-gray-700"
    >
      データ削除
    </button>
  </div>
);