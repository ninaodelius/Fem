import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '/styles/components/list.module.css'

export default function List() {  
  return (
    <ul>
      <li className={styles.li}>
        <Link href="/">
          <a><img src={'/images/Househouse.png'}/>HEM</a>
        </Link>
      </li>
      <li className={styles.li}>
        <Link href="/explore">
          <a><img src={'/images/Hashtaghashtag.png'}/>UTFORSKA</a>
        </Link>
      </li>
      <li className={styles.li}>
        <Link href="/saved">
          <a><img src={'/images/Savesave.png'}/>SPARAT</a>
        </Link>
      </li>
    </ul>
  )
}

