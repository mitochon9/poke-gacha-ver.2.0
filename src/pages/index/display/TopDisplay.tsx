/* eslint-disable react/jsx-handler-names */
import Image from "next/image";
import { useCallback, useState } from "react";

export const TopDisplay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isNotify, setIsNotify] = useState(false);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const deleteData = () => {
    localStorage.clear();
    closeModal();
    setIsNotify(true);
  };

  if (isOpen) {
    return (
      <div className="flex relative justify-center items-center w-auto h-60 md:h-80">
        <div>
          <h2 className="text-lg font-medium leading-6 text-gray-900">データ削除</h2>
          <div className="mt-2">
            <p className="text-sm text-gray-500">本当に削除しますか？</p>
          </div>

          <div className="mt-4 space-x-2">
            <button
              type="button"
              className="inline-flex justify-center py-2 px-4 text-sm font-medium text-gray-900 bg-gray-200 hover:bg-gray-200 rounded-md border border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
              onClick={deleteData}
            >
              削除する
            </button>
            <button
              type="button"
              className="inline-flex justify-center py-2 px-4 text-sm font-medium text-gray-900 bg-gray-200 hover:bg-gray-200 rounded-md border border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
              onClick={closeModal}
            >
              キャンセル
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isNotify) {
    return (
      <div className="flex relative justify-center items-center w-auto h-60 md:h-80">
        <div>
          <h2 className="text-lg font-medium leading-6 text-gray-900">データ削除</h2>
          <div className="mt-2">
            <p className="text-sm text-gray-500">削除しました</p>
          </div>

          <div className="mt-4 space-x-2">
            <button
              type="button"
              className="inline-flex justify-center py-2 px-4 text-sm font-medium text-gray-900 bg-gray-200 hover:bg-gray-200 rounded-md border border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
              onClick={() => setIsNotify(false)}
            >
              閉じる
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!isOpen) {
    return (
      <div className="relative pt-2 w-auto h-60 md:h-80">
        <h1 className="text-2xl font-extrabold text-center scale-y-125">ポケットモンスター</h1>
        <h2 className="mt-1 text-sm font-bold tracking-widest text-center">POCKET MONSTERS</h2>
        <h3 className="mt-1 text-xs font-bold text-center">Red Version</h3>
        <p className="text-xs flash">Press START or A button</p>
        <p className="text-[8px]">セレクトボタンでモンスター図鑑へ</p>
        <div className="flex justify-center items-end mt-2 md:mt-8">
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
          onClick={openModal}
          className="absolute right-0 bottom-0 px-1 text-[8px] rounded border border-gray-700"
        >
          データ削除
        </button>
      </div>
    );
  }
};
