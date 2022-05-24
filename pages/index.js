import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Footer from '../components/footer.jsx'
import Button from '../components/buttonjoin'

export default function Home() {

const router = useRouter()

const handleClick = () => {
  router.push('/sign-in')
}

  return (
  <>
  <div className={styles.container}>
    <div className={styles.header}>
    <div className={styles.headerLeft}>
    <img src={'/images/logonew.png'}/>
    </div>
    <div className={styles.headerRight}>
    Redan registrerad hos oss?
    <Link href='/auth/sign-in' passHref><div className={styles.signin}>Logga in</div></Link>
    </div>
    </div>

    <div className={styles.mainContent}>
    <div className={styles.left}>

    
    <img src={'/images/graphic.png'}/>
    <div className={styles.graphicContent}>kvinnor <br></br>inom x</div> 
    
    <div className={styles.graphicText}>
    Utvidga ditt nätverk, dela dina kunskaper och få hjälp av andra inom din bransch.
    <Button><Link href="/auth/sign-up" passHref>Gå med</Link></Button>
    </div>
 
    </div>

    <div className={styles.right}>
    <div className={styles.threeWomen}>
            <img src={'/images/Woman1.png'}/>
            <img src={'/images/Woman2.png'}/>
            <img src={'/images/Woman3.png'}/>
    </div>
    </div>

  </div> 

  </div>
   <Footer/>
  </>
  )
}
