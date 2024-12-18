import Head from "next/head";

export function DefaultHead(props: { title?: string }) {
  const { title = " HOME " } = props;

  return (
    <Head>
      <title>{`Cryptech Services | ${title}`}</title>
    </Head>
  );
}
