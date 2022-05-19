import Input from "../components/input"
import styles from '/styles/feed.module.css'
import List from "../components/list"
import Searchbar from "../components/searchbar"
import { db } from '../firebase/firebaseConfig'
import { useCollection } from "react-firebase-hooks/firestore"
import { collection, addDoc, getDocs, getDoc } from 'firebase/firestore'
import Post from '../components/post'
import BtnArrowUp from '../components/btnArrowUp'
import Footer from '../components/footer'
import Profilefeed from "../components/profileFeed"
import React, { useState } from 'react';


export const getServerSideProps = async(context) => {
    const res = await getDocs(collection(db, "posts"))
    const post = res.docs
    .map((post) => post.data())
    const res1 = await getDocs(collection(db, "tags"))
    const tag = res1.docs
    .map((tag) => tag.data())
    if(post.length && tag.length){
       return{  
                props : {
                    post: post,
                    tag: tag,
                }
            } 
    }
    else{
        return{
            props: {},
        }
    }
}

export default function Feed({post, tag}){

    const [showFilteredTag, setShowFilteredTag] = useState(false)

    const [pressedTags, setPressedTags] = useState([])

    function onClick(tag){
        if(showFilteredTag == false){
        setShowFilteredTag(showFilteredTag => !showFilteredTag) }
        setPressedTags(pressedTags => [...pressedTags, tag.value])
    }

    

    return(
        <div className={styles.feedPage}>
        <div className={styles.header}>
            <div className={styles.left}><img src={'/images/Logo.svg'}/></div>
            <div className={styles.center}><Searchbar />
            <div className={styles.tagFeedButtons}>
            <button className={styles.tagFeedButtonAll}>alla</button>

            {tag.map((tag) => {
            return(
                <div key={tag._id}>
               <button className={styles.tagFeedButton} onClick={() => onClick(tag)}>{tag.value}</button>
               </div>
            )
          })} 
          
          
          </div></div>
            <div className={styles.right}><Profilefeed/></div></div>
        <div className={styles.content}>
            <div className={styles.left}><List/></div>
            <div className={styles.center}><div className={styles.firstinput}><Input /> </div>
                <div className={styles.feed}>
                <div className={styles.posts}>

                {showFilteredTag ? 
                <div>
                {pressedTags.map((pressedTags) => {
                    return(
                    <div>{pressedTags}</div>)
                })}
                </div>
                
                : 
                <div>
                {post.map((post) => {
                  return(
                      <div key={post._id} className={styles.post}>
                     <Post post={post}></Post> 
                     </div>
                  )
                })}
                </div>
                 }

                
                </div>
                </div>
            </div>
            <div className={styles.feedFooter}>
                <div className={styles.feedBtnArrowUp}>
                <BtnArrowUp/></div>
                <Footer/>
            </div>
        </div>
        </div>

    )
}