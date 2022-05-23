import Button from '../components/button.jsx'
import Link from 'next/dist/client/link'
import styles from '/styles/components/signupone.module.css'
import SignUpTwo from '../components/sign-up-step2'
import {useState} from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export default function SignUpOne() {
    const [nextStep, setNextStep] = useState(false)
    const submit = 'submit'
    const toggleView = () =>{
      setNextStep(nextStep => !nextStep)
    }
    

    const schema = yup.object().shape({
      firstName: yup.string().required('Förnamn är nödvändigt').min(2, "Minimun 2 letters"),
      lastName: yup.string().required('Efternamn är nödvändigt').min(2, "Minimun 2 letters"),
      email: yup.string().email().required('email är nödvändigt'),
      password: yup.string().required('Lösenord är nödvändigt').min(4).max(15, "Maximum 15 letters")

    })

    const { register, handleSubmit, formState} = useForm({
      resolver: yupResolver(schema),
    });

    const {errors} = formState;

    const submitForm = (data) =>{
      console.log(errors)
    }


    const form = (
    <div className={styles.loginform}>
      <img src={'/images/step1of3.png'}/>
        <h1 className={styles.title1}>Skapa konto!</h1>
        <div className={styles.form}>

         <form onSubmit={handleSubmit(submitForm)}>
         <div className={styles.inputcontainer}>
            <label>
              <input type="text" id={styles.input} name="firstName" placeholder="Namn" {...register('firstName')} />
            </label> 
          </div>

            <p className='error-message'>{errors.firstName?.message}</p>
        <div className={styles.inputcontainer}>
            <label>
              <input type="text" id={styles.input} name="lastName" placeholder="Efternamn" {...register('lastName')}/>
            </label> 
          </div>
          <p className='error-message'>{errors.lastName?.message}</p>
        <div className={styles.inputcontainer}>
            <label>
              <input type="text" id={styles.input} name="email" placeholder="E-mail" {...register('email')} />
            </label> 
          </div>
          <p className='error-message'>{errors.email?.message}</p>
          <div className={styles.inputcontainer}>
           <label>
             <input type="password" id={styles.input} name="password" placeholder="Lösenord" {...register('password')} />
           </label>
          </div>
          <p className='error-message'>{errors.password?.message}</p>
        <div className={styles.checkboxcontainer}>
          <input type="checkbox" id="terms" name="terms"></input>
          <label htmlFor="terms">Härmed godkänner jag WEMEs <Link href= '/auth/terms' passHref><a className={styles.link}>villkor.</a></Link></label>
        </div>
          <div className={styles.buttoncontainer}>
          <Button onClick={toggleView} type={sumbit}>Skapa konto</Button>
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