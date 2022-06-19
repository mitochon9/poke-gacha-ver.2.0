import type { FooterProps } from "./Footer.type";

export const baseId = "molecule-footer";

export const Footer: React.FC<FooterProps> = () => (
  <>
    <footer className="mt-10 text-xs text-gray-400">
      <small data-testid={`${baseId}-copy`} className="block text-center">
        ©2021 たかはし
      </small>
      <p className="text-center">
        当サイト「ポケガチャ！」は、株式会社ポケモンや任天堂、その他各企業様とは一切関係ありません。
        ポケットモンスター・ポケモン・Pokemonは任天堂・クリーチャーズ・ゲームフリークの登録商標です。
      </p>
    </footer>
  </>
);
