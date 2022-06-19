import "src/style/globals.css";

import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { Seo } from "src/lib/Seo";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
    <Seo />
  </>
);

export default App;
