import "../src/style/index.css";

import type { CustomAppPage } from "next/app";
import { memo } from "react";
import { RecoilRoot } from "recoil";
import { Seo } from "src/component/Seo";

const App: CustomAppPage = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <RecoilRoot>{getLayout(<Component {...pageProps} />)}</RecoilRoot>
      <Seo />
    </>
  );
};

export default memo(App);
