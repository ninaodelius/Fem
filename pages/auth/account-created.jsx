import styles from '/styles/auth/signin.module.css'
import Button from '../../components/button'
import Link from 'next/dist/client/link'
import Footer from '../../components/footer'
export default function AccountCreated(){
    return(
        <div className={styles.loginform}>
        <img src={'/images/confetti.png'}/>
            <h1 className={styles.h1}>Konto skapat!</h1>
            <p>Grattis du har nu skapat ett konto! Du kan nu börja utvidga ditt nätverk, dela dina kunskaper och få hjälp av andra inom din branch.</p>
            <p>Uppdatera gärna din profil med profilbild och skriv en presentation i din bio för att gör den mer personlig. Glöm inte följa taggar av intresse!</p>
            <div className={styles.threeWomen}>
            <img src={'/images/Woman1.png'}/>
            <img src={'/images/Woman2.png'}/>
            <img src={'/images/Woman3.png'}/>
            </div>
            <Button><Link href='/auth/sign-in' passHref>Logga in</Link></Button>
            <Footer/>
        </div>
    )
}