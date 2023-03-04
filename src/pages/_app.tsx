import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// import localFont from 'next/font/local'

export default function App({ Component, pageProps }: AppProps) {
  // const inter = Inter({
  //   subsets: ['latin'],
  //   variable: '--font-inter',
  // })

  // const myFont = localFont({ src: '' })

  return (
    <main className={`font-sans`}>
      <Component {...pageProps} />{' '}
    </main>
  )
}
