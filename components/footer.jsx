import styles from '../styles/components/footer.module.css'
import Link from 'next/link'

export default function Footer(){
    return(
        <footer className={styles.footerSection}>
        <div className={styles.wemeLogo}>
        <img src={'/images/wemelogo.png'}/></div>

        <div className={styles.socialFooter}>
            <div className={styles.facebookLogo}>
            <a href={'https://www.facebook.com'}>
            <img src={'/images/facebook.png'}/>
            </a></div>
            <div className={styles.socialMediaText}>
            FÖLJ OSS PÅ FACEBOOK
            </div>

            <div className={styles.instagramLogo}>
            <a href={'https://www.instagram.com'}>
            <img src={'/images/instagram.png'}/>
            </a></div>
            <div className={styles.socialMediaText}>
            FÖLJ OSS PÅ INSTAGRAM
            </div>

            <div className={styles.emailLogo}>
            <img src={'/images/email.png'}></img>
            </div>
            <div className={styles.socialMediaText}>
            EMAILA OSS VID FRÅGOR
            </div>
            </div>
        </footer>
    )
}