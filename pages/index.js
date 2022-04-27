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
    <Link href="/sign-in.jsx" passHref><Button /></Link>
    <Button disabled={false}>Nina hej</Button>
    <Link href="/sign-in.jsx">Sign in</Link>
    <br></br>
    <Link href="/sign-up.jsx">Robins shit</Link>
    
  </>
  )
}
