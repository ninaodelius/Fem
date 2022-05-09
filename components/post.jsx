import styles from '/styles/components/post.module.css'
import React, { useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


export default function Post({post}){

    const [showHeart, setShowHeart] = useState(false)

    const [likes, setLikes] = useState(0);
    
    function handleLike(){
        setLikes(likes+1)
    }

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
                    <div className={styles.like}><button className={styles.interactbutton} onClick={handleLike}><img src={'/images/emptyHeart.png'}/>{likes}</button></div>
                    <div className={styles.like}><button className={styles.interactbutton} onClick={() => setShowHeart(showHeart => !showHeart)}>{showHeart ? <img src={'/images/emptyHeart.png'}/> : <img src={'/images/filledHeart.png'}/>}{likes}</button></div>
                    <div className={styles.share}><button className={styles.interactbutton}><img src={'/images/shareicon.png'}/></button></div>
                    <div className={styles.save}><button className={styles.interactbutton}><img src={'/images/saveicon.png'}/></button></div>
                    </div>
        
        

        </div>

    )
}