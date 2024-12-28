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
          id="meta-description"
          name="description"
          property="og:description"
          content="We provide web3 and fullstack development services and support, primarily focusing on cryptocurrency , blockchain technology , cyber security , web designing and technical support / consultation."
        />
        <meta
          name="keywords"
          content="Minetest, CryptechTest, Cryptocurrency, Play2earn, Voxelgame, TESTCoin, BTC, ETH, MRX, SEND, OHMC, SCC"
        />

        <meta id="og-title" property="og:title" content="CryptechTest" />

        <meta property="og:url" content="https://cryptech.services" />

        <meta property="og:image" content="/static/images/ctlogo.png" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
