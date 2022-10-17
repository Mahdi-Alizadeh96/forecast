import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from './Home.module.scss'

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Weather app</title>
        <meta name="description" content="open weather map" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        
      </main>
    </div>
  )
}

export default Home
