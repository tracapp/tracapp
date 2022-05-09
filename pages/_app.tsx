import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
        <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
