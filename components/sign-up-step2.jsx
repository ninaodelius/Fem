import Button from '../components/button.jsx'
import Link from 'next/dist/client/link'
import styles from '/styles/components/signupone.module.css'
import SignUpThree from '../components/sign-up-step3'
import {React, useState} from 'react'
export default function SignUpTwo() {
    const [nextStep, setNextStep] = useState(false)

    const form = (
    <div className={styles.loginform}>
        <h1 className='title'>Mer om dig?</h1>
        <div className={styles.form}>
         <form>
         <div className={styles.inputcontainer}>
            <label>
              <input type="text" name="name" placeholder="Jobbtitel*" />
            </label> 
          </div>
        <div className={styles.inputcontainer}>
            <label>
              <input type="text" name="lastname" placeholder="Hur länge har du jobbat?*" />
            </label> 
          </div>
        <div className={styles.inputcontainer}>
            <label>
              <input type="email" name="email" placeholder="Ange minst två kompetenser*"  />
            </label> 
          </div>
          <div className={styles.inputcontainer}>
           <label>
             <input type="text" name="password" placeholder="taggar du vill följa #FIGMA" />
           </label>
          </div>
        <div className={styles.checkboxcontainer}>
          <input type="checkbox" id="terms" name="terms"></input>
          <label htmlFor="terms">Härmed godkänner jag WEMEs<Link href= '/auth/terms' passHref><a className={styles.link}>villkor</a></Link></label>
        </div>
          <div className={styles.buttoncontainer}>
          <button onClick={() => setNextStep(nextStep => !nextStep)}>Gå vidare</button>
          </div>
         </form>
      </div>
	  </div>
    )


    return(
        <div>
             {nextStep ? <SignUpThree /> : form}
        </div>
    )
}