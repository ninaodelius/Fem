import styles from '/styles/components/sharepop.module.css'
import Button from '/components/button.jsx'
import Post from '../components/post'
import Sharedpost from './sharedpost';

export default function SharePop(props){


    return(props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.sharepopcontainer}>
                <div className={styles.topheader}>
                <img src={'/images/Close.svg'} onClick={() => props.setTrigger(false)} />
                </div>
                <div className={styles.header}>Dela</div>
                
                
                <hr className={styles.hr}/>
                <div className={styles.usercontainer}>
                    <div className={styles.photowrap}><div className={styles.photo}><img src={'/images/Woman.svg'}/></div></div>
                    <div className={styles.namewrap }>Naomi Britton</div>   
                </div>
                <form>
                <div className={styles.inputcontainer}>
                    <div className={styles.textbox1wrap}><input type="text" className={styles.textbox1} placeholder="Lägg till egen text"></input></div>
                    <div className={styles.textbox2wrap}><div className={styles.textbox3}><Sharedpost post={props.post}/></div></div>
                    <div className={styles.textbox2wrap}><input type="text" className={styles.textbox2} placeholder="här ska delade taggar finnas"></input></div>
                </div>
                <hr className={styles.hr}/>
                <div className={styles.sharechoicecontainer}>
               
                    <div className={styles.question}><button className={styles.insertButton}><img src={'/images/Qbutton.png'}/></button></div>
                    <div className={styles.picture}><button className={styles.insertButton}><img src={'/images/insertImagebutton.png'}/></button></div>
                    <div className={styles.video}><button className={styles.insertButton}><img src={'/images/insertvidbutton.png'}/></button></div>
                    <div className={styles.insertdoc}><button className={styles.insertButton}><img src={'/images/insertfilebutton.png'}/></button></div>
                    <div className={styles.options}><button className={styles.insertButton}><img src={'/images/optionsbutton.png'}/></button></div>
                    <div className={styles.button}><Button >Dela</Button></div>

                </div>
                </form>
            </div>
        </div>
    ) : "";
}
