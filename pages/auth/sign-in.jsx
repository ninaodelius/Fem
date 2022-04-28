import Button from '../../components/button'
import styles from '/styles/auth/signin.module.css'
import Link from 'next/link'
import usePasswordToggle from '../../hooks/usePassWordToggle.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import React, { useState, useEffect } from "react"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'


const SignIn = () => {
    const [showPassword, setShowPassword] = useState(true)
    const [disabledButton, setDisabledButton] = useState(true)
    return(
        <div className={styles.loginform}>
            <div className={styles.title1}>WEME</div>
                <div className={styles.form}>
                <form className={styles.form}>
                <div className={styles.inputcontainer}>
                    <label>
                    <input className={styles.input} type="email" name="email" placeholder="E-mail" required/><span id = "email-error" class="error"></span>
                    </label> 
                </div>
                <div className={styles.inputcontainer}>
                    <input className={styles.input} placeholder="Lösenord" type={showPassword ? "text" : "password"}  required/>
                    <span className="password-toggle-icon" onClick={() => setShowPassword(showPassword => !showPassword)}>{showPassword ? <VisibilityIcon/> : <VisibilityOffIcon/>}</span>
                </div>
                <div className={styles.checkboxcontainer}>
                <input type="checkbox" id="remember" name="remember" value="Kom ihåg mig!"></input>
                <label for="remember"> Kom ihåg mig?</label>
                <Link href="/auth/forgot-password"><a className={styles.link}>Glömt lösenord?</a></Link>
                </div>
                <div className={styles.buttoncontainer}>
                    <Button >Logga in</Button>
                </div>
                <Link href="/auth/sign-up"><a className={styles.link}>Bli medlem</a></Link>
                </form>
        </div>
</div>

    );
    
};

export default SignIn;