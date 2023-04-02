import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// 👇 Dosis fonts 
    
import '@fontsource/dosis';
import '@fontsource/dosis/700.css';
import '@fontsource/dosis/500.css';

// 👇 Themes 

const theme = extendTheme({
  colors: {
    navbar: {
      background: "#2f2f2f",
      oasis: "#ffffff",
      marketplace: '#415a63',
    },

    background: {
      color: "#2f2f2f",
      logo: "#CBD5E0"
    },

    button: {
      first: "#415a63",
      hoverFirst: "#3182CE",
      second: "#C26D80",
      hoverSecond: "#F54970"
    },

    logo: {
      twitter: "#1DA1F2",
      youtube: "#FF0000",
      instagram: "#C13584"
    }
  },
  
  fonts: {
    heading: 'Dosis',
    body: 'Dosis'
  },
  
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}


    