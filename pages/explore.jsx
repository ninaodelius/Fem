import Input from "../components/input"
import styles from '/styles/feed.module.css'
import List from "../components/list"
import Searchbar from "../components/searchbar"
import { db } from '../firebase/firebaseConfig'
import { collection, addDoc, getDocs, getDoc } from 'firebase/firestore'
import Post from '../components/post'
import BtnArrowUp from '../components/btnArrowUp'
import Footer from '../components/footer'
import Profilefeed from "../components/profileFeed"
import React, { useState } from 'react';
import FollowingTags from "../components/following-tags"
import RecommendedTags from "../components/recommended-tags"
import TipsForYou from "../components/tips-for-you"



export const getServerSideProps = async() => {
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
    post.sort(function(a,b){
        return new Date(b.createdAt) - new Date(a.createdAt);
      });

    const [showFilteredTag, setShowFilteredTag] = useState(false)

    const [pressedTags, setPressedTags] = useState('')

    function onClick(tag){
        if(showFilteredTag == false){
        setShowFilteredTag(showFilteredTag => !showFilteredTag) }
        setPressedTags('')
        setPressedTags(tag.value)
    }

    return(
        <div className={styles.feedPage}>
            <div className={styles.header}>
                <div className={styles.leftheader}>
                    <div className={styles.leftlogo}>
                        <img src={'/images/Logo.svg'}/>
                    </div>
                </div>
                <div className={styles.centerheader}>
                    <div className={styles.searchbar}></div>
                </div>
                    <div className={styles.rightheader}><Profilefeed/></div>
            </div>
            <div className={styles.content}>
                <div className={styles.left}><List/></div>
                <div className={styles.center}>
                Oops.. Page not found

                </div>
                <div className={styles.right}>
                    <FollowingTags/>
                    <RecommendedTags/>
                    <TipsForYou/>
                </div>
                <div className={styles.feedFooter}>
                    <div className={styles.feedBtnArrowUp}><BtnArrowUp/></div>
                    <Footer/>
                </div>
            </div>
        </div>
    )
}