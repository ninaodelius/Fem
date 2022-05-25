import Input from "../components/input"
import styles from '/styles/feed.module.css'
import List from "../components/list"
import Searchbar from "../components/searchbar"
import { db } from '../firebase/firebaseConfig'
import { collection, addDoc, getDocs, getDoc, query, orderBy } from 'firebase/firestore'
import Post from '../components/post'
import BtnArrowUp from '../components/btnArrowUp'
import Footer from '../components/footer'
import Profilefeed from "../components/profileFeed"
import React, { useState } from 'react';
import FollowingTags from "../components/following-tags"
import RecommendedTags from "../components/recommended-tags"
import TipsForYou from "../components/tips-for-you"
import axios from 'axios'
import { SettingsInputCompositeSharp } from "@mui/icons-material"



export const getServerSideProps = async() => {
    const q = query(collection(db, "posts"), orderBy('createdAt', 'desc'))
    const querySnapshot = await getDocs(q)
    const post = querySnapshot.docs.map(post => ({
      id: post.id,
      ...post.data()
    }))
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

    const [pressedTags, setPressedTags] = useState('')

    function onClick(tag){
        if(showFilteredTag == false){
        setShowFilteredTag(showFilteredTag => !showFilteredTag) }
        setPressedTags('')
        setPressedTags(tag.value)
    }

    function getData(){
        axios.get(`/api/posts`).then(({data}) => {
            
        })
    }

    return(
        <div className={styles.feedPage}>
            <div className={styles.header}>
                <div className={styles.leftheader}>
                    <div className={styles.leftlogo}>
                        <img src={'/images/logonew.png'}/>
                    </div>
                </div>
                <div className={styles.centerheader}>
                    <div className={styles.searchbar}><Searchbar /></div>
                </div>
                    <div className={styles.rightheader}><Profilefeed/></div>
            </div>
            <div className={styles.content}>
                <div className={styles.left}><List/></div>
                <div className={styles.center}>
                    <div className={styles.tagFeedButtons}>
                        <button className={styles.tagFeedButton} onClick={() => setShowFilteredTag(false)}>alla</button>
                        {tag.map((tag) => {
                            return(
                            <div key={tag._id}>
                                <button className={styles.tagFeedButton} onClick={() => onClick(tag)}>{tag.value}</button>
                            </div>)
                        })}
                        <button className={styles.tagFeedButtonExpand}>visa mer</button>
                    </div>
                    <div className={styles.firstinput}><Input /> </div>
                    <div className={styles.feed}>
                        <div className={styles.posts}>
                            {showFilteredTag ? 
                                <div>
                                    {post.filter(post => post.tags.includes(pressedTags)).map((post) => (
                                        <div key={post._id} className={styles.post}>
                                        <Post post={post}></Post> 
                                        </div>
                                    ))}
                                </div> : 
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