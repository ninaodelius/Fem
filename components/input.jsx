import {useState} from 'react';
import styles from '/styles/components/input.module.css'
import PostPop from "./input-pop"

export default function Input(){
    const [inputPopup, setInputPopup] = useState(false);
    return(
        <div className={styles.postcontainer}>
            
            <div className={styles.infocontainer}>
                <div className={styles.photowrap}><div className={styles.photo}><img src={'/images/Woman.svg'}/></div></div>
                <div className={styles.textboxwrap}><input type="text" className={styles.textbox} placeholder="Skriv inlägg" onClick={() => setInputPopup(true)}></input></div>
                <div className={styles.menuwrap}></div>
            </div>
            <div className={styles.postexamplescontainer}>
                <div className={styles.question}><img src={'/images/Qbutton.png'}/>Ställ en fråga</div>
                <div className={styles.video}><img src={'/images/Camera.svg'}/>Video</div>
                <div className={styles.picture}><img src={'/images/Image.svg'}/>Bild</div>
            </div>
            <PostPop trigger={inputPopup} setTrigger={setInputPopup}></PostPop>
        </div>

    )
}
  