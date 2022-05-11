import styles from '/styles/components/profilefeed.module.css'

export default function Profilefeed() {
    return (
  
    <div className={styles.container}>
    <button className={styles.photo}><img src={'/images/Woman.svg'}/><img src={'/images/polygon6.png'}/></button>
    <div className={styles.dropdowncontent}>
        
      <p>Inloggad som Naomi Britton</p>
      <div className={styles.yourProfile}><a href="#"><img src={'/images/Woman.svg'}/>Din profil</a></div>
      <a href="#"><img src={'/images/yourposts.png'}/> Dina inlägg</a>
      <a href="#"><img src={'/images/yourq.png'}/> Dina frågor</a>
      <a href="#"><img src={'/images/youra.png'}/> Dina svar</a>
      <a href="#"><img src={'/images/yoursaved.png'}/> Dina sparade</a>
      <div className={styles.hr}></div>
      <div className={styles.signoutProfileFeed}><a href="#"><img src={'/images/signoutprofilefeed.png'}/> Logga ut</a></div>
      
    </div>
    </div>

    )
  }