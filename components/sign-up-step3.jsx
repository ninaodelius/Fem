import Button from '../components/button.jsx'
import Link from 'next/dist/client/link'
import styles from '/styles/components/signupone.module.css'
export default function SignUpThree() {
    return(
        <div className={styles.loginform}>
        <img src={'/images/step3of3.png'}/>
        <h1 className='title'>Vem är du i mentorskapet?</h1>
        
        <div className={styles.box}>
        <div className={styles.mentee}>
        <div className ={styles.menteeLogo}>M</div>
        <h4>Mentee</h4>
        Är någon som söker handledning och feedback av en kunnig inom branschen.
        </div>
        <div className={styles.mentor}>
        <div className ={styles.mentorLogo}>M</div>
        <h4>Mentor</h4>
        Någon som besitter merkunskaper och erfarenheter. En mentor handleder, stöttar och vägleder en mentee.</div>
        </div>

        <p>Osäker i nuläget? Ingen fara! Du måste inte välja någon roll, men om du blir sugen i framtiden så går det bra att ange det i din profil. Så för nu kan du bara kicka på “Hoppa över”</p>
          <div className='buttoncontainer'>
          <Button><Link href='./account-created' passHref>Nästa</Link></Button>
          </div>
          <Link href='./account-created'><a className={styles.link}>
          <div className={styles.fatPurpleP}>
          Hoppa över</div>
          </a></Link>
          
      </div>

    )
}