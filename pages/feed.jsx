import Post from "../components/post"
import styles from '/styles/feed.module.css'
import List from "../components/list"
import Searchbar from "../components/searchbar"
import Scrollbar from "../components/scrollbar-tags"

export default function Feed(){
    return(
        <>
        <div className={styles.header}>
            <div className={styles.left}><h1>WEME</h1></div>
            <div className={styles.center}><Searchbar /></div>
            <div className={styles.right}></div></div>
        <div className={styles.content}>
            <div className={styles.left}><List/></div>
            <div className={styles.center}><Scrollbar/><Post /></div>
            <div className={styles.right}></div>
        </div>
        </>

    )
}