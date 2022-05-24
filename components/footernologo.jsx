import styles from '../styles/components/footer.module.css'


export default function FooterNoLogo(){
    return(
        <div className={styles.footerSection}>

        <div className={styles.wemeLogo}>
        </div>

        <div className={styles.socialFooter}>

            <a href={'https://www.facebook.com'}>
            <div className={styles.facebookLogo}>
            <img src={'/images/facebook.png'}/>
            </div>
            <div className={styles.socialMediaText}>
           FÖLJ OSS<br></br>PÅ FACEBOOK
            </div>
            </a>

            <a href={'https://www.instagram.com'}>
            <div className={styles.instagramLogo}>
            <img src={'/images/instagram.png'}/>
            </div>
            <div className={styles.socialMediaText}>
          FÖLJ OSS<br></br>PÅ INSTAGRAM
            </div>
            </a>

            <div className={styles.emailLogo}>
            <img src={'/images/email.png'}></img>
            </div>
            <div className={styles.socialMediaText}>
          EMAILA OSS<br></br>VID FRÅGOR 
            </div>
            </div>

        </div>
    )
}