import Head from "next/head";

export function DefaultHead(props: {
  title?: string;
  description?: string;
  imageUrl?: string;
  keywords?: string;
  url?: string;
}) {
  const {
    title = "HOME",
    description = "We provide web3 and fullstack development services and support, primarily focusing on cryptocurrency , blockchain technology , cyber security , web designing and technical support / consultation.",
    imageUrl = "/static/images/ctlogo.png",
    keywords = "Full-Stack Web Development, Web3 And DAPP Development, Solidity Development, Web Design, Graphic Design, Technical Consultation",
    url = "https://cryptech.services",
  } = props;

  return (
    <Head>
      <title>{`Cryptech Services | ${title}`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Dynamic Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:keywords" content={keywords} />

      {/* Dynamic Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:keywords" content={keywords} />
    </Head>
  );
}
