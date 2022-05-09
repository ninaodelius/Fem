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
        

        </div>

    )
}