import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '../components/button.jsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Buttonround from '../components/button-round.jsx' 



export default function Home() {
const router = useRouter()

const handleClick = () => {
  router.push('/sign-in')
}


  return (
  <>
<<<<<<< HEAD
    <Link href="/sign-in.jsx" passHref><Button /></Link>
    <Button disabled={false}>Nina hej</Button>
    <Link href='auth/sign-in' passHref>Sign in</Link>
    <br></br>
    <Link href="auth/sign-up">Robins shit</Link>
    <Buttonround> <Link href="forgot-password"></Link></Buttonround>

=======
  <div className={styles.container}>
>>>>>>> origin/main
    <Button><Link href='auth/sign-in' passHref>Sign in</Link></Button>
    <Button><Link href="auth/sign-up" passHref>Sign up</Link></Button>
    <Button><Link href="/feed" passHref>Feed</Link></Button>
  </div>  
  </>
  )
}
