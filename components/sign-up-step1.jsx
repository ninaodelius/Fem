import Button from '../components/button.jsx'
import Link from 'next/dist/client/link'
import styles from '/styles/components/signupone.module.css'
import SignUpTwo from '../components/sign-up-step2'
import {React, useState} from 'react'
// import { userForm } from './Validations/signUpOneValidation'
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

export default function SignUpOne() {
    const [nextStep, setNextStep] = useState(false)
   const toggleView = () =>{
      setNextStep(nextStep => !nextStep)
    }

    const userSchema = yup.object().shape({
      firstName: yup.string().min(2).required(),
      lastName: yup.string().min(2).required(),
      email: yup.string().email().required(),
      password: yup.string().min(4).max(12).required()    
    })

    // const createUser = async(event) => {
    //   event.preventDefault()
    //   let formData = {
    //     firstName: event.target[0].value,
    //     lastName: event.target[1].value,
    //     email: event.target[2].value,
    //     password: event.target[3].value,
    //   }
    //   const isValid = await userSchema.isValid(formData)
    // }

    const {register, handleSubmit, errors} = useForm({
      resolver: yupResolver(userSchema),
    })

    const submitForm = (data) => {
      console.log(data)
    }

    const form = (
      <div className='App'>
        <form onSubmit={handleSubmit(submitForm)}>
          <input type="text" name="firstName" placeholder='Name' ref={register}/>
          <p>{errors.firstName?.message}</p>
          <input type="text" name="lastName" placeholder='Lastname' ref={register}/>
          <p>{errors.lastName?.message}</p>
          <input type="text" name="email" placeholder='email@email.com' ref={register}/>
          <p>{errors.email?.message}</p>
          <input type="text" name="password" placeholder='password123' ref={register}/>
          <p>{errors.password?.message}</p>
          <input type="submit" />
        </form>
      </div>
     
    // <div className={styles.loginform}>
    //     <h1 className='title'>Skapa konto!</h1>
    //     <div className={styles.form}>
    //      <form onSubmit={createUser}>
    //      <div className={styles.inputcontainer}>
    //         <label>
    //           <input type="text" id={styles.input} placeholder="Namn" />
    //         </label> 
    //       </div>
    //     <div className={styles.inputcontainer}>
    //         <label>
    //           <input type="text" id={styles.input} placeholder="Efternamn" />
    //         </label> 
    //       </div>
    //     <div className={styles.inputcontainer}>
    //         <label>
    //           <input type="email" id={styles.input} placeholder="E-mail"  />
    //         </label> 
    //       </div>
    //       <div className={styles.inputcontainer}>
    //        <label>
    //          <input type="text" id={styles.input} placeholder="Lösenord" />
    //        </label>
    //       </div>
    //     <div className={styles.checkboxcontainer}>
    //       <input type="checkbox" id="terms" name="terms"></input>
    //       <label htmlFor="terms">Härmed godkänner jag WEMEs <Link href= '/auth/terms' passHref><a className={styles.link}>villkor.</a></Link></label>
    //     </div>
    //       <div className={styles.buttoncontainer}>
    //       <Button><div onClick={toggleView} type="submit">Skapa konto</div></Button>
    //       </div>
    //      </form>
    //   </div>
    // </div>
    )

   


    return(
        <div>
             {nextStep ? <SignUpTwo /> : form}
        </div>
    )
}