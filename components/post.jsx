import styles from '/styles/components/post.module.css'

export default function Post({post}){
    return(
        <div className={styles.postcontainer}>
            <div className={styles.infocontainer}>
                <div className={styles.photowrap}>
                <div className={styles.photo}><img src={'/images/Woman.svg'}/></div>
                <div className={styles.namewrap }>{post.author}<div className={styles.m}>M</div></div>
                </div>
        </div>
        <div className={styles.textcontainer}> 
                <div className={styles.textboxwrap}>{post.text}</div>
                <p className={styles.menuwrap}>{post.tags}</p>
                <hr className={styles.hr}/>
                </div>
                <div className={styles.interactContainer}>
                <div className={styles.comment}><button className={styles.interactbutton}><img src={'/images/cmtbubble.png'}/><p>0</p></button></div>
                    <div className={styles.like}><button className={styles.interactbutton}><img src={'/images/heartlike.png'}/><p>0</p></button></div>
                    <div className={styles.share}><button className={styles.interactbutton}><img src={'/images/shareicon.png'}/></button></div>
                    <div className={styles.save}><button className={styles.interactbutton}><img src={'/images/saveicon.png'}/></button></div>
                    </div>
        
        

        </div>

    )
}