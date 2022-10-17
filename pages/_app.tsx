// <import styles
import '../styles/globals.scss'
// import styles>

// <import next
import type { AppProps } from 'next/app'
// import next>

// <import layout
import Layout from '../layout/layout'
// import layout>

function MyApp({ Component, pageProps }: AppProps) {
  return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
          )
}

export default MyApp
