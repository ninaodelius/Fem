import styles from '../styles/components/btnarrowup.module.css'

export default function btnArrowUp(){

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  } 

  return (
    <button className={styles.btnArrowUp} onClick={topFunction}></button>
  ) 

}

