import {useState} from 'react';
import styles from '/styles/components/post.module.css'
import PostPop from "../components/post-pop"

export default function Post(){
    const [inputPopup, setInputPopup] = useState(false);
    return(
        <div className={styles.postcontainer}>
            
            <div className={styles.infocontainer}>
                <div className={styles.photowrap}><div className="photo"></div></div>
                <div className={styles.textboxwrap}><input type="text" className={styles.textbox} placeholder="Skriv inlägg" onClick={() => setInputPopup(true)}></input></div>
                <div className={styles.menuwrap}></div>
            </div>
            <div className={styles.postexamplescontainer}>
                <div className={styles.question}>Ställ en fråga</div>
                <div className={styles.video}>Video</div>
                <div className={styles.picture}>Bild</div>
            </div>
            <PostPop trigger={inputPopup} setTrigger={setInputPopup}></PostPop>
        </div>

    )
}
  