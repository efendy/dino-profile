import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  const GID = "G-6DYMV8Q0NV";
  return (
    <Html lang="en">
      <Head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </Head>
      <body className="antialiased bg-white min-h-full text-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
