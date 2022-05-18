import styles from '/styles/components/postpop.module.css'
import Button from '/components/button.jsx'
import { useEffect, useState, React } from 'react'
import { db, auth, provider } from '../firebase/firebaseConfig'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
export default function Post(props){
  const submit = "submit";
  const [post, setPost] = useState('');
  const [tags, setTags] = useState(''); 
  const [name, setName] = useState('Naomi Britton')
  const [jobTitle, setJobtitle] = useState('First Software Developer')
  const onSubmit =  (event) => {
    event.preventDefault()
    var tagsList = tags.split(" ");
    console.log(tagsList)
    console.log(post)
   try {
     addDoc(collection(db, "posts"), {
      author : name,
      title : jobTitle,
      text : post,
      tags : tagsList,
    }).then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
  })
} catch(error)  {
      console.error("Error adding document: ", error);
  };
    props.setTrigger(false)
    setPost('')
    setTags('')
  };
  

    return(props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.postpopcontainer}>
                <div className={styles.topheader}>
                <img src={'/images/Close.svg'} onClick={() => props.setTrigger(false)} /></div>
                <div className={styles.header}>Skapa inlägg</div>
                
                
                <hr className={styles.hr}/>
                <div className={styles.usercontainer}>
                    <div className={styles.photowrap}><div className={styles.photo}><img src={'/images/Woman.svg'}/></div></div>
                    <div className={styles.namewrap }>Naomi Britton</div>   
                </div>
                <form onSubmit={onSubmit}>
                <div className={styles.inputcontainer}>
                    <div className={styles.textbox1wrap}><input type="text" className={styles.textbox1} value={post} onChange={(event) => setPost(event.target.value)} placeholder="Något du vill dela med dig av, Naomi?"></input></div>
                    <div className={styles.textbox2wrap}><input type="text" className={styles.textbox2} value={tags} onChange={(event) => setTags(event.target.value)} placeholder="Ange taggar för ditt inlägg"></input></div>
                </div>
                <hr className={styles.hr}/>
                <div className={styles.postchoicecontainer}>
               
                    <div className={styles.question}><button className={styles.insertButton}><img src={'/images/Qbutton.png'}/></button></div>
                    <div className={styles.picture}><button className={styles.insertButton}><img src={'/images/insertImagebutton.png'}/></button></div>
                    <div className={styles.video}><button className={styles.insertButton}><img src={'/images/insertvidbutton.png'}/></button></div>
                    <div className={styles.insertdoc}><button className={styles.insertButton}><img src={'/images/insertfilebutton.png'}/></button></div>
                   
                    <div className={styles.button}><Button type={submit}>Dela</Button></div>

                </div>
                </form>
            </div>
        </div>
    ) : "";
}
