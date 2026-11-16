import { Html, Head, Main, NextScript } from "next/document";

// Analytics (GTM + Google Ads tag) are loaded from pages/_app.js with next/script (lazyOnload),
// so they no longer sit in <head> competing with the first render.
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MJ7N476N"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
