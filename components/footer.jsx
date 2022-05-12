import styles from '../styles/components/footer.module.css'


export default function Footer(){
    return(
        <footer className={styles.footerSection}>
        <div className={styles.wemeLogo}>
        <img src={'/images/wemelogo.png'}/></div>

        <div className={styles.socialFooter}>
            <a href={'https://www.facebook.com'}>
            <div className={styles.facebookLogo}>
            <img src={'/images/facebook.png'}/>
            <div className={styles.socialMediaText}>
          <span> FÖLJ OSS PÅ FACEBOOK </span>
            </div>
            </div>
</a>

            <a href={'https://www.instagram.com'}>
            <div className={styles.instagramLogo}>
            <img src={'/images/instagram.png'}/>
            </div>
            <div className={styles.socialMediaText}>
          <span> FÖLJ OSS PÅ INSTAGRAM </span>
            </div>
            </a>

            <div className={styles.emailLogo}>
            <img src={'/images/email.png'}></img>
            </div>

            <div className={styles.socialMediaText}>
          <span>EMAILA OSS VID FRÅGOR </span>
            </div>
            </div>
        </footer>
    )
}