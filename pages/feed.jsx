import Input from "../components/input"
import styles from '/styles/feed.module.css'
import List from "../components/list"
import Searchbar from "../components/searchbar"
import { db } from '../firebase/firebaseConfig'
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, addDoc, getDocs, getDoc } from 'firebase/firestore';
import Post from '../components/post'

/*export async function getServerSideProps() {
    const docRef = collection(db, 'posts')
         const docSnap = await getDocs(docRef)

            return{
                props : {
                    text : JSON.stringify(docSnap)
                }
            }
        }*/


export default function Feed(){
    const [posts, postsloading, postserror] = useCollection(
        collection(db, "post"),
        {}
      );

    return(
        <>
        <div className={styles.header}>
            <div className={styles.left}><img src={'/images/Logo.svg'}/></div>
            <div className={styles.center}><Searchbar /></div>
            <div className={styles.right}></div></div>
        <div className={styles.content}>
            <div className={styles.left}><List/></div>
            <div className={styles.center}><div className={styles.firstinput}><Input /> </div>
                <div className={styles.feed}>
                <div className={styles.posts}>
                {postserror && <strong>Error: {JSON.stringify(postserror)}</strong>}
                {postsloading && <span>Collection: Loading...</span>}      
                {posts && posts.docs.map((doc) => (
                

                <Post key={doc.data()}>{doc.data()}</Post>
               
            ))}

                </div>
                </div>
            </div>
            <div className={styles.right}></div>
        </div>
        </>

    )
}