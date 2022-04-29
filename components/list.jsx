import Link from 'next/link'
import styles from '/styles/components/list.module.css'

export default function List() {
  return (
    <ul>
      <li className={styles.li}>
        <Link href="/">
          <a>HEM</a>
        </Link>
      </li>
      <li className={styles.li}>
        <Link href="/">
          <a>UTFORSKA</a>
        </Link>
      </li>
      <li className={styles.li}>
        <Link href="/">
          <a>SPARAT</a>
        </Link>
      </li>
      <li className={styles.li}>
        <Link href="/">
          <a>HANGOUTS</a>
        </Link>
      </li>
      <li className={styles.li}>
        <Link href="/">
          <a>MENTORSSKAP</a>
        </Link>
      </li>
    </ul>
  )
}

