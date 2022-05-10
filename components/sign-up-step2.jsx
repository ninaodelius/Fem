import Button from '../components/button.jsx'
import Link from 'next/dist/client/link'
import styles from '/styles/components/signupone.module.css'
import SignUpThree from '../components/sign-up-step3'
import {React, useState} from 'react'

export default function SignUpTwo() {
    const [nextStep, setNextStep] = useState(false)

    const form = (
    <div className={styles.loginform}>
        <h1 className={styles.title1}>Mer om dig!</h1>
        <div className={styles.form}>
         <form>
         <div className={styles.inputcontainer}>
            <label>
              <input type="text" id={styles.input} placeholder="Jobbtitel*" />
            </label> 
          </div>
        <div className={styles.inputcontainer}>
            <label>
              <input type="text" id={styles.input} placeholder="Hur länge har du jobbat?*" />
            </label> 
          </div>          
          <p>Ange minst 2 komptenser</p>
        <div className={styles.inputcontainer}>
            <label>
              <input type="email" id={styles.input} placeholder="Ange minst två kompetenser*"  />
            </label> 
          </div>
          <p>Taggar du vill följa</p>
          <div className={styles.inputcontainer}>
           <label>
             <input type="text" id={styles.input} placeholder="taggar du vill följa #FIGMA" />
           </label>
          </div>

          <div className={styles.buttoncontainer}>
          <Button><div onClick={() => setNextStep(nextStep => !nextStep)}>Nästa</div></Button>
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