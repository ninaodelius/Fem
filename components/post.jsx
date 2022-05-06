import styles from '/styles/components/post.module.css'

export default function Post(i, { children}){
    return(
        <div className={styles.postcontainer}>
            <div className={styles.infocontainer}>
                <div className={styles.photowrap}>
                <div className={styles.photo}><img src={'/images/Woman.svg'}/></div>
                <div className={styles.namewrap }>Naomi Britton<div className={styles.m}>M</div></div>
                </div>
        </div>
        <div className={styles.textcontainer}> 
                <div className={styles.textboxwrap}>{children.text}</div>
                <p className={styles.menuwrap}>#FIGMA #PROTOTYPE #UX</p>
                <hr className={styles.hr}/>
        </div>
        

        </div>

    )
}