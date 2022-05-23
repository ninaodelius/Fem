import styles from '/styles/components/tipsforyou.module.css'
import Link from 'next/link'


export default function TipsForYou(){


    return(
        <div className={styles.rightcontent}>

            <div className={styles.followcontainer}>
            <div className={styles.headercontainer}><div className={styles.lefttext}>Tips utvalda för dig </div>
            </div>
            <div className={styles.hr}></div>

            <div className={styles.followfeed}>

            <div className={styles.firstTipsContent}>
            <div className={styles.firstTipsInfo}>Simple, Useful Design Tips for UI/UX Designers</div>
            <button className={styles.purpBoxFollowBtn}>Se tips</button>
            </div>

            <div className={styles.rowcontent}>
            <div className={styles.tagpic}>
            <img src={'/images/portfolio.png'}/>
            </div>
            <div className={styles.rowtext}>
            <div className={styles.tagname}>
            Mobile App: UX/UI Design
            </div>
            <div className={styles.tagtext}>122 gillar det här</div>
            </div>
            </div>

            <div className={styles.rowcontent}>
            <div className={styles.tagpic}>
            <img src={'/images/cv.png'}/>
            </div>
            <div className={styles.rowtext}>
            <div className={styles.tagname}>UI Elements/components</div>
            <div className={styles.tagtext}>84 gillar det här</div>
            </div>
            </div>
            
            </div>

            <div className={styles.hr}></div>
            <div className={styles.bottomcontainer}><Link href="/moretags"><a>Visa fler taggar</a></Link></div>
            </div>
      
            </div>
    )
}