import { useCallback, useEffect, useState } from "react";

export const Speaker = () => {
  const [volumeHole, setVolumeHole] = useState<string[]>([]);

  // 60個の空文字の配列を作る
  const createVolumeHole = useCallback(() => {
    for (let index = 0; index < 60; index++) {
      setVolumeHole((volumeHole) => [...volumeHole, ""]);
    }
  }, []);

  // 画面表示時に空文字の配列を作る関数を実行
  useEffect(() => {
    createVolumeHole();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="absolute right-3 -bottom-2 -rotate-12">
      <div className="grid grid-cols-8 grid-rows-[8] gap-[2px] w-20 h-20">
        {volumeHole.map((item, index) => (
          <div
            key={index}
            className={`w-1 h-1 rounded-full bg-gray-600 ${
              index === 0 || index === 54
                ? // 左上角、左下角の場合
                  "col-start-2"
                : index === 5 || index === 59
                ? // 右上角、左下角の場合
                  "col-span-2"
                : // それ以外
                  "col-span-1"
            }`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};
