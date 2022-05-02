import SearchIcon from '@mui/icons-material/Search'
import styles from '/styles/components/searchbar.module.css'

export default function Searchbar() {
    return (
  
      <div className={styles.normalcontainer}>
        <div className={styles.searchinput}>
          <input type={styles.text}/>
           <SearchIcon className={styles.searchicon}/> 
           
        </div>
      </div>
  
    )
  }
  
