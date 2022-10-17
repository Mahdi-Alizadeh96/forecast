// <import next
import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
// import next>

// <import servises
import { getWeatherApi } from '../services/service';
// import servises>

// <import styles
import styles from './Home.module.scss';
// import styles>

const Home: NextPage = () => {

  const router = useRouter();

  const cityNames = [
    "madrid",
    "tehran",
    "london",
    "tokyo"
  ];

  async function selectCity(city: string) {
    const response = await getWeatherApi(city);

    if(response.type) {
      const data = response.data[0];
        router.push(`/city/${data.name}/${data.lat}/${data.lon}`)
    } else {
      alert("Some things went wrong");
    }
    
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Weather app</title>
        <meta name="description" content="open weather map" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Select your city</h1>
      <main className={styles.main}>
        {
          cityNames.map((item, index) => {
            return (
              <div key={index} className={styles.cityName} onClick={() => selectCity(item)} >
                {item}
              </div>
            )
          })
        }
      </main>
    </div>
  )
}

export default Home
