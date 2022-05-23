import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '/styles/components/list.module.css'

export default function List() { 

  const router = useRouter();

  return (
    <ul>
      <li className={styles.li}>
        <Link href="/feed">
          <a className={router.pathname == "/feed" ? styles.active : ""}><img src={'/images/Househouse.png'}/>HEM</a>
        </Link>
      </li>
      <li className={styles.li}>
        <Link href="/explore">
          <a className={router.pathname == "/explore" ? styles.active : ""}><img src={'/images/Hashtaghashtag.png'}/>UTFORSKA</a>
        </Link>
      </li>
      <li className={styles.li}>
        <Link href="/saved">
          <a className={router.pathname == "/saved" ? styles.active : ""}><img src={'/images/Savesave.png'}/>SPARAT</a>
        </Link>
      </li>
    </ul>
  )
}

