import Button from '../../components/button'
import styles from '/styles/auth/signin.module.css'
import Link from 'next/link'
import {React, useState,} from "react"
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Footer from '../../components/footer';
import { useRouter } from 'next/router'
import { signInWithEmailAndPassword } from '@firebase/auth';
import { auth } from '../../firebase/firebaseConfig'



const SignIn = () => {

    const [showPassword, setShowPassword] = useState(false)
    const [disabledButton, setDisabledButton] = useState(true)

    const schema =yup.object().shape({
        email: yup.string().email().required(''),
        password :yup.string().min(7, 'Password must be at least 7 characters').required('Password is required')
    })
  
  
    const { register, handleSubmit, formState } = useForm({
      resolver: yupResolver(schema)
    });


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
                  
                    <input id={styles.input}type="text" name="email" placeholder="E-mail" {...register('email')} />
                    
                   
                </div> <p className='error-message'>{errors.email?.message}</p>
                <div className={styles.inputcontainer}>
                    <input id={styles.input} name="password" placeholder='Password' {...register('password')} type={showPassword ? "text" : "password"}/>
                    <div className={styles.passwordtoggleicon}  onClick={() => setShowPassword(showPassword => !showPassword)} > {showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>} </div>
                </div>
                <p className='error-message'>{errors.password?.message}</p>
                
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