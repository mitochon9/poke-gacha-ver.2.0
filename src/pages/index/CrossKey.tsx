import { useCallback, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { gameBoyColorNumState } from "src/component/state/gameBoyColorNumAtom";
import { isPokedexState } from "src/component/state/isPokedexAtom";
import { scrollYState } from "src/component/state/scrollYAtom";
import { storageDataLengthState } from "src/component/state/storageDataLengthAtom";

export const CrossKey = () => {
  const isPokedex = useRecoilValue(isPokedexState);
  const [scrollY, setScrollY] = useRecoilState(scrollYState);
  const [displayHeight, setDisplayHeight] = useState(0);
  const storageDataLength = useRecoilValue(storageDataLengthState);

  const [gameBoyColorNum, setGameBoyColorNum] =
    useRecoilState(gameBoyColorNumState);

  useEffect(() => {
    // 見出しの高さ + 配列の数 * 要素一つあたりの高さ - 画面の高さ
    const calcDisplayHeight = 16 + storageDataLength * 216 - 240;
    setDisplayHeight(calcDisplayHeight < 0 ? 0 : calcDisplayHeight);
  }, [storageDataLength]);

  const scrollUp = useCallback(() => {
    // マイナスの数値になったら0をセット
    if (scrollY - 40 <= 0 || !isPokedex) {
      setScrollY(0);
      return;
    }
    setScrollY(scrollY - 40);
  }, [isPokedex, scrollY, setScrollY]);

  const scrollDown = useCallback(() => {
    // 要素の高さ以上にならないようにする
    if (scrollY + 40 >= displayHeight) {
      setScrollY(displayHeight);
      return;
    }
    setScrollY(scrollY + 40);
  }, [displayHeight, scrollY, setScrollY]);

  const colorNumUp = useCallback(() => {
    // number が3の場合は0にセット
    if (gameBoyColorNum === 3) {
      setGameBoyColorNum(0);
      return;
    }
    setGameBoyColorNum(gameBoyColorNum + 1);
  }, [gameBoyColorNum, setGameBoyColorNum]);

  const colorNumDown = useCallback(() => {
    // number が0の場合は3にセット
    if (gameBoyColorNum === 0) {
      setGameBoyColorNum(3);
      return;
    }
    setGameBoyColorNum(gameBoyColorNum - 1);
  }, [gameBoyColorNum, setGameBoyColorNum]);

  return (
    <div className="grid grid-cols-3">
      {["", "▲", "", "◀", "●", "▶", "", "▼", ""].map((item, index) => {
        return (
          <button
            key={index}
            className={`w-10 h-10
      ${
        index === 0 || index === 2 || index === 6 || index === 8
          ? "bg-transparent"
          : index === 1 ||
            index === 3 ||
            index === 4 ||
            index === 5 ||
            index === 7
          ? "bg-gray-800 border text-gray-700 border-gray-800 flex justify-center items-center text-2xl active:shadow-none hover:cursor-pointer shadow-black"
          : ""
      }
      `}
            onClick={
              index === 1
                ? scrollUp
                : index === 7
                ? scrollDown
                : index === 3
                ? colorNumDown
                : index === 5
                ? colorNumUp
                : (e) => {
                    return e.preventDefault;
                  }
            }
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};
