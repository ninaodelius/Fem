import Button from '../components/button.jsx'
import Link from 'next/dist/client/link'
import styles from '/styles/components/signupone.module.css'
import SignUpThree from '../components/sign-up-step3'
import {React, useState} from 'react'
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';


export default function SignUpTwo() {
    const [nextStep, setNextStep] = useState(false)
    const toggleView = () =>{
      setNextStep(nextStep => !nextStep)
    }

    const schema = yup.object().shape({
      jobtitle:yup.string().min(2,'Minst två tecken').required('Vad jobbar du med för tillfället?'),
      experience:yup.string().min(3,'Minst 3 tecken',).required('Fyll i din arbetserfarenhet'),
      qualification:yup.string().min(2,'Minst två tecken').required('Nämn två kompetenser')
    })

    const {register, handleSubmit, formState} = useForm({
      resolver: yupResolver(schema)
    })

    const {errors} = formState;

    const submitForm = (data) =>{
      setNextStep(nextStep => !nextStep)
    }

    const form = (
    <div className={styles.loginform}>
    <img src={'/images/step2of3.png'}/>
        <h1 className={styles.title1}>Mer om dig!</h1>
        <div className={styles.form}>

         <form onSubmit={handleSubmit(submitForm)}>
         <div className={styles.inputcontainer}>
            <label>
              <input type="text" name='jobtitle' id={styles.input} placeholder="Jobbtitel*" {...register('jobtitle')}/>
            </label> 
          </div>
          <p className='error-message'>{errors.jobtitle?.message}</p>
        <div className={styles.inputcontainer}>
            <label>
              <input type="text" name='experience'id={styles.input} placeholder="Hur länge har du jobbat?*" {...register('experience')} />
            </label> 
          </div>          
          <p className='error-message'>{errors.experience?.message}</p>
        <div className={styles.inputcontainer}>
            <label>
              <input type="text" name='qualification' id={styles.input} placeholder="Ange minst två kompetenser*" {...register('qualification')} />
            </label> 
          </div>
          <p className='error-message'>{errors.qualification?.message}</p>
          <div className={styles.inputcontainer}>
           <label>
             <input type="text" id={styles.input} placeholder="taggar du vill följa #FIGMA" />
           </label>
          </div>

          <div className={styles.buttoncontainer}>
          <Button onClick={toggleView}><div type='sumbit'>Nästa</div></Button>
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