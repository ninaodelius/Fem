import Button from '../components/button.jsx'
import Link from 'next/dist/client/link'
import { useState } from "react"

export default function SignUpOne() {
  const initialValues= {name:"",lastname:"",email:"",password:""};
  const [formValues,setFormValues] = useState(initialValues);

  const handleChange = (e) =>{
    console.log(e.target)

  }

    return(
        <div className='login-form'>
    <div className='title'>Skapa konto!</div>
    <div className='form'>
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
<<<<<<< HEAD
              <input type="text"
               name="name" 
               placeholder="Namn"
                value={formValues.name}
                onChange={handleChange}
                />
=======
              <input type="text" id={styles.input} placeholder="Namn" />
>>>>>>> main
            </label> 
          </div>
        <div className={styles.inputcontainer}>
            <label>
<<<<<<< HEAD
              <input type="text"
               name="lastname" 
               placeholder="Efternamn" 
               value={formValues.lastname}
               onChange={handleChange}
                />
=======
              <input type="text" id={styles.input} placeholder="Efternamn" />
>>>>>>> main
            </label> 
          </div>
        <div className={styles.inputcontainer}>
            <label>
<<<<<<< HEAD
              <input type="email"
               name="email"
                placeholder="E-mail"
                 value={formValues.email}
                 onChange={handleChange}
                  />
=======
              <input type="email" id={styles.input} placeholder="E-mail"  />
>>>>>>> main
            </label> 
          </div>
          <div className={styles.inputcontainer}>
           <label>
<<<<<<< HEAD
             <input type="text" 
             name="password"
              placeholder="Lösenord" 
              value={formValues.password} 
              onChange={handleChange}
              />
=======
             <input type="text" id={styles.input} placeholder="Lösenord" />
>>>>>>> main
           </label>
          </div>
        <div className={styles.checkboxcontainer}>
          <input type="checkbox" id="terms" name="terms"></input>
          <label htmlFor="terms">Härmed godkänner jag WEMEs <Link href= '/auth/terms' passHref><a className={styles.link}>villkor.</a></Link></label>
        </div>
          <div className={styles.buttoncontainer}>
          <Button><div onClick={toggleView}>Skapa konto</div></Button>
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
