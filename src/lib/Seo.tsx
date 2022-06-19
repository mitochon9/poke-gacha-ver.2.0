import { DefaultSeo } from "next-seo";

export const Seo = () => (
  <DefaultSeo
    defaultTitle="ポケガチャ！"
    description="懐かしのポケモンをガチャガチャ！"
    canonical="https://poke-gacha-ver-2-0.vercel.app/"
    openGraph={{
      url: "https://poke-gacha-ver-2-0.vercel.app/",
      type: "website",
      title: "ポケガチャ！",
      description: "懐かしのポケモンをガチャガチャ！",
      images: [
        {
          url: "https://poke-gacha-ver-2-0.vercel.app/hitokage.png",
          width: 800,
          height: 600,
          alt: "OGP画像",
        },
      ],
      // eslint-disable-next-line @typescript-eslint/naming-convention
      site_name: "ポケガチャ！",
    }}
    twitter={{
      handle: "@mitochon_9",
      site: "https://poke-gacha-ver-2-0.vercel.app/",
      cardType: "summary_large_image",
    }}
  />
);
