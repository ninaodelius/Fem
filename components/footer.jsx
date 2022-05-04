import styles from '../styles/components/footer.module.css'
import Link from 'next/link'

export default function Footer(){
    return(
        <footer className={styles.footerSection}>
        <div className={styles.socialFooter}>
            <div className={styles.facebookLogo}><img src={'/images/facebook.png'}/><a href={'https://www.facebook.com'}>FÖLJ OSS PÅ FACEBOOK</a></div>
            <div className={styles.instagramLogo}><img src={'/images/instagram.png'}/><a href={'https://www.instagram.com'}>FÖLJ OSS PÅ INSTAGRAM</a></div>
            <div className={styles.emailLogo}><img src={'/images/email.png'}/>EMAILA OSS VID FRÅGOR</div>
            </div>
        </footer>
    )
}