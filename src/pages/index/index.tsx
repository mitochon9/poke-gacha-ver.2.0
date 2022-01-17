import Image from "next/image";
import type { VFC } from "react";
import { useEffect } from "react";
import { useCallback, useState } from "react";
import { useCookies } from "react-cookie";
import { ShowPokemon } from "src/pages/ShowPokemon";

export const Index: VFC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimation, setIsAnimation] = useState(false);

  const [cookies, setCookie] = useCookies(["pokemonId"]);

  const [pokemonId, setPokemonId] = useState<number[]>(cookies.pokemonId);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleLotteryNumber = useCallback(
    (min: number, max: number) => {
      setIsAnimation(true);
      const lotteryNumber = Math.floor(Math.random() * (max - min) + min);
      const timer = setTimeout(() => {
        setIsAnimation(false);
        setIsOpen(true);
        setPokemonId(() => [...pokemonId, lotteryNumber]);
      }, 2000);
      return () => clearTimeout(timer);
    },
    [pokemonId]
  );

  useEffect(() => {
    setCookie("pokemonId", pokemonId);
  }, [pokemonId, setCookie]);

  return (
    <div className="relative">
      {/* 画面部分 */}
      <div className="relative mx-2 mt-4 font-dot text-center bg-amber-50 rounded-2xl border-x-[56px] border-t-[36px] border-b-[56px] border-gray-700 md:mx-8 md:mt-8">
        {isAnimation ? (
          <div className="flex justify-center items-center w-auto h-60 md:h-80">
            <Image src="/monsterBall.png" alt="モンスターボール" width={60} height={60} className="ball-animation" />
          </div>
        ) : !isOpen ? (
          <div className="relative pt-4 w-auto h-60 md:h-80">
            <h1 className="text-2xl font-extrabold text-center scale-y-125">ポケットモンスター</h1>
            <h2 className="mt-4 text-sm font-bold tracking-widest text-center">POCKET MONSTERS</h2>
            <h3 className="mt-2 text-xs font-bold text-center flash">Red Version</h3>
            <div className="flex justify-center items-end md:mt-8">
              <div className="-mr-5">
                <Image src="/red.png" alt="メインビジュアル" width={120} height={120} />
              </div>
              <div className="-mb-2 -ml-5">
                <Image src="/hitokage.png" alt="メインビジュアル" width={100} height={100} />
              </div>
            </div>
            <small className="absolute bottom-0 left-1/2 w-full text-[8px] text-center -translate-x-1/2">
              ©1995 GAME FREAK Inc.
            </small>
          </div>
        ) : (
          <div>
            <ShowPokemon pokemonId={pokemonId} />
          </div>
        )}
      </div>

      {/* 電源部分 */}
      <div className="absolute top-28 left-[18px] text-[6px] text-gray-400 md:left-11">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <div className="-ml-2 w-4 h-4 rounded-full border-2 border-y-transparent border-r-gray-400 border-l-transparent"></div>
          <div className="-ml-2 w-4 h-4 rounded-full border-2 border-y-transparent border-r-gray-400 border-l-transparent"></div>
          <div className="-ml-2 w-4 h-4 rounded-full border-2 border-y-transparent border-r-gray-400 border-l-transparent"></div>
        </div>
        <div className="mt-1 italic">POWER</div>
      </div>

      {/* 画面下のロゴ */}
      <div className="flex relative z-10 justify-center -mt-11 text-2xl italic font-bold text-gray-400">
        <span className="mr-2">GAME BOY</span>
        <div className="mt-1 font-karam">
          <span className="text-red-500">C</span>
          <span className="text-purple-400">O</span>
          <span className="text-green-300">L</span>
          <span className="text-yellow-200">O</span>
          <span className="text-blue-400">R</span>
        </div>
      </div>

      {/* Nintendo logo */}
      <div className="mt-6 text-center">
        <div className="inline-block px-2 italic font-bold tracking-widest text-gray-300 rounded-full border-2 border-gray-300">
          Nintendo
        </div>
      </div>

      {/* cross key */}
      <div className="flex justify-between items-center mx-8 mt-8">
        {/* <div className="col-span-2">
          <Image src="/crossButton.png" alt="十字キー" width={60} height={60} />
        </div> */}
        <div className="grid grid-cols-3">
          {["", "▲", "", "◀", "●", "▶", "", "▼", ""].map((item, index) => (
            <div
              key={index}
              className={`w-8 h-8
            ${
              index === 0
                ? "bg-transparent"
                : index === 2
                ? "bg-transparent"
                : index === 1
                ? "bg-gray-700 border text-gray-600 border-gray-700 flex justify-center items-center text-2xl shadow-sm active:shadow-none hover:cursor-pointer shadow-black"
                : index === 3
                ? "bg-gray-700 border text-gray-600 border-gray-700 flex justify-center items-center text-2xl shadow-sm active:shadow-none hover:cursor-pointer shadow-black"
                : index === 4
                ? "bg-gray-700 border text-gray-600 border-gray-700 flex justify-center items-center text-3xl"
                : index === 5
                ? "bg-gray-700 border text-gray-600 border-gray-700 flex justify-center items-center text-2xl shadow-sm active:shadow-none hover:cursor-pointer shadow-black"
                : index === 6
                ? "bg-transparent"
                : index === 7
                ? "bg-gray-700 border text-gray-600 border-gray-700 flex justify-center items-center text-2xl shadow-sm active:shadow-none hover:cursor-pointer shadow-black"
                : index === 8
                ? "bg-transparent"
                : "bg-gray-700 border border-gray-700"
            }
            `}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="col-span-2"></div>

        {/* A B button */}
        <div className="flex col-span-2 gap-x-4">
          <button
            type="button"
            onClick={closeModal}
            className="flex justify-center items-center mt-4 w-14 h-14 text-2xl text-gray-600 bg-gray-700 rounded-full shadow-sm active:shadow-none shadow-black"
          >
            B
          </button>
          <button
            type="button"
            disabled={isAnimation}
            onClick={() => handleLotteryNumber(1, 151)}
            className="flex justify-center items-center w-14 h-14 text-2xl text-gray-600 bg-gray-700 rounded-full shadow-sm active:shadow-none shadow-black"
          >
            A
          </button>
        </div>
      </div>

      {/* start select */}
      <div className="flex gap-x-6 justify-center mt-16">
        <div className="w-12 h-4 bg-gray-600 rounded-full shadow-sm active:shadow-none shadow-black cursor-pointer"></div>
        <button
          type="button"
          disabled={isAnimation}
          onClick={() => handleLotteryNumber(1, 151)}
          className="w-12 h-4 bg-gray-600 rounded-full shadow-sm active:shadow-none shadow-black cursor-pointer"
        ></button>
      </div>

      <div className="relative">
        <div className="flex gap-x-8 justify-center mt-1 text-xs text-gray-300">
          <div>SELECT</div>
          <div>START</div>
        </div>

        {/* speaker */}
        <div className="absolute right-3 -bottom-10 -rotate-12">
          <div className="grid grid-cols-8 grid-rows-[8] gap-[2px] w-20 h-20">
            {volumeHole.map((item, index) => (
              <div
                key={index}
                className={`w-1 h-1 rounded-full bg-gray-600 ${
                  index === 0
                    ? "col-start-2"
                    : index === 5
                    ? "col-span-2"
                    : index === 54
                    ? "col-start-2"
                    : index === 59
                    ? "col-span-2"
                    : "col-span-1"
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const volumeHole = [
  // "",
  // "",
  // "",
  // "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];
