import "../src/style/index.css";

import type { CustomAppPage } from "next/app";
import Head from "next/head";
import { memo } from "react";
import { RecoilRoot } from "recoil";
import { Seo } from "src/component/Seo";

const App: CustomAppPage = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <RecoilRoot>
        <Head>
          <title>ポケガチャ！</title>
        </Head>
        {getLayout(<Component {...pageProps} />)}
      </RecoilRoot>
      <Seo />
    </>
  );
};

export default memo(App);
