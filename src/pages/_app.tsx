import "src/style/globals.css";

import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import type { GoogleTagManagerId } from "src/component/Gtm";
import GoogleTagManager from "src/component/Gtm";
import { googleTagManagerId } from "src/lib/gtm";
import { Seo } from "src/lib/Seo";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <GoogleTagManager
      googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
    />

    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
    <Seo />
  </>
);

export default App;
