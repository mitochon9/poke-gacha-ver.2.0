import Document, { Head, Html, Main, NextScript } from "next/document";
import type { GoogleTagManagerId } from "src/component/Gtm";
import GoogleTagManager from "src/component/Gtm";
import { GtmNoScript } from "src/component/GtmNoScript";
import { googleTagManagerId } from "src/lib/gtm";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          <GoogleTagManager
            googleTagManagerId={googleTagManagerId as GoogleTagManagerId}
          />

          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/favicons/safari-pinned-tab.svg"
            color="#5bbad5"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body>
          <GtmNoScript />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
