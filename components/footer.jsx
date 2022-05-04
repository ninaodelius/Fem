import styles from '../styles/components/footer.module.css'
import Link from 'next/link'

export default function Footer(){
    return(
        <footer className={styles.footerSection}>
        <div className={styles.wemeLogo}><img src={'/images/wemelogo.png'}/></div>
        <div className={styles.socialFooter}>
            <div className={styles.facebookLogo}><a href={'https://www.facebook.com'}><img src={'/images/facebook.png'}/>FÖLJ OSS PÅ FACEBOOK</a></div>
            <div className={styles.instagramLogo}><a href={'https://www.instagram.com'}><img src={'/images/instagram.png'}/>FÖLJ OSS PÅ INSTAGRAM</a></div>
            <div className={styles.emailLogo}><img src={'/images/email.png'}/>EMAILA OSS VID FRÅGOR</div>
            </div>
        </footer>
    )
}