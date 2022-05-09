import styles from '/styles/components/postpop.module.css'
import Button from '/components/button.jsx'
import { useEffect, useState, React } from 'react';
import { db, auth, provider } from '../firebase/firebaseConfig'
import { useCollection } from "react-firebase-hooks/firestore";
import { collection, addDoc } from 'firebase/firestore';

export default function Post(props){
  const submit = "submit";
  const [post, setPost] = useState('');
  const [name, setName] = useState('')
  const onSubmit =  (event) => {
    console.log(post)
   try {
     addDoc(collection(db, "post"), {
      text : post,
    }).then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
  })
} catch(error)  {
      console.error("Error adding document: ", error);
  };
    event.preventDefault()
    props.setTrigger(false)
    setPost('')
  };
  

    return(props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.postpopcontainer}>
                <div className={styles.topheader}>
                <div className={styles.header}>Skapa inlägg<img src={'/images/Close.svg'} onClick={() => props.setTrigger(false)} /></div>
                
                </div>
                <hr className={styles.hr}/>
                <div className={styles.usercontainer}>
                    <div className={styles.photowrap}><div className="photo"><img src={'/images/Woman.svg'}/></div></div>
                    <div className={styles.namewrap }>Naomi Britton</div>   
                </div>
                <form onSubmit={onSubmit}>
                <div className={styles.inputcontainer}>
                    <div className={styles.textbox1wrap}><input type="text" value={post} onChange={(event) => setPost(event.target.value)} className={styles.textbox1} placeholder="Något du vill dela med dig av, Naomi?"></input></div>
                    <div className={styles.textbox2wrap}><input type="text" className={styles.textbox2} placeholder="Ange taggar för ditt inlägg"></input></div>
                </div>
                <hr className={styles.hr}/>
                <div className={styles.postchoicecontainer}>
                    <div className={styles.question}></div>
                    <div className={styles.video}></div>
                    <div className={styles.picture}></div>
                    <div className={styles.menuwrap}></div>
                    <div className={styles.button}><Button type={submit}>Dela</Button></div>

                </div>
                </form>
            </div>
        </div>
    ) : "";
}