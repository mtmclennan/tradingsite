import Layout from "../components/layouts/Layout";
import React from "react";
import { Inter } from "next/font/google";
import "../styles/main.scss";
import Script from "next/script";
import type { AppProps } from "next/app";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}');
        `}
      </Script>
      <React.StrictMode>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </React.StrictMode>
    </>
  );
}

export default MyApp;
