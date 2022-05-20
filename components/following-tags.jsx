import styles from '/styles/components/followingtags.module.css'


export default function FollowingTags(){


    return(
        <div className={styles.rightcontent}>
            <div className={styles.followcontainer}>
            <div className={styles.headercontainer}><div className={styles.lefttext}>Taggar du följer </div><div className={styles.righttext}>Redigera</div></div>
            <div className={styles.hr}></div>
            <div className={styles.followfeed}>
            <div className={styles.leftcolumnpics}>
            <div className={styles.tagpic}>
                
            </div>
            </div>
            <div className={styles.rightcolumntext}>
                <div className={styles.tagname}>#PORTFOLIO</div>
                <div className={styles.tagtext}>358 nya inlägg</div>
            </div>

            </div>
            <div className={styles.hr}></div>
            <div className={styles.bottomcontainer}>Visa fler taggar</div>
            </div>
      
            </div>
    )
}