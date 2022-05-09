import Button from '../components/button.jsx'
import Link from 'next/dist/client/link'
import styles from '/styles/components/signupone.module.css'
import SignUpTwo from '../components/sign-up-step2'
import {React, useState} from 'react'
import * as yup from 'yup';
// import { userForm } from './Validations/signUpOneValidation'

export default function SignUpOne() {
    const [nextStep, setNextStep] = useState(false)
   const toggleView = () =>{
      setNextStep(nextStep => !nextStep)
    }

    const userForm = yup.object().shape({
      name: yup.string().min(2).required(),
      lastname: yup.string().min(2).required(),
      email: yup.string().email().required(),
      password: yup.string().min(4).max(10).required()
    
    })

    const createUser = async(event) => {
      event.preventDefault()
      let formData = {
        name: event.target[0].value,
        lastname: event.target[1].value,
        email: event.target[2].value,
        password: event.target[3].value,
      }
      const isValid = await userForm.isValid(formData)
    }

    const form = (
    <div className={styles.loginform}>
        <h1 className='title'>Skapa konto!</h1>
        <div className={styles.form}>
         <form onSubmit={createUser}>
         <div className={styles.inputcontainer}>
            <label>
              <input type="text" id={styles.input} placeholder="Namn" />
            </label> 
          </div>
        <div className={styles.inputcontainer}>
            <label>
              <input type="text" id={styles.input} placeholder="Efternamn" />
            </label> 
          </div>
        <div className={styles.inputcontainer}>
            <label>
              <input type="email" id={styles.input} placeholder="E-mail"  />
            </label> 
          </div>
          <div className={styles.inputcontainer}>
           <label>
             <input type="text" id={styles.input} placeholder="Lösenord" />
           </label>
          </div>
        <div className={styles.checkboxcontainer}>
          <input type="checkbox" id="terms" name="terms"></input>
          <label htmlFor="terms">Härmed godkänner jag WEMEs <Link href= '/auth/terms' passHref><a className={styles.link}>villkor.</a></Link></label>
        </div>
          <div className={styles.buttoncontainer}>
          <Button><div onClick={toggleView} type="submit">Skapa konto</div></Button>
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