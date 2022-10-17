// <import styles
import Image from 'next/image';
import styles from './city.module.scss';
// import styles>

export default function City() {
    return (
        <div className={styles.city}>
            <div className={styles.mainBanner}>
                <div className={styles.image}>
                    <Image src={'/images/wallpaper.jpg'} width={'600px'} height={'600px'} alt='weather'/>
                </div>
                <span className={styles.header}>.openweathermap</span>
            </div>
            <div className={styles.searchAndDetails}>

            </div>
        </div>
    )
}
