// <import styles
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getWeatherApi } from '../../services/service';
import styles from './city.module.scss';
// import styles>

export default function City({resData}) {

    const date = new Date();

    console.log(resData);

    const {name, weather, main} = resData;

    const [cityData ,setCitryData] = useState(null);

    async function getCityApi() {

        const response = await getWeatherApi("madrid");

        if(response.type) {
            setCitryData(response.data);
        };
        
    };
    useEffect(() => {
        getCityApi();
    },[]);

    return (
        <div className={styles.city}>
            <div className={styles.mainBanner}>
                <div className={styles.image}>
                    <Image src={'/images/wallpaper.jpg'} width={'600px'} height={'600px'} alt='weather'/>
                </div>
                <span className={styles.header}>.openweathermap</span>
                <div className={styles.displayCityDetails}>
                    temp :
                    <h3>{main.temp}</h3>
                    <div className={styles.cityAndDate}>
                        <h4>{name}</h4>
                        <span>{date.toString().slice(0, 15)}</span>
                    </div>
                    <span>{weather[0].main}</span>
                </div>
            </div>
            <div className={styles.searchAndDetails}>
                <input type="search" placeholder='Another Location ...' />
                <div className={styles.weatherDetails}>
                    <h5>Weather Details</h5>
                    <div className={styles.details}>
                        <div className={styles.item}>
                            <span>cloud</span>
                            <span>86</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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

