import styles from '/styles/components/sharedpost.module.css'
import React, { useState } from 'react';
import Link from 'next/link';


export default function Sharedpost({post}){
    return(
            <div className={styles.postcontainer}>
                <div className={styles.infocontainer}>
                    <div className={styles.photowrap}>
                        <div className={styles.photo}><img src={'/images/Woman.svg'}/></div>
                        <div className={styles.nameAndTitle}>
                            <div className={styles.namewrap }>{post.author}</div>
                            <div className={styles.jobtitle}>{post.title}</div>  
                        </div>
                    </div>
            </div>
            <div className={styles.textcontainer}> 
                    <div className={styles.textboxwrap}>{post.text}</div>
                    <Link href='./feed'><a className={styles.tags}>{post.tags}</a></Link>                    
                    </div>
            </div>
    )
}