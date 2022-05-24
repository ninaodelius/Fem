import SearchIcon from '@mui/icons-material/Search'
import styles from '/styles/components/searchbar.module.css'

export default function Searchbar() {
    return (
  
      <div className={styles.normalcontainer}>
        <div className={styles.searchinput}>
          <input className={styles.input} type={styles.text} autoComplete="name" placeholder='Sök efter t.ex användare, taggar...'></input>
          <img src={'/images/searchicon.png'}/> 
           
        </div>
      </div>
  
    )
  }
  
