// <import styles
import styles from './layout.module.scss';
// import styles>

import Image from 'next/image'

export default function Layout({children}) {
    return (
        <div className={styles.layout}>
            {children}
            <Image src={'/images/wallpaper.jpg'} layout={'fill'} alt={"background"}/>
        </div>
    )
}
