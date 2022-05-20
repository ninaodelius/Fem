import styles from '/styles/components/followingtags.module.css'
import Link from 'next/link'


export default function FollowingTags(){


    return(
        <div className={styles.rightcontent}>

            <div className={styles.followcontainer}>
            <div className={styles.headercontainer}><div className={styles.lefttext}>Taggar du följer </div>
            <div className={styles.righttext}>
            <Link href="/moretags"><a>
            Redigera
            </a></Link>
            </div></div>
            <div className={styles.hr}></div>

            <div className={styles.followfeed}>

            <div className={styles.rowcontent}>
            <div className={styles.tagpic}>
            <img src={'/images/portfolio.png'}/>
            </div>
            <div className={styles.rowtext}>
            <div className={styles.tagname}>
            #PORTFOLIO
            </div>
            <div className={styles.tagtext}>358 nya inlägg</div>
            </div>
            </div>

            <div className={styles.rowcontent}>
            <div className={styles.tagpic}>
            <img src={'/images/cv.png'}/>
            </div>
            <div className={styles.rowtext}>
            <div className={styles.tagname}>#CV</div>
            <div className={styles.tagtext}>278 nya inlägg</div>
            </div>
            </div>
            
            </div>

            <div className={styles.hr}></div>
            <div className={styles.bottomcontainer}><Link href="/moretags"><a>Visa fler taggar</a></Link></div>
            </div>
      
            </div>
    )
}