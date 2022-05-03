import styles from '/styles/components/postpop.module.css'
import Button from '/components/button.jsx'

export default function Post(props){
    return(props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.postpopcontainer}>
                <div className={styles.topheader}>
                <div className={styles.header}>Skapa inlägg<button onClick={() => props.setTrigger(false)} /></div>
                
                </div>
                <hr className="hr"/>
                <div className={styles.usercontainer}>
                    <div className={styles.photowrap}><div className="photo"></div></div>
                    <div className={styles.namewrap}>Naomi Britton</div>   
                </div>
                <div className={styles.inputcontainer}>
                    <div className={styles.textbox1wrap}><input type="text" className={styles.textbox1} placeholder="Något du vill dela med dig av, Naomi?"></input></div>
                    <div className={styles.textbox2wrap}><input type="text" className={styles.textbox2} placeholder="Ange taggar för ditt inlägg"></input></div>
                </div>
                <hr className="hr"/>
                <div className={styles.postchoicecontainer}>
                    <div className={styles.question}></div>
                    <div className={styles.video}></div>
                    <div className={styles.picture}></div>
                    <div className={styles.menuwrap}></div>
                    <div className={styles.button}><Button><button type="submit">Dela</button></Button></div>

                </div>
            </div>
        </div>
    ) : "";
}
