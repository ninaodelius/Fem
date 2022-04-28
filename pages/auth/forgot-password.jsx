import styles from '/styles/auth/forgotpassword.module.css'
import Button from '../../components/button'
export default function SignIn(){
    return(
        <div>
            <h1 className={styles.h1}>Glömt lösenordet?</h1>
            <p>Ange den e-postadress som du använde för att skapa ditt konto, så skickar vi dig en länk för att återställa lösenordet.</p>
            <p>Om mailet inte verkar komma fram, kontrollera att det inte hamnat bland din skräppost.</p>
            <form className={styles.form}>
                <div className={styles.inputcontainer}>
                    <label>
                    <input className={styles.input} type="email" name="email" placeholder="E-mail"/>
                    </label> 
                </div>
                <Button>Skicka</Button>
            </form>
            
        </div>
    )
}