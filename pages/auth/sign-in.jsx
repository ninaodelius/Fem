import Button from '../../components/button'
import styles from '/styles/auth/signin.module.css'
import Link from 'next/link'

export default function SignIn(){
    return(
        <div className={styles.loginform}>
            <div className={styles.title1}>WEME</div>
                <div className={styles.form}>
                <form className={styles.form}>
                <div className={styles.inputcontainer}>
                    <label>
                    <input className={styles.input} type="email" name="email" placeholder="E-mail"/>
                    </label> 
                </div>
                <div className={styles.inputcontainer}>
                <label>
                    <input className={styles.input} type="text" name="password" placeholder="Lösenord" />
                </label>
                </div>
                <div className={styles.checkboxcontainer}>
                <input type="checkbox" id="remember" name="remember" value="Kom ihåg mig!"></input>
                <label for="remember"> Kom ihåg mig?</label>
                <p>Glömt lösenord?</p>
                </div>
                <div className={styles.buttoncontainer}>
                    <Button>Logga in</Button>
                </div>
                <Link href="/auth/sign-up"><a className={styles.link}>Bli medlem</a></Link>
                </form>
        </div>
</div>

    )
}