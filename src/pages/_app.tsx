import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Header from '@/components/common/Header';

    /* 👇 Dosis fonts used 
    It is also included in theme
    */
import '@fontsource/dosis';
import '@fontsource/dosis/700.css';
import '@fontsource/dosis/500.css';

const theme = extendTheme({
  colors: {
    navbar: {
      background: "#2f2f2f",
      oasis: "#ffffff",
      marketplace: '#415a63',
    },
    background: {
      color: "#2f2f2f",
    },
  },
  fonts: {
    heading: 'Dosis',
    body: 'Dosis'
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps}/>
    </ChakraProvider>
  )
}


    