import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '../components/button.jsx'
import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Home() {
const router = useRouter()

const handleClick = () => {
  router.push('/sign-in')
}


  return (
  <>
    <Button><Link href='auth/sign-in' passHref>Sign in</Link></Button>
    <Button><Link href="auth/sign-up">Sign up</Link></Button>
    
  </>
  )
}
