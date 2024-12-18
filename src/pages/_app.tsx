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
          content="CryptechTest SMP Server: Community-driven Minetest Game with endless possibilities. Join us and embark on a journey of creativity, collaboration, and adventure in our immersive world."
        />
        <meta
          name="keywords"
          content="Minetest, CryptechTest, Cryptocurrency, Play2earn, Voxelgame, TESTCoin, BTC, ETH, MRX, SEND, OHMC, SCC"
        />

        <meta id="og-title" property="og:title" content="CryptechTest" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
