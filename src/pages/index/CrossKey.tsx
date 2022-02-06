import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { isShowPictureBookState } from "src/component/state/isShowPictureBookAtom";
import { scrollYState } from "src/component/state/scrollYAtom";
import { storageDataLengthState } from "src/component/state/storageDataLengthAtom";

export const CrossKey = () => {
  const isShowPictureBook = useRecoilValue(isShowPictureBookState);

  const [scrollY, setScrollY] = useRecoilState(scrollYState);

  const [displayHeight, setDisplayHeight] = useState(0);

  const storageDataLength = useRecoilValue(storageDataLengthState);

  useEffect(() => {
    const calcDisplayHeight = storageDataLength * 208 + (storageDataLength - 1) * 8 + 16 - 240;

    setDisplayHeight(calcDisplayHeight < 0 ? 0 : calcDisplayHeight);
  }, [storageDataLength]);

  const scrollUp = () => {
    if (scrollY - 40 <= 0 || !isShowPictureBook) {
      setScrollY(0);
      return;
    }
    setScrollY(scrollY - 40);
  };
  const scrollDown = () => {
    if (scrollY + 40 >= displayHeight || !isShowPictureBook) {
      setScrollY(displayHeight);
      return;
    }
    setScrollY(scrollY + 40);
  };

  return (
    <div className="grid grid-cols-3">
      {["", "▲", "", "◀", "●", "▶", "", "▼", ""].map((item, index) => (
        <button
          key={index}
          className={`w-10 h-10
      ${
        index === 0
          ? "bg-transparent"
          : index === 2
          ? "bg-transparent"
          : index === 1
          ? "bg-gray-800 border text-gray-700 border-gray-800 flex justify-center items-center text-2xl active:shadow-none hover:cursor-pointer shadow-black"
          : index === 3
          ? "bg-gray-800 border text-gray-700 border-gray-800 flex justify-center items-center text-2xl active:shadow-none hover:cursor-pointer shadow-black"
          : index === 4
          ? "bg-gray-800 border text-gray-700 border-gray-800 flex justify-center items-center text-3xl"
          : index === 5
          ? "bg-gray-800 border text-gray-700 border-gray-800 flex justify-center items-center text-2xl active:shadow-none hover:cursor-pointer shadow-black"
          : index === 6
          ? "bg-transparent"
          : index === 7
          ? "bg-gray-800 border text-gray-700 border-gray-800 flex justify-center items-center text-2xl active:shadow-none hover:cursor-pointer shadow-black"
          : index === 8
          ? "bg-transparent"
          : "bg-gray-800 border border-gray-800"
      }
      `}
          onClick={index === 1 ? scrollUp : index === 7 ? scrollDown : (e) => e.preventDefault}
        >
          {item}
        </button>
      ))}
    </div>
  );
};
