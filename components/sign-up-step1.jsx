import Button from '../components/button.jsx'
import Link from 'next/dist/client/link'
import styles from '/styles/components/signupone.module.css'
import React, { useState } from "react";
import SignUpTwo from "../components/sign-up-step2"
export default function SignUpOne() {
  
  const [nextStep, setNextStep] = useState(false)

  const form = (

  <div className='login-form'>
  <div className='title'>Skapa konto!</div>
  <div className='form'>
           <form>
           <div className='input-container'>
              <label>
                <input type="text" name="name" placeholder="Namn" />
              </label> 
            </div>
          <div className='input-container'>
              <label>
                <input type="text" name="lastname" placeholder="Efternamn" />
              </label> 
            </div>
          <div className='input-container'>
              <label>
                <input type="email" name="email" placeholder="E-mail"  />
              </label> 
            </div>
            <div className='input-container'>
             <label>
               <input type="text" name="password" placeholder="Lösenord" />
             </label>
            </div>
          <div className="checkbox-container">
            <input type="checkbox" id="terms" name="terms"></input>
            <label for="terms">Härmed godkänner jag WEMEs<Link href= '/auth/terms' passHref><a className={styles.link}>villkor</a></Link></label>
          </div>
            <div className='button-container'>
            <Button onClick={() => console.log('click')}>Gå vidare</Button>
            </div>
           </form>
        </div>
      </div>)

    return(
      <div>
      {nextStep ? <SignUpTwo /> : form}
      </div>
    )
}