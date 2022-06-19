export const pagesPath = {
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath

export const staticPath = {
  favicon_ico: '/favicon.ico',
  favicons: {
    android_chrome_192x192_png: '/favicons/android-chrome-192x192.png',
    android_chrome_512x512_png: '/favicons/android-chrome-512x512.png',
    android_chrome_96x96_png: '/favicons/android-chrome-96x96.png',
    apple_touch_icon_png: '/favicons/apple-touch-icon.png',
    browserconfig_xml: '/favicons/browserconfig.xml',
    favicon_16x16_png: '/favicons/favicon-16x16.png',
    favicon_32x32_png: '/favicons/favicon-32x32.png',
    favicon_ico: '/favicons/favicon.ico',
    mstile_150x150_png: '/favicons/mstile-150x150.png',
    safari_pinned_tab_svg: '/favicons/safari-pinned-tab.svg',
    site_webmanifest: '/favicons/site.webmanifest'
  },
  img: {
    hitokage_png: '/img/hitokage.png',
    monsterBall_png: '/img/monsterBall.png',
    red_png: '/img/red.png'
  }
} as const

export type StaticPath = typeof staticPath
