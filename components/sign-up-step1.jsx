import Button from '../components/button.jsx'
import Link from 'next/dist/client/link'
import styles from '/styles/components/signupone.module.css'
import SignUpTwo from '../components/sign-up-step2'
import {React, useState} from 'react'
export default function SignUpOne() {
    const [nextStep, setNextStep] = useState(false)
   const toggleView = () =>{
      setNextStep(nextStep => !nextStep)
    }
    const form = (
    <div className={styles.loginform}>
        <h1 className='title'>Skapa konto!</h1>
        <div className={styles.form}>
         <form>
         <div className={styles.inputcontainer}>
            <label>
              <input type="text" name="name" placeholder="Namn" />
            </label> 
          </div>
        <div className={styles.inputcontainer}>
            <label>
              <input type="text" name="lastname" placeholder="Efternamn" />
            </label> 
          </div>
        <div className={styles.inputcontainer}>
            <label>
              <input type="email" name="email" placeholder="E-mail"  />
            </label> 
          </div>
          <div className={styles.inputcontainer}>
           <label>
             <input type="text" name="password" placeholder="Lösenord" />
           </label>
          </div>
        <div className={styles.checkboxcontainer}>
          <input type="checkbox" id="terms" name="terms"></input>
          <label htmlFor="terms">Härmed godkänner jag WEMEs<Link href= '/auth/terms' passHref><a className={styles.link}>villkor</a></Link></label>
        </div>
          <div className={styles.buttoncontainer}>
          <Button><button onClick={toggleView}>Gå vidare</button></Button>
          </div>
         </form>
      </div>
	  </div>
    )

   


    return(
        <div>
             {nextStep ? <SignUpTwo /> : form}
        </div>
    )
}