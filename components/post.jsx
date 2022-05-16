import styles from '/styles/components/post.module.css'
import React, { useState } from 'react';
import SharePop from "./share-pop"

export default function Post({post}){

    const [showHeart, setShowHeart] = useState(false);

    function handleShowHeart()  {
        setShowHeart(showHeart => !showHeart)
    }

    const [likes, setLikes] = useState(0);
    
    function handleLike(){
        handleShowHeart();
        if(!showHeart){
            setLikes(1)
        }else{
            setLikes(0)
        }
    }

    const [showSave, setShowSave] = useState(false);

    function handleShowSave() {
        setShowSave(showSave => !showSave)
    }

  

    const [sharePopup, setSharePopup] = useState(false);

    return(
        <div className={styles.postcontainer}>
            <div className={styles.infocontainer}>
                <div className={styles.photowrap}>
                    <div className={styles.photo}><img src={'/images/Woman.svg'}/></div>
                    <div className={styles.nameAndTitle}>
                        <div className={styles.namewrap }>{post.author}</div>
                        <div className={styles.jobtitle}>{post.jobTitle}</div>  
                    </div>
                </div>
        </div>
        <div className={styles.textcontainer}> 
                <div className={styles.textboxwrap}>{post.text}</div>
                <p className={styles.menuwrap}>{post.tags}</p>
                <hr className={styles.hr}/>
                </div>
                <div className={styles.interactContainer}>
                <div className={styles.comment}><button className={styles.interactbutton}><img src={'/images/cmtbubble.png'}/>0</button></div>
                    <div className={styles.like}><button className={styles.interactbutton} onClick={handleLike}>{showHeart ? <img src={'/images/filledHeart.png'}/> : <img src={'/images/emptyHeart.png'}/>}{likes}</button></div>
                    <div className={styles.share}><button className={styles.interactbutton} onClick={() => setSharePopup(true)}><img src={'/images/shareicon.png'}/></button></div>
                    <div className={styles.save}><button className={styles.interactbutton} onClick={handleShowSave}>{showSave ? <img src={'/images/savedicon.png'}/> : <img src={'/images/saveicon.png'}/>}</button></div>
                    </div>
                    <SharePop trigger={sharePopup} setTrigger={setSharePopup}></SharePop>
        

        </div>

    )
}