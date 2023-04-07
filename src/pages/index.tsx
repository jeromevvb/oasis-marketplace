import Head from 'next/head';
import Main from './main';

export default function Home() {
  return (
    <>
      <Head>
        <title>Oasis Marketplace</title>
        <meta name='description' content='Oasis Marketplace: AI NFT Marketplace' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo1.png'/>
      </Head>
      <Main />
    </>
  )
}
