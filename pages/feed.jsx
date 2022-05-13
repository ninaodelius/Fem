import Input from "../components/input"
import styles from '/styles/feed.module.css'
import List from "../components/list"
import Searchbar from "../components/searchbar"
import { db } from '../firebase/firebaseConfig'
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, addDoc, getDocs, getDoc } from 'firebase/firestore';
import Post from '../components/post'
import BtnArrowUp from '../components/btnArrowUp'
import Footer from '../components/footer'
import Profilefeed from "../components/profileFeed"

export const getServerSideProps = async(context) => {
    const res = await getDocs(collection(db, "posts"))
    const post = res.docs
    .map((post) => post.data())
    if(post.length){
       return{  
                props : {
                    post: post
                }
            } 
    }
    else{
        return{
            props: {},
        }
    }
}

export default function Feed(props){
    const {post} = props
    return(
        <div className={styles.feedPage}>
        <div className={styles.header}>
            <div className={styles.left}><img src={'/images/Logo.svg'}/></div>
            <div className={styles.center}><Searchbar /></div>
            <div className={styles.right}><Profilefeed/></div></div>
        <div className={styles.content}>
            <div className={styles.left}><List/></div>
            <div className={styles.center}><div className={styles.firstinput}><Input /> </div>
                <div className={styles.feed}>
                <div className={styles.posts}>
                {post.map((post) => {
                  return(
                      <div key={post._id} className={styles.post}>
                     <Post post={post}></Post> 
                     </div>
                  )
                })}
                </div>
                </div>
            </div>
            <div className={styles.feedFooter}>
                <div className={styles.feedBtnArrowUp}>
                <BtnArrowUp/></div>
                <Footer/>
            </div>
        </div>
<<<<<<< HEAD
        </>
=======
        </div>

>>>>>>> 60fdd12267af6b03aa02806dd428415f7eeebd5f
    )
}