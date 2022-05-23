import styles from '/styles/components/post.module.css'
import React, { useState } from 'react';
import SharePop from "./share-pop"
import Link from 'next/link';
import ButtonFollow from './buttonFollow';

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

    const [popUpOptionsMenu, setPopUpOptionsMenu] = useState(false);

    function PopUpOptionsMenu() {
        return (    
          <ul className={styles.dropdown}>
          <img src={'/images/xoptionsmenu.png'} onClick={() => setPopUpOptionsMenu(false)} />
            <button className={styles.liButton}><img src={'/images/editpost.png'}/>Redigera inlägg</button>
            <button className={styles.liButton} onClick={deletePost}><img src={'/images/deletepost.png'}/>Ta bort</button>
          </ul>
        );
      }

    return(
        <div className={styles.popup}>
           
            <SharePop trigger={sharePopup} setTrigger={setSharePopup} post={post}></SharePop>
            <div className={styles.postcontainer}>
                <div className={styles.infocontainer}>
                    <div className={styles.photowrap}>
                        <div className={styles.photo}><img src={post.photo}/></div>
                        <div className={styles.nameAndTitle}>
                            <div className={styles.namewrap }>{post.author}</div>
                            <div className={styles.jobtitle}>{post.title}</div>
                            
                        </div>
                    </div>
                    <div className={styles.rightwrap}><div className={styles.buttonfollow}><ButtonFollow/></div>
                    <button className={styles.optionsbutton} onClick={() => setPopUpOptionsMenu(!popUpOptionsMenu)}>
                    {popUpOptionsMenu? <img src={''}/> : <img src={'/images/optionsbutton.png'}/>}
                    </button>
                    {popUpOptionsMenu && PopUpOptionsMenu()}

                </div>
            </div>
            <div className={styles.textcontainer}> 
                    <div className={styles.textboxwrap}>{post.text}</div>
                    <Link href='./feed'><a className={styles.tags}>{post.tags}</a></Link>
                    <hr className={styles.hr}/>
                    </div>
                    <div className={styles.interactContainer}>
                    <div className={styles.comment}><button className={styles.interactbutton}><img src={'/images/cmtbubble.png'}/>0</button></div>
                        <div className={styles.like}><button className={styles.interactbutton} onClick={handleLike}>{showHeart ? <img src={'/images/filledHeart.png'}/> : <img src={'/images/emptyHeart.png'}/>}{likes}</button></div>
                        <div className={styles.share}><button className={styles.interactbutton} onClick={() => setSharePopup(true)}><img src={'/images/shareicon.png'}/></button></div>
                        <div className={styles.save}><button className={styles.interactbutton} onClick={handleShowSave}>{showSave ? <img src={'/images/savedicon.png'}/> : <img src={'/images/saveicon.png'}/>}</button></div>
                        </div>

            </div>
        </div>
    )
}