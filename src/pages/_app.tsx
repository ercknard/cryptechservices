import type { AppProps } from "next/app";
import Head from "next/head";
import "@/styles/globals.css";
import ThemeProvider from "@/theme/themeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta
          name="description"
          id="og:description"
          property="og:description"
          content="We provide web3 and fullstack development services and support, primarily focusing on cryptocurrency , blockchain technology , cyber security , web designing and technical support / consultation."
        />
        <meta
          name="keywords"
          id="og:keywords"
          property="og:keywords"
          content="Full-Stack Web Development, Web3 And DAPP Development, Solidity Development, Web Design, Graphic Design, Technical Consultation"
        />

        <meta id="og-title" property="og:title" content="Cryptech.Services" />

        <meta
          property="og:url"
          id="og:url"
          content="https://cryptech.services"
        />

        <meta
          property="og:image"
          id="og:image"
          content="/static/images/ctlogo.png"
        />

        <meta property="og:type" content="website" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
