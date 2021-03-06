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
    const toggleView = () =>{
      setNextStep(nextStep => !nextStep)
    }
    

    const schema = yup.object().shape({
      firstName: yup.string().required('Förnamn är nödvändigt').min(2, "Minimun 2 tecken"),
      lastName: yup.string().required('Efternamn är nödvändigt').min(2, "Minimun 2 tecken"),
      email: yup.string().email().required('email är nödvändigt'),
      password: yup.string().required('Lösenord är nödvändigt').min(10).max(25, "Maximum 15 tecken"),
      terms: yup.bool().oneOf([true], 'Acceptera villkoren för att komma vidare')

    })

    const { register, handleSubmit, formState} = useForm({
      resolver: yupResolver(schema),
    });

    const {errors} = formState;

    const submitForm = (data) =>{
      setNextStep(nextStep => !nextStep)
    }
    


    const form = (
      <div className={styles.pagewrap}>
    <div className={styles.loginform}>
      <img src={'/images/step1of3.png'}/>
        <h1 className={styles.title1}>Skapa konto!</h1>
        <div className={styles.form}>

         <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
         <div className={styles.inputcontainer}>
            <label>
              <h3>Förnamn</h3>
              <input type="text" id={styles.input} name="firstName" placeholder="Namn" {...register('firstName')} />
            </label> 

            <p className='error-message'>{errors.firstName?.message}</p>
            <label>
            <h3>Efternamn</h3>
              <input type="text" id={styles.input} name="lastName" placeholder="Efternamn" {...register('lastName')}/>
            </label> 
          <p className='error-message'>{errors.lastName?.message}</p>
            <label>
            <h3>E-mail</h3>
              <input type="text" id={styles.input} name="email" placeholder="E-mail" {...register('email')} />
            </label> 
          <p className='error-message'>{errors.email?.message}</p>
           <label>
           <h3>Lösenord</h3>
             <input type="password" id={styles.input} name="password" placeholder="Lösenord" {...register('password')} />
           </label>
          </div>
          <p className='error-message'>{errors.password?.message}</p>
        <div className={styles.checkboxcontainer}>
          <input type="checkbox" id="terms" name="terms" {...register('terms')}></input>
          <label htmlFor="terms">Härmed godkänner jag WEMEs <Link href= '/auth/terms' passHref><a className={styles.link}>villkor.</a></Link></label>
          <p className='error-message'>{errors.terms?.message}</p>

        </div>
          <div className={styles.buttoncontainer}>
          <Button onClick={toggleView}>Skapa konto</Button>
          </div>
         </form>
      </div>
    </div>
    </div>
    )

    return(
        <div>
             {nextStep ? <SignUpTwo /> : form}
        </div>
    )
}