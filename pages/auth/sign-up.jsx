import SignUpOne from "../../components/sign-up-step1"
import styles from '/styles/auth/signup.module.css'
import Footer from '../../components/footer'

export default function SignUp(){
  return (
    <>
        <div className={styles.container}>
     <SignUpOne /> 

     <Footer/>
     </div>
    </>

  )
}
