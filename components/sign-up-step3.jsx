import Button from '../components/button.jsx'
import Link from 'next/dist/client/link'
import styles from '/styles/components/signupone.module.css'
export default function SignUpThree() {
    return(
        <div className={styles.loginform}>
        <h1 className='title'>Vem är du i mentorskapet?</h1>
        
        <div className={styles.box}></div>
        <div className={styles.box}></div>
        
          <div className='buttoncontainer'>
          <Button><Link href='./account-created' passHref>Gå vidare</Link></Button>
          </div>
          <Link href='./account-created'><a className={styles.link}><p>Hoppa över</p></a></Link>
          
      </div>

    )
}