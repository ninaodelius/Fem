import styles from '../styles/components/button.module.css'

export default function Button({children}){
    return (
        <div>
            <button className={styles.btn}>{children}</button>
        </div>
        
    )
}