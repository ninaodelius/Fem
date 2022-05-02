import styles from '/styles/auth/forgotpassword.module.css'
import Button from '../../components/button'
import Link from 'next/dist/client/link'
export default function AccountCreated(){
    return(
        <div>
            <h1 className={styles.h1}>konto skapat</h1>
            <p>Grattis du har nu skapat ett konto! Du kan nu börja utvidga ditt nätverk, dela dina kunskaper och få hjälp av andra inom din branch.</p>
            <p>Uppdatera gärna din profil med profilbild och skriv en presentation i din bio för att gör den mer personlig. Glöm inte följa taggar av intresse!</p>
    
            <Button><Link href='/auth/sign-in' passHref>Sign in</Link></Button>
            
        </div>
    )
}