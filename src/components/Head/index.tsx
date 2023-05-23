import Head from "next/head";

interface HeadDataProps {
  title: string;
}

export default function HeadData(props: HeadDataProps) {

  const { title } = props;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Oasis Marketplace: AI NFT Marketplace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo1.png" />
      </Head>
    </>
  )
}