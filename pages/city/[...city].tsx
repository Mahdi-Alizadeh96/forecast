// <import styles
import styles from './city.module.scss';
// import styles>

// <import react
import { useState } from 'react';
// import react>

// <import next
import Image from 'next/image';
import { useRouter } from 'next/router';
// import next>

// <import services
import { getWeatherApi } from '../../services/service';
import Head from 'next/head';
// import services>

export default function City({resData}) {

    const date = new Date();
    
    const router = useRouter();

    const {name, weather, main, clouds, wind} = resData;

    // <search result

    const [searchInput, setSearchInput] = useState('')

    async function getCityApi() {

        if(searchInput) {
            const response = await getWeatherApi(searchInput);
    
            if(response.type) {
                if(response.data.length !== 0) {
                    const data = response.data[0];
                    router.push(`/city/${data.name}/${data.lat}/${data.lon}`);
                } else {
                    alert('Invalid city name');

                }
            }
        }
        
    };

    function handleSubmitSearch(e) {
        if (e.keyCode == 13) {
            getCityApi()
        }
    }
    
    // search result>

    return (
        <>
            <Head>
                <title>{name}</title>
                <meta name="description" content="open weather map"/>
            </Head>
            <div className={styles.city}>
                <span className={styles.homePage} onClick={() => router.push('/')} >Home Page</span>
                <div className={styles.content}>
                    <div className={styles.mainBanner}>
                        <div className={styles.image}>
                            <Image src={'/images/wallpaper.jpg'} width={'600px'} height={'600px'} quality={100} alt='weather'/>
                        </div>
                        <span className={styles.header}>.openweathermap</span>
                        <div className={styles.displayCityDetails}>
                            <div className={styles.temp}>
                                <span>
                                    temp :
                                </span>
                                <h3>{main.temp}</h3>
                            </div>
                            <div className={styles.cityAndDate}>
                                <h4>{name}</h4>
                                <span>{date.toString().slice(0, 15)}</span>
                            </div>
                            <span>{weather[0].main}</span>
                        </div>
                    </div>
                    <div className={styles.searchAndDetails}>
                        <input type="search" placeholder='Another Location (press enter)' onKeyDown={handleSubmitSearch}  onChange={(e) => setSearchInput(e.target.value)} />
                        <div className={styles.weatherDetails}>
                            <h5>Weather Details</h5>
                            <div className={styles.details}>
                                <div className={styles.item}>
                                    <span>cloud</span>
                                    <span>{clouds.all}</span>
                                </div>
                                <div className={styles.item}>
                                    <span>humidity</span>
                                    <span>{main.humidity}</span>
                                </div>
                                <div className={styles.item}>
                                    <span>wind speed</span>
                                    <span>{wind.speed}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};

export const getServerSideProps = async (context) => {

    const cityDataprop = context.params.city;

    try {
        const getData = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?lat=${cityDataprop[1]}&lon=${cityDataprop[2]}&appid=b03f14f09010d27c5651d9690562cbe0`,
            {
                method:"GET",
                headers : {
                    "accept": "application/json",
                }
            }
        );

        const resData = await getData.json();
        
        return {
            props: {
                resData : resData
            }
        }
    } catch (error) {
        return {
            props: {
                error
            }
        };
    }

}

