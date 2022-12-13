import { googleTagManagerId } from "src/lib/gtm";

export const GtmNoScript = () => (
  <noscript
    dangerouslySetInnerHTML={{
      __html: `
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}"
                height="0"
                width="0"
                style="display:none;visibility:hidden"
              />`,
    }}
  />
);
