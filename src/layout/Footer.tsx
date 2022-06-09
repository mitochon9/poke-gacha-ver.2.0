import type { VFC } from "react";

/**
 * @package
 */
export const Footer: VFC = () => {
  return (
    <div className="mt-10 text-xs text-gray-400">
      <div className="text-center">©2022 たかはし</div>
      <div className="text-center">
        当サイト「ポケガチャ！」は、株式会社ポケモンや任天堂、その他各企業様とは一切関係ありません。
        ポケットモンスター・ポケモン・Pokemonは任天堂・クリーチャーズ・ゲームフリークの登録商標です。
      </div>
    </div>
  );
};
