import "src/style/globals.css";

import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <RecoilRoot>
    <Component {...pageProps} />
  </RecoilRoot>
);

export default App;
