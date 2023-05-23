import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Layout from '@/components/Layout';

/* Dosis fonts */
import '@fontsource/dosis';
import '@fontsource/dosis/700.css';
import '@fontsource/dosis/500.css';

/* Themes */
const theme = extendTheme({

  fonts: {
    heading: 'Dosis',
    body: 'Dosis'
  },

  colors: {
    "gray": {
      "50": "#F2F2F2",
      "100": "#DBDBDB",
      "200": "#C4C4C4",
      "300": "#ADADAD",
      "400": "#969696",
      "500": "#808080",
      "600": "#666666",
      "700": "#4D4D4D",
      "800": "#333333",
      "900": "#1A1A1A"
    },

    "pink": {
      "50": "#FCE9EE",
      "100": "#F7C0D1",
      "200": "#F198B3",
      "300": "#EC6F95",
      "400": "#E64777",
      "500": "#E11E59",
      "600": "#B41847",
      "700": "#871236",
      "800": "#5A0C24",
      "900": "#2D0612"
    },
    "yellow": {
      "50": "#FEF9E6",
      "100": "#FEEEB9",
      "200": "#FDE38C",
      "300": "#FCD75F",
      "400": "#FBCC32",
      "500": "#FAC105",
      "600": "#C89A04",
      "700": "#967403",
      "800": "#644D02",
      "900": "#322701"
    },

    "red": {
      "50": "#FFE5E5",
      "100": "#FFB8B8",
      "200": "#FF8A8A",
      "300": "#FF5C5C",
      "400": "#FF2E2E",
      "500": "#FF0000",
      "600": "#CC0000",
      "700": "#990000",
      "800": "#660000",
      "900": "#330000"
    },

     "blue": {
      "50": "#E7F5FE",
      "100": "#BBE3FB",
      "200": "#90D1F9",
      "300": "#65BFF6",
      "400": "#39ADF4",
      "500": "#0E9BF1",
      "600": "#0B7CC1",
      "700": "#085D91",
      "800": "#063E60",
      "900": "#031F30"
    },
     
  },

  })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}


    