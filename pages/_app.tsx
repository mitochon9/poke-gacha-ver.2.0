import "../src/style/index.css";

import type { CustomAppPage } from "next/app";
import Head from "next/head";
import { memo } from "react";
import { CookiesProvider } from "react-cookie";

const App: CustomAppPage = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <CookiesProvider>
        <Head>
          <title>ポケガチャ！</title>
        </Head>
        {getLayout(<Component {...pageProps} />)}
      </CookiesProvider>
    </>
  );
};

export default memo(App);
