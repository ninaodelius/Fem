import SignUpOne from "../../components/sign-up-step1"
import styles from '/styles/auth/signup.module.css'
export default function SignUp(){
  return (
    <>
    <div className={styles.container}>
     <SignUpOne /> 
    </div>
    
    </>

  )
}
