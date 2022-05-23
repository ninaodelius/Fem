import Button from '../../components/button.jsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import SignUpOne from "../../components/sign-up-step1"
import styles from '/styles/auth/signup.module.css'
import Layout from '../../components/layout'

export default function SignUp(){


  
  return (
    <>
    <Layout>
     <div className={styles.container}>
     <SignUpOne /> 
     </div>
     </Layout>
    </>
  )
}
