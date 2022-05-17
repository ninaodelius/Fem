import Button from '../../components/button'
import styles from '/styles/auth/signin.module.css'
import Link from 'next/link'
import React, { useState, useEffect } from "react"
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Footer from '../../components/footer';
import { useRouter } from 'next/router'
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../../firebase/firebaseConfig'



const SignIn = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [disabledButton, setDisabledButton] = useState(true)

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required')
    })
    const formOptions = { resolver: yupResolver(validationSchema) }

    const { register, handleSubmit, reset, formState } = useForm(formOptions)
    const { errors } = formState
      
    const router = useRouter()

      async function onSubmit(data) {
        const email = data.email

        try{
          const userCredentials = await signInWithEmailAndPassword(auth, email, password)
          console.log(userCredentials)
        }
        catch(error){
          console.log(error)
          
        }
        
        router.push('/feed')
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4))
        
        return false;

    }
    const submit = 'submit'

    return( 
        <div className={styles.pagewrap}>
        <div className={styles.loginform}>
            <div className={styles.title1}><img src={'/images/wemelogo.png'}/></div>
                <div className={styles.form}>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.inputcontainer}>
                    <label>
                    <input id={styles.input} className={`form-control ${errors.email ? 'is-invalid' : ''}`} type="text" name="email" placeholder="E-mail"  {...register('email')} />
                    </label> 
                </div>
                <div className={styles.inputcontainer}>
                    <input id={styles.input} name="password" placeholder='Password' {...register('password')} className={`form-control ${errors.password ? 'is-invalid' : ''}`} type={showPassword ? "text" : "password"}/>
                    <div className={styles.passwordtoggleicon} onClick={() => setShowPassword(showPassword => !showPassword)}>{showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}</div>
                </div>
                <div className={styles.rememberforgotcontainer}>
                <div className={styles.remembercontainer}>
                <input type="checkbox" id="remember" name="remember" value="Kom ihåg mig!"></input>
                <label htmlFor="remember"><p> Kom ihåg mig!</p></label></div>
                <Link href="/auth/forgot-password"><a className={styles.link}><p>Glömt lösenord?</p></a></Link></div>
                
                <div className={styles.buttoncontainer}>
                <Button disabled={false} type={submit}>Logga in</Button>
                </div>
                <Link href="/auth/sign-up"><a className={styles.link}><p>Bli medlem</p></a></Link>
                </form>
        </div>
        <Footer />
</div>
</div>
    );
    
};

export default SignIn;