/* eslint-disable react/jsx-handler-names */
import Image from "next/image";
import { useCallback, useEffect } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { isDeleteNotifyState } from "src/component/state/isDeleteNotifyAtom";
import { isDeleteOpenState } from "src/component/state/isDeleteOpenAtom";
import { scrollYState } from "src/component/state/scrollYAtom";

export const TopDisplay = () => {
  const [isDeleteOpen, setIsDeleteOpen] = useRecoilState(isDeleteOpenState);
  const [isDeleteNotify, setIsDeleteNotify] = useRecoilState(isDeleteNotifyState);

  const openModal = useCallback(() => {
    setIsDeleteOpen(true);
  }, [setIsDeleteOpen]);
  const closeModal = useCallback(() => {
    setIsDeleteOpen(false);
  }, [setIsDeleteOpen]);

  const deleteData = () => {
    localStorage.clear();
    closeModal();
    setIsDeleteNotify(true);
  };

  const setScrollY = useSetRecoilState(scrollYState);

  useEffect(() => {
    setScrollY(0);
  }, [setScrollY]);

  if (isDeleteOpen) {
    return (
      <div className="flex relative justify-center items-center w-auto h-60 md:h-80">
        <div>
          <h2 className="text-lg font-medium leading-6 text-gray-900">データ削除</h2>
          <div className="mt-2">
            <p className="text-sm text-gray-500">本当に削除しますか？</p>
          </div>

          <div className="flex mt-4 space-x-2">
            <button
              type="button"
              className="inline-flex justify-center items-center py-2 px-4 text-sm font-medium text-gray-900 bg-gray-200 hover:bg-gray-200 rounded-md border border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
              onClick={deleteData}
            >
              <span className="flex justify-center items-center mr-1 w-5 h-5 text-xs rounded-full border border-gray-600">
                A
              </span>
              <span className="text-xs">削除する</span>
            </button>
            <button
              type="button"
              className="inline-flex justify-center items-center py-2 px-4 text-sm font-medium text-gray-900 bg-gray-200 hover:bg-gray-200 rounded-md border border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
              onClick={closeModal}
            >
              <span className="flex justify-center items-center mr-1 w-5 h-5 text-xs rounded-full border border-gray-600">
                B
              </span>
              <span className="text-xs">キャンセル</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isDeleteNotify) {
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
              onClick={() => setIsDeleteNotify(false)}
            >
              <span className="flex justify-center items-center mr-1 w-5 h-5 text-xs rounded-full border border-gray-600">
                A
              </span>
              <span className="text-xs">閉じる</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative pt-2 w-auto h-60 md:h-80">
      <h1 className="text-2xl font-extrabold text-center scale-y-125">ポケットモンスター</h1>
      <h2 className="mt-1 text-sm font-bold tracking-widest text-center">POCKET MONSTERS</h2>
      <h3 className="mt-1 text-xs font-bold text-center">Red Version</h3>
      <p className="text-xs flash">Press A button</p>
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

      <span className="absolute right-2 bottom-4 text-[10px]">Press START</span>
      <button onClick={openModal} className="absolute right-0 bottom-0 px-1 text-xs rounded border border-gray-700">
        データ削除
      </button>
    </div>
  );
};
